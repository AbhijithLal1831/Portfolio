import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    .filter(([path]) => !path.includes("certified_badge") && !path.includes("cloudcertification")
        && !path.includes("ExecutiveProfile") && !path.includes("teamphoto"))
    .map(([path, module]: [string, any]) => ({
        src: module.default,
        label: formatLabel(path)
    }));

export default function TechStack() {
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(6);
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(8);
            } else {
                setItemsPerPage(10);
            }
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Reset to first page if itemsPerPage changes (e.g. on resize) to avoid empty states
    useEffect(() => {
        setCurrentPage(0);
    }, [itemsPerPage]);

    const totalPages = Math.ceil(techIcons.length / itemsPerPage);
    const currentItems = techIcons.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    const handleNext = () => {
        setDirection(1);
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 50 : -50,
            opacity: 0
        })
    };

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

            <div style={{ position: "relative", minHeight: "400px", display: "flex", flexDirection: "column", alignItems: "center" }}>

                {/* Desktop Arrows (Absolute Positioned) */}
                <button
                    onClick={handlePrev}
                    className="glass desktop-arrow"
                    style={{
                        position: "absolute",
                        left: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: 10,
                        padding: "0.75rem",
                        borderRadius: "50%",
                        border: "1px solid var(--glass-border)",
                        cursor: "pointer",
                        display: window.innerWidth < 768 ? "none" : "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--text-primary)",
                        backgroundColor: "var(--glass-bg)",
                    }}
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    onClick={handleNext}
                    className="glass desktop-arrow"
                    style={{
                        position: "absolute",
                        right: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: 10,
                        padding: "0.75rem",
                        borderRadius: "50%",
                        border: "1px solid var(--glass-border)",
                        cursor: "pointer",
                        display: window.innerWidth < 768 ? "none" : "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--text-primary)",
                        backgroundColor: "var(--glass-bg)",
                    }}
                >
                    <ChevronRight size={24} />
                </button>

                {/* Content Area */}
                <div style={{ width: "100%", maxWidth: "900px", overflow: "hidden", padding: "0 1rem" }}>
                    <AnimatePresence custom={direction} mode="wait">
                        <motion.div
                            key={currentPage}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "center",
                                gap: "2rem",
                                width: "100%"
                            }}
                        >
                            {currentItems.map((item, index) => (
                                <motion.div
                                    key={`${currentPage}-${index}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
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
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Mobile Controls / Pagination Indicators */}
                <div style={{
                    marginTop: "3rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1.5rem",
                    zIndex: 10
                }}>
                    {/* Mobile Only Left Arrow */}
                    <button
                        onClick={handlePrev}
                        className="glass mobile-arrow"
                        style={{
                            padding: "0.75rem",
                            borderRadius: "50%",
                            border: "1px solid var(--glass-border)",
                            cursor: "pointer",
                            display: window.innerWidth < 768 ? "flex" : "none",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--text-primary)",
                        }}
                    >
                        <ChevronLeft size={20} />
                    </button>

                    {/* Pagination Dots */}
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                        {Array.from({ length: totalPages }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setDirection(idx > currentPage ? 1 : -1);
                                    setCurrentPage(idx);
                                }}
                                style={{
                                    width: "10px",
                                    height: "10px",
                                    borderRadius: "50%",
                                    backgroundColor: idx === currentPage ? "var(--accent)" : "var(--text-secondary)",
                                    opacity: idx === currentPage ? 1 : 0.3,
                                    border: "none",
                                    cursor: "pointer",
                                    padding: 0,
                                    transition: "all 0.3s ease"
                                }}
                            />
                        ))}
                    </div>

                    {/* Mobile Only Right Arrow */}
                    <button
                        onClick={handleNext}
                        className="glass mobile-arrow"
                        style={{
                            padding: "0.75rem",
                            borderRadius: "50%",
                            border: "1px solid var(--glass-border)",
                            cursor: "pointer",
                            display: window.innerWidth < 768 ? "flex" : "none",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--text-primary)",
                        }}
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}
