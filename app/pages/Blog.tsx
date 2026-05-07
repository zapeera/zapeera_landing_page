'use client'

import { memo, useState, useCallback, useMemo } from "react";
import type { Metadata } from 'next';
import { Calendar, Clock, User, ArrowRight, Search } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import Link from "next/link";
import Container from "../components/ui/container";
import Loading from "../components/ui/loading";

export const metadata: Metadata = {
  title: 'Blog - Business Management Insights & Tips',
  description: 'Read the latest insights on business management, POS systems, inventory management, and retail operations. Expert tips to grow your business with Zapeera.',
  keywords: [
    'business management blog',
    'POS system tips',
    'inventory management insights',
    'retail management articles',
    'business software blog',
    'zapeera blog',
    'business growth tips'
  ],
  openGraph: {
    title: 'Blog - Business Management Insights & Tips',
    description: 'Read the latest insights on business management, POS systems, inventory management, and retail operations.',
    url: 'https://zapeera.com/blog',
    images: ['/og-blog.jpg'],
  },
  alternates: {
    canonical: 'https://zapeera.com/blog',
  },
};

const Blog = memo(() => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Business Management: How AI is Revolutionizing POS Systems",
      excerpt: "Discover how artificial intelligence is transforming point-of-sale systems and what it means for your business operations.",
      content: "In today's rapidly evolving business landscape, the integration of artificial intelligence into point-of-sale systems is not just a trend—it's a necessity. Traditional POS systems are being replaced by intelligent platforms that can predict customer behavior, optimize inventory management, and provide real-time insights that drive business growth...",
      author: "Zapeera Team",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Technology",
      image: "/placeholder.svg",
      tags: ["AI", "POS", "Business Management", "Technology"]
    },
    {
      id: 2,
      title: "5 Essential Features Every Modern Business Management Platform Should Have",
      excerpt: "Learn about the must-have features that can make or break your business management software selection.",
      content: "Choosing the right business management platform is crucial for your company's success. With so many options available, it's easy to get overwhelmed. However, there are certain essential features that every modern business management platform should include...",
      author: "Sarah Johnson",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Business",
      image: "/placeholder.svg",
      tags: ["Business", "Management", "Features", "Software"]
    },
    {
      id: 3,
      title: "From Startup to Success: How Zapeera Helped 1000+ Businesses Scale",
      excerpt: "Real stories from entrepreneurs who transformed their businesses using Zapeera's comprehensive management platform.",
      content: "Over the past two years, we've had the privilege of working with over 1000 businesses across various industries. From small family-owned stores to growing enterprises, each success story reinforces our mission to democratize business management...",
      author: "Zapeera Team",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Success Stories",
      image: "/placeholder.svg",
      tags: ["Success Stories", "Case Studies", "Growth", "Entrepreneurship"]
    },
    {
      id: 4,
      title: "Inventory Management Best Practices: A Complete Guide",
      excerpt: "Master the art of inventory management with these proven strategies and techniques used by successful businesses.",
      content: "Effective inventory management is the backbone of any successful retail or e-commerce business. Poor inventory management can lead to stockouts, overstocking, and ultimately, lost revenue. In this comprehensive guide, we'll explore the best practices that can help you optimize your inventory management...",
      author: "Mike Chen",
      date: "2024-01-01",
      readTime: "8 min read",
      category: "Operations",
      image: "/placeholder.svg",
      tags: ["Inventory", "Operations", "Best Practices", "Management"]
    },
    {
      id: 5,
      title: "The Psychology of Customer Experience in Modern Retail",
      excerpt: "Understanding how customer psychology impacts purchasing decisions and how to leverage this knowledge in your business.",
      content: "Customer experience is no longer just about providing good service—it's about understanding the psychological factors that influence purchasing decisions. In today's competitive market, businesses that understand and cater to customer psychology have a significant advantage...",
      author: "Dr. Emily Rodriguez",
      date: "2023-12-28",
      readTime: "9 min read",
      category: "Customer Experience",
      image: "/placeholder.svg",
      tags: ["Psychology", "Customer Experience", "Retail", "Marketing"]
    },
    {
      id: 6,
      title: "Data-Driven Decision Making: Turning Analytics into Action",
      excerpt: "Learn how to transform your business data into actionable insights that drive growth and profitability.",
      content: "In the digital age, data is everywhere. Every transaction, customer interaction, and business process generates valuable data. However, having data is not enough—you need to know how to analyze it and turn it into actionable insights...",
      author: "Alex Thompson",
      date: "2023-12-20",
      readTime: "6 min read",
      category: "Analytics",
      image: "/placeholder.svg",
      tags: ["Analytics", "Data", "Decision Making", "Business Intelligence"]
    }
  ];

  const categories = ["All", "Technology", "Business", "Success Stories", "Operations", "Customer Experience", "Analytics"];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, blogPosts]);

  return (
    <Loading>
      <div className="min-h-screen bg-background">
        {/* Header */}
      <div className="bg-gradient-hero shadow-sm border-b pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Zapeera{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Blog
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Insights, tips, and stories from the world of business management and technology
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-3 text-lg border-2 border-border focus:border-primary rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

     <Container>
       {/* Categories */}
       <div className=" py-8">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const postCount = category === "All" 
              ? blogPosts.length 
              : blogPosts.filter(post => post.category === category).length;
            
            return (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`px-4 py-2 text-sm font-medium cursor-pointer transition-colors ${
                  selectedCategory === category 
                    ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                    : "hover:bg-primary/10 hover:border-primary/50 hover:text-primary"
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category} ({postCount})
              </Badge>
            );
          })}
        </div>

        {/* Results Counter */}
        <div className="text-center mb-8">
          <p className="text-muted-foreground">
            {filteredPosts.length === 1 
              ? "1 article found" 
              : `${filteredPosts.length} articles found`
            }
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-blue-600">Z</span>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                
                <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </CardTitle>
                
                <CardDescription className="text-sm text-gray-600 line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs px-2 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Link href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}`}>
                  <Button variant="ghost" className="w-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">📝</span>
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">No articles found</h3>
            <p className="text-muted-foreground mb-6">
              {selectedCategory !== "All" 
                ? `No articles found in the "${selectedCategory}" category.`
                : "No articles match your search criteria."
              }
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                handleCategoryChange("All");
                setSearchQuery("");
              }}
              className="hover:bg-primary hover:text-primary-foreground"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Load More Button */}
        <div className="text-center">
          <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-full px-8 py-3">
            Load More Articles
          </Button>
        </div>
      </div>
     </Container>

      {/* Newsletter Signup */}
      <div className="bg-gradient-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Stay Updated with Zapeera
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get the latest insights, tips, and updates delivered directly to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 py-3 px-4 rounded-full border-0 focus:ring-2 focus:ring-primary-foreground"
            />
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3 rounded-full font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      </div>
    </Loading>
  );
});

Blog.displayName = 'Blog';

export default Blog;
