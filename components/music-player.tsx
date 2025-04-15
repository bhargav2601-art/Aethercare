"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, SkipBack, SkipForward, Volume2, Volume1, VolumeX, ExternalLink } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(70)
  const [activeTab, setActiveTab] = useState("embedded")
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [audioError, setAudioError] = useState(false)

  // Sample tracks with more reliable audio sources
  const tracks = [
    {
      title: "Calm Waters",
      artist: "Ambient Sounds",
      coverArt: "/placeholder.svg?height=80&width=80",
      duration: 180,
      // Using a reliable sample audio file format that's widely supported
      audioSrc: "https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3",
      youtubeLink: "https://www.youtube.com/watch?v=lFcSrYw-ARY",
    },
    {
      title: "Forest Meditation",
      artist: "Nature Sounds",
      coverArt: "/placeholder.svg?height=80&width=80",
      duration: 240,
      audioSrc: "https://assets.mixkit.co/music/preview/mixkit-spirit-of-the-forest-138.mp3",
      youtubeLink: "https://www.youtube.com/watch?v=qFZKK7K52uQ",
    },
  ]

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const currentTrack = tracks[currentTrackIndex]

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100
    }
  }, [volume])

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current

      const updateTime = () => {
        setCurrentTime(audio.currentTime)
      }

      const handleLoadedMetadata = () => {
        setDuration(audio.duration)
        setAudioError(false)
      }

      const handleEnded = () => {
        setIsPlaying(false)
        setCurrentTime(0)
      }

      const handleError = (e: Event) => {
        console.error("Audio error:", e)
        setAudioError(true)
        setIsPlaying(false)
      }

      audio.addEventListener("timeupdate", updateTime)
      audio.addEventListener("loadedmetadata", handleLoadedMetadata)
      audio.addEventListener("ended", handleEnded)
      audio.addEventListener("error", handleError)

      // Reset error state when changing tracks
      setAudioError(false)

      return () => {
        audio.removeEventListener("timeupdate", updateTime)
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata)
        audio.removeEventListener("ended", handleEnded)
        audio.removeEventListener("error", handleError)
      }
    }
  }, [currentTrackIndex])

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (audioError) {
        // If there was an error, try reloading the audio
        audioRef.current.load()
        setAudioError(false)
      }

      if (isPlaying) {
        audioRef.current.pause()
      } else {
        // Use a promise with catch to handle play errors
        const playPromise = audioRef.current.play()

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Playback started successfully
            })
            .catch((error) => {
              // Auto-play was prevented or another error occurred
              console.error("Play error:", error)
              setAudioError(true)
            })
        }
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleSkip = (direction: "next" | "prev") => {
    let newIndex = currentTrackIndex
    if (direction === "next") {
      newIndex = (currentTrackIndex + 1) % tracks.length
    } else {
      newIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length
    }

    setCurrentTrackIndex(newIndex)
    setCurrentTime(0)

    // If was playing, continue playing the new track
    if (isPlaying && audioRef.current) {
      // Need to wait for the new audio to load
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play()
        }
      }, 100)
    }
  }

  const handleVolumeChange = (newValue: number[]) => {
    setVolume(newValue[0])
  }

  const handleTimeChange = (newValue: number[]) => {
    const newTime = newValue[0]
    setCurrentTime(newTime)
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  const getVolumeIcon = () => {
    if (volume === 0) return <VolumeX className="h-4 w-4" />
    if (volume < 50) return <Volume1 className="h-4 w-4" />
    return <Volume2 className="h-4 w-4" />
  }

  return (
    <div className="space-y-4">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="embedded">Built-in Player</TabsTrigger>
          <TabsTrigger value="external">External Links</TabsTrigger>
        </TabsList>

        <TabsContent value="embedded" className="pt-4">
          <div className="flex items-center space-x-4">
            <img
              src={currentTrack.coverArt || "/placeholder.svg"}
              alt={currentTrack.title}
              className="w-20 h-20 rounded-md object-cover"
            />
            <div>
              <h3 className="font-medium">{currentTrack.title}</h3>
              <p className="text-sm text-muted-foreground">{currentTrack.artist}</p>
              <p className="text-xs text-muted-foreground mt-1">Recommended for: Calm, Relaxation</p>
            </div>
          </div>

          {audioError && (
            <div className="mt-4 p-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm rounded-md">
              Unable to play audio. Try using the external links instead or check your browser settings.
            </div>
          )}

          <audio ref={audioRef} src={currentTrack.audioSrc} preload="metadata" />

          <div className="space-y-2 mt-4">
            <Slider
              value={[currentTime]}
              max={duration || 100}
              step={1}
              onValueChange={handleTimeChange}
              className="cursor-pointer"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-4 mt-4">
            <Button variant="ghost" size="icon" className="rounded-full" onClick={() => handleSkip("prev")}>
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button
              onClick={handlePlayPause}
              variant="default"
              size="icon"
              className="rounded-full h-12 w-12 bg-indigo-500 hover:bg-indigo-600"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" onClick={() => handleSkip("next")}>
              <SkipForward className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center space-x-2 mt-4">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              {getVolumeIcon()}
            </Button>
            <Slider value={[volume]} max={100} step={1} onValueChange={handleVolumeChange} className="w-24" />
          </div>

          <p className="text-xs text-center text-muted-foreground mt-4">
            {audioError
              ? "Audio playback failed. Please try the external links tab for alternative options."
              : "Sample audio provided for demonstration purposes"}
          </p>
        </TabsContent>

        <TabsContent value="external" className="pt-4">
          <div className="space-y-4">
            <p className="text-sm">Listen to your recommended tracks on your preferred music platform:</p>

            {tracks.map((track, index) => (
              <Card key={index} className="p-4 flex justify-between items-center">
                <div>
                  <h4 className="font-medium">{track.title}</h4>
                  <p className="text-sm text-muted-foreground">{track.artist}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={track.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      YouTube
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" className="flex items-center gap-1">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                      </svg>
                      Spotify
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" className="flex items-center gap-1">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.15-.04-.003-.083-.01-.124-.013H5.988c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.04 1.88.475 3.208c-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.802.42.127.856.187 1.293.228.405.038.813.05 1.22.05.016 0 .033.004.05.004h11.396c.25-.004.497-.033.746-.082.824-.16 1.58-.54 2.207-1.15.818-.802 1.278-1.813 1.413-2.932.036-.3.05-.604.056-.906.013-.486.014-.975.014-1.463V6.124zm-2.882 9.56c-.005.3-.015.597-.04.892-.073.822-.367 1.554-.906 2.178-.36.416-.795.738-1.3.938-.35.138-.72.208-1.1.23-.51.03-1.02.023-1.53.023H7.754c-.233 0-.47-.01-.7-.04-.44-.05-.876-.148-1.277-.353-.906-.466-1.45-1.185-1.62-2.163-.044-.248-.076-.494-.1-.746-.018-.19-.028-.383-.03-.575V7.98c.013-.276.04-.55.083-.823.126-.75.44-1.4.97-1.954.334-.35.73-.625 1.174-.815.292-.125.6-.205.915-.24.177-.02.355-.035.532-.04.053-.002.107-.006.16-.006h12.66c.09 0 .18.01.27.02.38.04.76.11 1.127.246 1.003.375 1.647 1.08 1.828 2.133.057.328.077.66.087.992v7.16c-.01.21-.022.42-.04.63z" />
                      </svg>
                      Apple Music
                    </a>
                  </Button>
                </div>
              </Card>
            ))}

            <div className="mt-4 text-center">
              <Button variant="outline" asChild>
                <a
                  href="https://www.youtube.com/results?search_query=relaxing+meditation+music"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Browse More Relaxing Music
                </a>
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
