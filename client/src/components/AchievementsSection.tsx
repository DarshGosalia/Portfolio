import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Calendar, Award } from "lucide-react";
import { achievements } from "@/lib/portfolio-data";

export default function AchievementsSection() {
    return (
        <section
            id="achievements"
            className="py-20 md:py-32 bg-background/50 scroll-mt-20"
            data-testid="section-achievements"
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
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-achievements-title">
                            Achievements
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Certifications, awards, and recognitions
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={achievement.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:shadow-lg transition-shadow border-primary/20">
                                    <CardHeader>
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="p-2 rounded-full bg-primary/10">
                                                <Trophy className="w-5 h-5 text-primary" />
                                            </div>
                                            <Badge variant="outline" className="ml-auto">
                                                {achievement.date}
                                            </Badge>
                                        </div>
                                        <CardTitle className="leading-tight">{achievement.title}</CardTitle>
                                        <CardDescription className="flex items-center gap-1 mt-1">
                                            <Award className="w-3 h-3" /> {achievement.organization}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{achievement.description}</p>
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
