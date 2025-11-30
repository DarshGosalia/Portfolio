import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";
import { education } from "@/lib/portfolio-data";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-20 md:py-32 bg-card/50 scroll-mt-20"
      data-testid="section-education"
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
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-education-title">
              Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic foundation and achievements
            </p>
          </div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="overflow-hidden" data-testid="card-education">
              <CardContent className="p-8 md:p-10">
                {/* University Header */}
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8 pb-8 border-b border-border">
                  {/* University Logo Placeholder */}
                  <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-10 h-10 text-primary" />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-foreground mb-1" data-testid="text-university">
                      {education.institution}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-2" data-testid="text-degree">
                      {education.degree} in {education.field}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {education.graduationDate}
                      </span>
                      {education.gpa && (
                        <span className="flex items-center gap-1 text-primary font-medium" data-testid="text-gpa">
                          GPA: {education.gpa}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Relevant Coursework */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <h4 className="text-lg font-semibold text-foreground">
                        Relevant Coursework
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {education.coursework.map((course, index) => (
                        <Badge 
                          key={course} 
                          variant="outline" 
                          className="font-normal"
                          data-testid={`badge-course-${index}`}
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-5 h-5 text-primary" />
                      <h4 className="text-lg font-semibold text-foreground">
                        Achievements & Honors
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {education.achievements.map((achievement, index) => (
                        <motion.li
                          key={achievement}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                          className="flex items-center gap-2 text-muted-foreground"
                          data-testid={`text-achievement-${index}`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
