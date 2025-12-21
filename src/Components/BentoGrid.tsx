import { motion } from "framer-motion";
import { Code, Cloud, Server, Database, Terminal, Cpu } from "lucide-react";


const items = [
    {
        title: "Experience",
        content: "2.5+ Years in Full Stack Development",
        icon: <Terminal size={24} color="var(--text-primary)" />,
        colSpan: 2,
        rowSpan: 1,
        gradient: "linear-gradient(135deg, rgba(255, 107, 107, 0.4), rgba(255, 71, 87, 0.1))",
    },
    {
        title: "Cloud Native",
        content: "Google Cloud Platform (GCP) Expert",
        icon: <Cloud size={24} color="var(--text-primary)" />,
        colSpan: 1,
        rowSpan: 1,
        gradient: "linear-gradient(135deg, rgba(84, 160, 255, 0.4), rgba(46, 134, 222, 0.1))",
    },
    {
        title: "Tech Stack",
        content: "React, Java, TypeScript, Spring Boot",
        icon: <Code size={24} color="var(--text-primary)" />,
        colSpan: 1,
        rowSpan: 2,
        gradient: "linear-gradient(135deg, rgba(95, 39, 205, 0.4), rgba(52, 31, 151, 0.1))",
    },
    {
        title: "Backend",
        content: "Scalable API Design & Database Management",
        icon: <Server size={24} color="var(--text-primary)" />,
        colSpan: 2,
        rowSpan: 1,
        gradient: "linear-gradient(135deg, rgba(255, 159, 67, 0.4), rgba(238, 82, 83, 0.1))",
    },
    {
        title: "Optimization",
        content: "High Performance & Clean Code",
        icon: <Cpu size={24} color="var(--text-primary)" />,
        colSpan: 1,
        rowSpan: 1,
        gradient: "linear-gradient(135deg, rgba(16, 172, 132, 0.4), rgba(29, 209, 161, 0.1))",
    },
    {
        title: "Database",
        content: "PostgreSQL, MongoDB, Redis, MySQL",
        icon: <Database size={24} color="var(--text-primary)" />,
        colSpan: 2,
        rowSpan: 1,
        gradient: "linear-gradient(135deg, rgba(46, 213, 115, 0.4), rgba(123, 237, 159, 0.1))",
    },
];

export default function BentoGrid() {
    return (
        <section id="about" style={{ padding: "4rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                    fontSize: "clamp(2rem, 5vw, 3rem)",
                    marginBottom: "3rem",
                    textAlign: "center"
                }}
            >
                ABOUT ME
            </motion.h2>

            <div
                className="bento-grid"
            >
                <style>{`
            .bento-grid {
                display: grid;
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }
            @media (min-width: 768px) {
                .bento-grid {
                    grid-template-columns: repeat(3, 1fr);
                    grid-auto-rows: 180px;
                }
            }
        `}</style>
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        className={`bento-item-${index} glass`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                        style={{
                            background: item.gradient,
                            borderRadius: "24px",
                            padding: "2rem",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            gridColumn: `span ${item.colSpan}`,
                            gridRow: `span ${item.rowSpan}`,
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            backdropFilter: "blur(10px)"
                        }}
                    >
                        {/* Small hack for mobile to reset spans */}
                        <style>{`
                 @media (max-width: 767px) {
                     .bento-item-${index} {
                         grid-column: span 1 !important;
                         grid-row: span 1 !important;
                     }
                 }
                 @media (min-width: 768px) {
                     .bento-item-${index} {
                         grid-column: span ${item.colSpan};
                         grid-row: span ${item.rowSpan};
                     }
                 }
             `}</style>

                        <div style={{ marginBottom: "1rem", color: "var(--text-primary)" }}>{item.icon}</div>
                        <div className="content">
                            <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem", color: "var(--text-primary)", fontWeight: 600 }}>
                                {item.title}
                            </h3>
                            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.4 }}>
                                {item.content}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
