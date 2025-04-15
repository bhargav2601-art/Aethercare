import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import EmotionCheckIn from "@/components/emotion-check-in"
import { MessageCircle } from "lucide-react"

export default function CheckInPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Daily Check-in</h1>
          <p className="text-muted-foreground">
            Share how you're feeling to help your Digital Twin understand you better
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-indigo-500" />
              How are you feeling today?
            </CardTitle>
            <CardDescription>
              Your responses help train your Digital Twin to recognize your emotional patterns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EmotionCheckIn />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
