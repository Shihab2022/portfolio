## Getting Started

my-portfolio/
├── public/ # Static media (profile images, project mockups, icons)
│ ├── images/
│ ├── favicon.svg      # Brand favicon (SVG)
│ └── favicon.png      # Brand favicon (PNG / Apple touch icon)
├── src/
│ ├── app/ # Next.js App Router root
│ │ ├── favicon.ico    # Brand favicon (multi-size, auto-served by Next.js)
│ │ ├── layout.tsx # Main global configuration layout (Providers, Fonts)
│ │ ├── page.tsx # Main Portfolio Landing Page (Home, About, Skills, Projects, Contact)
│ │ │
│ │ ├── (public)/ # Route Group for standard public sub-pages
│ │ │ ├── blog/
│ │ │ │ ├── page.tsx # Blog list page (://domain.com)
│ │ │ │ └── [slug]/ # Dynamic sub-folder for blog rendering
│ │ │ │ └── page.tsx # Individual blog article reader view
│ │ │ └── projects/
│ │ │ └── page.tsx # Dedicated expanded projects page
│ │ │
│ │ ├── (auth)/ # Route Group for authentication paths (No path impact)
│ │ │ ├── login/
│ │ │ │ └── page.tsx # Admin / User login form view
│ │ │ └── error/
│ │ │ └── page.tsx # Authentication error callback panel
│ │ │
│ │ └── (protected)/ # Route Group isolating routes needing system access
│ │ └── dashboard/  
│ │ ├── layout.tsx # Sidebar or dashboard navigation framework
│ │ ├── page.tsx # Main dashboard interface view (://domain.com)
│ │ ├── \_components/ # UI parts specific to dashboard management
│ │ │ └── PostForm.tsx # Dynamic multi-part input fields for posts
│ │ ├── upload-post/
│ │ │ └── page.tsx # Form page to write/upload posts (://domain.com/upload-post)
│ │ └── upload-project/
│ │ └── page.tsx # Form page to add new projects to the homepage
│ │
│ │ ├── api/ # Back-end API entry points
│ │ │ └── upload/
│ │ │ └── route.ts # Route handler managing safe server uploads
│ │ │
│ │ ├── components/ # Reusable shared global layout blocks
│ │ │ ├── sections/ # Section blocks used to build your visual homepage layout
│ │ │ │ ├── Hero.tsx
│ │ │ │ ├── About.tsx
│ │ │ │ ├── Experience.tsx
│ │ │ │ └── Contact.tsx
│ │ │ └── ui/ # Independent, modular UI building elements
│ │ │ ├── Button.tsx
│ │ │ ├── Input.tsx
│ │ │ └── Card.tsx
│ │ │
│ │ ├── lib/ # Core SDK config and third-party initializations
│ │ │ ├── db.ts # Database client configuration hook
│ │ │ └── uploadthing.ts # Asset storage service setup helper file
│ │ │
│ │ ├── actions/ # Next.js Server Actions managing mutations
│ │ │ ├── posts.ts # Secure server action creating blog entries
│ │ │ └── projects.ts # Secure server action handling new project records
│ │ │
│ │ └── middleware.ts # Dynamic route blocker (Intercepts unauthenticated hits)
