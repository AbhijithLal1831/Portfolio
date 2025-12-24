import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
    title: string;
    excerpt: string;
    date: string;
    tags: string[];
    image?: string;
    onClick: () => void;
}

export default function BlogCard({ title, excerpt, date, tags, image, onClick }: BlogCardProps) {
    return (
        <motion.div
            className="glass"
            whileHover={{ y: -5, backgroundColor: "var(--glass-hover-bg)" }}
            onClick={onClick}
            style={{
                padding: "1.5rem",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                height: "100%",
                transition: "background-color 0.3s ease",
                cursor: "pointer"
            }}
        >
            {image && (
                <div style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    marginBottom: "0.5rem"
                }}>
                    <img
                        src={image}
                        alt={title}
                        style={{ width: "100%", height: "auto", display: "block" }}
                    />
                </div>
            )}

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                <span>{date}</span>
            </div>

            <h3 style={{ fontSize: "1.25rem", margin: 0, lineHeight: 1.3 }}>{title}</h3>

            <p style={{ color: "var(--text-secondary)", flex: 1, margin: 0 }}>
                {excerpt}
            </p>

            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "auto" }}>
                {tags.map(tag => (
                    <span
                        key={tag}
                        style={{
                            fontSize: "0.75rem",
                            padding: "0.25rem 0.75rem",
                            borderRadius: "20px",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            border: "1px solid var(--glass-border)"
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginTop: "1rem",
                    color: "var(--accent)",
                    fontWeight: 600
                }}
            >
                Read Article <ArrowRight size={16} />
            </div>
        </motion.div>
    );
}
