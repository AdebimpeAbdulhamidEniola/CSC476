import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Upload as UploadIcon, 
  FileText, 
  Plus, 
  X, 
  CheckCircle,
  AlertCircle,
  BookOpen
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Upload = () => {
  const { toast } = useToast();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [keywords, setKeywords] = useState<string[]>([]);
  const [newKeyword, setNewKeyword] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    abstract: "",
    authors: "",
    institution: "",
    department: "",
    researchField: "",
    fileType: "",
    language: "English",
    accessLevel: "public"
  });

  const researchFields = [
    "Computer Science",
    "Medicine",
    "Engineering",
    "Agriculture",
    "Social Sciences",
    "Natural Sciences",
    "Law",
    "Education",
    "Economics",
    "Environmental Science"
  ];

  const addKeyword = () => {
    if (newKeyword.trim() && !keywords.includes(newKeyword.trim())) {
      setKeywords(prev => [...prev, newKeyword.trim()]);
      setNewKeyword("");
    }
  };

  const removeKeyword = (keyword: string) => {
    setKeywords(prev => prev.filter(k => k !== keyword));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          toast({
            title: "Upload Successful!",
            description: "Your research paper has been uploaded and is now available in the repository.",
          });
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation isAuthenticated={true} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold">Upload Research</h1>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Share your research with the Nigerian academic community. Ensure all details are accurate 
              for better discoverability and collaboration opportunities.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>
                  Provide the fundamental details about your research
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Research Title *</Label>
                  <Input
                    id="title"
                    placeholder="Enter the full title of your research paper"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="abstract">Abstract *</Label>
                  <Textarea
                    id="abstract"
                    placeholder="Provide a comprehensive summary of your research, including objectives, methodology, key findings, and conclusions..."
                    rows={6}
                    value={formData.abstract}
                    onChange={(e) => setFormData(prev => ({ ...prev, abstract: e.target.value }))}
                    required
                  />
                  <p className="text-sm text-muted-foreground">
                    {formData.abstract.length}/500 characters recommended
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="authors">Authors *</Label>
                    <Input
                      id="authors"
                      placeholder="Dr. John Doe, Prof. Jane Smith, etc."
                      value={formData.authors}
                      onChange={(e) => setFormData(prev => ({ ...prev, authors: e.target.value }))}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="institution">Institution *</Label>
                    <Input
                      id="institution"
                      placeholder="University of Lagos"
                      value={formData.institution}
                      onChange={(e) => setFormData(prev => ({ ...prev, institution: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="department">Department/Faculty</Label>
                    <Input
                      id="department"
                      placeholder="Computer Science Department"
                      value={formData.department}
                      onChange={(e) => setFormData(prev => ({ ...prev, department: e.target.value }))}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="researchField">Research Field *</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, researchField: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select research field" />
                      </SelectTrigger>
                      <SelectContent>
                        {researchFields.map((field) => (
                          <SelectItem key={field} value={field}>{field}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Keywords */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Keywords & Tags</CardTitle>
                <CardDescription>
                  Add relevant keywords to help others discover your research
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Add a keyword or tag"
                      value={newKeyword}
                      onChange={(e) => setNewKeyword(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addKeyword())}
                    />
                    <Button type="button" onClick={addKeyword}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {keywords.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {keywords.map((keyword) => (
                        <Badge key={keyword} variant="secondary" className="pr-1">
                          {keyword}
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="h-auto p-1 ml-1"
                            onClick={() => removeKeyword(keyword)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* File Upload */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>File Upload</CardTitle>
                <CardDescription>
                  Upload your research document (PDF, DOC, DOCX)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                  <UploadIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <div className="space-y-2">
                    <p className="text-lg font-medium">Drop your file here or click to browse</p>
                    <p className="text-sm text-muted-foreground">
                      Supported formats: PDF, DOC, DOCX (Max size: 25MB)
                    </p>
                  </div>
                  <Button type="button" variant="outline" className="mt-4">
                    <FileText className="h-4 w-4 mr-2" />
                    Choose File
                  </Button>
                </div>

                {isUploading && (
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Uploading...</span>
                      <span className="text-sm text-muted-foreground">{uploadProgress}%</span>
                    </div>
                    <Progress value={uploadProgress} />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Metadata */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Additional Settings</CardTitle>
                <CardDescription>
                  Configure access permissions and additional metadata
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select value={formData.language} onValueChange={(value) => setFormData(prev => ({ ...prev, language: value }))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="English">English</SelectItem>
                        <SelectItem value="Yoruba">Yoruba</SelectItem>
                        <SelectItem value="Igbo">Igbo</SelectItem>
                        <SelectItem value="Hausa">Hausa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="fileType">Document Type</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, fileType: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Research Paper">Research Paper</SelectItem>
                        <SelectItem value="Thesis">Thesis</SelectItem>
                        <SelectItem value="Dissertation">Dissertation</SelectItem>
                        <SelectItem value="Conference Paper">Conference Paper</SelectItem>
                        <SelectItem value="Book Chapter">Book Chapter</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="accessLevel">Access Level</Label>
                    <Select value={formData.accessLevel} onValueChange={(value) => setFormData(prev => ({ ...prev, accessLevel: value }))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public Access</SelectItem>
                        <SelectItem value="institutional">Institution Only</SelectItem>
                        <SelectItem value="restricted">Restricted Access</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submit */}
            <Card className="shadow-card">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4 p-4 bg-muted/50 rounded-lg mb-6">
                  <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Important Notes</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Ensure your research complies with institutional guidelines</li>
                      <li>• All uploaded content will be reviewed before publication</li>
                      <li>• You can update your research after initial upload</li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <Button type="button" variant="outline">
                    Save as Draft
                  </Button>
                  <Button type="submit" disabled={isUploading}>
                    {isUploading ? (
                      <>Uploading... {uploadProgress}%</>
                    ) : (
                      <>
                        <UploadIcon className="h-4 w-4 mr-2" />
                        Upload Research
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;