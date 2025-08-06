import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { ResearchCard } from "@/components/research/research-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  BookOpen, 
  Edit, 
  Users, 
  Eye, 
  Download, 
  Calendar,
  MapPin,
  Mail,
  GraduationCap,
  Star,
  MessageCircle
} from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Dr. Adebayo Johnson",
    title: "Senior Lecturer",
    institution: "University of Lagos",
    department: "Computer Science Department",
    email: "adebayo.johnson@unilag.edu.ng",
    bio: "Dr. Adebayo Johnson is a passionate researcher in artificial intelligence and machine learning with over 10 years of experience in academia. His work focuses on applying AI solutions to solve real-world problems in Nigerian agriculture and healthcare systems.",
    researchInterests: ["Artificial Intelligence", "Machine Learning", "Data Science", "Agricultural Technology", "Healthcare Systems"],
    location: "Lagos, Nigeria",
    joinDate: "March 2019"
  });

  // Mock data for user's research
  const userResearch = [
    {
      id: "1",
      title: "Machine Learning Applications in Nigerian Agriculture: A Comprehensive Study",
      abstract: "This research explores the implementation of machine learning algorithms to optimize crop yield prediction and pest detection in Nigerian agricultural systems.",
      authors: ["Dr. Adebayo Johnson", "Prof. Funmilayo Adebisi"],
      institution: "University of Lagos",
      publishDate: "2024-03-15",
      keywords: ["Machine Learning", "Agriculture", "Nigeria", "Crop Yield"],
      downloadCount: 245,
      viewCount: 892,
      fileType: "PDF"
    },
    {
      id: "2",
      title: "AI-Powered Healthcare Diagnostics for Rural Communities",
      abstract: "Developing accessible AI diagnostic tools for healthcare providers in rural Nigerian communities with limited resources.",
      authors: ["Dr. Adebayo Johnson", "Dr. Grace Okolie", "Dr. Michael Adamu"],
      institution: "University of Lagos",
      publishDate: "2023-11-20",
      keywords: ["AI", "Healthcare", "Diagnostics", "Rural Healthcare"],
      downloadCount: 189,
      viewCount: 567,
      fileType: "PDF"
    }
  ];

  const stats = [
    { icon: BookOpen, label: "Publications", value: "12" },
    { icon: Eye, label: "Total Views", value: "2.4K" },
    { icon: Download, label: "Downloads", value: "891" },
    { icon: Star, label: "Citations", value: "67" }
  ];

  const collaborators = [
    { name: "Prof. Funmilayo Adebisi", institution: "University of Lagos", avatar: "FA" },
    { name: "Dr. Grace Okolie", institution: "Ahmadu Bello University", avatar: "GO" },
    { name: "Dr. Michael Adamu", institution: "University of Ibadan", avatar: "MA" },
    { name: "Dr. Chika Okonkwo", institution: "University of Nigeria", avatar: "CO" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation isAuthenticated={true} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <Card className="shadow-elegant mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                  {profile.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold">{profile.name}</h1>
                    <p className="text-xl text-muted-foreground">{profile.title}</p>
                  </div>
                  <Button 
                    onClick={() => setIsEditing(!isEditing)}
                    variant="outline"
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    {isEditing ? "Cancel" : "Edit Profile"}
                  </Button>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <GraduationCap className="h-4 w-4" />
                    <span>{profile.institution}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{profile.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Joined {profile.joinDate}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Mail className="h-4 w-4" />
                    <span>{profile.email}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground max-w-3xl">
                  {profile.bio}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {profile.researchInterests.map((interest) => (
                    <Badge key={interest} variant="secondary">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label} className="shadow-card hover:shadow-elegant transition-smooth">
              <CardContent className="pt-6 text-center">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="research" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="research">My Research</TabsTrigger>
            <TabsTrigger value="collaborators">Collaborators</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Research Tab */}
          <TabsContent value="research" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">My Publications</h2>
              <Button>
                <BookOpen className="h-4 w-4 mr-2" />
                Upload New Research
              </Button>
            </div>
            
            <div className="space-y-6">
              {userResearch.map((research) => (
                <ResearchCard key={research.id} {...research} />
              ))}
            </div>
          </TabsContent>

          {/* Collaborators Tab */}
          <TabsContent value="collaborators" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Research Collaborators</h2>
              <Button>
                <Users className="h-4 w-4 mr-2" />
                Find New Collaborators
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {collaborators.map((collaborator) => (
                <Card key={collaborator.name} className="shadow-card hover:shadow-elegant transition-smooth">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {collaborator.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold">{collaborator.name}</h3>
                        <p className="text-sm text-muted-foreground">{collaborator.institution}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity" className="space-y-6">
            <h2 className="text-2xl font-bold">Recent Activity</h2>
            
            <Card className="shadow-card">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {[
                    { action: "Published new research", item: "Machine Learning Applications in Nigerian Agriculture", time: "2 days ago" },
                    { action: "Received collaboration request from", item: "Dr. Sarah Nwosu", time: "1 week ago" },
                    { action: "Research downloaded 15 times", item: "AI-Powered Healthcare Diagnostics", time: "2 weeks ago" },
                    { action: "Added new collaborator", item: "Prof. Funmilayo Adebisi", time: "1 month ago" }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-muted/50 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">{activity.action}</span>{" "}
                          <span className="text-primary">{activity.item}</span>
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-2xl font-bold">Profile Settings</h2>
            
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" value={profile.name} readOnly={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" value={profile.title} readOnly={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="institution">Institution</Label>
                    <Input id="institution" value={profile.institution} readOnly={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Input id="department" value={profile.department} readOnly={!isEditing} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" value={profile.bio} readOnly={!isEditing} rows={4} />
                </div>
                
                {isEditing && (
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                    <Button onClick={() => setIsEditing(false)}>
                      Save Changes
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;