"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, User, Send, Loader, Terminal as TerminalIcon, Wrench, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "model";
  text?: string;
  image?: string;
  toolName?: string;
};

const CHAT_API_URL = "https://app.therohithandanala.in/chat";
const TOOLS_API_URL = "https://app.therohithandanala.in/tools";

// Fallback tools in case the API is unreachable (e.g. CORS/Network issues during development)
const FALLBACK_TOOLS = [
  "search_resume_and_experience",
  "fetch_weather_data",
  "generate_image_base64",
  "get_contact_info"
];

export default function RagTerminal() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", text: "MCP System initialized. Select a tool or ask me about Rohith's portfolio.", toolName: "System" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [availableTools, setAvailableTools] = useState<string[]>(FALLBACK_TOOLS);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const fetchTools = async () => {
      try {
        const response = await fetch(TOOLS_API_URL, {
          headers: {
            'accept': 'application/json'
          }
        });
        if (response.ok) {
          const data = await response.json();
          const names: string[] = data?.tools?.map((t: any) => t.name) || [];
          if (names.length > 0) {
            setAvailableTools(names);
          }
        }
      } catch (error) {
        // Silently catch network errors to prevent crashing the UI
        // We use the FALLBACK_TOOLS as the default state
      }
    };
    fetchTools();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    
    const currentInput = input;
    const currentToolHint = selectedTool || "none";
    
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(CHAT_API_URL, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "accept": "application/json"
        },
        body: JSON.stringify({ 
          prompt: currentInput,
          tool_hint: currentToolHint
        }),
      });

      if (!response.ok) throw new Error("API request failed");

      const result = await response.json();
      
      const botMessage: Message = { 
        role: "model", 
        text: result.text || result.result,
        image: result.image_data || result.image,
        toolName: selectedTool || undefined
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "model", text: "Error: Connection lost. Retrying...", toolName: "System" }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!mounted) {
    return (
      <section id="rag-agent" className="w-full py-0">
        <div className="max-w-4xl mx-auto px-4">
          <div className="h-[450px] bg-background border border-primary/20 rounded-lg animate-pulse" />
        </div>
      </section>
    );
  }

  return (
    <section id="rag-agent" className="w-full py-0">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative p-[2px] overflow-hidden rounded-lg group">
          <div className="absolute inset-[-500%] animate-rotating-border bg-[conic-gradient(from_90deg_at_50%_50%,#7DF9FF_0%,#FF0044_50%,#7DF9FF_100%)] opacity-70"></div>
          
          <Card className="relative h-[450px] flex flex-col bg-background border-none shadow-2xl overflow-hidden rounded-lg">
            <CardHeader className="py-2 border-b border-primary/20 bg-card/50">
              <CardTitle className="flex items-center justify-between text-primary font-headline text-sm">
                <div className="flex items-center gap-2">
                  <TerminalIcon className="w-4 h-4" />
                  MCP_RAG_AGENT_WORKSTATION v2.0
                </div>
                {selectedTool && (
                  <div className="flex items-center gap-2 text-[10px] text-destructive animate-pulse">
                    <Wrench className="w-3 h-3" />
                    TOOL_MODE: {selectedTool.toUpperCase()}
                  </div>
                )}
              </CardTitle>
            </CardHeader>

            <CardContent ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-primary/20">
              {messages.map((msg, index) => (
                <div key={index} className={cn(
                  "flex items-start gap-3 animate-in fade-in-0 slide-in-from-bottom-2",
                  msg.role === "user" ? "justify-end" : ""
                )}>
                  {msg.role === "model" && <Bot className="h-4 w-4 text-primary shrink-0 mt-1" />}
                  <div className={cn(
                    "rounded-lg px-3 py-2 text-xs max-w-[85%] border",
                    msg.role === "user" 
                      ? "bg-primary/10 border-primary/30 text-primary-foreground" 
                      : "bg-muted/50 border-muted text-foreground"
                  )}>
                    {msg.toolName && (
                      <p className="text-[10px] italic text-destructive opacity-80 mb-1">
                        Context: {msg.toolName}
                      </p>
                    )}
                    
                    {msg.image && (
                      <div className="mb-2">
                        <img 
                          src={msg.image.startsWith('data:') ? msg.image : `data:image/png;base64,${msg.image}`} 
                          alt="Generated output" 
                          className="rounded border border-primary/50 w-16 h-16 object-contain shadow-inner bg-black/20"
                        />
                      </div>
                    )}
                    
                    {msg.text && (
                      <p className="font-mono leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                    )}
                  </div>
                  {msg.role === "user" && <User className="h-4 w-4 text-muted-foreground shrink-0 mt-1" />}
                </div>
              ))}
              
              {isLoading && (
                <div className="flex items-start gap-3">
                  <Bot className="h-4 w-4 text-primary shrink-0 animate-pulse" />
                  <div className="bg-muted/50 border border-muted rounded-lg px-3 py-2 text-[10px] font-mono flex items-center gap-2">
                    <Loader className="w-3 h-3 animate-spin text-destructive" />
                    <span className="text-destructive animate-pulse">Calculating...</span>
                  </div>
                </div>
              )}
            </CardContent>

            <CardFooter className="p-3 border-t border-primary/20 bg-card/30">
              <form onSubmit={handleSendMessage} className="flex w-full items-center space-x-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className={cn(
                        "h-8 gap-2 border-primary/30 text-[10px] font-mono",
                        selectedTool ? "border-destructive text-destructive bg-destructive/5" : "text-primary"
                      )}
                    >
                      <Wrench className="w-3 h-3" />
                      Tools
                      <ChevronUp className="w-3 h-3" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="start" className="w-72 p-0 bg-background border-primary/30 shadow-2xl overflow-hidden">
                    <div className="flex flex-col">
                      <div className="px-3 py-2 border-b border-primary/10 bg-card/50">
                        <p className="text-[10px] font-bold text-primary uppercase tracking-wider">Available Tools</p>
                      </div>
                      <div className="max-h-64 overflow-y-auto">
                        <button
                          type="button"
                          onClick={() => setSelectedTool(null)}
                          className={cn(
                            "flex flex-col items-start w-full px-4 py-3 text-left hover:bg-primary/10 transition-colors border-b last:border-0 border-primary/5",
                            selectedTool === null ? "bg-primary/5 border-l-2 border-l-primary" : ""
                          )}
                        >
                          <span className={cn(
                            "text-[11px] font-bold",
                            selectedTool === null ? "text-primary" : "text-foreground"
                          )}>
                            Standard RAG
                          </span>
                          <span className="text-[9px] text-muted-foreground line-clamp-1">General portfolio queries</span>
                        </button>
                        
                        {availableTools.map((toolName) => (
                          <button
                            key={toolName}
                            type="button"
                            onClick={() => setSelectedTool(toolName)}
                            className={cn(
                              "flex flex-col items-start w-full px-4 py-3 text-left hover:bg-primary/10 transition-colors border-b last:border-0 border-primary/5",
                              selectedTool === toolName ? "bg-primary/5 border-l-2 border-l-primary" : ""
                            )}
                          >
                            <span className={cn(
                              "text-[11px] font-bold",
                              selectedTool === toolName ? "text-primary" : "text-foreground"
                            )}>
                              {toolName.replace(/_/g, ' ')}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>

                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={!selectedTool ? "Ask about Rohith..." : `Prompt for ${selectedTool}...`}
                  className={cn(
                    "bg-background/50 text-xs font-mono focus:ring-0 h-8 transition-colors",
                    selectedTool ? "border-destructive/50 focus:border-destructive" : "border-primary/30 focus:border-primary"
                  )}
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  disabled={isLoading} 
                  variant="outline" 
                  className={cn(
                    "h-8 w-8 shrink-0 transition-colors",
                    selectedTool ? "border-destructive text-destructive hover:bg-destructive hover:text-white" : "border-primary text-primary hover:bg-primary hover:text-white"
                  )}
                >
                  <Send className="h-3 w-3" />
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
