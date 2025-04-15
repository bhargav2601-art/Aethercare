import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Brain, MessageCircle, Music, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Welcome to AetherCare</h1>
          <p className="text-xl text-muted-foreground">Your personal mental wellness companion</p>
        </div>

        <Card className="transition-all hover:shadow-md">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Start a Conversation</CardTitle>
              <MessageCircle className="h-6 w-6 text-indigo-500" />
            </div>
            <CardDescription>Chat with AetherCare to explore how you're feeling today</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Begin your wellness journey with a friendly conversation. Share how you're feeling, and we'll guide you to
              the right resources.
            </p>
            <Link href="/chat">
              <Button className="w-full">
                Start Chatting <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="transition-all hover:shadow-md opacity-80 hover:opacity-100">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Digital Twin</CardTitle>
                <Brain className="h-6 w-6 text-indigo-500" />
              </div>
              <CardDescription>Your virtual emotional companion that learns and grows with you</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Track your emotional journey, discover patterns, and gain insights into your mental wellbeing.
              </p>
              <Link href="/digital-twin">
                <Button variant="outline" className="w-full">
                  Explore Your Digital Twin <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-md opacity-80 hover:opacity-100">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Music Therapy</CardTitle>
                <Music className="h-6 w-6 text-indigo-500" />
              </div>
              <CardDescription>Personalized music recommendations based on your emotional state</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Discover calming sounds and music tailored to your current mood and emotional needs.
              </p>
              <Link href="/music-therapy">
                <Button variant="outline" className="w-full">
                  Discover Music Therapy <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 border-none">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="h-5 w-5 text-indigo-500" />
              <h3 className="font-semibold text-lg">Your Wellness Journey</h3>
            </div>
            <p className="mb-4">
              AetherCare combines AI-powered conversation, emotional tracking, and music therapy to provide a
              comprehensive mental wellness experience.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
