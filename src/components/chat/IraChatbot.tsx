"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Search, ChevronLeft, ArrowRight, Compass, X } from 'lucide-react';
import Link from 'next/link';

// --- DATA MODELS ---

type RichCard = {
  id: string;
  title: string;
  points: string[];
  link: string;
  linkText: string;
};

type RouteContext = {
  header: string;
  welcome: string;
  actions: { label: string; cardId: string }[];
  suggestions: { label: string; cardId: string }[];
};

// --- DATABASE ---

const CARDS: Record<string, RichCard> = {
  // Solutions
  "sol-ai": {
    id: "sol-ai",
    title: "Enterprise AI Platform",
    points: [
      "Private LLM Deployment",
      "Agent Orchestration",
      "Knowledge Retrieval",
      "Compliance Controls"
    ],
    link: "/solutions",
    linkText: "View AI Platform"
  },
  "sol-knowledge": {
    id: "sol-knowledge",
    title: "Knowledge Intelligence",
    points: [
      "Vector Database Integration",
      "Deterministic RAG Pipelines",
      "Enterprise Search",
      "Real-time Data Sync"
    ],
    link: "/solutions",
    linkText: "Explore Knowledge Systems"
  },
  "sol-automation": {
    id: "sol-automation",
    title: "Process Automation",
    points: [
      "State Machine Workflows",
      "Cross-Platform Integrations",
      "Zero-Touch Execution",
      "Audit Logging"
    ],
    link: "/solutions",
    linkText: "View Automation Solutions"
  },
  "sol-data": {
    id: "sol-data",
    title: "Data Engineering",
    points: [
      "Massive-Scale ETL",
      "Streaming Architectures",
      "Data Warehouse Modeling",
      "High-Availability Storage"
    ],
    link: "/solutions",
    linkText: "View Data Infrastructure"
  },
  
  // Services
  "srv-ai": {
    id: "srv-ai",
    title: "AI Engineering",
    points: [
      "Custom Model Fine-Tuning",
      "LangChain / LangGraph Workflows",
      "Prompt Engineering",
      "AI Security Audits"
    ],
    link: "/services",
    linkText: "Explore AI Services"
  },
  "srv-cloud": {
    id: "srv-cloud",
    title: "Cloud Engineering",
    points: [
      "AWS / Azure Topologies",
      "Multi-Region Redundancy",
      "Kubernetes Orchestration",
      "Terraform Infrastructure as Code"
    ],
    link: "/services",
    linkText: "View Cloud Services"
  },
  "srv-eng": {
    id: "srv-eng",
    title: "Platform Development",
    points: [
      "Next.js / React Interfaces",
      "High-Performance Node/Rust APIs",
      "Microservice Architectures",
      "Enterprise Design Systems"
    ],
    link: "/services",
    linkText: "View Dev Capabilities"
  },
  "srv-engage": {
    id: "srv-engage",
    title: "Engagement Model",
    points: [
      "Architecture Reviews",
      "Dedicated Strike Teams",
      "Fixed-Scope Deliverables",
      "Continuous Optimization"
    ],
    link: "/contact",
    linkText: "Schedule an Engagement"
  },

  // Careers
  "car-intern": {
    id: "car-intern",
    title: "Internship Tracks",
    points: [
      "3-6 Month Intensive Programs",
      "Software Engineering (React/Node)",
      "AI Engineering (Python/RAG)",
      "Cloud & Data Tracks"
    ],
    link: "/careers",
    linkText: "View Internship Program"
  },
  "car-skills": {
    id: "car-skills",
    title: "Required Skills",
    points: [
      "First-Principles Thinking",
      "Modern Stack (Next.js, Python, AWS)",
      "System Architecture Understanding",
      "Production-Ready Code Quality"
    ],
    link: "/careers",
    linkText: "View Open Positions"
  },
  "car-process": {
    id: "car-process",
    title: "Hiring Process",
    points: [
      "Initial Fit Assessment",
      "Technical Architecture Interview",
      "Take-Home Engineering Challenge",
      "Final Director Review"
    ],
    link: "/careers",
    linkText: "View Job Board"
  },
  "car-apply": {
    id: "car-apply",
    title: "Apply Now",
    points: [
      "General Applications Accepted",
      "Bengaluru Hybrid Roles",
      "Meritocratic Evaluation"
    ],
    link: "https://erp.ecomsmart.world/form-builder/d11ad164-b3f5-4ebf-a2f3-e94cc3cc07c2-1779094293",
    linkText: "Submit Application"
  },

  // Industries
  "ind-logistics": {
    id: "ind-logistics",
    title: "Logistics Systems",
    points: [
      "Supply Chain Tracking",
      "Route Optimization Engines",
      "Warehouse Automation",
      "Predictive Delays"
    ],
    link: "/industries",
    linkText: "View Logistics Case Studies"
  },
  "ind-health": {
    id: "ind-health",
    title: "Healthcare Tech",
    points: [
      "HIPAA Compliant Pipelines",
      "Patient Data Security",
      "Diagnostic Workflows",
      "Provider Dashboards"
    ],
    link: "/industries",
    linkText: "View Healthcare Expertise"
  },
  "ind-finance": {
    id: "ind-finance",
    title: "Financial Infrastructure",
    points: [
      "High-Frequency Trade Pipelines",
      "Fraud Detection Models",
      "Ledger Database Systems",
      "Regulatory Compliance"
    ],
    link: "/industries",
    linkText: "View Financial Services"
  },

  // About / General
  "abt-overview": {
    id: "abt-overview",
    title: "Company Overview",
    points: [
      "Elite Engineering Firm",
      "Bengaluru Headquarters",
      "Focus on Scalability & AI",
      "No Boilerplate Consultants"
    ],
    link: "/about",
    linkText: "Read Our Story"
  },
  "abt-philosophy": {
    id: "abt-philosophy",
    title: "Engineering Philosophy",
    points: [
      "Zero Tolerance for Technical Debt",
      "Deterministic Architecture",
      "Security by Default",
      "Infrastructure as Code"
    ],
    link: "/about",
    linkText: "Read Core Principles"
  },
  "abt-contact": {
    id: "abt-contact",
    title: "Contact Information",
    points: [
      "Novel Tech Park, Bengaluru",
      "info@i-cronus.com",
      "+91 99862 47282",
      "< 24 Hour Response SLA"
    ],
    link: "/contact",
    linkText: "Contact Architecture Team"
  },
  
  // Error/Fallback
  "fallback": {
    id: "fallback",
    title: "Information Not Found",
    points: [
      "Try searching for specific terms (e.g. 'Cloud', 'Internship')",
      "Navigate to a specific page using the top menu",
      "Check our Solutions or Services for detailed capabilities"
    ],
    link: "/",
    linkText: "Return Home"
  }
};

// --- ROUTE MAP ---

const ROUTE_CONFIGS: Record<string, RouteContext> = {
  "/careers": {
    header: "IRA Navigator",
    welcome: "I can help you explore internships, understand requirements, and navigate the hiring process.",
    actions: [
      { label: "Internship Tracks", cardId: "car-intern" },
      { label: "Required Skills", cardId: "car-skills" },
      { label: "Hiring Process", cardId: "car-process" },
      { label: "Apply Now", cardId: "car-apply" }
    ],
    suggestions: [
      { label: "What internships are available?", cardId: "car-intern" },
      { label: "What skills are required?", cardId: "car-skills" },
      { label: "Do interns receive PPOs?", cardId: "car-process" }
    ]
  },
  "/solutions": {
    header: "IRA Solutions Advisor",
    welcome: "Tell me what business challenge you're solving and I'll guide you to the right solution.",
    actions: [
      { label: "Enterprise AI Platform", cardId: "sol-ai" },
      { label: "Knowledge Intelligence", cardId: "sol-knowledge" },
      { label: "Process Automation", cardId: "sol-automation" },
      { label: "Data Engineering", cardId: "sol-data" }
    ],
    suggestions: [
      { label: "Do you build private AI systems?", cardId: "sol-ai" },
      { label: "Show me data architectures.", cardId: "sol-data" }
    ]
  },
  "/services": {
    header: "IRA Engineering Guide",
    welcome: "I can connect you with our elite execution capabilities and engineering teams.",
    actions: [
      { label: "AI Engineering", cardId: "srv-ai" },
      { label: "Cloud Engineering", cardId: "srv-cloud" },
      { label: "Platform Development", cardId: "srv-eng" },
      { label: "Engagement Model", cardId: "srv-engage" }
    ],
    suggestions: [
      { label: "What services do you provide?", cardId: "srv-eng" },
      { label: "How do engagements work?", cardId: "srv-engage" },
      { label: "What technologies do you use?", cardId: "srv-cloud" }
    ]
  },
  "/industries": {
    header: "IRA Industry Navigator",
    welcome: "Explore the domains where we've deployed mission-critical systems.",
    actions: [
      { label: "Logistics", cardId: "ind-logistics" },
      { label: "Healthcare", cardId: "ind-health" },
      { label: "Finance", cardId: "ind-finance" }
    ],
    suggestions: [
      { label: "Do you have logistics experience?", cardId: "ind-logistics" },
      { label: "Show industry case studies.", cardId: "ind-finance" }
    ]
  },
  "/about": {
    header: "About i-Cronus",
    welcome: "Learn about our mission, engineering culture, and the architects behind the code.",
    actions: [
      { label: "Company Overview", cardId: "abt-overview" },
      { label: "Engineering Philosophy", cardId: "abt-philosophy" },
      { label: "Contact Info", cardId: "abt-contact" }
    ],
    suggestions: [
      { label: "What makes i-Cronus different?", cardId: "abt-overview" },
      { label: "What is your engineering philosophy?", cardId: "abt-philosophy" },
      { label: "Where are you located?", cardId: "abt-contact" }
    ]
  },
  "default": {
    header: "IRA Navigator",
    welcome: "Welcome to i-Cronus. Select a topic below to explore our enterprise capabilities.",
    actions: [
      { label: "Our Solutions", cardId: "sol-ai" },
      { label: "Engineering Services", cardId: "srv-eng" },
      { label: "Careers & Internships", cardId: "car-intern" },
      { label: "Contact HQ", cardId: "abt-contact" }
    ],
    suggestions: [
      { label: "What does i-Cronus do?", cardId: "abt-overview" },
      { label: "Are you hiring?", cardId: "car-skills" },
      { label: "Where is the office?", cardId: "abt-contact" }
    ]
  }
};

// --- SEARCH ENGINE ---

// Simple deterministic keyword mapping to card IDs
const SEARCH_INDEX: Record<string, string> = {
  "intern": "car-intern",
  "internship": "car-intern",
  "frontend": "srv-eng",
  "react": "srv-eng",
  "ai": "sol-ai",
  "llm": "sol-ai",
  "cloud": "srv-cloud",
  "aws": "srv-cloud",
  "data": "sol-data",
  "contact": "abt-contact",
  "office": "abt-contact",
  "headquarters": "abt-contact",
  "services": "srv-eng",
  "solutions": "sol-ai",
  "careers": "car-apply",
  "hiring": "car-apply",
  "job": "car-apply",
  "logistics": "ind-logistics",
  "health": "ind-health",
  "finance": "ind-finance",
  "about": "abt-overview",
  "philosophy": "abt-philosophy"
};

function performSearch(query: string): string {
  const q = query.toLowerCase();
  for (const [keyword, cardId] of Object.entries(SEARCH_INDEX)) {
    if (q.includes(keyword)) {
      return cardId;
    }
  }
  return "fallback";
}

// --- COMPONENT ---

export default function IraChatbot() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Get current context based on route
  const currentContext = ROUTE_CONFIGS[pathname] || ROUTE_CONFIGS["default"];

  // Reset view when route changes
  useEffect(() => {
    setActiveCardId(null);
    setSearchQuery('');
  }, [pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const resultCardId = performSearch(searchQuery);
    setActiveCardId(resultCardId);
    setSearchQuery('');
  };

  const renderActiveCard = () => {
    if (!activeCardId) return null;
    const card = CARDS[activeCardId] || CARDS["fallback"];

    return (
      <div className="flex flex-col h-full bg-[#020617] animate-in slide-in-from-right-4 duration-300">
        <div className="flex items-center gap-3 mb-6">
          <button 
            onClick={() => setActiveCardId(null)}
            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#A0A0B8] hover:text-white hover:bg-white/10 transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <h3 className="font-display font-bold text-white uppercase">{card.title}</h3>
        </div>

        <div className="flex-1 space-y-3">
          {card.points.map((point, i) => (
            <div key={i} className="flex items-start gap-3 bg-[#050816] border border-white/5 p-4 rounded-xl">
              <div className="mt-0.5 text-[#00D4FF]">✓</div>
              <p className="text-sm text-[#A0A0B8] leading-relaxed">{point}</p>
            </div>
          ))}
        </div>

        <div className="pt-6 mt-6 border-t border-white/5">
          {card.link.startsWith('http') ? (
            <a href={card.link} target="_blank" rel="noopener noreferrer" className="btn-solid w-full justify-center flex items-center gap-2">
              {card.linkText} <ArrowRight size={16} />
            </a>
          ) : (
            <Link href={card.link} onClick={() => setIsOpen(false)} className="btn-solid w-full justify-center flex items-center gap-2">
              {card.linkText} <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </div>
    );
  };

  const renderHomeView = () => {
    return (
      <div className="flex flex-col h-full animate-in fade-in duration-300">
        
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
            <span className="text-xs font-bold text-white uppercase tracking-widest">Quick Actions</span>
          </div>
          <div className="flex flex-col gap-2">
            {currentContext.actions.map((action, i) => (
              <button 
                key={i}
                onClick={() => setActiveCardId(action.cardId)}
                className="text-left text-xs bg-white/5 border border-white/5 hover:border-[#00D4FF]/30 hover:bg-[#00D4FF]/5 text-[#A0A0B8] hover:text-white px-4 py-2.5 rounded-md transition-colors flex items-center justify-between group"
              >
                {action.label}
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#00D4FF]" />
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
            <span className="text-xs font-bold text-white uppercase tracking-widest">Popular Questions</span>
          </div>
          <div className="flex flex-col gap-3 px-1">
            {currentContext.suggestions.map((sug, i) => (
              <button 
                key={i}
                onClick={() => setActiveCardId(sug.cardId)}
                className="text-left text-sm text-[#A0A0B8] hover:text-[#00D4FF] transition-colors flex items-start gap-2 group"
              >
                <span className="text-[#00D4FF] opacity-50 group-hover:opacity-100 transition-opacity mt-0.5">•</span>
                <span>{sug.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 px-5 h-12 bg-[#050816] border border-[#00D4FF]/30 rounded-full flex items-center justify-center gap-2 text-[#00D4FF] shadow-[0_0_20px_rgba(0,212,255,0.15)] z-50 transition-all duration-300 hover:scale-105 hover:border-[#00D4FF] hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
      >
        <Compass size={18} />
        <span className="text-xs font-bold uppercase tracking-widest text-white">Ask IRA</span>
      </button>

      {/* Navigator Panel */}
      <div 
        className={`fixed bottom-6 right-6 w-[320px] h-[450px] bg-[#020617] border border-white/10 rounded-2xl shadow-2xl flex flex-col z-50 transition-all duration-300 origin-bottom-right overflow-hidden ${isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-90 opacity-0 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-[#050816] shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded flex items-center justify-center bg-[#00D4FF]/10 text-[#00D4FF]">
              <Compass size={14} />
            </div>
            <h3 className="font-display font-bold text-white text-sm tracking-wide">{currentContext.header}</h3>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-[#A0A0B8] hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Dynamic Content Body */}
        <div 
          className="flex-1 p-5 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent overscroll-contain"
          data-lenis-prevent="true"
        >
          {activeCardId ? renderActiveCard() : renderHomeView()}
        </div>

        {/* Search Footer */}
        <div className="p-4 border-t border-white/5 bg-[#050816] shrink-0">
          <form onSubmit={handleSearch} className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A0A0B8]">
              <Search size={14} />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search knowledge base..."
              className="w-full bg-[#020617] border border-white/10 rounded-lg pl-9 pr-4 py-2.5 text-xs text-white placeholder-[#A0A0B8] focus:outline-none focus:border-[#00D4FF]/50 transition-colors shadow-inner"
            />
          </form>
        </div>
      </div>
    </>
  );
}
