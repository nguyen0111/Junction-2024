import { useParams, Navigate } from "react-router-dom";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import FeedbackSection from "@/components/FeedbackSection";

const Review = () => {
  const { id } = useParams();
  
  // Removed employment check, now all users can access the review page
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 pt-20">
        <h1 className="text-3xl font-bold text-wellmatch-dark mb-8">
          Review Your Company
        </h1>
        <div className="mb-8">
          <p className="text-muted-foreground">
            Share your experience working at your company. Your honest feedback helps others make informed decisions.
          </p>
        </div>
        <FeedbackSection companyId={id || ""} />
      </div>
    </>
  );
};

export default Review;