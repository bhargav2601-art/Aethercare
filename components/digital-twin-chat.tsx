"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Brain, Send, User } from "lucide-react"

type Message = {
  id: string
  content: string
  sender: "user" | "twin"
  timestamp: Date
}

export default function DigitalTwinChat() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm your Digital Twin. You can ask me about your emotional patterns or how you've been feeling lately.",
      sender: "twin",
      timestamp: new Date(),
    },
  ])

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate Digital Twin response
    setTimeout(() => {
      const responses = [
        "Based on your recent check-ins, you've been feeling more positive on days when you exercise in the morning.",
        "I've noticed that your anxiety tends to increase on Sundays. Would you like some suggestions to help with that?",
        "Your overall mood has improved by 15% compared to last month. Great progress!",
        "You seem to feel happier when you spend time with friends. Your last three social gatherings were followed by positive check-ins.",
        "I've observed that work meetings on Mondays tend to trigger stress. Perhaps scheduling buffer time before and after could help.",
      ]

      const twinMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: responses[Math.floor(Math.random() * responses.length)],
        sender: "twin",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, twinMessage])
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend()
    }
  }

  return (
    <div className="flex flex-col h-[500px]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className="flex items-start max-w-[80%]">
              {message.sender === "twin" && (
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarFallback className="bg-indigo-100 text-indigo-500">
                    <Brain className="h-4 w-4" />
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
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t p-4">
        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask your Digital Twin a question..."
            className="flex-1"
          />
          <Button onClick={handleSend} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Try asking: "How was my mood this week?" or "What activities make me feel better?"
        </p>
      </div>
    </div>
  )
}
