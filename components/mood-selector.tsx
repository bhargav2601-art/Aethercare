"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Smile, Frown, Meh, AlertCircle, Music, Zap } from "lucide-react"

export default function MoodSelector() {
  const [selectedMood, setSelectedMood] = useState<string | null>("calm")

  const moods = [
    {
      id: "happy",
      label: "Happy",
      icon: Smile,
      color: "bg-green-100 text-green-500 border-green-200 dark:bg-green-900/20",
    },
    { id: "calm", label: "Calm", icon: Meh, color: "bg-blue-100 text-blue-500 border-blue-200 dark:bg-blue-900/20" },
    {
      id: "anxious",
      label: "Anxious",
      icon: AlertCircle,
      color: "bg-yellow-100 text-yellow-500 border-yellow-200 dark:bg-yellow-900/20",
    },
    { id: "sad", label: "Sad", icon: Frown, color: "bg-red-100 text-red-500 border-red-200 dark:bg-red-900/20" },
    {
      id: "energetic",
      label: "Energetic",
      icon: Zap,
      color: "bg-purple-100 text-purple-500 border-purple-200 dark:bg-purple-900/20",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {moods.map((mood) => {
          const Icon = mood.icon
          const isSelected = selectedMood === mood.id

          return (
            <Button
              key={mood.id}
              variant="outline"
              className={`flex flex-col items-center justify-center h-24 ${isSelected ? `${mood.color} border-2` : ""}`}
              onClick={() => setSelectedMood(mood.id)}
            >
              <Icon className={`h-8 w-8 mb-2 ${isSelected ? "" : "text-muted-foreground"}`} />
              <span>{mood.label}</span>
            </Button>
          )
        })}
      </div>

      <div className="flex justify-center mt-6">
        <Button className="flex items-center gap-2">
          <Music className="h-4 w-4" />
          <span>Generate Music for My Mood</span>
        </Button>
      </div>

      <p className="text-sm text-center text-muted-foreground mt-2">
        Your Digital Twin suggests you might be feeling calm based on recent interactions
      </p>
    </div>
  )
}
