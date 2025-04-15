"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export default function SleepMoodCorrelation() {
  const [timeRange, setTimeRange] = useState("month")

  // Mock data for sleep quality correlation
  const sleepData = [
    { hours: "< 6 hours", moodScore: 45, frequency: "20% of nights" },
    { hours: "6-7 hours", moodScore: 65, frequency: "35% of nights" },
    { hours: "7-8 hours", moodScore: 82, frequency: "30% of nights" },
    { hours: "> 8 hours", moodScore: 78, frequency: "15% of nights" },
  ]

  const sleepFactors = [
    {
      factor: "Screen time before bed",
      impact: "High negative",
      description: "Using devices within 1 hour of bedtime correlates with poorer sleep quality",
    },
    {
      factor: "Consistent bedtime",
      impact: "High positive",
      description: "Going to bed at the same time improves sleep quality and next-day mood",
    },
    {
      factor: "Evening exercise",
      impact: "Moderate positive",
      description: "Light exercise in the evening helps with falling asleep faster",
    },
    {
      factor: "Caffeine after 2pm",
      impact: "Moderate negative",
      description: "Afternoon caffeine correlates with disrupted sleep patterns",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Sleep & Mood Correlation</h3>
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

      <Card>
        <CardContent className="pt-6">
          <h3 className="font-medium mb-4">Sleep Duration & Next-Day Mood</h3>
          <div className="space-y-4">
            {sleepData.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-24 text-sm">{item.hours}</div>
                <div className="flex-1">
                  <div className="h-6 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${item.moodScore}%` }}></div>
                  </div>
                </div>
                <div className="w-24 text-right text-sm">
                  <span className="font-medium">{item.moodScore}%</span>
                  <span className="text-xs text-muted-foreground ml-2">({item.frequency})</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Your optimal sleep duration appears to be 7-8 hours, which correlates with your highest mood scores.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h3 className="font-medium mb-4">Sleep Quality Factors</h3>
          <div className="space-y-4">
            {sleepFactors.map((item, index) => (
              <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium">{item.factor}</h4>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      item.impact.includes("positive")
                        ? "bg-green-100 dark:bg-green-900/30 text-green-500"
                        : "bg-red-100 dark:bg-red-900/30 text-red-500"
                    }`}
                  >
                    {item.impact}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h3 className="font-medium mb-2">Sleep Improvement Suggestions</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-500 p-1 rounded-full">•</span>
              <span>Establish a consistent sleep schedule, even on weekends</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-500 p-1 rounded-full">•</span>
              <span>Create a digital sunset routine 1 hour before bedtime</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-500 p-1 rounded-full">•</span>
              <span>Try the recommended sleep sounds in the Music Therapy section</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-500 p-1 rounded-full">•</span>
              <span>Limit caffeine consumption after 2pm</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
