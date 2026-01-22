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

          {/* Education Cards */}
          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Card className="overflow-hidden" data-testid={`card-education-${index}`}>
                  <CardContent className="p-8 md:p-10">
                    {/* University Header */}
                    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8 pb-8 border-b border-border">
                      {/* University Logo Placeholder */}
                      <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-10 h-10 text-primary" />
                      </div>

                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-foreground mb-1" data-testid={`text-university-${index}`}>
                          {edu.institution}
                        </h3>
                        <p className="text-lg text-muted-foreground mb-2" data-testid={`text-degree-${index}`}>
                          {edu.degree} in {edu.field}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {edu.graduationDate}
                          </span>
                          {edu.gpa && (
                            <span className="flex items-center gap-1 text-primary font-medium" data-testid={`text-gpa-${index}`}>
                              GPA: {edu.gpa}
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
                          {edu.coursework.map((course, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="font-normal"
                              data-testid={`badge-course-${index}-${idx}`}
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
                          {edu.achievements.map((achievement, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: 10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                              className="flex items-center gap-2 text-muted-foreground"
                              data-testid={`text-achievement-${index}-${idx}`}
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
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
