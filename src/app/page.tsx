import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  AlertTriangle,
  Youtube,
  Instagram,
  Music2,
  BarChart3,
  UserPlus,
  Mail,
  CreditCard,
  Settings,
  Bot,
  Target,
  Zap
} from 'lucide-react'

// Mock data for demo - in real app this comes from database
const dashboardData = {
  metrics: {
    totalAffiliates: 1247,
    activeAffiliates: 892,
    mtdCommissions: 847392,
    paymentSuccessRate: 89,
    newApplications: 23
  },
  topPerformers: [
    {
      id: 1,
      name: "Sarah Wellness",
      handle: "@sarahwellness",
      platform: "youtube",
      subscribers: 890000,
      revenue: 23450,
      commission: 4690,
      status: "trending",
      avgViews: 245000
    },
    {
      id: 2,
      name: "Recovery King",
      handle: "@recoveryking",
      platform: "instagram", 
      followers: 340000,
      revenue: 18920,
      commission: 3784,
      status: "consistent"
    },
    {
      id: 3,
      name: "Fitness Tech",
      handle: "@fitnesstech",
      platform: "youtube",
      subscribers: 450000,
      revenue: 15680,
      commission: 3136,
      status: "growing",
      avgViews: 180000
    },
    {
      id: 4,
      name: "TikTok Fit",
      handle: "@tiktokfit",
      platform: "tiktok",
      followers: 2100000,
      revenue: 12340,
      commission: 2468,
      status: "declining"
    }
  ],
  aiInsights: [
    {
      type: "opportunity",
      title: "@mikefitpro: High engagement rate (8.2%), send today",
      severity: "high"
    },
    {
      type: "recommendation", 
      title: "@yogamama: Posted about recovery - mention collab",
      severity: "medium"
    },
    {
      type: "alert",
      title: "3 dormant accounts need reactivation",
      severity: "warning"
    }
  ],
  prospects: [
    {
      id: 1,
      name: "Fitness Tech",
      handle: "@fitnesstech_yt",
      platform: "youtube",
      subscribers: 450000,
      avgViews: 2300000,
      niche: "Tech Reviews",
      engagementRate: 6.8,
      status: "prospect"
    },
    {
      id: 2, 
      name: "TikTok Fit",
      handle: "@tiktokfit",
      platform: "tiktok",
      followers: 2100000,
      avgViews: 850000,
      niche: "Gen Z Fitness",
      engagementRate: 12.4,
      status: "prospect"
    },
    {
      id: 3,
      name: "Wellness TV",
      handle: "@wellnesstv",
      platform: "youtube", 
      subscribers: 1200000,
      avgViews: 680000,
      niche: "Health/Longevity",
      engagementRate: 4.2,
      status: "contacted"
    }
  ]
}

export default function Dashboard() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount)
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toString()
  }

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'youtube': return <Youtube className="h-4 w-4 text-red-600" />
      case 'instagram': return <Instagram className="h-4 w-4 text-pink-600" />
      case 'tiktok': return <Music2 className="h-4 w-4 text-black" />
      default: return <Users className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'trending': return 'bg-red-100 text-red-800'
      case 'growing': return 'bg-green-100 text-green-800'
      case 'consistent': return 'bg-blue-100 text-blue-800'
      case 'declining': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Body Restore Affiliate Command Center</h1>
            <p className="text-slate-600">Enterprise-grade influencer partnership management</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <UserPlus className="h-4 w-4 mr-2" />
              Add Affiliate
            </Button>
            <Button variant="outline" size="sm">
              <Mail className="h-4 w-4 mr-2" />
              Bulk Email
            </Button>
            <Button variant="outline" size="sm">
              <CreditCard className="h-4 w-4 mr-2" />
              Process Payouts
            </Button>
            <Button size="sm">
              <Bot className="h-4 w-4 mr-2" />
              AI Analyze
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Users className="h-4 w-4" />
                Active Affiliates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardData.metrics.activeAffiliates.toLocaleString()}</div>
              <p className="text-xs text-slate-500">
                of {dashboardData.metrics.totalAffiliates.toLocaleString()} total
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                MTD Commissions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(dashboardData.metrics.mtdCommissions)}</div>
              <div className="flex items-center gap-1 text-xs text-green-600">
                <TrendingUp className="h-3 w-3" />
                +18% vs last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Target className="h-4 w-4" />
                Payment Success
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardData.metrics.paymentSuccessRate}%</div>
              <p className="text-xs text-slate-500">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Zap className="h-4 w-4" />
                New Applications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardData.metrics.newApplications}</div>
              <p className="text-xs text-slate-500">Today</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Bot className="h-4 w-4" />
                AI Agent Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold text-green-600">Active</div>
              <p className="text-xs text-slate-500">Processing 47 prospects</p>
            </CardContent>
          </Card>
        </div>

        {/* AI Insights Banner */}
        <Card className="mb-6 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Bot className="h-5 w-5 text-blue-600" />
              AI Insights & Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {dashboardData.aiInsights.map((insight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    insight.severity === 'high' ? 'bg-red-500' :
                    insight.severity === 'medium' ? 'bg-yellow-500' : 'bg-orange-500'
                  }`} />
                  <div>
                    <p className="font-medium text-sm">{insight.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="pipeline" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="pipeline">Multi-Platform Pipeline</TabsTrigger>
            <TabsTrigger value="performance">Performance Analytics</TabsTrigger>
            <TabsTrigger value="outreach">AI Outreach</TabsTrigger>
            <TabsTrigger value="insights">Revenue Intelligence</TabsTrigger>
          </TabsList>

          <TabsContent value="pipeline" className="space-y-6">
            {/* Affiliate Pipeline */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Prospects</CardTitle>
                  <CardDescription>247 leads identified</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {dashboardData.prospects.filter(p => p.status === 'prospect').map(prospect => (
                      <div key={prospect.id} className="border rounded-lg p-3 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {getPlatformIcon(prospect.platform)}
                            <span className="font-medium text-sm">{prospect.handle}</span>
                          </div>
                        </div>
                        <div className="text-xs space-y-1">
                          <div className="flex justify-between">
                            <span>
                              {prospect.platform === 'youtube' ? 'Subscribers:' : 'Followers:'}
                            </span>
                            <span className="font-medium">{formatNumber(prospect.subscribers || prospect.followers || 0)}</span>
                          </div>
                          {prospect.avgViews && (
                            <div className="flex justify-between">
                              <span>Avg Views:</span>
                              <span className="font-medium">{formatNumber(prospect.avgViews)}</span>
                            </div>
                          )}
                          <div className="flex justify-between">
                            <span>Engagement:</span>
                            <span className="font-medium">{prospect.engagementRate}%</span>
                          </div>
                          <div className="pt-1">
                            <Badge variant="secondary" className="text-xs">
                              {prospect.niche}
                            </Badge>
                          </div>
                        </div>
                        <Button size="sm" className="w-full">
                          <Bot className="h-3 w-3 mr-1" />
                          AI Contact
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contacted</CardTitle>
                  <CardDescription>73 pending responses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {dashboardData.prospects.filter(p => p.status === 'contacted').map(prospect => (
                      <div key={prospect.id} className="border rounded-lg p-3 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {getPlatformIcon(prospect.platform)}
                            <span className="font-medium text-sm">{prospect.handle}</span>
                          </div>
                        </div>
                        <div className="text-xs space-y-1">
                          <div className="flex justify-between">
                            <span>
                              {prospect.platform === 'youtube' ? 'Subscribers:' : 'Followers:'}
                            </span>
                            <span className="font-medium">{formatNumber(prospect.subscribers || prospect.followers || 0)}</span>
                          </div>
                          <div className="pt-1">
                            <Badge variant="secondary" className="text-xs">
                              {prospect.niche}
                            </Badge>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="w-full">
                          Follow Up
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Onboarding</CardTitle>
                  <CardDescription>34 in training</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <Users className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-sm text-gray-600">Completing onboarding process</p>
                    <Button size="sm" variant="outline" className="mt-3">
                      View All
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Active</CardTitle>
                  <CardDescription>156 generating revenue</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {dashboardData.topPerformers.slice(0, 2).map(performer => (
                      <div key={performer.id} className="border rounded-lg p-3 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {getPlatformIcon(performer.platform)}
                            <span className="font-medium text-sm">{performer.handle}</span>
                          </div>
                          <Badge className={getStatusColor(performer.status)}>
                            {performer.status}
                          </Badge>
                        </div>
                        <div className="text-xs space-y-1">
                          <div className="flex justify-between">
                            <span>Revenue:</span>
                            <span className="font-medium">{formatCurrency(performer.revenue)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Commission:</span>
                            <span className="font-medium">{formatCurrency(performer.commission)}</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="w-full">
                          <BarChart3 className="h-3 w-3 mr-1" />
                          Analytics
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            {/* Top Performers Table */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Multi-Platform Performance Leaders</CardTitle>
                <CardDescription>
                  Cross-platform revenue analytics with YouTube, Instagram, and TikTok metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Affiliate</th>
                        <th className="text-left py-3 px-4">Platform</th>
                        <th className="text-left py-3 px-4">Audience</th>
                        <th className="text-left py-3 px-4">Revenue</th>
                        <th className="text-left py-3 px-4">Commission</th>
                        <th className="text-left py-3 px-4">Status</th>
                        <th className="text-left py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dashboardData.topPerformers.map((performer) => (
                        <tr key={performer.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <div>
                              <div className="font-medium">{performer.name}</div>
                              <div className="text-sm text-gray-500">{performer.handle}</div>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              {getPlatformIcon(performer.platform)}
                              <span className="capitalize">{performer.platform}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="text-sm">
                              <div>{formatNumber(performer.subscribers || performer.followers || 0)} 
                                {performer.platform === 'youtube' ? ' subs' : ' followers'}
                              </div>
                              {performer.avgViews && (
                                <div className="text-gray-500">
                                  {formatNumber(performer.avgViews)} avg views
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="py-3 px-4 font-medium">
                            {formatCurrency(performer.revenue)}
                          </td>
                          <td className="py-3 px-4 font-medium">
                            {formatCurrency(performer.commission)}
                          </td>
                          <td className="py-3 px-4">
                            <Badge className={getStatusColor(performer.status)}>
                              {performer.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <BarChart3 className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Mail className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="outreach">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">AI-Powered Multi-Platform Outreach</CardTitle>
                <CardDescription>
                  Personalized messaging for YouTube, Instagram, and TikTok influencers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Bot className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">AI Outreach Engine</h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Our AI analyzes each influencer's content, audience, and engagement patterns to craft 
                    personalized outreach messages across all platforms.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto text-sm">
                    <div className="p-4 border rounded-lg">
                      <Youtube className="h-6 w-6 text-red-600 mx-auto mb-2" />
                      <p className="font-medium">YouTube Strategy</p>
                      <p className="text-gray-600">Educational content focus, 32% higher LTV</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <Music2 className="h-6 w-6 text-black mx-auto mb-2" />
                      <p className="font-medium">TikTok Approach</p>
                      <p className="text-gray-600">Viral potential, 67% mobile conversions</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <Instagram className="h-6 w-6 text-pink-600 mx-auto mb-2" />
                      <p className="font-medium">Instagram Targeting</p>
                      <p className="text-gray-600">Lifestyle integration, consistent ROI</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Revenue Intelligence Dashboard</CardTitle>
                <CardDescription>
                  Advanced analytics and AI-driven insights for affiliate program optimization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BarChart3 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Advanced Analytics</h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Track cross-platform performance, predict trends, and optimize your affiliate 
                    strategy with machine learning insights.
                  </p>
                  <Button size="lg">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    View Full Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}