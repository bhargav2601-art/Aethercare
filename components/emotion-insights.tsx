"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUp, ArrowDown, Minus, Clock, Calendar, Activity } from "lucide-react"

export default function EmotionInsights() {
  // Mock data for emotion patterns
  const patterns = [
    {
      trigger: "Work deadlines",
      emotion: "Anxiety",
      frequency: "High",
      trend: "increasing",
      suggestion: "Try setting earlier personal deadlines to reduce last-minute pressure",
    },
    {
      trigger: "Social gatherings",
      emotion: "Happiness",
      frequency: "Medium",
      trend: "stable",
      suggestion: "Continue prioritizing social connections for emotional wellbeing",
    },
    {
      trigger: "Morning routine",
      emotion: "Calmness",
      frequency: "High",
      trend: "increasing",
      suggestion: "Your meditation practice is showing positive results",
    },
    {
      trigger: "Evening news",
      emotion: "Worry",
      frequency: "Medium",
      trend: "decreasing",
      suggestion: "Limiting news consumption before bed is helping",
    },
  ]

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "increasing":
        return <ArrowUp className="h-4 w-4 text-green-500" />
      case "decreasing":
        return <ArrowDown className="h-4 w-4 text-red-500" />
      case "stable":
        return <Minus className="h-4 w-4 text-blue-500" />
      default:
        return null
    }
  }

  return (
    <Tabs defaultValue="patterns">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="patterns" className="flex items-center gap-2">
          <Activity className="h-4 w-4" />
          <span>Patterns</span>
        </TabsTrigger>
        <TabsTrigger value="daily" className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>Daily</span>
        </TabsTrigger>
        <TabsTrigger value="weekly" className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>Weekly</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="patterns" className="mt-4">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Emotional Patterns</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Your Digital Twin has identified these patterns in your emotional responses
          </p>

          <div className="space-y-4">
            {patterns.map((pattern, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{pattern.trigger}</h4>
                    <div className="flex items-center gap-1 text-sm">
                      <span>{pattern.frequency}</span>
                      {getTrendIcon(pattern.trend)}
                    </div>
                  </div>
                  <p className="text-sm mb-2">
                    <span className="font-medium">Emotion:</span> {pattern.emotion}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Suggestion:</span> {pattern.suggestion}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="daily" className="mt-4">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Daily Patterns</h3>
          <p className="text-sm text-muted-foreground">
            Your emotions tend to follow these patterns throughout the day
          </p>

          <Card>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Morning (6am - 12pm)</h4>
                  <p className="text-sm text-muted-foreground">
                    You typically start the day feeling calm after your meditation practice, but anxiety tends to build
                    as you check emails and begin work.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Afternoon (12pm - 6pm)</h4>
                  <p className="text-sm text-muted-foreground">
                    Your mood often improves after lunch breaks, especially when you take a walk. Productivity peaks
                    around 2-4pm correlate with positive emotions.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Evening (6pm - 12am)</h4>
                  <p className="text-sm text-muted-foreground">
                    Social interactions in the evening generally boost your mood, but screen time before bed is
                    associated with increased anxiety.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="weekly" className="mt-4">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Weekly Patterns</h3>
          <p className="text-sm text-muted-foreground">How your emotions typically fluctuate throughout the week</p>

          <Card>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Weekday Trends</h4>
                  <p className="text-sm text-muted-foreground">
                    Mondays show higher stress levels, which gradually decrease through Wednesday. Thursday often shows
                    a spike in anxiety related to end-of-week deadlines. Friday afternoons consistently show improved
                    mood.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Weekend Patterns</h4>
                  <p className="text-sm text-muted-foreground">
                    Saturdays spent with friends correlate strongly with positive emotions. Sunday evenings often show
                    increased anxiety about the upcoming week.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Recommendation</h4>
                  <p className="text-sm text-muted-foreground">
                    Consider planning relaxing activities for Sunday evenings to ease the transition into the work week
                    and reduce anticipatory anxiety.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  )
}
