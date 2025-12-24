import { Github, Linkedin, Mail, ArrowUpRight, Users } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function Footer() {
    const [visitorCount, setVisitorCount] = useState<number | null>(null);
    const hasFetched = useRef(false);

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        fetch("https://api.counterapi.dev/v1/abhijithlal-portfolio/visits/up")
            .then((res) => res.json())
            .then((data) => setVisitorCount(data.count))
            .catch((err) => console.error("Error fetching visitor count:", err));
    }, []);

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
                    marginBottom: "2rem",
                    flexWrap: "wrap"
                }}
            >
                <a
                    href="https://github.com/AbhijithLal1831?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="group"
                    style={{
                        color: "var(--text-primary)",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.75rem 1.25rem",
                        borderRadius: "12px",
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.05)",
                        textDecoration: "none"
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
                    }}
                >
                    <Github size={20} />
                    <span style={{ fontSize: "0.9rem", fontWeight: 500 }}>GitHub</span>
                    <ArrowUpRight size={16} style={{
                        opacity: 0.7,
                    }} />
                </a>
                <a
                    href="https://www.linkedin.com/in/abhijith-lal-47400b191?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="group"
                    style={{
                        color: "var(--text-primary)",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.75rem 1.25rem",
                        borderRadius: "12px",
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.05)",
                        textDecoration: "none"
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
                    }}
                >
                    <Linkedin size={20} />
                    <span style={{ fontSize: "0.9rem", fontWeight: 500 }}>LinkedIn</span>
                    <ArrowUpRight size={16} style={{
                        opacity: 0.7,
                    }} />
                </a>
                <a
                    href="mailto:abhijithlalharivaram@gmail.com"
                    aria-label="Email"
                    className="group"
                    style={{
                        color: "var(--text-primary)",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.75rem 1.25rem",
                        borderRadius: "12px",
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.05)",
                        textDecoration: "none"
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
                    }}
                >
                    <Mail size={20} />
                    <span style={{ fontSize: "0.9rem", fontWeight: 500 }}>Email</span>
                    <ArrowUpRight size={16} style={{
                        opacity: 0.7,
                    }} />
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

            {visitorCount !== null && (
                <div style={{
                    marginTop: "2rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.5rem 1rem",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    borderRadius: "20px",
                    color: "var(--text-secondary)",
                    fontSize: "0.8rem",
                    fontWeight: 500
                }}>
                    <Users size={14} />
                    <span>{visitorCount.toLocaleString()} Visitors</span>
                </div>
            )}
        </footer>
    );
}
