import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, PlayCircle, FileText, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LearningResources() {
  const resources = [
    {
      title: "Investment Basics",
      description: "Learn the fundamentals of investing",
      type: "Course",
      duration: "2 hours",
      icon: BookOpen,
    },
    {
      title: "Market Analysis",
      description: "Understanding technical and fundamental analysis",
      type: "Video Series",
      duration: "1.5 hours",
      icon: PlayCircle,
    },
    {
      title: "Risk Management",
      description: "Essential strategies for protecting your portfolio",
      type: "Guide",
      duration: "30 min read",
      icon: FileText,
    },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Learning Resources</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {resources.map((resource) => {
          const Icon = resource.icon
          return (
            <Card key={resource.title}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5" />
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </div>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{resource.type}</span>
                    <span>{resource.duration}</span>
                  </div>
                  <Button variant="ghost" className="w-full justify-between">
                    Start Learning <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
