import { motion } from "framer-motion";

// Import certification images
import cert1 from "../assets/cloudcertification.jpeg";

const certifications = [
    {
        name: "Associate Cloud Engineer",
        issuer: "Google Cloud Platform",
        date: "2024",
        image: cert1,
    },
];

export default function Certifications() {
    return (
        <section
            id="certifications"
            style={{
                padding: "4rem 2rem",
                maxWidth: "1200px",
                margin: "0 auto",
                textAlign: "center"
            }}
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                    fontSize: "clamp(2rem, 5vw, 3rem)",
                    marginBottom: "3rem",
                    color: "var(--text-primary)"
                }}
            >
                CERTIFICATIONS
            </motion.h2>

            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "2rem"
            }}>
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="glass"
                        style={{
                            padding: "3rem", // Increased padding
                            borderRadius: "32px", // Increased radius
                            maxWidth: "600px", // Increased max width
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            backgroundColor: "var(--glass-bg)",
                            border: "1px solid rgba(255,255,255,0.1)"
                        }}
                    >
                        <div style={{
                            width: "100%",
                            height: "auto", // Allow auto height
                            marginBottom: "2rem",
                            borderRadius: "20px",
                            overflow: "hidden",
                            background: "rgba(255,255,255,0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "2rem" // Add padding inside image container
                        }}>
                            <img
                                src={cert.image}
                                alt={cert.name}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    maxHeight: "400px", // Increased max height
                                    objectFit: "contain",
                                }}
                            />
                        </div>
                        <h3 style={{ fontSize: "1.75rem", marginBottom: "0.75rem", fontWeight: 700 }}>{cert.name}</h3>
                        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>{cert.issuer}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
