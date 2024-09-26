"use client";
import { EmailTemplate } from "@/components/email-template";
import { data } from "autoprefixer";
import { Resend } from "resend";
import React from "react";
import { configDotenv } from "dotenv";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { body } = await req.json();
  const { email, subject, message } = body;
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>
            Thank you for reaching out! I will get back to you soon regarding:
          </p>
          <p>{message}</p>
        </>
      ),
    });

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
