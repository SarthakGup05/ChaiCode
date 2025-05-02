import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Database, Radio, Server, GitBranch, Play } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeDecoration } from '@/components/ui/CodeDecoration';

export default function CohortSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cohorts = [
    {
      id: 1,
      title: "Full Stack Data Science 1.0",
      description: "From Python basics to project deployment",
      startDate: "April 12, 2025",
      duration: "6 months",
      videoId: "dQw4w9WgXcQ",
      originalPrice: "₹99,999",
      price: "₹79,999",
      instructor: "John Doe",
      tags: ["Python", "TensorFlow", "Pandas", "Jupyter"],
      codeSnippet: "import pandas as pd\nimport numpy as np\nfrom sklearn.model_selection import train_test_split",
      icon: <Database className="w-6 h-6" />,
      color: "from-[#FF3366] to-[#FF6B3D]"
    },
    {
      id: 2,
      title: "GenAI with Python | Concept to deployment",
      description: "Development side of AI application",
      startDate: "April 7, 2025",
      duration: "1-2 months",
      videoId: "KN3AWeSX7u0",
      originalPrice: "₹49,999",
      price: "₹39,999",
      instructor: "Jane Smith",
      tags: ["Python", "LLMs", "Transformers"],
      codeSnippet: "from transformers import AutoModelForCausalLM, AutoTokenizer\n\ntokenizer = AutoTokenizer.from_pretrained(\"gpt2\")\nmodel = AutoModelForCausalLM.from_pretrained(\"gpt2\")\ninputs = tokenizer(\"AI is transforming\", return_tensors=\"pt\")",
      icon: <Radio className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "DevOps for developers 1.0",
      description: "Perfect guide to get started with DevOps",
      startDate: "April 15, 2025",
      duration: "1-2 months",
      videoId: "Wf2eSG3owoA",
      originalPrice: "₹39,999",
      price: "₹29,999",
      instructor: "Alice Johnson",
      tags: ["Docker", "Kubernetes", "CI/CD"],
      codeSnippet: "version: '3'\nservices:\n  web:\n    image: nginx:alpine\n    ports:\n      - \"80:80\"",
      icon: <Server className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#0B1121] text-white">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 py-12 px-4 md:px-8 relative overflow-hidden">
        <CodeDecoration variant="angular" className="opacity-30" />
        <div className="absolute inset-0 opacity-10">
          <Code2 className="absolute top-10 left-10 w-16 h-16 text-white" />
          <Terminal className="absolute bottom-10 right-20 w-24 h-24 text-white" />
          <GitBranch className="absolute top-20 right-40 w-12 h-12 text-white" />
          <Database className="absolute bottom-20 left-40 w-20 h-20 text-white" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Cohorts</h1>
          <p className="text-xl text-orange-100">Live training classes taught by industry experts</p>
        </div>
      </div>

      {/* Cohorts Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cohorts.map((cohort) => (
            <motion.div
              key={cohort.id}
              className="group relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {/* Animated border gradient */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00FF85] via-[#00FFE1] to-[#00FFFF] rounded-2xl opacity-75 blur group-hover:opacity-100 animate-tilt transition duration-300" />
              
              {/* Main card */}
              <div className="relative flex flex-col bg-[#0E1729]/90 backdrop-blur-xl rounded-xl overflow-hidden border border-white/10">
                {/* Hero section */}
                <div className="relative h-[280px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-transparent z-10" />
                  <img
                    src={`https://img.youtube.com/vi/${cohort.videoId}/maxresdefault.jpg`}
                    alt={cohort.title}
                    className="h-full w-full object-cover"
                  />
                  
                  {/* Overlay content */}
                  <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center space-x-2">
                        <div className="bg-[#1A2333] p-2 rounded-lg border border-[#2A3343]">
                          {cohort.icon}
                        </div>
                        <div className="h-8 w-2 bg-gradient-to-b from-[#00FF85] to-[#00FFE1] rounded-full animate-pulse" />
                      </div>
                      <Badge className="bg-[#1A2333]/80 text-[#00FFE1] border-[#2A3343]">
                        LIVE • ONLINE
                      </Badge>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                        {cohort.title}
                      </h3>
                      <p className="text-sm text-white/60 mt-1">{cohort.description}</p>
                    </div>
                  </div>
                </div>

                {/* Content section */}
                <div className="p-6 space-y-4 bg-gradient-to-b from-[#0E1729]/0 to-[#0E1729]/100">
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {cohort.tags.map((tag, idx) => (
                      <Badge
                        key={idx}
                        className="bg-[#1A2333] hover:bg-[#2A3343] text-[#00FFE1] border-[#2A3343] transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Code preview */}
                  <div className="relative group/code">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00FF85]/20 to-[#00FFE1]/20 rounded-xl blur-sm opacity-75 group-hover/code:opacity-100 transition duration-300" />
                    <div className="relative bg-[#1A2333] rounded-lg p-4 font-mono text-xs">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 rounded-full bg-red-500" />
                          <div className="w-2 h-2 rounded-full bg-yellow-500" />
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                        </div>
                        <span className="text-white/40">preview.py</span>
                      </div>
                      <pre className="text-[#00FFE1]/90">{cohort.codeSnippet}</pre>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#2A3343]">
                    <div className="space-y-1">
                      <div className="text-sm text-white/60">Starts {cohort.startDate}</div>
                      <div className="text-sm text-white/60">By {cohort.instructor}</div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-2">
                        <span className="text-lg line-through text-white/40">{cohort.originalPrice}</span>
                        <span className="text-2xl font-bold text-[#00FFE1]">{cohort.price}</span>
                      </div>
                      <div className="text-sm text-white/60">{cohort.duration}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to level up your skills?</h2>
          <p className="text-orange-100 mb-6">Join our community of developers and data scientists</p>
          <button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all">
            Explore All Cohorts
          </button>
        </div>
      </div>
    </div>
  );
}