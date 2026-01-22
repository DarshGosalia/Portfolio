import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ExternalLink, Github, X, ChevronRight } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import type { Project } from "@shared/schema";

function ProjectCard({
  project,
  onClick,
  index
}: {
  project: Project;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className="group cursor-pointer overflow-hidden hover-elevate transition-all duration-300"
        onClick={onClick}
        data-testid={`card-project-${project.id}`}
      >
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Hover Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/30">
              View Details
            </span>
          </div>
        </div>

        <CardContent className="p-6">
          {/* Title */}
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors" data-testid={`text-project-title-${project.id}`}>
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2" data-testid={`text-project-desc-${project.id}`}>
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="font-mono text-xs"
                data-testid={`badge-tech-${project.id}-${tech.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="font-mono text-xs">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ProjectModal({
  project,
  isOpen,
  onClose
}: {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0" data-testid={`modal-project-${project.id}`}>
        {/* Banner Image */}
        <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-muted">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
            data-testid="img-modal-project"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-background/80 backdrop-blur text-foreground border-border/50"
                >
                  {tech}
                </Badge>
              ))}
            </div>
            <DialogTitle className="text-3xl md:text-4xl font-bold text-foreground mb-2 drop-shadow-md" data-testid="text-modal-title">
              {project.title}
            </DialogTitle>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-8">
          <DialogDescription className="text-lg text-muted-foreground leading-relaxed">
            {project.longDescription || project.description}
          </DialogDescription>

          {/* Problem / Solution / Results Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-muted/50 p-5 rounded-lg border border-border/50" data-testid="text-modal-problem">
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                Problem
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
            </div>

            <div className="bg-muted/50 p-5 rounded-lg border border-border/50" data-testid="text-modal-solution">
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                Solution
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
            </div>

            <div className="bg-muted/50 p-5 rounded-lg border border-border/50" data-testid="text-modal-results">
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                Results
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.results}</p>
            </div>
          </div>

          {/* Key Features */}
          <div data-testid="list-modal-features">
            <h4 className="text-xl font-bold text-foreground mb-4 border-b border-border pb-2">
              Key Features
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-md hover:bg-muted/50 transition-colors" data-testid={`text-modal-feature-${index}`}>
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ChevronRight className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-6 border-t border-border">
            {project.githubUrl && (
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open(project.githubUrl, "_blank")}
                data-testid="button-github-link"
                className="gap-2"
              >
                <Github className="w-5 h-5" />
                View Source
              </Button>
            )}
            {project.liveUrl && (
              <Button
                size="lg"
                onClick={() => window.open(project.liveUrl, "_blank")}
                data-testid="button-live-demo"
                className="gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-20 md:py-32 bg-background scroll-mt-20"
      data-testid="section-projects"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-projects-title">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of engineering projects showcasing problem-solving, innovation, and technical expertise
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
