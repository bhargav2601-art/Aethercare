import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EmotionTimeline from "@/components/emotion-timeline"
import EmotionInsights from "@/components/emotion-insights"
import DigitalTwinChat from "@/components/digital-twin-chat"
import EmotionSummary from "@/components/emotion-summary"
import { Brain, Calendar, MessageCircle, PieChart } from "lucide-react"

export default function DigitalTwinPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Your Digital Twin</h1>
          <p className="text-muted-foreground">
            A virtual version of yourself that understands your emotional patterns
          </p>
        </div>

        <EmotionSummary />

        <Tabs defaultValue="timeline" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="timeline" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Timeline</span>
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex items-center gap-2">
              <PieChart className="h-4 w-4" />
              <span>Insights</span>
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <span>Ask Your Twin</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="timeline">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-indigo-500" />
                  Emotion Timeline
                </CardTitle>
                <CardDescription>Track how your emotions have changed over time</CardDescription>
              </CardHeader>
              <CardContent>
                <EmotionTimeline />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5 text-indigo-500" />
                  Emotion Insights
                </CardTitle>
                <CardDescription>Patterns and trends in your emotional wellbeing</CardDescription>
              </CardHeader>
              <CardContent>
                <EmotionInsights />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chat">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-indigo-500" />
                  Chat with Your Digital Twin
                </CardTitle>
                <CardDescription>
                  Ask questions about your emotional patterns and get personalized insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DigitalTwinChat />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
