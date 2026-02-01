import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { AlertCircle, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "" });

    try {
      // Save to localStorage for admin panel
      const newMessage = {
        id: Date.now().toString(),
        ...formData,
        timestamp: new Date().toISOString(),
      };

      const existing = localStorage.getItem("contactMessages");
      const messages = existing ? JSON.parse(existing) : [];
      messages.push(newMessage);
      localStorage.setItem("contactMessages", JSON.stringify(messages));

      // Also send to server
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: t("contact.form.success"),
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.error || t("contact.form.error"),
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: t("contact.form.error"),
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      {/* Status Messages */}
      {status.type === "success" && (
        <div className="p-4 rounded-lg border border-neon-lime/50 bg-neon-lime/10 flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-neon-lime mt-0.5 flex-shrink-0" />
          <p className="text-foreground">{status.message}</p>
        </div>
      )}

      {status.type === "error" && (
        <div className="p-4 rounded-lg border border-destructive/50 bg-destructive/10 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
          <p className="text-foreground">{status.message}</p>
        </div>
      )}

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          {t("contact.form.name")}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={t("contact.form.namePlaceholder")}
          required
          className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-card/50 text-foreground placeholder-foreground/40 focus:outline-none focus:border-neon-cyan/60 focus:ring-1 focus:ring-neon-cyan/30 transition-colors"
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          {t("contact.form.email")}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={t("contact.form.emailPlaceholder")}
          required
          className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-card/50 text-foreground placeholder-foreground/40 focus:outline-none focus:border-neon-cyan/60 focus:ring-1 focus:ring-neon-cyan/30 transition-colors"
        />
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          {t("contact.form.subject")}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder={t("contact.form.subjectPlaceholder")}
          required
          className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-card/50 text-foreground placeholder-foreground/40 focus:outline-none focus:border-neon-cyan/60 focus:ring-1 focus:ring-neon-cyan/30 transition-colors"
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          {t("contact.form.message")}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t("contact.form.messagePlaceholder")}
          rows={6}
          required
          className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-card/50 text-foreground placeholder-foreground/40 focus:outline-none focus:border-neon-cyan/60 focus:ring-1 focus:ring-neon-cyan/30 transition-colors resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status.type === "loading"}
        className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-magenta text-background font-semibold hover:shadow-glow-cyan transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {status.type === "loading"
          ? t("contact.form.sending")
          : t("contact.form.send")}
      </button>
    </form>
  );
}
