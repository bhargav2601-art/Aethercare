"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useState, useEffect } from "react"
import { Smile, Frown, Meh, ThumbsUp } from "lucide-react"

export default function EmotionSummary() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const emotions = [
    { name: "Happy", value: 65, icon: Smile, color: "text-green-500" },
    { name: "Neutral", value: 20, icon: Meh, color: "text-blue-500" },
    { name: "Anxious", value: 10, icon: Frown, color: "text-yellow-500" },
    { name: "Sad", value: 5, icon: Frown, color: "text-red-500" },
  ]

  const dominantMood = emotions.reduce((prev, current) => (prev.value > current.value ? prev : current))

  const DominantIcon = dominantMood.icon

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-4">Current Emotional State</h3>
            <div className="space-y-4">
              {emotions.map((emotion) => {
                const Icon = emotion.icon
                return (
                  <div key={emotion.name} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Icon className={`h-4 w-4 mr-2 ${emotion.color}`} />
                        <span className="text-sm">{emotion.name}</span>
                      </div>
                      <span className="text-sm font-medium">{emotion.value}%</span>
                    </div>
                    <Progress value={loaded ? emotion.value : 0} className="h-2" />
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center text-center border-t pt-4 md:border-t-0 md:border-l md:pt-0 md:pl-6">
            <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-full p-4 mb-4">
              <DominantIcon className={`h-12 w-12 ${dominantMood.color}`} />
            </div>
            <h3 className="text-lg font-medium">You're mostly {dominantMood.name.toLowerCase()}</h3>
            <p className="text-muted-foreground mt-2">Based on your recent interactions and check-ins</p>
            <div className="mt-4 flex items-center text-sm text-muted-foreground">
              <ThumbsUp className="h-4 w-4 mr-1" />
              <span>Your emotional awareness has improved by 15% this month</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
