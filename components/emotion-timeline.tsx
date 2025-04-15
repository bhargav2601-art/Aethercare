"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Smile, Meh, Frown, AlertCircle } from "lucide-react"

export default function EmotionTimeline() {
  const [timeRange, setTimeRange] = useState("week")

  // Mock data for the emotion timeline
  const timelineData = [
    { date: "Mon", emotion: "happy", note: "Started a new project", intensity: 0.8 },
    { date: "Tue", emotion: "happy", note: "Good progress on work", intensity: 0.7 },
    { date: "Wed", emotion: "neutral", note: "Regular day, nothing special", intensity: 0.5 },
    { date: "Thu", emotion: "anxious", note: "Deadline approaching", intensity: 0.6 },
    { date: "Fri", emotion: "happy", note: "Finished project on time", intensity: 0.9 },
    { date: "Sat", emotion: "neutral", note: "Relaxed at home", intensity: 0.5 },
    { date: "Sun", emotion: "happy", note: "Spent time with friends", intensity: 0.8 },
  ]

  const getEmotionIcon = (emotion: string, intensity: number) => {
    const size = Math.max(16, Math.floor(intensity * 32))

    switch (emotion) {
      case "happy":
        return <Smile className={`text-green-500`} style={{ width: size, height: size }} />
      case "neutral":
        return <Meh className={`text-blue-500`} style={{ width: size, height: size }} />
      case "anxious":
        return <AlertCircle className={`text-yellow-500`} style={{ width: size, height: size }} />
      case "sad":
        return <Frown className={`text-red-500`} style={{ width: size, height: size }} />
      default:
        return <Meh className={`text-gray-500`} style={{ width: size, height: size }} />
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Your Emotional Journey</h3>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Select range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">Past Week</SelectItem>
            <SelectItem value="month">Past Month</SelectItem>
            <SelectItem value="year">Past Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800"></div>
        <div className="space-y-8">
          {timelineData.map((item, index) => (
            <div key={index} className="relative pl-12">
              <div className="absolute left-0 flex items-center justify-center w-12 h-12">
                <div className="absolute w-3 h-3 bg-background border-2 border-indigo-500 rounded-full left-[22px]"></div>
                {getEmotionIcon(item.emotion, item.intensity)}
              </div>
              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium capitalize">{item.emotion}</h4>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.note}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
