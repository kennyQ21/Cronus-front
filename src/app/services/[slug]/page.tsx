import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageClient, { ServiceDetail } from "@/components/pages/ServicePageClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const servicesData: Record<string, ServiceDetail> = {
  "ai-generative-ai": {
    slug: "ai-generative-ai",
    title: "AI & Generative AI Solutions",
    tagline: "Accelerating operations with production-grade AI agents and custom LLM networks.",
    summary: "We design and deploy custom artificial intelligence architectures that go beyond simple API calls. From agentic workflows and fine-tuning domain-specific models to private vector database indexing, we build safe and scalable cognitive infrastructures.",
    challenges: [
      "Heavy manual content and document verification backlog, slowing down operational compliance.",
      "Difficulty routing large volumes of telemetry data into actionable intelligence.",
      "Risk of exposing sensitive corporate IP when utilizing public generative models.",
    ],
    solutions: [
      "Custom Retrieval Augmented Generation (RAG) files ingestion and indexing systems.",
      "Localized autonomous agentic workflow networks to coordinate multi-step calculations.",
      "Private air-gapped LLM deployments operating inside secure cloud clusters.",
    ],
    tech: ["Python", "PyTorch", "LangChain", "vLLM", "Pinecone", "LlamaIndex", "Hugging Face"],
    roadmap: [
      "Discovery & Audit: Auditing manual bottlenecks and profiling dataset formats.",
      "Architectural Design: Designing vector database schemas and agent communication protocols.",
      "Prototype & Test: Building RAG pipelines and testing accuracy metrics.",
      "Deployment & SRE: Launching secure models and configuring active monitoring.",
    ],
    benefits: [
      "82% speedup in audit checks",
      "Zero corporate data leaks",
      "SLA compliance guarantees",
      "$1.4M saved in overhead costs",
    ],
    caseStudy: {
      client: "BioMedica International",
      title: "AI Ingestion Hub for Pharma Regulatory Compliance",
      challenge: "Manual indexing and compliance checking of thousands of international drug filings took months and resulted in critical filing errors.",
      solution: "Implemented a custom RAG verification engine using LangChain and Pinecone vector search, running custom audit checkers on private EKS servers.",
      outcome: "Regulatory checking cycles reduced by 82%, saving $1.4M in operational costs while maintaining absolute data integrity.",
    },
  },
  "custom-software-development": {
    slug: "custom-software-development",
    title: "Custom Software Development",
    tagline: "Re-engineering core codebases for high-concurrency clearing and transaction safety.",
    summary: "We build custom, secure, and distributed backend systems designed for high throughput, zero single-points-of-failure, and smooth integration with legacy enterprise software setups.",
    challenges: [
      "COBOL-based mainframes hitting throughput limits during volatile market trading hours.",
      "Fragmented microservices causing high API latencies and synchronization errors.",
      "Database bottlenecks resulting in transactional lockouts and audit log failures.",
    ],
    solutions: [
      "High-concurrency clearance and transaction microservices engines.",
      "Event-driven transaction log patterns utilizing Apache Kafka.",
      "Distributed database clustering with Citus scale partitions.",
    ],
    tech: ["Go", "Java / Spring Boot", "Apache Kafka", "PostgreSQL", "Citus DB", "gRPC", "TypeScript"],
    roadmap: [
      "Performance Profiling: Finding transaction load bottlenecks in legacy systems.",
      "Microservice Engineering: Designing event sourcing triggers and gRPC contracts.",
      "Shadow Traffic Testing: Routing clearing runs through new nodes parallel to main systems.",
      "Failover Cutover: Promoting the new engine to production with active SRE tracking.",
    ],
    benefits: [
      "10x increase in clearing throughput",
      "99.999% clearing uptime maintained",
      "Sub-millisecond API latencies",
      "Zero transaction synchronization errors",
    ],
    caseStudy: {
      client: "Tier-1 Clearing House",
      title: "High-Throughput Clearing Microservice Re-engineering",
      challenge: "Legacy 15-year clearing engines struggled to clear trades during market volatility, leading to clearing backlogs.",
      solution: "Developed a distributed clearing microservice in Go, utilizing Citus-partitioned PostgreSQL and Apache Kafka event streams.",
      outcome: "clearing engine handles 50,000 transactions per second with sub-millisecond latencies and 99.999% availability.",
    },
  },
  "cloud-engineering": {
    slug: "cloud-engineering",
    title: "Cloud Engineering & DevOps",
    tagline: "Autoscaling container clusters and multi-region landing zones.",
    summary: "We automate, secure, and scale enterprise infrastructure. By utilizing declarative Infrastructure as Code (IaC) and container orchestrations, we eliminate configuration drift, audit cloud spending, and implement disaster recovery pipelines.",
    challenges: [
      "Environment configuration drift causing manual QA and deployment delays.",
      "Rising multi-region network latencies and failure recovery delays.",
      "Complex cloud IAM accounts leading to security compliance failures.",
    ],
    solutions: [
      "Statically typed, audited Terraform cloud landing blueprints.",
      "Active-active multi-region Kubernetes configurations.",
      "Zero-Trust IAM compliance and automated cloud security monitoring.",
    ],
    tech: ["Kubernetes", "AWS", "Microsoft Azure", "Terraform", "Docker", "Github Actions", "Grafana"],
    roadmap: [
      "Infrastructure Audit: Scanning active cloud resource setups and identifying waste.",
      "IaC Drafting: Writing reusable, modular Terraform profiles.",
      "CI/CD Integration: Connecting GitHub Actions to run automated security audits and builds.",
      "Multi-Region Live Sync: Setting up active database replication and global traffic logs.",
    ],
    benefits: [
      "35% cloud resource cost savings",
      "60% reduction in regional latencies",
      "Zero deployment downtime",
      "100% compliance with security audits",
    ],
    caseStudy: {
      client: "CargoLink Logistics",
      title: "Global Supply Chain Active-Active AKS Migration",
      challenge: "Monolithic supply chain database suffered from regional outages and rising server costs during seasonal demand peaks.",
      solution: "Migrated infrastructure to a multi-region active-active AKS cluster using Terraform and automated GitOps deployments with ArgoCD.",
      outcome: "Decreased infrastructure costs by 35%, improved regional application speeds by 60%, and eliminated outages.",
    },
  },
  "data-engineering": {
    slug: "data-engineering",
    title: "Data Engineering & Lakehouses",
    tagline: "ETL telemetry streams and unified corporate lakehouses.",
    summary: "We organize fragmented data arrays into clean, actionable analytical engines. We build automated data lakes and schemas designed to scale with your analytical requirements.",
    challenges: [
      "Unstructured transaction telemetry scattered across silos, preventing real-time KPI visibility.",
      "Slow database queries taking hours to compile reports.",
      "Manual data ingestion pipelines breaking continuously due to formatting changes.",
    ],
    solutions: [
      "Apache Spark big data telemetry cleansing setups.",
      "Centralized Snowflake analytics warehouses and data lakehouses.",
      "dbt SQL schema transformations and Airflow scheduling.",
    ],
    tech: ["Apache Spark", "Apache Airflow", "Snowflake", "Databricks", "dbt", "Kusto (KQL)", "Kafka"],
    roadmap: [
      "Telemetry Mapping: Auditing databases and tracking mapping requirements.",
      "Streaming Design: Establishing real-time event topics in Kafka.",
      "Warehousing Schema: Drafting Snowflake schemas and access tags.",
      "Transformation Pipelines: Writing dbt transformations to automate analytical reporting.",
    ],
    benefits: [
      "100M+ transaction events managed daily",
      "Query processing speedup: hours to seconds",
      "Automated format cleaning schedules",
      "Consistent analytical reporting outputs",
    ],
    caseStudy: {
      client: "Apex Commerce Systems",
      title: "Real-Time Telemetry Pipeline and Pricing Warehouse",
      challenge: "Price matching algorithms failed due to ingestion delays in transactional database logs.",
      solution: "Implemented an automated pipeline with Spark and Snowflake, using Airflow to schedule real-time telemetry processing.",
      outcome: "Successfully processed 100M+ events daily, reducing database query times to seconds and allowing instant pricing updates.",
    },
  },
  "enterprise-automation": {
    slug: "enterprise-automation",
    title: "Enterprise Workflow Automation",
    tagline: "Hyper-automating manual processes across ERP and CRM networks.",
    summary: "We connect disparate databases and corporate tools to eliminate repetitive manual bottlenecks. This increases throughput, reduces data entry errors, and reallocates staff to strategy.",
    challenges: [
      "Manual billing data entries across Salesforce and NetSuite leading to typing errors.",
      "Repetitive PDF invoice auditing cycles causing processing delays.",
      "System integration gaps leading to delayed incident alerts.",
    ],
    solutions: [
      "Custom API integration middleware connecting CRM and ERP platforms.",
      "Automated PDF document parsing and OCR indexing tools.",
      "Scheduled database synch runs and automated incident logs.",
    ],
    tech: ["n8n", "Make", "UiPath", "Python", "REST APIs", "OpenCV"],
    roadmap: [
      "Workflow Profiling: Observing manual data entry workflows to capture requirements.",
      "Middleware Dev: Writing automated REST webhook listeners and connections.",
      "Validation Checks: Building validation loops to catch format errors automatically.",
      "Dashboard Tracking: Deploying central admin dashboard to track automation runs.",
    ],
    benefits: [
      "Data entry manual errors reduced to zero",
      "Billing reconciliation time cut to zero",
      "Reallocated 12 FTEs to strategy tasks",
      "SLA compliance metrics achieved",
    ],
    caseStudy: {
      client: "Apex Health Networks",
      title: "ERP NetSuite and Salesforce Billing Sync Automation",
      challenge: "Typing errors during manual billing transfers between CRM and NetSuite led to compliance audit failures.",
      solution: "Created an automated n8n workflow middleware that parses, validates, and syncs accounts billing files between CRM and ERP APIs.",
      outcome: "Data transfer errors dropped to zero and billing sync delays were reduced from days to seconds.",
    },
  },
  "web-mobile-development": {
    slug: "web-mobile-development",
    title: "Web & Mobile Development",
    tagline: "High-performance interfaces with offline sync features.",
    summary: "We design highly responsive web portals and native mobile applications. We prioritize system speed, state management, and offline-first database synchronization.",
    challenges: [
      "Field engineers losing data when logging maintenance tasks in low-connectivity areas.",
      "Slow, sluggish client portals leading to high drop-offs and customer churn.",
      "Fragmented codebases making cross-platform iOS and Android updates slow.",
    ],
    solutions: [
      "Offline-first mobile database replication patterns.",
      "Sleek Next.js server-rendered application portals.",
      "Unified React Native apps sharing 80%+ codebases across iOS/Android.",
    ],
    tech: ["Next.js", "React Native", "TypeScript", "Tailwind CSS", "Zustand", "Swift", "Kotlin"],
    roadmap: [
      "User Journey Review: Mapping offline user flows and synchronization parameters.",
      "API Layer Setup: Developing fast, authenticated endpoints in Node/Go.",
      "Frontend Build: Engineering pixel-perfect interface templates.",
      "Sync Testing: Simulating network dropouts to verify offline database safety.",
    ],
    benefits: [
      "Zero data loss during field outages",
      "Active daily use by 12,000+ engineers",
      "45% increase in logged maintenance jobs",
      "Unified cross-platform UI updating",
    ],
    caseStudy: {
      client: "Apex Utility Providers",
      title: "Offline-First Mobile Asset Tracker for Utility Technicians",
      challenge: "Maintenance logs failed because field technicians operated in remote zones with poor cellular coverage.",
      solution: "Developed a native React Native application with a local-first SQLite database that syncs automatically when reconnecting.",
      outcome: "Zero maintenance logs lost, with over 12,000 technicians active daily.",
    },
  },
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) {
    return {
      title: "Service Not Found | i-Cronus",
    };
  }
  return {
    title: `${service.title} | i-Cronus Capabilities`,
    description: service.summary,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return <ServicePageClient service={service} />;
}
