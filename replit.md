# Engineering Student Portfolio

## Overview

This is a modern, professional portfolio website for an engineering student (Alex Chen) built as a single-page application. The site showcases technical skills, projects, education, and provides a contact form for potential employers and collaborators. The application uses a full-stack architecture with React frontend and Express backend, featuring smooth animations, responsive design, and a clean modern aesthetic inspired by Linear's typography and Notion's layouts.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Single-page application (SPA) with client-side routing via Wouter
- Component-based architecture with reusable UI elements

**UI Component Library**
- shadcn/ui component system (New York variant) built on Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Framer Motion for smooth scroll animations and page transitions
- Custom spacing system using consistent Tailwind units (4, 6, 8, 12, 16, 20, 24)

**State Management**
- TanStack Query (React Query) for server state management and API interactions
- React Hook Form with Zod validation for form handling and validation
- Local component state for UI interactions

**Design System**
- Typography: Inter (primary font) and JetBrains Mono (code/technical tags)
- Color scheme: Neutral base with customizable HSL color variables supporting light/dark modes
- Consistent border radius system (sm: 3px, md: 6px, lg: 9px)
- Custom CSS variables for elevation, shadows, and interactive states

**Page Structure**
Single-page layout with smooth-scroll navigation to sections:
- Hero section with full-viewport background image
- About Me with two-column layout
- Skills organized in four categories (programming, software, technical, soft)
- Projects showcase with modal details
- Education timeline
- Contact form
- Footer with social links

### Backend Architecture

**Server Framework**
- Express.js for HTTP server and API routing
- Native HTTP server wrapper for WebSocket support capability
- Custom request logging middleware tracking response times and status codes

**API Design**
- RESTful endpoints under `/api` prefix
- POST `/api/contact` - Contact form submission with Zod validation
- GET `/api/resume` - Resume download endpoint (text-based generation)
- JSON request/response format with error handling

**Development vs Production**
- Development: Vite middleware integration for HMR and live reloading
- Production: Static file serving from pre-built dist/public directory
- Environment-based configuration via NODE_ENV

**Data Validation**
- Shared schema definitions between client and server using Drizzle-Zod
- Runtime validation on API endpoints prevents invalid data submission
- Type-safe data contracts enforced across the stack

**Build Process**
- Custom build script using esbuild for server bundling
- Selective dependency bundling (allowlist) to reduce cold start times
- Parallel client (Vite) and server (esbuild) builds
- Output: Optimized single CJS file for server, static assets for client

### Data Storage

**Current Implementation**
- In-memory storage using Map-based implementation (MemStorage class)
- Stores user records and contact form submissions temporarily
- Data persists only during server runtime (no persistence across restarts)

**Schema Definition**
- Drizzle ORM schema defined for PostgreSQL compatibility
- Tables: `users` (authentication ready) and `contact_submissions`
- UUID primary keys with auto-generation
- Zod schemas for runtime validation aligned with database schema

**Database Configuration**
- Drizzle Kit configured for PostgreSQL dialect
- Migration folder structure prepared (`./migrations`)
- Schema location: `./shared/schema.ts`
- Neon Database serverless driver dependency included
- Database URL expected via `DATABASE_URL` environment variable

**Migration Strategy**
- Schema push capability via `npm run db:push`
- Drizzle Kit manages schema changes and migrations
- Shared types between frontend and backend ensure consistency

### External Dependencies

**Third-Party UI Libraries**
- Radix UI: Accessible component primitives (20+ components including Dialog, Dropdown, Popover, etc.)
- Framer Motion: Animation library for scroll-based and interactive animations
- Lucide React: Icon library for consistent iconography
- Embla Carousel: Carousel/slider functionality
- CMDK: Command menu component
- React Day Picker: Calendar/date picker component

**Validation & Forms**
- Zod: Schema validation library
- React Hook Form: Form state management
- @hookform/resolvers: Zod resolver for React Hook Form integration
- zod-validation-error: User-friendly error messages

**Database & Backend Services**
- @neondatabase/serverless: Serverless PostgreSQL client
- Drizzle ORM: Type-safe ORM for database operations
- connect-pg-simple: PostgreSQL session store (prepared for authentication)

**Development Tools**
- @replit/vite-plugin-runtime-error-modal: Error overlay for Replit environment
- @replit/vite-plugin-cartographer: Replit-specific development features
- @replit/vite-plugin-dev-banner: Development mode indicator

**Fonts**
- Google Fonts: Inter (primary) and JetBrains Mono (monospace)
- Preconnected to fonts.googleapis.com and fonts.gstatic.com for performance

**Image Assets**
- Unsplash: Stock photography for portfolio images
- Local asset folder: `attached_assets/generated_images/` for custom graphics

**Styling**
- Tailwind CSS: Utility-first CSS framework
- PostCSS with Autoprefixer: CSS processing pipeline
- class-variance-authority: Variant-based component styling
- clsx & tailwind-merge: Conditional className utilities