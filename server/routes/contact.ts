import { RequestHandler } from "express";

interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const handleContactForm: RequestHandler = (req, res) => {
  try {
    const { name, email, subject, message } = req.body as ContactRequest;

    // Validate inputs
    if (!name || !email || !subject || !message) {
      res.status(400).json({
        success: false,
        error: "All fields are required",
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({
        success: false,
        error: "Invalid email format",
      });
      return;
    }

    // In a real application, you would send an email here
    // For now, we'll just log it and return success
    console.log("Contact form submission:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with email service (SendGrid, Mailgun, NodeMailer, etc.)
    // Example with nodemailer:
    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASSWORD,
    //   },
    // });
    //
    // await transporter.sendMail({
    //   from: email,
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `New contact form: ${subject}`,
    //   text: `From: ${name} (${email})\n\n${message}`,
    //   replyTo: email,
    // });

    res.json({
      success: true,
      message: "Message received successfully",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to process contact form",
    });
  }
};
