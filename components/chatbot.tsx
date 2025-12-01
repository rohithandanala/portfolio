
"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "model";
  text: string;
};

const quickQuestions = [
    "What is Rohith's expertise in Generative AI?",
    "How did Rohith achieve $2.3M in cost savings at Cigna?",
    "What tools does Rohith use for MLOps?",
    "Tell me about the Fake News Detection project.",
];

type ChatbotProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const API_URL = "https://app.therohithandanala.in/api/query";

export default function Chatbot({ isOpen, setIsOpen }: ChatbotProps) {
  const [showAskMe, setShowAskMe] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [conversationStarted, setConversationStarted] = useState(false);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const timer = setTimeout(() => {
        setShowAskMe(true);
    }, 1000);

    const hideTimer = setTimeout(() => {
        setShowAskMe(false);
    }, 6000);

    return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
    };
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async (query?: string) => {
    const messageText = query || input;
    if (messageText.trim() === "" || isLoading) return;

    if (!conversationStarted) {
      setConversationStarted(true);
    }

    const userMessage: Message = { role: "user", text: messageText };
    setMessages((prev) => [...prev, userMessage]);
    if (!query) {
      setInput("");
    }
    setIsLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query_text: messageText,
        }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const result = await response.json();
      const botMessage: Message = { role: "model", text: result.result };
      setMessages((prev) => [...prev, botMessage]);

    } catch (error) {
      console.error("Chatbot error:", error);
      const errorMessage: Message = {
        role: "model",
        text: "Sorry, I'm having trouble connecting. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {showAskMe && !isOpen && (
            <div className="absolute bottom-full right-0 mb-2 w-max animate-in fade-in-0 slide-in-from-bottom-2">
                <div className="bg-background text-foreground rounded-lg px-3 py-1 shadow-lg border border-destructive/50">
                    <p className="text-sm font-semibold text-destructive">Ask me!</p>
                </div>
            </div>
        )}
        <Button
            onClick={toggleChat}
            className="h-16 w-16 rounded-full shadow-lg relative animate-chatbot-wobble bg-destructive hover:bg-destructive/80 text-destructive-foreground"
            size="icon"
        >
            <span className="relative">
                {isOpen ? <X className="h-8 w-8" /> : <MessageSquare className="h-8 w-8" />}
            </span>
            <span className="sr-only">Toggle Chat</span>
        </Button>
      </div>


      {isOpen && (
        <div className="fixed bottom-24 right-6 w-full max-w-sm h-[70vh] z-50 animate-in fade-in-0 slide-in-from-bottom-4">
        <Card className="h-full flex flex-col shadow-2xl border-primary/50 bg-background/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary font-headline text-lg">
              <Bot />
              AI Portfolio Assistant
            </CardTitle>
            <CardDescription>Ask me anything about Rohith's portfolio.</CardDescription>
          </CardHeader>
          <CardContent ref={chatContainerRef} className="flex-grow overflow-y-auto pr-4 space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={cn(
                "flex items-start gap-3 animate-in fade-in-0 slide-in-from-bottom-2",
                msg.role === "user" ? "justify-end" : ""
              )}>
                {msg.role === "model" && <Bot className="h-6 w-6 text-primary shrink-0" />}
                <div className={cn("rounded-lg px-3 py-2 text-sm max-w-xs", 
                    msg.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  )}>
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                </div>
                 {msg.role === "user" && <User className="h-6 w-6 text-muted-foreground shrink-0" />}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3 animate-in fade-in-0 slide-in-from-bottom-2">
                <Bot className="h-6 w-6 text-primary shrink-0" />
                <div className="bg-muted rounded-lg px-3 py-2">
                  <Loader className="h-5 w-5 animate-spin text-primary" />
                </div>
              </div>
            )}
            {messages.length === 0 && !isLoading && (
                <div className="flex flex-col justify-center items-center h-full text-center text-muted-foreground animate-in fade-in-0">
                    <MessageSquare className="w-10 h-10 mb-2 text-primary/50" />
                    <p>Ask me anything about Rohith!</p>
                </div>
            )}
          </CardContent>
          <CardFooter className="pt-4 border-t border-primary/20 flex flex-col items-start gap-2">
            {!conversationStarted && messages.length === 0 && !isLoading &&(
                <div className="flex flex-wrap gap-2 animate-in fade-in-0">
                    {quickQuestions.map((q) => (
                        <Badge key={q} variant="outline" className="cursor-pointer border-primary/50 text-primary hover:bg-primary/10" onClick={() => handleSendMessage(q)}>{q}</Badge>
                    ))}
                </div>
            )}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex w-full items-center space-x-2 pt-2"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about a project..."
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
        </div>
      )}
    </>
  );
}
