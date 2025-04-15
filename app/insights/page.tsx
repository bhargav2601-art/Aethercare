import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, BarChart, Clock } from "lucide-react"
import InsightsSummary from "@/components/insights-summary"
import EmotionTrends from "@/components/emotion-trends"
import ActivityCorrelations from "@/components/activity-correlations"
import SleepMoodCorrelation from "@/components/sleep-mood-correlation"

export default function InsightsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Insights & Analytics</h1>
          <p className="text-muted-foreground">Discover patterns and trends in your emotional wellbeing</p>
        </div>

        <InsightsSummary />

        <Tabs defaultValue="trends" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="trends" className="flex items-center gap-2">
              <LineChart className="h-4 w-4" />
              <span>Trends</span>
            </TabsTrigger>
            <TabsTrigger value="correlations" className="flex items-center gap-2">
              <BarChart className="h-4 w-4" />
              <span>Correlations</span>
            </TabsTrigger>
            <TabsTrigger value="sleep" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Sleep</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trends">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LineChart className="h-5 w-5 text-indigo-500" />
                  Emotion Trends
                </CardTitle>
                <CardDescription>How your emotions have changed over time</CardDescription>
              </CardHeader>
              <CardContent>
                <EmotionTrends />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="correlations">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-indigo-500" />
                  Activity Correlations
                </CardTitle>
                <CardDescription>How different activities affect your mood</CardDescription>
              </CardHeader>
              <CardContent>
                <ActivityCorrelations />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sleep">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-indigo-500" />
                  Sleep & Mood
                </CardTitle>
                <CardDescription>The relationship between your sleep patterns and emotional state</CardDescription>
              </CardHeader>
              <CardContent>
                <SleepMoodCorrelation />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
