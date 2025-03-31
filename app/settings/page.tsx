import { Bell, ChevronRight, Cloud, CreditCard, Globe, HelpCircle, Lock, Moon, Shield, User } from "lucide-react"
import Link from "next/link"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import BottomNavigation from "@/components/bottom-navigation"

export default function SettingsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center px-4">
          <h1 className="text-xl font-semibold">Settings</h1>
        </div>
      </header>

      <main className="flex-1 p-4 pb-20">
        <Card className="mb-6">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-base">Account</CardTitle>
            <CardDescription>Manage your account settings</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Link href="#" className="flex items-center justify-between p-4 hover:bg-accent/50 transition-colors">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Profile</p>
                  <p className="text-sm text-muted-foreground">Update your personal information</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-between p-4 hover:bg-accent/50 transition-colors border-t"
            >
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Billing</p>
                  <p className="text-sm text-muted-foreground">Manage billing and payment methods</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-between p-4 hover:bg-accent/50 transition-colors border-t"
            >
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Security</p>
                  <p className="text-sm text-muted-foreground">Update password and security settings</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Link>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-base">Preferences</CardTitle>
            <CardDescription>Customize your experience</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="flex items-center justify-between p-4 hover:bg-accent/50 transition-colors">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive alerts and updates</p>
                </div>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between p-4 hover:bg-accent/50 transition-colors border-t">
              <div className="flex items-center gap-3">
                <Moon className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Dark Mode</p>
                  <p className="text-sm text-muted-foreground">Switch between light and dark themes</p>
                </div>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between p-4 hover:bg-accent/50 transition-colors border-t">
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Language</p>
                  <p className="text-sm text-muted-foreground">Change display language</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-base">Cloud Settings</CardTitle>
            <CardDescription>Manage your cloud resources</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Link href="#" className="flex items-center justify-between p-4 hover:bg-accent/50 transition-colors">
              <div className="flex items-center gap-3">
                <Cloud className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Providers</p>
                  <p className="text-sm text-muted-foreground">Manage cloud service providers</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-between p-4 hover:bg-accent/50 transition-colors border-t"
            >
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Security Policies</p>
                  <p className="text-sm text-muted-foreground">Configure security settings</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-base">Support</CardTitle>
            <CardDescription>Get help and information</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Link href="#" className="flex items-center justify-between p-4 hover:bg-accent/50 transition-colors">
              <div className="flex items-center gap-3">
                <HelpCircle className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Help Center</p>
                  <p className="text-sm text-muted-foreground">View documentation and guides</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Link>
            <div className="p-4 border-t">
              <p className="text-sm text-muted-foreground">Version 1.0.0</p>
            </div>
          </CardContent>
        </Card>
      </main>

      <BottomNavigation />
    </div>
  )
}

