import { motion } from "framer-motion";
import ExecutiveProfile from '../assets/ExecutiveProfile.jpg';
import Resume from '../assets/Abhijithlal_Resume.pdf';

export default function Hero() {
    return (
        <section id="home"
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                position: "relative",
                padding: "8rem 2rem 4rem",
            }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.div
                    className="glass"
                    style={{
                        width: 280,
                        height: 280,
                        borderRadius: "50%",
                        overflow: "hidden",
                        margin: "0 auto 2rem",
                        padding: "8px", // Space for glass border
                        backgroundColor: "var(--glass-bg)"
                    }}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src={ExecutiveProfile}
                        alt="Abhijith Lal"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '50%'
                        }}
                    />
                </motion.div>

                <h2
                    style={{
                        fontSize: "clamp(1rem, 2vw, 1.5rem)",
                        fontWeight: 500,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        marginBottom: "1rem",
                        color: "var(--accent)",
                        textShadow: "0 0 20px rgba(255, 46, 0, 0.4)"
                    }}
                >
                    Software Engineer
                </h2>
                <h1
                    style={{
                        fontSize: "clamp(2.5rem, 8vw, 6rem)",
                        fontWeight: 800,
                        lineHeight: 0.9,
                        marginBottom: "2rem",
                    }}
                >
                    <span style={{
                        background: "linear-gradient(to bottom, var(--text-primary) 20%, var(--text-secondary) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        letterSpacing: "-0.02em",
                        display: "inline-block",
                        filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.1))"
                    }}>
                        ABHIJITH LAL
                    </span>
                </h1>
                <p
                    style={{
                        fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                        color: "var(--text-secondary)",
                        maxWidth: "600px",
                        margin: "0 auto 3rem",
                        lineHeight: 1.6
                    }}
                >
                    Designing and developing scalable applications with Google Cloud Platform, Modern Web Technologies, and Backend Systems.
                </p>

                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="glass"
                    style={{
                        color: "var(--text-primary)",
                        padding: "1rem 2rem",
                        borderRadius: "50px",
                        border: "1px solid rgba(255,255,255,0.2)",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        background: "rgba(255,255,255,0.1)"
                    }}
                    onClick={() => window.open(Resume, '_blank')}
                >
                    Download Resume
                </motion.button>
            </motion.div>
        </section>
    );
}
