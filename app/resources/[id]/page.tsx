import { ArrowLeft, Clock, CloudRain, Cpu, Database, HardDrive, RefreshCw, Server, Settings } from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BottomNavigation from "@/components/bottom-navigation"

export default function ResourceDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the resource data based on the ID
  const resource = resources.find((r) => r.id === params.id) || resources[0]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center px-4">
          <Link href="/resources" className="mr-2">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-xl font-semibold">{resource.name}</h1>
          <div className="ml-auto">
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 pb-20">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-muted-foreground">{resource.id}</p>
            <div className="flex items-center gap-2 mt-1">
              <Badge
                variant={
                  resource.status === "Running" ? "success" : resource.status === "Warning" ? "warning" : "destructive"
                }
              >
                {resource.status}
              </Badge>
              <span className="text-sm text-muted-foreground">{resource.type}</span>
            </div>
          </div>
          <Button size="sm" variant="outline" className="gap-1">
            <RefreshCw className="h-3.5 w-3.5" />
            Refresh
          </Button>
        </div>

        <Card className="mb-4">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-base">Resource Overview</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Region</p>
                <p className="font-medium">{resource.region}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Created</p>
                <p className="font-medium">{resource.created}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Cost</p>
                <p className="font-medium">${resource.cost}/mo</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Uptime</p>
                <p className="font-medium">99.8%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="metrics" className="mb-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="metrics">Metrics</TabsTrigger>
            <TabsTrigger value="logs">Logs</TabsTrigger>
            <TabsTrigger value="config">Config</TabsTrigger>
          </TabsList>
          <TabsContent value="metrics" className="space-y-4 mt-4">
            <Card>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-base">CPU Usage</CardTitle>
                <CardDescription>Last 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="h-[120px] flex items-end gap-1">
                  {cpuData.map((value, i) => (
                    <div key={i} className="bg-primary/80 w-full rounded-sm" style={{ height: `${value}%` }}></div>
                  ))}
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Current</span>
                    <span>42%</span>
                  </div>
                  <Progress value={42} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span>Average</span>
                    <span>38%</span>
                  </div>
                  <Progress value={38} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span>Peak</span>
                    <span>78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-base">Memory Usage</CardTitle>
                <CardDescription>Last 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="h-[120px] flex items-end gap-1">
                  {memoryData.map((value, i) => (
                    <div key={i} className="bg-primary/80 w-full rounded-sm" style={{ height: `${value}%` }}></div>
                  ))}
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Current</span>
                    <span>2.4 GB (60%)</span>
                  </div>
                  <Progress value={60} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span>Total</span>
                    <span>4.0 GB</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="logs" className="mt-4">
            <Card>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-base">System Logs</CardTitle>
                <CardDescription>Recent events</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-3 text-sm">
                  {logs.map((log, i) => (
                    <div key={i} className="border-b pb-2 last:border-0 last:pb-0">
                      <div className="flex items-center gap-2">
                        {log.type === "info" && <Clock className="h-4 w-4 text-blue-500" />}
                        {log.type === "warning" && <CloudRain className="h-4 w-4 text-amber-500" />}
                        {log.type === "error" && <Server className="h-4 w-4 text-red-500" />}
                        <span className="font-medium">{log.message}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{log.timestamp}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="config" className="mt-4">
            <Card>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-base">Configuration</CardTitle>
                <CardDescription>Resource settings</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">CPU</p>
                        <p className="text-xs text-muted-foreground">2 vCPU</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <HardDrive className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Memory</p>
                        <p className="text-xs text-muted-foreground">4 GB RAM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Database className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Storage</p>
                        <p className="text-xs text-muted-foreground">100 GB SSD</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Server className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Instance Type</p>
                        <p className="text-xs text-muted-foreground">t3.medium</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="text-sm font-medium mb-2">Network</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">VPC</span>
                        <span>vpc-12345</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subnet</span>
                        <span>subnet-67890</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Security Group</span>
                        <span>sg-abcdef</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Public IP</span>
                        <span>54.123.45.67</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
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

const cpuData = [25, 30, 45, 35, 55, 40, 60, 35, 15, 25, 30, 45, 35, 55, 40, 60, 35, 15, 25, 30, 45, 35, 55, 40]
const memoryData = [40, 42, 45, 50, 55, 58, 62, 60, 58, 55, 60, 62, 65, 62, 60, 58, 55, 50, 48, 50, 52, 55, 58, 60]

const logs = [
  {
    type: "info",
    message: "System started successfully",
    timestamp: "Today, 10:24 AM",
  },
  {
    type: "info",
    message: "Backup completed",
    timestamp: "Today, 09:15 AM",
  },
  {
    type: "warning",
    message: "High memory usage detected",
    timestamp: "Today, 08:32 AM",
  },
  {
    type: "info",
    message: "Security updates installed",
    timestamp: "Today, 07:45 AM",
  },
  {
    type: "error",
    message: "Connection timeout",
    timestamp: "Yesterday, 11:52 PM",
  },
  {
    type: "info",
    message: "System maintenance completed",
    timestamp: "Yesterday, 10:30 PM",
  },
]

