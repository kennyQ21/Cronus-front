import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPageClient, { IndustryDetail } from "@/components/pages/IndustryPageClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const industriesData: Record<string, IndustryDetail> = {
  healthcare: {
    slug: "healthcare",
    name: "Healthcare & Pharma",
    tagline: "Deploying secure clinical pipelines under strict HIPAA regulatory compliance.",
    summary: "We design high-integrity Patient Health Information (PHI) sync pipelines, clinical trial verification workflows, and secure, air-gapped system integrations that satisfy stringent federal audits.",
    challenges: [
      "Securing patient records across fragmented, legacy electronic health record (EHR) databases.",
      "Delays in manually auditing and verifying clinical filing forms for regulatory bodies.",
      "High security compliance risks when using public cloud environments without proper landing zones.",
    ],
    howWeHelp: [
      "Re-engineering HL7 / FHIR data mapping microservices for secure EHR syncs.",
      "Building private AI agent pipelines that automate document audit logs in real-time.",
      "Enforcing strict database encryption keys, SOC 2 / ISO alignments, and cloud IAM tags.",
    ],
    services: [
      { name: "AI & Generative AI Solutions", href: "/services/ai-generative-ai" },
      { name: "Custom Software Development", href: "/services/custom-software-development" },
      { name: "Cloud Engineering", href: "/services/cloud-engineering" },
    ],
    techSolutions: [
      "FHIR-compliant REST/gRPC API channels.",
      "Automated document processing pipelines with OCR verification.",
      "Private EKS container hosting with active log audits.",
    ],
    successStory: {
      title: "BioMedica Regulatory Filing Check Automation",
      description: "We implemented an automated RAG validation pipeline using Pinecone vector search and Python FastAPI, automating drug filing compliance checks against international regional datasets.",
      metric: "Audit verification times reduced by 82%, saving $1.4M annually.",
    },
  },
  manufacturing: {
    slug: "manufacturing",
    name: "Smart Manufacturing",
    tagline: "Automating factory telemetry pipelines and IIoT predictive maintenance.",
    summary: "We connect factory floor telemetry databases, implement high-throughput Kafka ingestion topics, and train deep learning anomaly forecasters to minimize unscheduled assembly outages.",
    challenges: [
      "Processing billions of unsorted, high-velocity IoT telemetry data packets.",
      "Unplanned machinery breakdowns stopping assembly lines and causing huge losses.",
      "Lack of centralized, real-time dashboards to profile factory throughput.",
    ],
    howWeHelp: [
      "Designing distributed Apache Spark pipelines to filter and clean raw IoT streams.",
      "Deploying PyTorch predictive models that flag mechanical fatigue warning signs.",
      "Hyper-automating incident response pipelines to instantly alert SRE field staff.",
    ],
    services: [
      { name: "Data Engineering & Lakehouses", href: "/services/data-engineering" },
      { name: "AI & Generative AI Solutions", href: "/services/ai-generative-ai" },
      { name: "Enterprise Workflow Automation", href: "/services/enterprise-automation" },
    ],
    techSolutions: [
      "Apache Kafka streaming grids for raw telemetry ingestion.",
      "PyTorch LSTM forecasting models for mechanical health alerts.",
      "n8n webhook integrations linking machinery monitors to PagerDuty.",
    ],
    successStory: {
      title: "Predictive Telemetry for Smart Automotive Assembly",
      description: "We deployed an IoT analytics pipeline with Databricks and Apache Spark, connecting 4,000 factory-floor sensors to predict fatigue patterns in structural machinery.",
      metric: "Machinery uptime raised to 99.8%, preventing $2.2M in outage losses.",
    },
  },
  retail: {
    slug: "retail",
    name: "Retail & E-Commerce",
    tagline: "High-scale API transactional backends and cross-channel sync engines.",
    summary: "We build high-concurrency billing endpoints, distributed SQL databases, and real-time product catalogs that operate smoothly during extreme seasonal traffic spikes.",
    challenges: [
      "Database row lockouts and checkout lags during peak holiday sales surges.",
      "Out-of-sync inventory databases across warehouses causing client order failures.",
      "Sluggish loading speeds on checkout interfaces leading to customer cart bounces.",
    ],
    howWeHelp: [
      "Deploying Go microservices designed for high concurrency and clearing safety.",
      "Building real-time inventory reconciliation topics using Apache Kafka.",
      "Developing state-heavy Next.js progressive web apps prioritizing first-contentful paint.",
    ],
    services: [
      { name: "Custom Software Development", href: "/services/custom-software-development" },
      { name: "Web & Mobile Development", href: "/services/web-mobile-development" },
      { name: "Data Engineering & Lakehouses", href: "/services/data-engineering" },
    ],
    techSolutions: [
      "Citus DB-partitioned PostgreSQL databases.",
      "Apache Kafka event sourcing topics for transaction clearing.",
      "Next.js App Router server-side hydration configurations.",
    ],
    successStory: {
      title: "Real-Time Pricing Telemetry Ingestion Hub",
      description: "We developed a real-time price matching telemetry database utilizing Spark and Snowflake, updating catalog pricing across 100M+ weekly transaction events.",
      metric: "Checkout API latency reduced to 320ms, increasing checkout conversions.",
    },
  },
  logistics: {
    slug: "logistics",
    name: "Logistics & Supply Chain",
    tagline: "Enabling offline-first field synchronization and route optimization.",
    summary: "We design mobile asset tracking clients with automatic offline SQLite databases, deploy multi-region container clusters, and write custom cargo routing algorithms.",
    challenges: [
      "Utility and cargo technicians losing job log updates during remote cellular drops.",
      "Inefficient cargo shipping routes raising fuel spending and tracking delays.",
      "Legacy monolithic databases failing under continuous global coordinates tracking.",
    ],
    howWeHelp: [
      "Developing React Native mobile apps with SQLite sync engines.",
      "Deploying multi-region active-active AKS Kubernetes hosting networks.",
      "Automating GitOps pipelines with ArgoCD to eliminate manual deployment lag.",
    ],
    services: [
      { name: "Web & Mobile Development", href: "/services/web-mobile-development" },
      { name: "Cloud Engineering & DevOps", href: "/services/cloud-engineering" },
      { name: "Enterprise Workflow Automation", href: "/services/enterprise-automation" },
    ],
    techSolutions: [
      "SQLite local database syncing with automated network check rules.",
      "Terraform cloud blueprints with global DNS load balancing.",
      "Coordinate mapping and geographic route optimization microservices.",
    ],
    successStory: {
      title: "International Supply Chain Kubernetes Migration",
      description: "We migrated CargoLink's supply chain core databases from legacy local servers to a multi-region active-active AKS cluster using Terraform.",
      metric: "Successful migration completed with 0 downtime, cutting infrastructure spend by 35%.",
    },
  },
  finance: {
    slug: "finance",
    name: "Financial Services",
    tagline: "Secure clearance ledger clearances and PCI-DSS Level 1 compliance.",
    summary: "We build transaction ledgers, distributed clearance microservices, and automated KPI compliance logs to replace aging COBOL systems with modern cloud networks.",
    challenges: [
      "Obsolete COBOL clearance systems crashing during volatile market volume surges.",
      "Strict data privacy audit rules demanding comprehensive security logging.",
      "Analytical database reports taking hours to compile and process.",
    ],
    howWeHelp: [
      "Engineering high-concurrency clearing microservices in Go.",
      "Implementing Kusto (KQL) database structures to search through logs instantly.",
      "Enforcing strict database encryption, active IAM tags, and audit logging.",
    ],
    services: [
      { name: "Custom Software Development", href: "/services/custom-software-development" },
      { name: "Cloud Engineering & DevOps", href: "/services/cloud-engineering" },
      { name: "Data Engineering & Lakehouses", href: "/services/data-engineering" },
    ],
    techSolutions: [
      "Distributed clearance microservices in Go using gRPC.",
      "Kusto KQL search indexes for application telemetry logs.",
      "PCI-DSS compliant Azure/AWS secure cloud landing nodes.",
    ],
    successStory: {
      title: "Transaction Clearance Platform Re-engineering",
      description: "We re-engineered a 15-year-old COBOL mainframe transaction clearance system for a clearing house using Go, Kafka, and PostgreSQL Citus database partitions.",
      metric: "System throughput increased to 50,000 transactions per second with 99.999% uptime.",
    },
  },
};

export async function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industriesData[slug];
  if (!industry) {
    return {
      title: "Industry Not Found | i-Cronus",
    };
  }
  return {
    title: `${industry.name} IT Consulting | i-Cronus`,
    description: industry.summary,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const industry = industriesData[slug];

  if (!industry) {
    notFound();
  }

  return <IndustryPageClient industry={industry} />;
}
