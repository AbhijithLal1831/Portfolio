import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact"
            className="glass"
            style={{
                padding: "4rem 2rem",
                textAlign: "center",
                marginTop: "4rem",
                borderRadius: "24px 24px 0 0",
                borderBottom: "none",
                position: "relative",
                zIndex: 10
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "2rem",
                    marginBottom: "2rem"
                }}
            >
                <a
                    href="https://github.com/AbhijithLal1831?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    style={{ color: "var(--text-primary)", transition: "transform 0.2s" }}
                >
                    <Github size={24} />
                </a>
                <a
                    href="https://www.linkedin.com/in/abhijith-lal-47400b191?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    style={{ color: "var(--text-primary)", transition: "transform 0.2s" }}
                >
                    <Linkedin size={24} />
                </a>
                <a
                    href="mailto:abhijithlalharivaram@gmail.com"
                    aria-label="Email"
                    style={{ color: "var(--text-primary)", transition: "transform 0.2s" }}
                >
                    <Mail size={24} />
                </a>
            </div>

            <p style={{
                fontSize: "0.9rem",
                color: "var(--text-secondary)",
                fontWeight: 400
            }}>
                © {new Date().getFullYear()} Abhijith Lal. All rights reserved.
            </p>
            <p style={{
                fontSize: "1rem",
                color: "var(--text-secondary)",
                marginTop: "1.5rem",
                opacity: 0.9,
                fontWeight: 500,
                letterSpacing: "0.02em"
            }}>
                Architected by <span style={{
                    background: "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontStyle: "italic",
                    filter: "drop-shadow(0 0 8px rgba(252, 0, 255, 0.3))"
                }}>Abhijith Lal</span>.
                Accelerated by <span style={{
                    color: "var(--gold-text)",
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    background: "linear-gradient(to bottom, #fff 0%, #f8c023 50%, #a16820 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 0 5px rgba(255, 215, 0, 0.5)) drop-shadow(2px 2px 2px rgba(0,0,0,0.3))"
                }}>Antigravity</span>.
            </p>
        </footer>
    );
}
