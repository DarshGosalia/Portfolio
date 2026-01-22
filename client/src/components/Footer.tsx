import { personalInfo, socialLinks } from "@/lib/portfolio-data";
import { Linkedin, Github, Mail, ExternalLink, Heart } from "lucide-react";

const socialIcons: Record<string, typeof Mail> = {
  linkedin: Linkedin,
  github: Github,
  mail: Mail,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-card/50 border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground" data-testid="text-copyright">
            <span>&copy; {currentYear} {personalInfo.name}.</span>
            {/* <span className="hidden sm:inline">Built with</span>
            <Heart className="w-4 h-4 text-red-500 hidden sm:inline" />
            <span className="hidden sm:inline">and lots of coffee.</span> */}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.icon] || ExternalLink;
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.platform}
                  data-testid={`link-footer-${link.platform.toLowerCase()}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
