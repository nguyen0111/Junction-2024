import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ResourceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ResourceCard = ({ title, description, icon, link }: ResourceCardProps) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link to={link}>
          <Button variant="outline" className="w-full">
            View Resources
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;