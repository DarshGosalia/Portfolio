import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Wrench, Cpu, Users } from "lucide-react";
import { skills } from "@/lib/portfolio-data";
import type { Skill } from "@shared/schema";

const categoryConfig = {
  programming: {
    title: "Programming Languages",
    icon: Code2,
    description: "Languages I use to build software"
  },
  software: {
    title: "Software & Tools",
    icon: Wrench,
    description: "Tools and platforms I work with"
  },
  technical: {
    title: "Technical Skills",
    icon: Cpu,
    description: "Engineering competencies"
  },
  soft: {
    title: "Soft Skills",
    icon: Users,
    description: "Professional capabilities"
  }
};

function SkillCategory({ 
  category, 
  skills: categorySkills,
  index 
}: { 
  category: keyof typeof categoryConfig; 
  skills: Skill[];
  index: number;
}) {
  const config = categoryConfig[category];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full hover-elevate transition-all duration-300" data-testid={`card-skills-${category}`}>
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <CardTitle className="text-lg font-semibold">{config.title}</CardTitle>
          </div>
          <p className="text-sm text-muted-foreground">{config.description}</p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {categorySkills.map((skill, skillIndex) => (
              <Badge
                key={skill.name}
                variant="secondary"
                className="font-mono text-xs px-3 py-1"
                data-testid={`badge-skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {skill.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function SkillsSection() {
  const categories = ['programming', 'software', 'technical', 'soft'] as const;
  
  const skillsByCategory = categories.reduce((acc, category) => {
    acc[category] = skills.filter(skill => skill.category === category);
    return acc;
  }, {} as Record<typeof categories[number], Skill[]>);

  return (
    <section
      id="skills"
      className="py-20 md:py-32 bg-card/50 scroll-mt-20"
      data-testid="section-skills"
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
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-skills-title">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit spanning software development, engineering design, and professional collaboration
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <SkillCategory
                key={category}
                category={category}
                skills={skillsByCategory[category]}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
