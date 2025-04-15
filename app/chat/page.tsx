import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import MainChat from "@/components/main-chat"
import { MessageCircle } from "lucide-react"

export default function ChatPage() {
  return (
    <div className="container mx-auto py-8 px-4 h-[calc(100vh-64px)] flex flex-col">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Chat with AetherCare</h1>
        <p className="text-muted-foreground">Share how you're feeling and let us guide you to the right resources</p>
      </div>

      <Card className="flex-1 flex flex-col overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-indigo-500" />
            AetherCare Assistant
          </CardTitle>
          <CardDescription>I'm here to help with your mental wellness journey</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 p-0 overflow-hidden">
          <MainChat />
        </CardContent>
      </Card>
    </div>
  )
}
