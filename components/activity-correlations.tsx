"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ActivityCorrelations() {
  // Mock data for activity correlations
  const positiveActivities = [
    { activity: "Exercise", impact: 85, description: "Strong positive impact on mood for 4-6 hours after" },
    { activity: "Social time", impact: 78, description: "Consistent mood boost, especially with close friends" },
    { activity: "Meditation", impact: 72, description: "Reduces anxiety and improves focus" },
    { activity: "Creative hobbies", impact: 68, description: "Associated with flow state and satisfaction" },
    { activity: "Time in nature", impact: 65, description: "Reduces stress and improves overall wellbeing" },
  ]

  const negativeActivities = [
    { activity: "Work meetings", impact: -45, description: "Often followed by increased stress" },
    { activity: "Late-night scrolling", impact: -62, description: "Disrupts sleep and increases anxiety" },
    { activity: "Skipping meals", impact: -58, description: "Correlates with irritability and low energy" },
    { activity: "News consumption", impact: -40, description: "Can trigger worry and negative thoughts" },
  ]

  return (
    <div className="space-y-4">
      <Tabs defaultValue="positive">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="positive">Positive Impact</TabsTrigger>
          <TabsTrigger value="negative">Negative Impact</TabsTrigger>
        </TabsList>

        <TabsContent value="positive" className="mt-4">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Activities that consistently improve your emotional wellbeing
            </p>

            {positiveActivities.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">{item.activity}</h4>
                    <div className="bg-green-100 dark:bg-green-900/30 text-green-500 text-sm px-2 py-1 rounded-full">
                      +{item.impact}%
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="negative" className="mt-4">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Activities that tend to negatively impact your emotional state
            </p>

            {negativeActivities.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">{item.activity}</h4>
                    <div className="bg-red-100 dark:bg-red-900/30 text-red-500 text-sm px-2 py-1 rounded-full">
                      {item.impact}%
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardContent className="pt-6">
          <h3 className="font-medium mb-2">Personalized Recommendations</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Based on your activity correlations, here are some suggestions to improve your wellbeing:
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-500 p-1 rounded-full">•</span>
              <span>Try to incorporate at least 20 minutes of exercise in the morning</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-500 p-1 rounded-full">•</span>
              <span>Schedule social activities for Sunday evenings to reduce pre-week anxiety</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-500 p-1 rounded-full">•</span>
              <span>Consider batch-processing emails instead of checking throughout the day</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
