import { ArrowUpDown, Search } from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import BottomNavigation from "@/components/bottom-navigation"

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center px-4">
          <h1 className="text-xl font-semibold">Resources</h1>
        </div>
      </header>

      <main className="flex-1 p-4 pb-20">
        <div className="flex items-center space-x-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search resources..." className="pl-8" />
          </div>
          <Button variant="outline" size="icon">
            <ArrowUpDown className="h-4 w-4" />
            <span className="sr-only">Sort resources</span>
          </Button>
        </div>

        <div className="space-y-4">
          {resources.map((resource) => (
            <Link href={`/resources/${resource.id}`} key={resource.id}>
              <Card className="hover:bg-accent/50 transition-colors">
                <CardHeader className="p-4 pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-base">{resource.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{resource.id}</p>
                    </div>
                    <Badge
                      variant={
                        resource.status === "Running"
                          ? "success"
                          : resource.status === "Warning"
                            ? "warning"
                            : "destructive"
                      }
                    >
                      {resource.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Type</p>
                      <p>{resource.type}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Region</p>
                      <p>{resource.region}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Created</p>
                      <p>{resource.created}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Cost</p>
                      <p>${resource.cost}/mo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>

      <BottomNavigation />
    </div>
  )
}

const resources = [
  {
    id: "web-server-prod-01",
    name: "Web Server",
    type: "EC2 Instance",
    region: "us-east-1",
    status: "Running",
    created: "2023-10-15",
    cost: "29.99",
  },
  {
    id: "postgres-main-db",
    name: "Database",
    type: "RDS PostgreSQL",
    region: "us-east-1",
    status: "Running",
    created: "2023-09-22",
    cost: "59.99",
  },
  {
    id: "s3-media-bucket",
    name: "Storage",
    type: "S3 Bucket",
    region: "us-west-2",
    status: "Running",
    created: "2023-08-05",
    cost: "12.50",
  },
  {
    id: "redis-cache-01",
    name: "Cache Server",
    type: "ElastiCache",
    region: "eu-west-1",
    status: "Warning",
    created: "2023-11-01",
    cost: "18.75",
  },
  {
    id: "lambda-image-processor",
    name: "Image Processor",
    type: "Lambda Function",
    region: "us-east-2",
    status: "Running",
    created: "2023-10-10",
    cost: "5.20",
  },
  {
    id: "cdn-distribution",
    name: "CDN",
    type: "CloudFront",
    region: "Global",
    status: "Running",
    created: "2023-07-18",
    cost: "42.30",
  },
  {
    id: "backup-server-01",
    name: "Backup Server",
    type: "EC2 Instance",
    region: "eu-central-1",
    status: "Stopped",
    created: "2023-09-05",
    cost: "0.00",
  },
]

