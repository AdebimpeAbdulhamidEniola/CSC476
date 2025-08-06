import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/ui/navigation";
import { ResearchCard } from "@/components/research/research-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Download, 
  Eye, 
  Share2, 
  Heart, 
  MessageCircle, 
  Calendar,
  User,
  Building,
  FileText,
  ArrowLeft,
  Star,
  Flag,
  BookOpen,
  Users
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ResearchDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [isLiked, setIsLiked] = useState(false);
  const [newComment, setNewComment] = useState("");

  // Mock research data
  const research = {
    id: id || "1",
    title: "Machine Learning Applications in Nigerian Agriculture: A Comprehensive Study",
    abstract: "This research explores the implementation of machine learning algorithms to optimize crop yield prediction and pest detection in Nigerian agricultural systems. Our findings demonstrate significant improvements in farming efficiency and sustainability practices across multiple states. The study examines various ML models including Random Forest, Support Vector Machines, and Neural Networks, comparing their effectiveness in predicting crop yields based on climate data, soil conditions, and historical farming patterns. We conducted field tests across five Nigerian states (Lagos, Ogun, Kano, Kaduna, and Rivers) over two agricultural seasons, collecting data from over 500 farms. The results show that ML-enhanced agricultural practices can increase crop yields by up to 23% while reducing pesticide usage by 18%. This research provides a foundation for developing AI-powered agricultural advisory systems tailored to Nigerian farming conditions.",
    authors: [
      { name: "Dr. Adebayo Johnson", affiliation: "University of Lagos", email: "adebayo.johnson@unilag.edu.ng" },
      { name: "Prof. Funmilayo Adebisi", affiliation: "University of Lagos", email: "funmilayo.adebisi@unilag.edu.ng" },
      { name: "Dr. Chika Okonkwo", affiliation: "Federal University of Agriculture, Abeokuta", email: "chika.okonkwo@funaab.edu.ng" }
    ],
    institution: "University of Lagos",
    department: "Computer Science Department",
    publishDate: "March 15, 2024",
    lastUpdated: "March 20, 2024",
    keywords: ["Machine Learning", "Agriculture", "Nigeria", "Crop Yield", "Sustainability", "AI", "Farming", "Predictive Analytics"],
    downloadCount: 245,
    viewCount: 892,
    likeCount: 34,
    citationCount: 12,
    fileType: "PDF",
    fileSize: "2.4 MB",
    pages: 42,
    language: "English",
    researchField: "Computer Science",
    accessLevel: "Open Access",
    doi: "10.1234/research.2024.001",
    version: "1.2",
    license: "Creative Commons Attribution 4.0"
  };

  // Mock comments
  const comments = [
    {
      id: "1",
      author: "Dr. Sarah Nwosu",
      affiliation: "University of Ibadan",
      content: "Excellent work! The methodology is sound and the results are very promising for Nigerian agriculture. Have you considered extending this to include livestock management?",
      date: "2 days ago",
      likes: 5
    },
    {
      id: "2",
      author: "Prof. Michael Adamu",
      affiliation: "Ahmadu Bello University",
      content: "This research aligns perfectly with our ongoing agricultural digitization project. Would love to discuss potential collaboration opportunities.",
      date: "1 week ago",
      likes: 3
    }
  ];

  // Mock related research
  const relatedResearch = [
    {
      id: "2",
      title: "AI-Powered Crop Disease Detection in Sub-Saharan Africa",
      abstract: "Developing computer vision models for early detection of crop diseases using smartphone images.",
      authors: ["Dr. Grace Okolie", "Dr. John Udofia"],
      institution: "University of Nigeria, Nsukka",
      publishDate: "2024-02-10",
      keywords: ["AI", "Computer Vision", "Crop Disease", "Mobile Technology"],
      downloadCount: 156,
      viewCount: 423,
      fileType: "PDF"
    },
    {
      id: "3", 
      title: "Sustainable Farming Practices and Technology Adoption in Nigeria",
      abstract: "A comprehensive study on the adoption of modern farming technologies and sustainable practices among Nigerian farmers.",
      authors: ["Prof. Emmanuel Okafor", "Dr. Amina Hassan"],
      institution: "Federal University of Technology, Akure",
      publishDate: "2024-01-25",
      keywords: ["Sustainable Farming", "Technology Adoption", "Nigeria", "Agricultural Policy"],
      downloadCount: 203,
      viewCount: 651,
      fileType: "PDF"
    }
  ];

  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: "Your download will begin shortly. Thank you for citing this work in your research.",
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied",
      description: "Research link has been copied to your clipboard.",
    });
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast({
      title: isLiked ? "Removed from favorites" : "Added to favorites",
      description: isLiked ? "Research removed from your favorites." : "Research added to your favorites.",
    });
  };

  const handleComment = () => {
    if (newComment.trim()) {
      toast({
        title: "Comment Added",
        description: "Your comment has been posted successfully.",
      });
      setNewComment("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation isAuthenticated={true} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Link to="/search" className="flex items-center hover:text-primary transition-smooth">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Search
          </Link>
          <span>/</span>
          <span>Research Details</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <Card className="shadow-elegant">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h1 className="text-3xl font-bold leading-tight mb-3">{research.title}</h1>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {research.keywords.map((keyword) => (
                          <Badge key={keyword} variant="secondary">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Badge variant="outline" className="ml-4">
                      {research.fileType}
                    </Badge>
                  </div>

                  {/* Authors */}
                  <div className="space-y-2">
                    <h3 className="font-semibold">Authors</h3>
                    <div className="space-y-2">
                      {research.authors.map((author, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                              {author.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-sm">{author.name}</p>
                            <p className="text-xs text-muted-foreground">{author.affiliation}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        <span>{research.institution}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Published {research.publishDate}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>{research.pages} pages • {research.fileSize}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Eye className="h-4 w-4 text-muted-foreground" />
                        <span>{research.viewCount} views</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Download className="h-4 w-4 text-muted-foreground" />
                        <span>{research.downloadCount} downloads</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-muted-foreground" />
                        <span>{research.citationCount} citations</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    <Button onClick={handleDownload} className="flex-1 sm:flex-none">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                    <Button variant="outline" onClick={handleShare}>
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                    <Button variant="outline" onClick={handleLike}>
                      <Heart className={`h-4 w-4 mr-2 ${isLiked ? 'fill-current text-red-500' : ''}`} />
                      {isLiked ? 'Favorited' : 'Favorite'}
                    </Button>
                    <Button variant="outline" size="sm">
                      <Flag className="h-4 w-4 mr-2" />
                      Report
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Abstract */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Abstract</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{research.abstract}</p>
              </CardContent>
            </Card>

            {/* Discussion */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>Discussion ({comments.length})</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Add Comment */}
                <div className="space-y-3">
                  <Textarea
                    placeholder="Join the discussion... Share your thoughts, ask questions, or suggest improvements."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows={3}
                  />
                  <div className="flex justify-end">
                    <Button onClick={handleComment} disabled={!newComment.trim()}>
                      Post Comment
                    </Button>
                  </div>
                </div>

                <Separator />

                {/* Comments */}
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="space-y-2">
                      <div className="flex items-start space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                            {comment.author.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-sm">{comment.author}</span>
                            <span className="text-xs text-muted-foreground">•</span>
                            <span className="text-xs text-muted-foreground">{comment.affiliation}</span>
                            <span className="text-xs text-muted-foreground">•</span>
                            <span className="text-xs text-muted-foreground">{comment.date}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{comment.content}</p>
                          <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="sm">
                              <Heart className="h-3 w-3 mr-1" />
                              {comment.likes}
                            </Button>
                            <Button variant="ghost" size="sm">
                              Reply
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Research Info */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Research Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">DOI:</span>
                  <span className="font-mono text-xs">{research.doi}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Version:</span>
                  <span>{research.version}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Language:</span>
                  <span>{research.language}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Access:</span>
                  <Badge variant="outline" className="text-xs">{research.accessLevel}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">License:</span>
                  <span className="text-xs">{research.license}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Updated:</span>
                  <span>{research.lastUpdated}</span>
                </div>
              </CardContent>
            </Card>

            {/* Citation */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Cite This Work</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-3 rounded text-xs font-mono">
                  {research.authors[0].name.split(' ').slice(-1)[0]}, {research.authors[0].name.split(' ')[0][0]}. 
                  {research.authors.length > 1 && `, et al.`} ({new Date(research.publishDate).getFullYear()}). 
                  {research.title}. {research.institution}.
                </div>
                <Button variant="outline" size="sm" className="w-full mt-3">
                  Copy Citation
                </Button>
              </CardContent>
            </Card>

            {/* Metrics */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Research Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Eye className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Views</span>
                  </div>
                  <span className="font-medium">{research.viewCount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Download className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Downloads</span>
                  </div>
                  <span className="font-medium">{research.downloadCount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Citations</span>
                  </div>
                  <span className="font-medium">{research.citationCount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Favorites</span>
                  </div>
                  <span className="font-medium">{research.likeCount}</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Authors */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Contact Authors</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Research */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Research</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedResearch.map((research) => (
              <ResearchCard key={research.id} {...research} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchDetail;