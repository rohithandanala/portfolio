import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import Chatbot from '@/components/chatbot';
import { Inter, Space_Grotesk } from 'next/font/google';
import { cn } from '@/lib/utils';
import KineticGears from '@/components/kinetic-gears';

export const metadata: Metadata = {
  title: 'Rohith Andanala | Sr. Machine Learning Engineer',
  description: 'Portfolio of an experienced AI/ML Engineer specializing in Scalable Predictive Modeling and MLOps.',
};

const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const fontSpaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-sans antialiased", fontInter.variable, fontSpaceGrotesk.variable)}>
          {children}
          <Chatbot />
          <Toaster />
      </body>
    </html>
  );
}
