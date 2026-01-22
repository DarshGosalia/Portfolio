import { motion } from "framer-motion";
import { ArrowRight, MapPin, Mail } from "lucide-react";
import { personalInfo } from "@/lib/portfolio-data";
import profilePhoto from "@/assets/profile-photo.jpg";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-background scroll-mt-20"
      data-testid="section-about"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-about-title">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Passionate about creating technology that makes a difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Left Column - Photo and Quick Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Profile Image */}
              <div className="relative">
                <div className="aspect-square max-w-md rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border border-border">
                  <img
                    src={profilePhoto}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                    data-testid="img-profile"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
              </div>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-muted-foreground" data-testid="text-location">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground" data-testid="text-email-about">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm">{personalInfo.email}</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Bio and Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Bio Paragraphs */}
              <div className="space-y-4">
                {personalInfo.about.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base md:text-lg text-foreground/80 leading-relaxed"
                    data-testid={`text-about-paragraph-${index}`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Key Highlights */}
              <div className="pt-6 border-t border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Key Highlights
                </h3>
                <ul className="space-y-3">
                  {personalInfo.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3"
                      data-testid={`text-highlight-${index}`}
                    >
                      <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground/80">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
