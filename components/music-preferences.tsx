"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Check, Globe } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function MusicPreferences() {
  const [musicSource, setMusicSource] = useState("youtube")
  const [languages, setLanguages] = useState<string[]>(["english"])
  const [instrumentalOnly, setInstrumentalOnly] = useState(false)
  const [tempo, setTempo] = useState([70])
  const { toast } = useToast()

  const handleLanguageToggle = (language: string) => {
    if (languages.includes(language)) {
      setLanguages(languages.filter((l) => l !== language))
    } else {
      setLanguages([...languages, language])
    }
  }

  const handleSave = () => {
    toast({
      title: "Preferences saved",
      description: "Your music preferences have been updated.",
    })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="text-lg font-medium">Music Source</h3>
        <RadioGroup value={musicSource} onValueChange={setMusicSource}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="youtube" id="youtube" />
            <Label htmlFor="youtube">YouTube</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="spotify" id="spotify" />
            <Label htmlFor="spotify">Spotify</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="apple" id="apple" />
            <Label htmlFor="apple">Apple Music</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="built-in" id="built-in" />
            <Label htmlFor="built-in">Built-in Player (Limited Selection)</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">Language Preferences</h3>
          <Globe className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {["english", "spanish", "french", "japanese", "korean", "hindi", "instrumental"].map((language) => (
            <Button
              key={language}
              variant="outline"
              className={`justify-start ${languages.includes(language) ? "bg-indigo-50 border-indigo-200 dark:bg-indigo-950/20 dark:border-indigo-800" : ""}`}
              onClick={() => handleLanguageToggle(language)}
            >
              {languages.includes(language) && <Check className="mr-2 h-4 w-4 text-indigo-500" />}
              <span className={languages.includes(language) ? "text-indigo-700 dark:text-indigo-300" : ""}>
                {language.charAt(0).toUpperCase() + language.slice(1)}
              </span>
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-medium">Tempo Preference</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Slower/Calming</span>
            <span>Faster/Energetic</span>
          </div>
          <Slider value={tempo} max={140} min={40} step={5} onValueChange={setTempo} />
          <div className="text-center text-sm">
            <span className="font-medium">{tempo} BPM</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-medium">Additional Options</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="instrumental">Instrumental Only</Label>
              <p className="text-sm text-muted-foreground">Prefer music without lyrics</p>
            </div>
            <Switch id="instrumental" checked={instrumentalOnly} onCheckedChange={setInstrumentalOnly} />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="autoplay">Autoplay</Label>
              <p className="text-sm text-muted-foreground">Automatically play next recommendation</p>
            </div>
            <Switch id="autoplay" defaultChecked />
          </div>
        </div>
      </div>

      <div className="pt-4 border-t">
        <Button onClick={handleSave} className="w-full">
          Save Preferences
        </Button>
      </div>
    </div>
  )
}
