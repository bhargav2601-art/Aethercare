"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Brain, Send, User, Music, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useRouter } from "next/navigation"

type Message = {
  id: string
  content: string
  sender: "user" | "assistant"
  timestamp: Date
  suggestions?: Array<{
    text: string
    action?: string
    highlight?: boolean
  }>
}

export default function MainChat() {
  const router = useRouter()
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi there! I'm your AetherCare assistant. How are you feeling today?",
      sender: "assistant",
      timestamp: new Date(),
      suggestions: [
        { text: "I'm feeling anxious" },
        { text: "I'm feeling good" },
        { text: "I'm feeling sad" },
        { text: "I'm not sure how I feel" },
      ],
    },
  ])
  const [isTyping, setIsTyping] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSuggestionClick = (suggestion: string) => {
    handleUserMessage(suggestion)
  }

  const handleUserMessage = (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate assistant response
    setTimeout(() => {
      let response: Message

      // Check for keywords to determine response
      const lowerContent = content.toLowerCase()

      if (lowerContent.includes("anxious") || lowerContent.includes("anxiety")) {
        response = {
          id: (Date.now() + 1).toString(),
          content:
            "I'm sorry to hear you're feeling anxious. Would you like to try some calming music or explore what might be causing your anxiety?",
          sender: "assistant",
          timestamp: new Date(),
          suggestions: [
            { text: "I'd like some calming music", action: "music", highlight: true },
            { text: "Let's explore my anxiety patterns", action: "twin", highlight: true },
            { text: "Just chat with me for now" },
          ],
        }
      } else if (lowerContent.includes("sad") || lowerContent.includes("down") || lowerContent.includes("depressed")) {
        response = {
          id: (Date.now() + 1).toString(),
          content:
            "I understand feeling down can be difficult. Would you like to see patterns in your mood or try some uplifting music?",
          sender: "assistant",
          timestamp: new Date(),
          suggestions: [
            { text: "Show me my mood patterns", action: "twin", highlight: true },
            { text: "Suggest uplifting music", action: "music", highlight: true },
            { text: "I just want to talk" },
          ],
        }
      } else if (lowerContent.includes("good") || lowerContent.includes("great") || lowerContent.includes("happy")) {
        response = {
          id: (Date.now() + 1).toString(),
          content:
            "That's wonderful to hear! Would you like to record this positive mood in your Digital Twin or perhaps enjoy some music that matches your good mood?",
          sender: "assistant",
          timestamp: new Date(),
          suggestions: [
            { text: "Record in my Digital Twin", action: "twin", highlight: true },
            { text: "Play upbeat music", action: "music", highlight: true },
            { text: "Let's just chat" },
          ],
        }
      } else if (lowerContent.includes("music") || lowerContent.includes("song") || lowerContent.includes("listen")) {
        response = {
          id: (Date.now() + 1).toString(),
          content:
            "I'd be happy to suggest some music based on your mood. Would you like to explore our Music Therapy feature?",
          sender: "assistant",
          timestamp: new Date(),
          suggestions: [
            { text: "Yes, take me to Music Therapy", action: "music", highlight: true },
            { text: "Tell me more about Music Therapy" },
            { text: "Not right now" },
          ],
        }
      } else if (
        lowerContent.includes("pattern") ||
        lowerContent.includes("track") ||
        lowerContent.includes("history") ||
        lowerContent.includes("twin")
      ) {
        response = {
          id: (Date.now() + 1).toString(),
          content:
            "Your Digital Twin can help you track emotional patterns and gain insights. Would you like to explore this feature?",
          sender: "assistant",
          timestamp: new Date(),
          suggestions: [
            { text: "Yes, show me my Digital Twin", action: "twin", highlight: true },
            { text: "Tell me more about Digital Twin" },
            { text: "Not right now" },
          ],
        }
      } else {
        response = {
          id: (Date.now() + 1).toString(),
          content:
            "Thank you for sharing. Would you like to explore your emotional patterns with your Digital Twin or try some mood-based music therapy?",
          sender: "assistant",
          timestamp: new Date(),
          suggestions: [
            { text: "Explore Digital Twin", action: "twin", highlight: true },
            { text: "Try Music Therapy", action: "music", highlight: true },
            { text: "Continue chatting" },
          ],
        }
      }

      setMessages((prev) => [...prev, response])
      setIsTyping(false)
    }, 1500)
  }

  const handleSend = () => {
    if (!input.trim()) return
    handleUserMessage(input)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend()
    }
  }

  const handleSuggestionAction = (action?: string) => {
    if (action === "twin") {
      router.push("/digital-twin")
    } else if (action === "music") {
      router.push("/music-therapy")
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className="flex items-start max-w-[80%]">
              {message.sender === "assistant" && (
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarFallback className="bg-indigo-100 text-indigo-500">
                    <Sparkles className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              )}
              <div className={`rounded-lg p-3 ${message.sender === "user" ? "bg-indigo-500 text-white" : "bg-muted"}`}>
                <p>{message.content}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>

                {message.suggestions && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {message.suggestions.map((suggestion, index) => (
                      <Button
                        key={index}
                        size="sm"
                        variant={suggestion.highlight ? "default" : "secondary"}
                        className={`text-xs ${suggestion.highlight ? "" : "bg-background/80 hover:bg-background"}`}
                        onClick={() => {
                          handleSuggestionClick(suggestion.text)
                          if (suggestion.action) {
                            handleSuggestionAction(suggestion.action)
                          }
                        }}
                      >
                        {suggestion.text}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
              {message.sender === "user" && (
                <Avatar className="h-8 w-8 ml-2">
                  <AvatarFallback className="bg-indigo-100 text-indigo-500">
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-start">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarFallback className="bg-indigo-100 text-indigo-500">
                  <Sparkles className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div className="rounded-lg p-3 bg-muted">
                <div className="flex space-x-1">
                  <div className="h-2 w-2 rounded-full bg-indigo-300 animate-bounce"></div>
                  <div
                    className="h-2 w-2 rounded-full bg-indigo-300 animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="h-2 w-2 rounded-full bg-indigo-300 animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="border-t p-4">
        <div className="flex space-x-2">
          <Input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button onClick={handleSend} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Card className="p-3 bg-background/50 border-dashed">
            <div className="flex items-center gap-2 text-sm">
              <Brain className="h-4 w-4 text-indigo-500" />
              <Link href="/digital-twin" className="text-indigo-500 hover:underline">
                Digital Twin
              </Link>
              <span className="text-muted-foreground">Track your emotional patterns</span>
            </div>
          </Card>
          <Card className="p-3 bg-background/50 border-dashed">
            <div className="flex items-center gap-2 text-sm">
              <Music className="h-4 w-4 text-indigo-500" />
              <Link href="/music-therapy" className="text-indigo-500 hover:underline">
                Music Therapy
              </Link>
              <span className="text-muted-foreground">Find music for your mood</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
