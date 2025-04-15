"use client"

import { Button } from "@/components/ui/button"
import { Play, Plus, ThumbsUp, ThumbsDown, ExternalLink } from "lucide-react"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"

export default function MusicRecommendations() {
  const [currentMood, setCurrentMood] = useState("calm")

  // Mock recommendation data with YouTube links
  const recommendations = {
    calm: [
      {
        id: "1",
        title: "Ocean Waves",
        artist: "Nature Sounds",
        duration: "5:23",
        mood: "Calm",
        language: "Instrumental",
        coverArt: "/placeholder.svg?height=48&width=48",
        youtubeLink: "https://www.youtube.com/watch?v=V5EOia0IdMY",
      },
      {
        id: "2",
        title: "Forest Meditation",
        artist: "Ambient Therapy",
        duration: "4:15",
        mood: "Relaxation",
        language: "Instrumental",
        coverArt: "/placeholder.svg?height=48&width=48",
        youtubeLink: "https://www.youtube.com/watch?v=qFZKK7K52uQ",
      },
      {
        id: "3",
        title: "Gentle Rain",
        artist: "Sleep Sounds",
        duration: "6:30",
        mood: "Focus",
        language: "Instrumental",
        coverArt: "/placeholder.svg?height=48&width=48",
        youtubeLink: "https://www.youtube.com/watch?v=yIQd2Ya0Ziw",
      },
    ],
    anxious: [
      {
        id: "4",
        title: "Anxiety Relief",
        artist: "Meditation Music",
        duration: "10:15",
        mood: "Calming",
        language: "Instrumental",
        coverArt: "/placeholder.svg?height=48&width=48",
        youtubeLink: "https://www.youtube.com/watch?v=lFcSrYw-ARY",
      },
      {
        id: "5",
        title: "Stress Reduction",
        artist: "Healing Sounds",
        duration: "8:45",
        mood: "Peaceful",
        language: "Instrumental",
        coverArt: "/placeholder.svg?height=48&width=48",
        youtubeLink: "https://www.youtube.com/watch?v=aXItOY0sLRY",
      },
    ],
    happy: [
      {
        id: "6",
        title: "Morning Sunshine",
        artist: "Happy Vibes",
        duration: "3:45",
        mood: "Uplifting",
        language: "English",
        coverArt: "/placeholder.svg?height=48&width=48",
        youtubeLink: "https://www.youtube.com/watch?v=ru0K8uYEZWw",
      },
      {
        id: "7",
        title: "Positive Energy",
        artist: "Good Mood",
        duration: "4:20",
        mood: "Energetic",
        language: "English",
        coverArt: "/placeholder.svg?height=48&width=48",
        youtubeLink: "https://www.youtube.com/watch?v=ZbZSe6N_BXs",
      },
    ],
    sad: [
      {
        id: "8",
        title: "Melancholy Piano",
        artist: "Emotional Keys",
        duration: "5:10",
        mood: "Reflective",
        language: "Instrumental",
        coverArt: "/placeholder.svg?height=48&width=48",
        youtubeLink: "https://www.youtube.com/watch?v=4N3N1MlvVc4",
      },
      {
        id: "9",
        title: "Rainy Day",
        artist: "Comfort Sounds",
        duration: "6:05",
        mood: "Soothing",
        language: "Instrumental",
        coverArt: "/placeholder.svg?height=48&width=48",
        youtubeLink: "https://www.youtube.com/watch?v=DWcJFNfaw9c",
      },
    ],
  }

  const currentRecommendations = recommendations[currentMood as keyof typeof recommendations] || recommendations.calm

  return (
    <div className="space-y-4">
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {Object.keys(recommendations).map((mood) => (
          <Button
            key={mood}
            variant={currentMood === mood ? "default" : "outline"}
            size="sm"
            onClick={() => setCurrentMood(mood)}
            className="capitalize"
          >
            {mood}
          </Button>
        ))}
      </div>

      <div className="space-y-2">
        {currentRecommendations.map((track) => (
          <div
            key={track.id}
            className="flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors"
          >
            <div className="flex items-center space-x-3">
              <img
                src={track.coverArt || "/placeholder.svg"}
                alt={track.title}
                className="w-12 h-12 rounded object-cover"
              />
              <div>
                <h4 className="font-medium">{track.title}</h4>
                <p className="text-sm text-muted-foreground">{track.artist}</p>
                <div className="flex items-center mt-1 gap-2">
                  <Badge
                    variant="outline"
                    className="text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-500 px-2 py-0.5 rounded-full"
                  >
                    {track.mood}
                  </Badge>
                  <Badge variant="outline" className="text-xs px-2 py-0.5 rounded-full">
                    {track.language}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{track.duration}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => {
                  // Show a toast or alert that direct playback is not available
                  alert("For the best experience, please use the YouTube link or visit the Music Player tab.")
                }}
              >
                <Play className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" asChild>
                <a href={track.youtubeLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t">
        <h4 className="font-medium mb-2">How are these recommendations?</h4>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <ThumbsUp className="h-4 w-4" />
            <span>Helpful</span>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <ThumbsDown className="h-4 w-4" />
            <span>Not for me</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
