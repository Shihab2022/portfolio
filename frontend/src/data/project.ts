export interface TechCategory {
  frontend: string[];
  backend: string[];
  databaseAndDevOps: string[];
}

export interface ProjectVisualization {
  id: string;
  label: string;
  settings: string[];
}

export interface ProjectMapStyle {
  id: string;
  label: string;
}

export interface ProjectCityCoverage {
  id: string;
  label: string;
  country: string;
  useApi: boolean;
}

export interface ProjectDataSource {
  name: string;
  type: string;
  status: string;
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
  visualizations?: ProjectVisualization[];
  heatmapGradients?: string[];
  mapStyles?: ProjectMapStyle[];
  cityCoverage?: ProjectCityCoverage[];
  appRoutes?: { path: string; label: string }[];
  dataSources?: ProjectDataSource[];
  envVariables?: string[];
  demoCredentials?: { email: string; password: string };
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
      "An end-to-end home-service marketplace connecting customers with verified technicians. Features real-time booking lifecycle and payment tracking, an interactive nearest-match map, a task/job-request marketplace, automated email notifications, and custom PDF invoice exports.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop",
    techCategorized: {
      frontend: [
        "Next.js (App Router)",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "MapLibre GL + react-map-gl",
        "Recharts",
      ],
      backend: [
        "Node.js",
        "Express",
        "RESTful API Integration",
        "Middleware Authentication (JWT)",
        "BullMQ + Redis Email Queue",
      ],
      databaseAndDevOps: [
        "PostgreSQL",
        "Prisma ORM",
        "Cloudinary Image Storage",
        "SSLCOMMERZ Payments",
        "Vercel Deployment",
      ],
    },
    allTech: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma ORM",
      "Redis + BullMQ",
      "SSLCOMMERZ",
      "MapLibre GL",
      "Cloudinary",
    ],
    challenges:
      "Designing print-optimized, shadow-free HTML/CSS receipt layouts that automatically strip navigation chrome and drop shadows during native browser PDF printing - while engineering Haversine-based geolocation queries for real-time nearest-match dispatch on the interactive map.",
    architectureDetails:
      "Utilizes Next.js App Router for server-rendered page shells and client-side dynamic hooks. Booking lifecycles, payment states, and map geolocation stream through unified Express + Prisma service layers backed by PostgreSQL.",
    apiOrSocketHighlights: [
      "API Route: GET /payments — payment history with live transaction status (PAID / PENDING / FAILED)",
      "API Route: POST /bookings — schedule service with free time-slot validation",
      "API Route: GET /map/technicians?latitude&longitude&radiusKm — Haversine nearest-match dispatch",
      "API Route: POST /job-requests/:id/applications — technician applies to an open task",
      "Print trigger utility: window.print() with custom @media CSS rules for PDF receipts",
    ],
    features: [
      "Role-based dashboards (Customer / Technician / Admin) with full RBAC access control",
      "Real-time booking lifecycle (REQUESTED → ACCEPTED → PAID → IN_PROGRESS → COMPLETED) with automated email notifications",
      "Interactive map with 1–50 km radius nearest-match dispatch for technicians and open tasks",
      "SSLCOMMERZ payment integration with payment history, status badges, and PDF receipt downloads",
      "Task marketplace — customers post jobs, nearby technicians apply, customers accept and create bookings",
      "Automated email engine — 16+ templates, booking reminders, review reminders, idempotent queueing (BullMQ)",
    ],
    accomplishments: [
      "Engineered a real-time geolocation engine with the Haversine formula to match customers with the closest technicians/tasks within a configurable radius.",
      "Built a complete booking lifecycle with role-based status transitions and automated email notifications at every state change.",
      "Designed CSS @media print rules and a popup print utility for clean, print-ready PDF client receipts.",
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
        "socket.io-client",
        "Emoji Mart",
        "Harper.js (smart text suggestions)",
        "qrcode",
      ],
      backend: [
        "Node.js",
        "Express",
        "Socket.io",
        "Multer",
        "JWT / OAuth 2.0",
        "Nodemailer",
        "bcrypt",
        "Cloudinary",
      ],
      databaseAndDevOps: [
        "MongoDB / Mongoose",
        "PostgreSQL",
        "Cloudinary",
        "Docker (multi-stage)",
        "docker-compose",
        "Render Blueprint",
        "Nginx (reverse proxy + WebSocket upgrade)",
      ],
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
      "Framer Motion",
      "Multer",
      "Nodemailer",
      "Harper.js",
      "qrcode",
      "Docker / Render",
    ],
    challenges:
      "Managing sub-50ms bi-directional message synchronization across active group rooms while keeping user sessions synchronized with JWT and handling concurrent media upload streams.",
    architectureDetails:
      "Built with a decoupled hybrid database model: MongoDB handles dynamic message payloads and nested reaction threads, while PostgreSQL manages structured user profilesand relationships.",
    apiOrSocketHighlights: [
      "Socket Event: 'join_room' & 'leave_room' state handlers",
      "Socket Event: 'send_message' with optimistic Redux dispatch",
      "REST Route: POST /api/v1/auth/google-login (OAuth 2.0)",
      "REST Route: POST /api/v1/chats/forward-message",
      "Socket Event: 'getOnlineUsers' live presence broadcast",
      "Socket Event: 'typing' / 'userTyping' and 'stopTyping' / 'userStopTyping'",
      "Socket Event: 'messageSeen' / 'messageSeenUpdate' read receipts",
      "Socket Event: 'newEmoji' / 'removeEmoji' live emoji reactions",
      "Socket Event: 'groupCreated' / 'groupMemberChanged' / 'groupUpdated' / 'groupDeleted'",
      "Socket Event: 'webrtc:offer' / 'webrtc:answer' / 'webrtc:ice-candidate' call signaling relay",
      "Socket Event: 'call:start' / 'call:incoming' / 'call:accepted' / 'call:rejected' / 'call:missed' / 'call:ended'",
      "REST Route: POST /api/user/google-login, /api/user/google-register (OAuth 2.0)",
      "REST Route: POST /api/message/send, /api/message/forward, /api/message/reply, /api/message/emoji",
      "REST Route: POST /api/message/groups, /api/message/groups/:groupId/members",
      "REST Route: POST /api/call/logs, GET /api/call/history",
    ],
    features: [
      "Real-time bi-directional chat channels via Socket.io",
      "Group chat creation, administration,and member roles",
      "Message forwarding, reply threads,and Emoji Mart picker",
      "Google OAuth 2.0 & JWT secure authentication",
      "Direct (1:1) and group messaging with sub-50ms bidirectional sync",
      "Typing indicators and read receipts (seen_at tracking)",
      "Live online/offline presence broadcast",
      "Edit, delete, clear chatand delete-all messaging tools",
      "Emoji reactions added/removed in realtime",
      "Disappearing messages (off / 24h / 7d / 30d)",
      "Group invitations by email + accept flow",
      "Block / unblock contacts (blocked users cannot message or call)",
      "Media sharing via Multer → Cloudinary (images, videos, PDFs)",
      "Shared conversation media viewer + inline file previews",
      "Audio & video calls over WebRTC with Socket.io signaling",
      "Call history with received / rejected / missed / completed tracking",
      "Configurable STUN / TURN ICE servers",
      "QR code connect (show my code / scan code with camera)",
      "Smart text suggestions (Harper.js spelling, grammar, word-completion, Bangla-safe)",
      "Dark/light themes, custom wallpapers, compact list, font sizes",
      "Debounced search across chats and contacts, date-grouped timelines",
      "Landing pages (Features, How It Works, Preview, Testimonials)",
    ],
    accomplishments: [
      "Built a real-time messaging system with Socket.io achieving sub-50ms latency across group chat channels.",
      "Engineered a PostgreSQL database architecture with optimized schemas and indexed queries to manage user relationships, group memberships,and message threading.",
      "Implemented optimized PostgreSQL queries, Redux optimistic updates,and Google OAuth, JWT authentication.",
      "Achieved sub-50ms latency across high-frequency message rooms.",
      "Implemented Redux optimistic updates for instantaneous message feedback.",
      "Engineered a full audio/video calling system over WebRTC with Socket.io signaling and automated PostgreSQL call logging",
      "Authored a multi-container Render deployment (nginx load-balancer + SPA + API) with WebSocket-aware reverse proxying",
    ],
    liveUrl: "https://chat-app-lyart-nine-78.vercel.app",
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
      "Processing and rendering multi-layered vector spatial datasets and dynamic canvas overlays real-time without causing browser memory spikes.",
    architectureDetails:
      "Uses Deck.gl GPU-accelerated canvas overlays on top of Mapbox GL tile maps. Spatial boundary calculations are computed via PostGIS backend spatial indices.",
    apiOrSocketHighlights: [
      "Spatial Endpoint: GET /api/pois?path=site_analysis_delhi/*.json (GitHub-backed POI dataset)",
      "Spatial Endpoint: POST /api/gis/catchment-buffer",
      "Spatial Endpoint: GET /api/gis/competitor-density",
      "Auth Endpoint: POST /api/auth/register",
      "Auth Endpoint: POST /api/auth/login",
      "Auth Endpoint: POST /api/auth/logout",
      "Auth Endpoint: GET /api/auth/me",
      "Auth Endpoint: POST /api/auth/forgot-password",
      "Auth Endpoint: POST /api/auth/reset-password",
    ],
    features: [
      "Custom Deck.gl vector overlay layers & demographic heatmaps",
      "Demographic catchment area & drive-time spatial calculations",
      "Multi-layer GIS workspace with 13 POI categories: Malls, Furniture, Electronics, Leisure, Medical, Transport, Companies, Education, Fashion, Fitness, Food, Others, Supermarket",
      "6 Deck.gl visualizations: Scatter, Icon, Heatmap, Cluster, Hexagon, Density",
      "6 Mapbox GL base-map themes: Streets, Light, Dark, Satellite, Satellite Streets, Outdoors",
      "Per-layer filtering: sub-category, brand, store type, price/cost range, rating, votes, service options",
      "Global command-palette search across layers, brands & towns (Ctrl/⌘ + K)",
      "Live analytics & market-overview drawer (per-layer counts, top districts, market delta)",
      "Territory & market mapping with district-level insights",
      "Save projects & share maps via encoded URLs (city, style, layers, viewport, search)",
      "Export map to PNG/JPG at 1x/2x/4x and location data to CSV/JSON/GeoJSON",
      "Street View integration for selected locations",
      "Dataset import (CSV, Excel, GeoJSON, JSON) & database connections (PostgreSQL, MySQL, MongoDB, API)",
      "Multi-city & region coverage: Delhi (real API data), All of Bangladesh main 8 divisions, Mumbai, Bengaluru, Hyderabad",
      "Authentication: register, login, logout, forgot/reset-password, session restore",
    ],
    accomplishments: [
      "Optimized client web canvas to smoothly render over 100,000 spatial data points.",
      "Real spatial indexing powered by the PostGIS backend.",
      "Seamless real + mock data layers combined into one unified workspace",
    ],
    visualizations: [
      {
        id: "scatter",
        label: "Scatter",
        settings: [
          "pointSize",
          "opacity",
          "fillColor",
          "borderColor",
          "borderWidth",
        ],
      },
      {
        id: "icon",
        label: "Icon",
        settings: ["glyph", "size", "color", "opacity", "rotation"],
      },
      {
        id: "heatmap",
        label: "Heatmap",
        settings: ["radius", "intensity", "opacity", "weight", "gradient"],
      },
      {
        id: "cluster",
        label: "Cluster",
        settings: ["clusterRadius", "maxZoom", "color", "opacity"],
      },
      {
        id: "hexagon",
        label: "Hexagon",
        settings: ["radius", "opacity", "elevation"],
      },
      {
        id: "density",
        label: "Density",
        settings: ["radius", "opacity", "weight", "gradient"],
      },
    ],
    heatmapGradients: ["purple", "viridis", "warm", "cool"],
    mapStyles: [
      { id: "streets", label: "Streets" },
      { id: "light", label: "Light" },
      { id: "dark", label: "Dark" },
      { id: "satellite", label: "Satellite" },
      { id: "satellite-streets", label: "Satellite Streets" },
      { id: "outdoors", label: "Outdoors" },
    ],
    cityCoverage: [
      { id: "delhi", label: "Delhi", country: "India", useApi: true },
      { id: "mumbai", label: "Mumbai", country: "India", useApi: false },
      { id: "bengaluru", label: "Bengaluru", country: "India", useApi: false },
      { id: "hyderabad", label: "Hyderabad", country: "India", useApi: false },
      {
        id: "bd-dhaka",
        label: "Dhaka Division",
        country: "Bangladesh",
        useApi: false,
      },
      {
        id: "bd-chattogram",
        label: "Chattogram Division",
        country: "Bangladesh",
        useApi: false,
      },
      {
        id: "bd-rajshahi",
        label: "Rajshahi Division",
        country: "Bangladesh",
        useApi: false,
      },
      {
        id: "bd-khulna",
        label: "Khulna Division",
        country: "Bangladesh",
        useApi: false,
      },
      {
        id: "bd-barishal",
        label: "Barishal Division",
        country: "Bangladesh",
        useApi: false,
      },
      {
        id: "bd-sylhet",
        label: "Sylhet Division",
        country: "Bangladesh",
        useApi: false,
      },
      {
        id: "bd-rangpur",
        label: "Rangpur Division",
        country: "Bangladesh",
        useApi: false,
      },
      {
        id: "bd-mymensingh",
        label: "Mymensingh Division",
        country: "Bangladesh",
        useApi: false,
      },
    ],
    appRoutes: [
      { path: "/", label: "Marketing/landing homepage" },
      { path: "/dashboard", label: "GIS workspace (maps, layers, analytics)" },
      { path: "/login", label: "Sign in" },
      { path: "/register", label: "Create account" },
      { path: "/forgot-password", label: "Request password reset" },
      { path: "/reset-password", label: "Reset password" },
    ],
    dataSources: [
      { name: "Delhi POI Dataset", type: "API", status: "Connected" },
      {
        name: "Bangladesh Generated Dataset",
        type: "JSON",
        status: "Connected",
      },
      { name: "India Generated Dataset", type: "JSON", status: "Available" },
      { name: "Mapbox Tiles", type: "Mapbox", status: "Connected" },
      { name: "CSV Upload", type: "CSV", status: "Available" },
      { name: "GeoJSON Import", type: "GeoJSON", status: "Available" },
      { name: "PostgreSQL Connection", type: "PostgreSQL", status: "Disabled" },
      { name: "MongoDB Connection", type: "MongoDB", status: "Disabled" },
    ],
    envVariables: [
      "NEXT_PUBLIC_MAP_BOX_ACCESS_TOKEN",
      "NEXT_PUBLIC_GOOGLE_MAPS_KEY",
      "GITHUB_TOKEN",
      "GITHUB_OWNER",
      "GITHUB_REPO",
      "DATABASE_URL (optional)",
    ],
    demoCredentials: {
      email: "demo@placedesk.com",
      password: "demo1234",
    },
    liveUrl: "https://place-desk-xi.vercel.app",
    githubUrl: "https://github.com/Shihab2022/PlaceDesk",
  },
];
