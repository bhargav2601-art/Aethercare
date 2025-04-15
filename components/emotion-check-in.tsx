"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Smile, Meh, Frown, AlertCircle, Send, ThumbsUp } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function EmotionCheckIn() {
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([])
  const [intensity, setIntensity] = useState(50)
  const [notes, setNotes] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const { toast } = useToast()

  const emotions = [
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
  ]

  const toggleEmotion = (emotionId: string) => {
    if (selectedEmotions.includes(emotionId)) {
      setSelectedEmotions(selectedEmotions.filter((id) => id !== emotionId))
    } else {
      setSelectedEmotions([...selectedEmotions, emotionId])
    }
  }

  const handleSubmit = () => {
    // Here you would normally send the data to your backend
    console.log({
      emotions: selectedEmotions,
      intensity,
      notes,
    })

    setSubmitted(true)

    toast({
      title: "Check-in submitted",
      description: "Your Digital Twin is learning from your input.",
      action: (
        <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
          <ThumbsUp className="h-4 w-4 text-green-500" />
        </div>
      ),
    })
  }

  if (submitted) {
    return (
      <div className="text-center py-8 space-y-4">
        <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
          <ThumbsUp className="h-8 w-8 text-green-500" />
        </div>
        <h3 className="text-xl font-medium">Thank you for checking in!</h3>
        <p className="text-muted-foreground">
          Your Digital Twin is learning from your input to better understand your emotional patterns.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-4">
          Add another check-in
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-3">Select your emotions (choose all that apply)</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {emotions.map((emotion) => {
            const Icon = emotion.icon
            const isSelected = selectedEmotions.includes(emotion.id)

            return (
              <Button
                key={emotion.id}
                variant="outline"
                className={`flex flex-col items-center justify-center h-24 ${
                  isSelected ? `${emotion.color} border-2` : ""
                }`}
                onClick={() => toggleEmotion(emotion.id)}
              >
                <Icon className={`h-8 w-8 mb-2 ${isSelected ? "" : "text-muted-foreground"}`} />
                <span>{emotion.label}</span>
              </Button>
            )
          })}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-3">Intensity: {intensity}%</h3>
        <Slider value={[intensity]} max={100} step={1} onValueChange={(value) => setIntensity(value[0])} />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>Mild</span>
          <span>Moderate</span>
          <span>Intense</span>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-3">What's on your mind? (optional)</h3>
        <Textarea
          placeholder="Share your thoughts, activities, or what might be affecting your mood..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
        />
      </div>

      <Button
        onClick={handleSubmit}
        className="w-full flex items-center gap-2"
        disabled={selectedEmotions.length === 0}
      >
        <Send className="h-4 w-4" />
        <span>Submit Check-in</span>
      </Button>
    </div>
  )
}
