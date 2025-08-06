import { Calendar, Download, Eye, Users, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface ResearchCardProps {
  id: string;
  title: string;
  abstract: string;
  authors: string[];
  institution: string;
  publishDate: string;
  keywords: string[];
  downloadCount: number;
  viewCount: number;
  fileType: string;
}

export const ResearchCard = ({
  id,
  title,
  abstract,
  authors,
  institution,
  publishDate,
  keywords,
  downloadCount,
  viewCount,
  fileType
}: ResearchCardProps) => {
  return (
    <Card className="shadow-card hover:shadow-elegant transition-smooth hover-glow group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-smooth">
            <Link to={`/research/${id}`}>{title}</Link>
          </h3>
          <Badge variant="secondary" className="ml-2 shrink-0">
            {fileType}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          {authors.join(", ")} • {institution}
        </p>
      </CardHeader>

      <CardContent className="pb-4">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {abstract}
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          {keywords.slice(0, 3).map((keyword) => (
            <Badge key={keyword} variant="outline" className="text-xs">
              <Tag className="h-3 w-3 mr-1" />
              {keyword}
            </Badge>
          ))}
          {keywords.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{keywords.length - 3} more
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Calendar className="h-3 w-3" />
              <span>{publishDate}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="h-3 w-3" />
              <span>{viewCount}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Download className="h-3 w-3" />
              <span>{downloadCount}</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="flex items-center justify-between w-full">
          <Button variant="outline" size="sm" asChild>
            <Link to={`/research/${id}`}>
              <Eye className="h-4 w-4 mr-2" />
              View Details
            </Link>
          </Button>
          <Button variant="default" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};