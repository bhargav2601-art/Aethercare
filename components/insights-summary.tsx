import { Card, CardContent } from "@/components/ui/card"
import { ArrowUp, ArrowDown, Smile, Frown, AlertCircle } from "lucide-react"

export default function InsightsSummary() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardContent className="pt-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Overall Mood</p>
              <div className="flex items-center">
                <h3 className="text-2xl font-bold mr-2">72%</h3>
                <div className="flex items-center text-green-500">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  <span className="text-xs">15%</span>
                </div>
              </div>
            </div>
            <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
              <Smile className="h-5 w-5 text-green-500" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Your overall mood has improved compared to last month</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Anxiety Levels</p>
              <div className="flex items-center">
                <h3 className="text-2xl font-bold mr-2">23%</h3>
                <div className="flex items-center text-green-500">
                  <ArrowDown className="h-4 w-4 mr-1" />
                  <span className="text-xs">8%</span>
                </div>
              </div>
            </div>
            <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-full">
              <AlertCircle className="h-5 w-5 text-yellow-500" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Your anxiety levels have decreased in the past two weeks</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Negative Emotions</p>
              <div className="flex items-center">
                <h3 className="text-2xl font-bold mr-2">18%</h3>
                <div className="flex items-center text-red-500">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  <span className="text-xs">5%</span>
                </div>
              </div>
            </div>
            <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full">
              <Frown className="h-5 w-5 text-red-500" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Slight increase in sadness on weekends - consider more social activities
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
