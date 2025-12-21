import { motion } from "framer-motion";

// Dynamically import all images from the assets folder
const assetsResults = import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', { eager: true });

// Helper to format filenames into readable labels
const formatLabel = (path: string) => {
    const filename = path.split('/').pop()?.split('.')[0] || "";
    // Custom overrides if needed
    const overrides: Record<string, string> = {
        "springboot": "Spring Boot",
        "mui": "Material UI",
        "js": "JavaScript",
        "restapi": "REST API",
        "gcp": "GCP",
        "postgresql": "PostgreSQL",
        "projectmangement": "Project Mgmt",
        "projectplanning": "Planning",
        "teamcoordination": "Team Coord",
        "oops": "OOP",
        "iaas": "IaaS",
        "graphql": "GraphQL",
        "sql": "SQL"
    };

    if (overrides[filename.toLowerCase()]) {
        return overrides[filename.toLowerCase()];
    }

    // Default: Capitalize first letter
    return filename.charAt(0).toUpperCase() + filename.slice(1);
};

// Convert to array of objects with src and label
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const techIcons = Object.entries(assetsResults)
    .filter(([path]) => !path.includes("certified_badge") && !path.includes("cloudcertification") && !path.includes("ExecutiveProfile"))
    .map(([path, module]: [string, any]) => ({
        src: module.default,
        label: formatLabel(path)
    }));

export default function TechStack() {
    return (
        <section id="technologies" style={{
            padding: "4rem 2rem",
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative"
        }}>
            <h3 style={{
                textAlign: "center",
                marginBottom: "3rem",
                fontSize: "1.5rem",
                fontWeight: 600,
                color: "var(--text-secondary)",
                letterSpacing: "0.05em",
            }}>
                Technologies I Work With
            </h3>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "2rem",
                }}
            >
                {techIcons.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{
                            y: -10,
                            scale: 1.05,
                            backgroundColor: "var(--glass-hover-bg)",
                            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)"
                        }}
                        className="glass"
                        style={{
                            width: "140px",
                            height: "160px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "16px",
                            padding: "1.5rem",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            backgroundColor: "var(--glass-bg)",
                            border: "1px solid var(--glass-border)",
                        }}
                    >
                        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", width: "100%", marginBottom: "1rem" }}>
                            <img
                                src={item.src}
                                alt={item.label}
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: item.label === "Zustand" ? "80px" : "60px",
                                    objectFit: "contain",
                                    filter: "drop-shadow(0 0 8px rgba(255,255,255,0.2))"
                                }}
                            />
                        </div>
                        <span style={{
                            fontSize: "0.9rem",
                            fontWeight: 500,
                            color: "var(--text-primary)",
                            textAlign: "center"
                        }}>
                            {item.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
