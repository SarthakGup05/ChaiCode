import React from 'react';
import { motion } from 'framer-motion';
import { Code, Star, MessageSquare, Share2, ThumbsUp, Bookmark, Award, Laptop, Quote } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TestimonialCard = ({ 
  student = "Alex Johnson", 
  handle = "@alexcodes", 
  testimonial = "This JavaScript course completely changed my career path! I went from zero coding knowledge to landing my first developer job in just 6 months. The instructors were amazing!", 
  timePosted = "2 weeks ago",
  likes = 420,
  course = "Full-Stack JavaScript Bootcamp",
  studentImage = "/api/placeholder/40/40",
  courseImage = "/api/placeholder/600/320",
  rating = 5,
  studyDuration = "6 months",
  studentStatus = "Employed"
}) => {
  // Format numbers (e.g., 1200 -> 1.2K)
  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num;
  };

  // Render star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          size={14} 
          className={i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
        />
      );
    }
    return stars;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      className="w-full max-w-md mx-auto"
    >
      <Card className="border border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-orange-50 overflow-hidden">
        <div className="h-1 w-full bg-gradient-to-r from-orange-500 to-orange-300"></div>
        
        <CardHeader className="flex flex-row items-center gap-4 pb-3">
          <Avatar className="h-12 w-12 ring-2 ring-orange-300 shadow-md">
            <AvatarImage src={studentImage} alt={student} />
            <AvatarFallback className="bg-orange-500 text-white">{student.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <div className="font-bold text-gray-800">{student}</div>
            <div className="text-sm text-orange-500 flex items-center gap-1">
              <Laptop size={12} />
              {handle}
            </div>
            <div className="flex items-center mt-1">
              {renderStars(rating)}
            </div>
          </div>
          <div className="ml-auto flex flex-col items-end">
            <Badge className="bg-green-500 text-white border-0 mb-1">{studentStatus}</Badge>
            <div className="text-xs text-gray-500">{timePosted}</div>
          </div>
        </CardHeader>
        
        <CardContent className="pt-0 pb-4">
          <div className="relative mb-4 px-4 py-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
            <Quote size={18} className="absolute text-orange-300 opacity-50 -left-1 -top-2" />
            <p className="text-gray-700 italic relative z-10">{testimonial}</p>
            <Quote size={18} className="absolute text-orange-300 opacity-50 rotate-180 -right-1 -bottom-2" />
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="h-12 w-12 bg-orange-100 rounded-md flex items-center justify-center">
              <Code size={20} className="text-orange-600" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-gray-800">{course}</div>
              <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                <span className="flex items-center gap-1">
                  <Award size={12} />
                  {studyDuration}
                </span>
              </div>
            </div>
          </div>
          
          {courseImage && (
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-lg overflow-hidden shadow-md border border-gray-200 mt-4"
            >
              <img 
                src={courseImage} 
                alt="Course preview" 
                className="w-full h-36 object-cover"
              />
            </motion.div>
          )}
        </CardContent>
        
        <CardFooter className="border-t border-orange-100 pt-3 pb-3 px-6 bg-gradient-to-r from-orange-50 to-white">
          <div className="flex justify-between w-full text-gray-600">
            <Button variant="ghost" size="sm" className="flex items-center gap-1 text-xs hover:text-orange-600 hover:bg-orange-50">
              <ThumbsUp size={16} className="text-orange-500" />
              <span>{formatNumber(likes)}</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="flex items-center gap-1 text-xs hover:text-blue-600 hover:bg-orange-50">
              <MessageSquare size={16} className="text-blue-500" />
              <span>Reply</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="flex items-center gap-1 text-xs hover:text-green-600 hover:bg-orange-50">
              <Bookmark size={16} className="text-green-500" />
              <span>Save</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="flex items-center gap-1 text-xs hover:text-purple-600 hover:bg-orange-50">
              <Share2 size={16} className="text-purple-500" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const SectionHeader = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex justify-center mb-3">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="p-3 bg-orange-500 rounded-full text-white">
          <Quote size={30} className="text-white" />
        </motion.div>
      </div>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
      >
        Student Success Stories
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-600 mt-2 max-w-lg mx-auto"
      >
        Hear from our graduates who transformed their careers through our coding courses
      </motion.p>
    </div>
  );
};

// Example usage component
const StudentTestimonials = () => {
  return (
    <div className="p-8 bg-gradient-to-b from-orange-50 to-white min-h-screen">
      <SectionHeader />
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <TestimonialCard 
          student="Alex Johnson"
          handle="@alexcodes"
          testimonial="This JavaScript course completely changed my career path! I went from zero coding knowledge to landing my first developer job in just 6 months. The instructors were amazing!"
          timePosted="2 weeks ago"
          likes={427}
          course="Full-Stack JavaScript Bootcamp"
          studyDuration="6 months"
          studentStatus="Employed"
          rating={5}
        />
        
        <TestimonialCard 
          student="Maria Garcia"
          handle="@codewithmaria"
          testimonial="I was skeptical about online learning, but this Python course exceeded all my expectations. The community support was incredible and the projects were challenging but rewarding."
          timePosted="1 month ago"
          likes={312}
          course="Python for Data Science"
          studyDuration="4 months"
          studentStatus="Freelancing"
          rating={4}
        />
        
        <TestimonialCard 
          student="Jamal Williams"
          handle="@j_dev_williams"
          testimonial="The React course helped me transition from a designer to a full-stack developer. Now I'm building apps I never thought I could create before. Worth every penny!"
          timePosted="3 days ago"
          likes={586}
          course="React & Redux Masterclass"
          studyDuration="3 months"
          studentStatus="Promoted"
          rating={5}
        />
      </div>
      
      <div className="flex justify-center mt-10">
        <Button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-full">
          Read More Success Stories
        </Button>
      </div>
    </div>
  );
};

export default StudentTestimonials;