import { CloudIcon } from "lucide-react"
import Link from "next/link"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import BottomNavigation from "@/components/bottom-navigation"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center px-4">
          <div className="flex items-center gap-2">
            <CloudIcon className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-semibold">CloudManager</h1>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 pb-20">
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Overview</h2>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader className="p-3">
                <CardTitle className="text-sm">Resources</CardTitle>
              </CardHeader>
              <CardContent className="p-3 pt-0">
                <p className="text-2xl font-bold">24</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="p-3">
                <CardTitle className="text-sm">Uptime</CardTitle>
              </CardHeader>
              <CardContent className="p-3 pt-0">
                <p className="text-2xl font-bold">99.8%</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="p-3">
                <CardTitle className="text-sm">CPU Usage</CardTitle>
              </CardHeader>
              <CardContent className="p-3 pt-0">
                <p className="text-2xl font-bold">42%</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="p-3">
                <CardTitle className="text-sm">Memory</CardTitle>
              </CardHeader>
              <CardContent className="p-3 pt-0">
                <p className="text-2xl font-bold">6.2GB</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Active Resources</h2>
          <div className="space-y-4">
            <Link href="/resources/1">
              <Card className="hover:bg-accent/50 transition-colors">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-base">Web Server</CardTitle>
                  <CardDescription>web-server-prod-01</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>CPU</span>
                      <span>65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span>Memory</span>
                      <span>42%</span>
                    </div>
                    <Progress value={42} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/resources/2">
              <Card className="hover:bg-accent/50 transition-colors">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-base">Database</CardTitle>
                  <CardDescription>postgres-main-db</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>CPU</span>
                      <span>28%</span>
                    </div>
                    <Progress value={28} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span>Memory</span>
                      <span>76%</span>
                    </div>
                    <Progress value={76} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/resources/3">
              <Card className="hover:bg-accent/50 transition-colors">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-base">Storage</CardTitle>
                  <CardDescription>s3-media-bucket</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Usage</span>
                      <span>54%</span>
                    </div>
                    <Progress value={54} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span>Requests</span>
                      <span>1.2k/min</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>
      </main>

      <BottomNavigation />
    </div>
  )
}

