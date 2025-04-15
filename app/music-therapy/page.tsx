import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import MusicPlayer from "@/components/music-player"
import MusicRecommendations from "@/components/music-recommendations"
import MoodSelector from "@/components/mood-selector"
import MusicPreferences from "@/components/music-preferences"
import { Music, Sparkles } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MusicTherapyPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Music Therapy</h1>
          <p className="text-muted-foreground">Personalized music recommendations based on your emotional state</p>
        </div>

        <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 border-none">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="h-5 w-5 text-indigo-500" />
              <h3 className="font-semibold text-lg">How Music Therapy Works</h3>
            </div>
            <p className="mb-4">
              Our AI analyzes your emotional state and suggests music that can help balance your mood. Whether you need
              calming sounds to reduce anxiety or uplifting tunes to boost your energy, we'll find the perfect
              soundtrack for your current state of mind.
            </p>
            <p className="text-sm text-muted-foreground">
              Note: For the best experience, we recommend using the YouTube links provided with each recommendation.
            </p>
          </CardContent>
        </Card>

        <Tabs defaultValue="player">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            <TabsTrigger value="player">Music Player</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>

          <TabsContent value="recommendations">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Music className="h-5 w-5 text-indigo-500" />
                    Current Mood
                  </CardTitle>
                  <CardDescription>
                    Select your current mood or let us detect it from your recent interactions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <MoodSelector />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommendations</CardTitle>
                  <CardDescription>Personalized music suggestions based on your mood</CardDescription>
                </CardHeader>
                <CardContent>
                  <MusicRecommendations />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="player">
            <Card>
              <CardHeader>
                <CardTitle>Now Playing</CardTitle>
                <CardDescription>Music tailored to your emotional needs</CardDescription>
              </CardHeader>
              <CardContent>
                <MusicPlayer />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences">
            <Card>
              <CardHeader>
                <CardTitle>Music Preferences</CardTitle>
                <CardDescription>Customize your music therapy experience</CardDescription>
              </CardHeader>
              <CardContent>
                <MusicPreferences />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
