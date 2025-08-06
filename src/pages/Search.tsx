import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { ResearchCard } from "@/components/research/research-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Search as SearchIcon, 
  Filter, 
  SortAsc, 
  BookOpen, 
  TrendingUp,
  Users,
  Calendar,
  X
} from "lucide-react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("relevance");

  // Mock data
  const mockResearch = [
    {
      id: "1",
      title: "Machine Learning Applications in Nigerian Agriculture: A Comprehensive Study",
      abstract: "This research explores the implementation of machine learning algorithms to optimize crop yield prediction and pest detection in Nigerian agricultural systems. Our findings demonstrate significant improvements in farming efficiency and sustainability practices across multiple states.",
      authors: ["Dr. Adebayo Johnson", "Prof. Funmilayo Adebisi", "Dr. Chika Okonkwo"],
      institution: "University of Lagos",
      publishDate: "2024-03-15",
      keywords: ["Machine Learning", "Agriculture", "Nigeria", "Crop Yield", "Sustainability"],
      downloadCount: 245,
      viewCount: 892,
      fileType: "PDF"
    },
    {
      id: "2",
      title: "Renewable Energy Solutions for Rural Nigerian Communities",
      abstract: "An analysis of solar and wind energy implementations in rural Nigeria, examining economic viability, community acceptance, and environmental impact. This study provides actionable recommendations for sustainable energy policy.",
      authors: ["Dr. Ibrahim Musa", "Dr. Grace Okolie"],
      institution: "Ahmadu Bello University",
      publishDate: "2024-02-28",
      keywords: ["Renewable Energy", "Solar Power", "Rural Development", "Policy"],
      downloadCount: 189,
      viewCount: 567,
      fileType: "PDF"
    },
    {
      id: "3",
      title: "Digital Health Systems in Nigeria: Challenges and Opportunities",
      abstract: "This paper examines the current state of digital health systems across Nigerian healthcare institutions, identifying key barriers to adoption and proposing frameworks for successful implementation.",
      authors: ["Prof. Sarah Nwosu", "Dr. Michael Adamu", "Dr. Kemi Akintola"],
      institution: "University of Ibadan",
      publishDate: "2024-01-20",
      keywords: ["Digital Health", "Healthcare", "Technology", "Implementation"],
      downloadCount: 321,
      viewCount: 1024,
      fileType: "PDF"
    }
  ];

  const filterOptions = [
    { category: "Institution", options: ["University of Lagos", "University of Ibadan", "Ahmadu Bello University", "University of Nigeria, Nsukka"] },
    { category: "Year", options: ["2024", "2023", "2022", "2021"] },
    { category: "Field", options: ["Computer Science", "Agriculture", "Medicine", "Engineering", "Social Sciences"] },
    { category: "Type", options: ["Research Paper", "Thesis", "Conference Paper", "Book Chapter"] }
  ];

  const trendingTopics = [
    "Artificial Intelligence",
    "Climate Change",
    "Digital Health",
    "Renewable Energy",
    "Nigerian Economy",
    "Education Technology"
  ];

  const removeFilter = (filter: string) => {
    setSelectedFilters(prev => prev.filter(f => f !== filter));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation isAuthenticated={true} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold mb-2">Discover Research</h1>
            <p className="text-muted-foreground">
              Search through thousands of research papers from Nigerian universities
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search research papers, authors, keywords..."
              className="pl-12 pr-4 py-6 text-lg shadow-card"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              Search
            </Button>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-sm font-medium text-muted-foreground">Trending:</span>
            {trendingTopics.slice(0, 4).map((topic) => (
              <Badge 
                key={topic}
                variant="secondary" 
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth"
                onClick={() => setSearchQuery(topic)}
              >
                {topic}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <Card className="shadow-card sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Filter className="h-5 w-5" />
                  <span>Filters</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Active Filters */}
                {selectedFilters.length > 0 && (
                  <div>
                    <h4 className="font-medium mb-2">Active Filters</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedFilters.map((filter) => (
                        <Badge key={filter} variant="default" className="pr-1">
                          {filter}
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-auto p-1 ml-1"
                            onClick={() => removeFilter(filter)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Filter Categories */}
                {filterOptions.map((filterGroup) => (
                  <div key={filterGroup.category}>
                    <h4 className="font-medium mb-2">{filterGroup.category}</h4>
                    <Select onValueChange={(value) => {
                      if (!selectedFilters.includes(value)) {
                        setSelectedFilters(prev => [...prev, value]);
                      }
                    }}>
                      <SelectTrigger>
                        <SelectValue placeholder={`Select ${filterGroup.category.toLowerCase()}`} />
                      </SelectTrigger>
                      <SelectContent>
                        {filterGroup.options.map((option) => (
                          <SelectItem key={option} value={option}>{option}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                ))}

                <Button variant="outline" className="w-full" onClick={() => setSelectedFilters([])}>
                  Clear All Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Sort and Results Count */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-muted-foreground">
                  {mockResearch.length} results found
                </span>
                <div className="flex items-center space-x-2">
                  <SortAsc className="h-4 w-4 text-muted-foreground" />
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevance</SelectItem>
                      <SelectItem value="date">Date</SelectItem>
                      <SelectItem value="downloads">Downloads</SelectItem>
                      <SelectItem value="views">Views</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Research Results */}
            <div className="space-y-6">
              {mockResearch.map((research) => (
                <ResearchCard key={research.id} {...research} />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Load More Results
              </Button>
            </div>
          </div>
        </div>

        {/* Featured Sections */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span>Trending This Week</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {trendingTopics.slice(0, 5).map((topic) => (
                  <div key={topic} className="flex items-center justify-between">
                    <span className="text-sm cursor-pointer hover:text-primary transition-smooth">
                      {topic}
                    </span>
                    <Badge variant="outline" className="text-xs">
                      {Math.floor(Math.random() * 50) + 10}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span>Recent Uploads</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockResearch.slice(0, 3).map((research) => (
                  <div key={research.id} className="text-sm">
                    <h4 className="font-medium line-clamp-2 hover:text-primary cursor-pointer transition-smooth">
                      {research.title}
                    </h4>
                    <p className="text-muted-foreground text-xs mt-1">
                      {research.institution}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span>Active Researchers</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {["Dr. Adebayo Johnson", "Prof. Funmilayo Adebisi", "Dr. Chika Okonkwo"].map((researcher) => (
                  <div key={researcher} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-primary">
                        {researcher.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{researcher}</p>
                      <p className="text-xs text-muted-foreground">University of Lagos</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Search;