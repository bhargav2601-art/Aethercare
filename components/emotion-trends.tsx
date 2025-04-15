"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EmotionTrends() {
  const [timeRange, setTimeRange] = useState("month")

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Tabs defaultValue="line" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="line">Line Chart</TabsTrigger>
            <TabsTrigger value="bar">Bar Chart</TabsTrigger>
            <TabsTrigger value="area">Area Chart</TabsTrigger>
          </TabsList>
        </Tabs>

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
          <div className="h-[300px] flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted-foreground">
                Emotion trend visualization would appear here, showing how your emotions have changed over time.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                This would be implemented with a charting library like Chart.js or Recharts.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-medium mb-2">Key Insights</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="bg-green-100 dark:bg-green-900/30 text-green-500 p-1 rounded-full">•</span>
                <span>Happiness peaks on Saturdays and during social activities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-500 p-1 rounded-full">•</span>
                <span>Anxiety tends to increase on Sunday evenings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-500 p-1 rounded-full">•</span>
                <span>Morning meditation correlates with improved mood throughout the day</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-medium mb-2">Improvement Areas</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="bg-red-100 dark:bg-red-900/30 text-red-500 p-1 rounded-full">•</span>
                <span>Work-related stress peaks on Mondays and Thursdays</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-red-100 dark:bg-red-900/30 text-red-500 p-1 rounded-full">•</span>
                <span>Late-night screen time correlates with poor sleep and mood</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-medium mb-2">Recommendations</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-500 p-1 rounded-full">•</span>
                <span>Continue morning meditation practice</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-500 p-1 rounded-full">•</span>
                <span>Consider a digital sunset routine 1 hour before bed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-500 p-1 rounded-full">•</span>
                <span>Plan relaxing activities for Sunday evenings</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
