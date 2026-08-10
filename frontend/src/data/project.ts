export interface TechCategory {
  frontend: string[];
  backend: string[];
  databaseAndDevOps: string[];
}

export interface ProjectItems {
  id: string;
  number: string;
  year: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image: string;
  techCategorized: TechCategory;
  allTech: string[];
  challenges: string;
  architectureDetails: string;
  apiOrSocketHighlights: string[];
  features: string[];
  accomplishments: string[];
  liveUrl: string;
  githubUrl: string;
}

export const PROJECTS: ProjectItems[] = [
  {
    id: "fixitnow-platform",
    number: "01",
    year: "2026",
    title: "FixItNow",
    subtitle: "Service Booking & Payment Management Portal",
    category: "Enterprise Web App • Dynamic Billing & Payments",
    description:
      "An end-to-end service marketplace connecting clients with field specialists. Features real-time payment tracking, dynamic dispatching, and custom browser-driven PDF invoice exports.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop",
    techCategorized: {
      frontend: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS"],
      backend: [
        "Node.js",
        "RESTful API Integration",
        "Middleware Authentication",
      ],
      databaseAndDevOps: [
        "PostgreSQL",
        "CSS Print Engine",
        "Vercel Deployment",
      ],
    },
    allTech: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "REST APIs",
    ],
    challenges:
      "Designing print-optimized, shadow-free HTML/CSS receipt layouts that automatically strip navigation chrome and drop shadows during native browser PDF printing.",
    architectureDetails:
      "Utilizes Next.js App Router for server-rendered page shells and client-side dynamic search hooks. Payment states stream through unified API service abstraction layers.",
    apiOrSocketHighlights: [
      "API Route: GET /api/payments/history?status=PAID",
      "API Route: POST /api/bookings/assign-technician",
      "Print trigger utility: window.print() with custom @media CSS rules",
    ],
    features: [
      "Live payment tracking (PAID, PENDING, FAILED) with dynamic status badges",
      "Print-optimized popup receipt window for client PDF generation",
      "Multi-parameter search filtering across Service Title, Booking ID, and Status",
    ],
    accomplishments: [
      "Built multi-field search logic capable of instant filtering across thousands of transaction logs.",
      "Engineered CSS `@media print` rules for clean, print-ready client invoice generation.",
    ],
    liveUrl: "https://fixitnow-frontend-theta.vercel.app/",
    githubUrl: "https://github.com/Shihab2022/FixItNow-",
  },
  {
    id: "chatty-app",
    number: "02",
    year: "2026",
    title: "Chatty",
    subtitle: "Real-Time Group Messaging & Communication Engine",
    category: "Full-Stack • WebSockets • Cloud Messaging",
    description:
      "A high-throughput instant messaging system supporting concurrent group channels, message forwarding, reply threading, presence tracking, and cloud media pipelines.",
    image:
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1200&auto=format&fit=crop",
    techCategorized: {
      frontend: [
        "React 18",
        "TypeScript",
        "Vite",
        "Redux Toolkit",
        "MUI",
        "Framer Motion",
      ],
      backend: ["Node.js", "Express", "Socket.io", "Multer", "JWT / OAuth 2.0"],
      databaseAndDevOps: ["MongoDB / Mongoose", "PostgreSQL", "Cloudinary"],
    },
    allTech: [
      "React 18",
      "TypeScript",
      "Vite",
      "Socket.io",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "Mongoose",
      "PostgreSQL",
      "MUI",
      "Cloudinary",
    ],
    challenges:
      "Managing sub-50ms bi-directional message synchronization across active group rooms while keeping user sessions synchronized with JWT and handling concurrent media upload streams.",
    architectureDetails:
      "Built with a decoupled hybrid database model: MongoDB handles dynamic message payloads and nested reaction threads, while PostgreSQL manages structured user profiles and relationships.",
    apiOrSocketHighlights: [
      "Socket Event: 'join_room' & 'leave_room' state handlers",
      "Socket Event: 'send_message' with optimistic Redux dispatch",
      "REST Route: POST /api/v1/auth/google-login (OAuth 2.0)",
      "REST Route: POST /api/v1/chats/forward-message",
    ],
    features: [
      "Real-time bi-directional chat channels via Socket.io",
      "Group chat creation, administration, and member roles",
      "Message forwarding, reply threads, and Emoji Mart picker",
      "Google OAuth 2.0 & JWT secure authentication",
    ],
    accomplishments: [
      "Achieved sub-50ms latency across high-frequency message rooms.",
      "Implemented Redux optimistic updates for instantaneous message feedback.",
    ],
    liveUrl: "https://chat-app-lyart-nine-78.vercel.app/",
    githubUrl: "https://github.com/Shihab2022/chat-app",
  },

  {
    id: "retail-gis-platform",
    number: "03",
    year: "2026",
    title: "Retail GIS Intelligence",
    subtitle: "Location Analytics & Spatial Advisory Platform",
    category: "Spatial GIS • Location Analytics & Heatmaps",
    description:
      "Spatial analytics engine providing territory mapping, catchment area calculations, competitor density heatmaps, and dynamic ROI forecasts for commercial site selection.",
    image:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop",
    techCategorized: {
      frontend: [
        "Next.js",
        "React",
        "TypeScript",
        "Deck.gl Canvas",
        "Mapbox GL",
      ],
      backend: ["Node.js", "PostGIS Spatial Engine", "Coordinate Extractor"],
      databaseAndDevOps: ["PostgreSQL / PostGIS", "Docker", "Spatial Indexing"],
    },
    allTech: [
      "Next.js",
      "React",
      "TypeScript",
      "Deck.gl",
      "Mapbox GL",
      "PostgreSQL / PostGIS",
    ],
    challenges:
      "Processing and rendering multi-layered vector spatial datasets and dynamic canvas overlays in real-time without causing browser memory spikes.",
    architectureDetails:
      "Uses Deck.gl GPU-accelerated canvas overlays on top of Mapbox GL tile maps. Spatial boundary calculations are computed via PostGIS backend spatial indices.",
    apiOrSocketHighlights: [
      "Spatial Endpoint: POST /api/gis/catchment-buffer",
      "Spatial Endpoint: GET /api/gis/competitor-density",
    ],
    features: [
      "Custom Deck.gl vector overlay layers & demographic heatmaps",
      "Demographic catchment area & drive-time spatial calculations",
    ],
    accomplishments: [
      "Optimized client web canvas to smoothly render over 100,000 spatial data points.",
    ],
    liveUrl:
      "https://sp-dev.gospatic.com/catchment/sample/c4fcbc272a03aa1e58d72f22c7461d9d",
    githubUrl: "https://github.com",
  },
];
