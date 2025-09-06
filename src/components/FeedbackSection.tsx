import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  rating: z.number().min(1, {
    message: "Please select a rating.",
  }).max(5),
  comment: z.string().min(10, {
    message: "Feedback must be at least 10 characters.",
  }),
});

const FeedbackSection = ({ companyId }: { companyId: string }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rating: 0,
      comment: "",
    },
  });

  const [selectedRating, setSelectedRating] = React.useState(0);

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Here you would typically make an API call to save the feedback
    console.log("Submitting feedback:", values);
    
    // Show success toast
    toast.success("Feedback submitted successfully!", {
      description: "Thank you for sharing your experience!"
    });
    
    // Reset form
    form.reset();
    setSelectedRating(0);
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold text-wellmatch-dark mb-6">
        Share Your Experience
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rating</FormLabel>
                <FormControl>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        className="focus:outline-none"
                        onClick={() => {
                          setSelectedRating(rating);
                          field.onChange(rating);
                        }}
                      >
                        <Star
                          className={`h-8 w-8 ${
                            rating <= selectedRating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </FormControl>
                <FormDescription>
                  Rate your overall experience
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Feedback</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Share your experience with this company..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Your feedback helps others make informed decisions
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-wellmatch-primary hover:bg-wellmatch-accent"
          >
            Submit Feedback
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FeedbackSection;