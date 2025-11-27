import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import Chatbot from '@/components/chatbot';

export const metadata: Metadata = {
  title: 'AI-Driven Portfolio | AI/ML Engineer',
  description: 'Portfolio of an experienced AI/ML Engineer specializing in Scalable Predictive Modeling and MLOps.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
          {children}
          <Chatbot />
          <Toaster />
      </body>
    </html>
  );
}
