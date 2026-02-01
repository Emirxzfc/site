import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "@/contexts/AdminContext";
import { LogOut, Mail, Trash2, MessageSquare } from "lucide-react";

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export default function AdminPanel() {
  const { isAuthenticated, logout } = useAdmin();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/admin/login");
    } else {
      // Load messages from localStorage
      const saved = localStorage.getItem("contactMessages");
      if (saved) {
        try {
          setMessages(JSON.parse(saved));
        } catch (err) {
          console.error("Error loading messages:", err);
        }
      }
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleDelete = (id: string) => {
    const updated = messages.filter((msg) => msg.id !== id);
    setMessages(updated);
    localStorage.setItem("contactMessages", JSON.stringify(updated));
    setSelectedMessage(null);
  };

  const handleDeleteAll = () => {
    if (window.confirm("Are you sure you want to delete all messages?")) {
      setMessages([]);
      localStorage.removeItem("contactMessages");
      setSelectedMessage(null);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-neon-cyan/20 bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Admin Panel</h1>
            <p className="text-foreground/60 text-sm mt-1">
              {messages.length} message{messages.length !== 1 ? "s" : ""} received
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-2 rounded-lg border border-neon-magenta/50 text-neon-magenta hover:bg-neon-magenta/10 transition-colors font-medium"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Messages List */}
          <div className="lg:col-span-1 rounded-xl border border-foreground/10 bg-card/50 overflow-hidden">
            <div className="p-6 border-b border-foreground/10 flex items-center justify-between">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-neon-cyan" />
                Messages
              </h2>
              {messages.length > 0 && (
                <button
                  onClick={handleDeleteAll}
                  className="text-xs px-2 py-1 rounded bg-destructive/20 text-destructive hover:bg-destructive/30 transition-colors"
                >
                  Clear All
                </button>
              )}
            </div>

            <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
              {messages.length === 0 ? (
                <div className="p-8 text-center text-foreground/60">
                  <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p>No messages yet</p>
                </div>
              ) : (
                <div className="divide-y divide-foreground/10">
                  {messages.map((msg) => (
                    <button
                      key={msg.id}
                      onClick={() => setSelectedMessage(msg)}
                      className={`w-full text-left p-4 hover:bg-neon-cyan/5 transition-colors border-l-2 ${
                        selectedMessage?.id === msg.id
                          ? "border-neon-cyan bg-neon-cyan/10"
                          : "border-transparent"
                      }`}
                    >
                      <p className="font-semibold text-sm truncate">{msg.name}</p>
                      <p className="text-xs text-foreground/60 truncate">{msg.email}</p>
                      <p className="text-xs text-foreground/50 mt-1 truncate">
                        {msg.subject}
                      </p>
                      <p className="text-xs text-foreground/40 mt-2">
                        {new Date(msg.timestamp).toLocaleDateString()}
                      </p>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Message Detail */}
          <div className="lg:col-span-2">
            {selectedMessage ? (
              <div className="rounded-xl border border-neon-cyan/30 bg-card/50 p-8">
                <div className="mb-6 pb-6 border-b border-neon-cyan/30">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">{selectedMessage.name}</h3>
                      <div className="flex items-center gap-2 text-foreground/60 text-sm mt-2">
                        <Mail className="w-4 h-4" />
                        {selectedMessage.email}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDelete(selectedMessage.id)}
                      className="p-2 rounded-lg bg-destructive/20 text-destructive hover:bg-destructive/30 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-xs text-foreground/50">
                    {new Date(selectedMessage.timestamp).toLocaleString()}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-neon-cyan mb-2">Subject</h4>
                  <p className="text-lg font-medium">{selectedMessage.subject}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-neon-cyan mb-2">Message</h4>
                  <div className="p-4 rounded-lg bg-background/50 border border-foreground/10">
                    <p className="text-foreground/80 whitespace-pre-wrap">
                      {selectedMessage.message}
                    </p>
                  </div>
                </div>

                {/* Reply CTA */}
                <div className="mt-8 p-4 rounded-lg bg-neon-cyan/5 border border-neon-cyan/30">
                  <p className="text-sm text-foreground/70">
                    💡 To reply, contact <span className="text-neon-cyan font-mono">{selectedMessage.email}</span> directly
                  </p>
                </div>
              </div>
            ) : (
              <div className="rounded-xl border border-foreground/10 bg-card/50 p-12 flex flex-col items-center justify-center min-h-[400px]">
                <MessageSquare className="w-16 h-16 text-foreground/20 mb-4" />
                <p className="text-foreground/60 text-center">
                  Select a message to view its details
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
