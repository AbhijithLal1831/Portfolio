import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import BlogCard from "./BlogCard";
import teamPhoto from "../assets/teamphoto.jpeg";

interface BlogPost {
    title: string;
    excerpt: string;
    date: string;
    tags: string[];
    content: React.ReactNode;
    image?: string;
}

export default function Blog() {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [direction, setDirection] = useState(0);
    const postsPerPage = 3;

    const blogPosts: BlogPost[] = [{
        title: "Unwrapping Joy: Our Office Christmas Celebration 2025",
        excerpt: "A day filled with Secret Santa reveals, cake cutting, and festive cheer with the team.",
        date: "23 Dec 2025",
        tags: ["#Christmas2025", "#TeamBuilding", "#OfficeLife", "#SecretSanta"],
        image: teamPhoto,
        content: (
            <>
                <p>
                    The holiday spirit took over the workspace today! We paused our daily stand-ups and code commits
                    to celebrate Christmas with the entire team. The office was decked out in red and white, setting
                    the perfect mood for the festivities.
                </p>

                <h3>Secret Santa Surprise 🎁</h3>
                <p>
                    The highlight of the day was undoubtedly the Secret Santa reveal. It was full of laughter and
                    surprises as we unboxed gifts ranging from thoughtful books to quirky desk gadgets.
                </p>

                <h3>Feast & Fun 🍰</h3>
                <p>
                    We gathered around for the traditional cake cutting ceremony.
                    It was a wonderful opportunity to bond beyond work and look back on a productive year.
                    Merry Christmas to everyone!
                </p>
            </>
        )
    },
    {
        title: "Building a Modern Portfolio with React & Framer Motion",
        excerpt: "A deep dive into how I built this portfolio, exploring glassmorphism, animations, and responsive design principles.",
        date: "Dec 2025",
        tags: ["React", "Framer Motion", "UI/UX"],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        content: (
            <>
                <p>
                    Building a personal portfolio is a rite of passage for every developer. It's not just about showcasing your work;
                    it's about demonstrating your taste, your skills, and your ability to build something from scratch.
                </p>
                <br />
                <h3>Why Glassmorphism?</h3>
                <p>
                    I chose a glassmorphism aesthetic because it provides a modern, sleek look that stands out.
                    By using semi-transparent backgrounds with background blur, elements feel like they are floating in 3D space.
                </p>
                <br />
                <h3>The Power of Framer Motion</h3>
                <p>
                    Animations can make or break a website. Too many, and it's distracting. Too few, and it feels static.
                    Framer Motion allowed me to add subtle entrance animations and smooth transitions that enhance the user experience without overwhelming it.
                </p>
                <br />
                <h3>Responsive Design</h3>
                <p>
                    Ensuring the site looks good on all devices was a priority. Using CSS Grid and Flexbox, along with `clamp()` for typography,
                    allowed me to create a fluid layout that adapts to any screen size.
                </p>
            </>
        )
    },
    {
        title: "Agentic Development: The Next Evolution of Coding",
        excerpt: "Moving beyond autocomplete: How AI agents are transforming developers into architects of software.",
        date: "Dec 2025",
        tags: ["AI", "Agentic Workflow", "Future of Work"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
        content: (
            <>
                <p>
                    We are witnessing a paradigm shift in how software is built. For years, we've used AI as a fancy autocomplete—predicting the next few lines of code.
                    But <strong>Agentic Development</strong> is different. It's not just about writing code; it's about <em>reasoning</em> about code.
                </p>
                <br />
                <h3>From Copilots to Coworkers</h3>
                <p>
                    In an agentic workflow, the AI doesn't just listen and engage when spoken to. It plans.
                    You give it a high-level goal—"Create a blog section with a modal view"—and it breaks that down into tasks: create the component, update the state, modify the CSS, and verify the build.
                    It acts more like a junior developer or a pair programmer than a tool.
                </p>
                <br />
                <h3>My Perspective</h3>
                <p>
                    As a developer, this is incredibly empowering. It removes the friction of boilerplate and implementation details.
                    I can focus on being the <strong>Architect</strong>. I define the structure, the user experience, and the constraints. The agent handles the execution.
                </p>
                <br />
                <h3>The Challenge</h3>
                <p>
                    The challenge now isn't syntax; it's clarity of thought. You have to be precise in your instructions and rigorous in your review.
                    We are moving from writing code to <em>reviewing</em> and <em>orchestrating</em> code. The skill ceiling hasn't lowered; it has just moved to a higher level of abstraction.
                </p>
            </>
        )
    },
    {
        title: "Optimizing React Performance",
        excerpt: "Tips and tricks for keeping your React applications fast and responsive, from memoization to lazy loading.",
        date: "Oct 2025",
        tags: ["React", "Performance", "Optimization"],
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2670&auto=format&fit=crop",
        content: (
            <>
                <p>
                    Performance is a critical part of user experience. A slow site is a broken site.
                    Here are some key strategies I use to keep React apps fast.
                </p>
                <br />
                <h3>Code Splitting</h3>
                <p>
                    Using `React.lazy` and `Suspense` allows us to load only the code that is needed for the current view.
                    This drastically reduces the initial bundle size.
                </p>
                <br />
                <h3>Memoization</h3>
                <p>
                    `useMemo` and `useCallback` are powerful tools, but they should be used wisely.
                    They are essential for preventing expensive calculations and unnecessary re-renders in complex components.
                </p>
                <br />
                <h3>Virtualization</h3>
                <p>
                    For long lists, virtualization (windowing) is a must.
                    It ensures that only the visible items are rendered to the DOM, keeping the application snappy even with thousands of items.
                </p>
            </>
        )
    }, {
        title: "Spring Boot 4.0: The Next Generation is Here",
        excerpt: "Exploring the major shift to Spring Boot 4.0, modular auto-configuration, and Java 25 support.",
        date: " Dec 2025",
        tags: ["#SpringBoot4", "#Java25", "#Backend", "#TechUpdate"],
        image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2670&auto=format&fit=crop",
        content: (
            <>
                <p>
                    The wait is over! With the release of <strong>Spring Boot 4.0.1</strong> just days ago (Dec 18),
                    we are officially entering a new era of Java development. This major release builds on top of
                    Spring Framework 7 and brings significant architectural changes.
                </p>

                <h3>Modular Auto-Configuration 🧩</h3>
                <p>
                    One of the biggest changes is the modularization of the massive <code>spring-boot-autoconfigure</code> JAR.
                    It has finally been split into smaller, focused modules. This reduces the runtime footprint and ensures
                    your application only loads the configuration logic it actually needs.
                </p>

                <h3>Java 25 & Virtual Threads 🚀</h3>
                <p>
                    Spring Boot 4.0 fully embraces <strong>Java 25</strong> features while maintaining a baseline of Java 17.
                    Virtual Threads (Project Loom) are now supported across the entire ecosystem, including improved
                    integration with Undertow and Tomcat for high-throughput concurrency.
                </p>

                <h3>Observability Upgrades 📊</h3>
                <p>
                    Structured logging has received a massive overhaul. You can now configure JSON stack traces with
                    fine-grained control using <code>logging.structured.json.stacktrace.*</code> properties. Additionally,
                    new metrics for SSL bundles help track certificate expirations right out of the box.
                </p>
            </>
        )
    }, {
        title: "The GitOps Workflow: Zero-Touch Kubernetes Deployments",
        excerpt: "How I eliminated manual 'kubectl apply' commands using ArgoCD and Git as my single source of truth.",
        date: "Oct 2025",
        tags: ["#GitOps", "#Kubernetes", "#DevOps", "#ArgoCD"],
        image: "https://images.unsplash.com/photo-1667372335937-d03be6fb0a9c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: (
            <>
                <p>
                    I've been reading about GitOps for a while, so I finally decided to get my hands dirty and try it out
                    on my personal setup. Instead of the usual <code>kubectl apply</code> or CI scripts, I wanted to see
                    what it feels like to treat Git as the single source of truth.
                </p>

                <h3>Setting up the Lab 🧪</h3>
                <p>
                    I spun up a small cluster and installed <strong>ArgoCD</strong>. The setup was surprisingly smooth.
                    Connecting it to my private repository and watching it "pull" the configuration rather than me
                    "pushing" it felt like a significant shift in mindset.
                </p>

                <h3>The "Magic" Moment ✨</h3>
                <p>
                    To test the <strong>self-healing</strong> capabilities, I manually deleted a deployment in the cluster.
                    Within seconds, ArgoCD detected the drift and automatically restored it to match the state in Git.
                    It’s a game-changer for consistency.
                </p>

                <h3>Key Takeaways 📝</h3>
                <p>
                    While I'm not using this in production yet, understanding the declarative nature of GitOps has
                    been a great learning experience. It definitely simplifies rollback strategies—just
                    <code>git revert</code> and you're safe!
                </p>
            </>
        )
    },
    ];

    const totalPages = Math.ceil(blogPosts.length / postsPerPage);
    const currentPosts = blogPosts.slice(currentPage * postsPerPage, (currentPage + 1) * postsPerPage);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0
        })
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setCurrentPage((prev) => (prev + 1) % totalPages);
        }, 10000);

        return () => clearInterval(interval);
    }, [totalPages]);

    const handleNext = () => {
        setDirection(1);
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    return (
        <section id="blog" style={{ padding: "6rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 style={{
                    fontSize: "2.5rem",
                    marginBottom: "1rem",
                    textAlign: "center",
                    background: "linear-gradient(to right, var(--text-primary), var(--text-secondary))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>
                    Latest Insights
                </h2>
                <p style={{
                    textAlign: "center",
                    marginBottom: "4rem",
                    color: "var(--text-secondary)",
                    maxWidth: "600px",
                    marginLeft: "auto",
                    marginRight: "auto"
                }}>
                    Thoughts on technology, coding, and my journey in software engineering.
                </p>

                <div style={{ position: "relative", minHeight: "600px", overflow: "hidden" }}>
                    <AnimatePresence initial={false} custom={direction} mode="wait">
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
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                                gap: "2rem",
                                width: "100%"
                            }}
                        >
                            {currentPosts.map((post, index) => (
                                <motion.div
                                    key={`${currentPage}-${index}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <BlogCard
                                        {...post}
                                        onClick={() => setSelectedPost(post)}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Pagination Controls */}
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "2rem",
                        marginTop: "3rem"
                    }}>
                        <button
                            onClick={handlePrev}
                            className="glass"
                            style={{
                                padding: "0.75rem",
                                borderRadius: "50%",
                                border: "1px solid var(--glass-border)",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "var(--text-primary)",
                                transition: "all 0.3s ease"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "var(--glass-hover-bg)";
                                e.currentTarget.style.transform = "scale(1.1)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "var(--glass-bg)";
                                e.currentTarget.style.transform = "scale(1)";
                            }}
                        >
                            <ChevronLeft size={24} />
                        </button>

                        {/* Optional: Indicator */}
                        <span style={{ fontSize: "1rem", color: "var(--text-secondary)", fontWeight: 500 }}>
                            {currentPage + 1} / {totalPages}
                        </span>

                        <button
                            onClick={handleNext}
                            className="glass"
                            style={{
                                padding: "0.75rem",
                                borderRadius: "50%",
                                border: "1px solid var(--glass-border)",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "var(--text-primary)",
                                transition: "all 0.3s ease"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "var(--glass-hover-bg)";
                                e.currentTarget.style.transform = "scale(1.1)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "var(--glass-bg)";
                                e.currentTarget.style.transform = "scale(1)";
                            }}
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedPost && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedPost(null)}
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.7)",
                            zIndex: 1000,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "2rem",
                            backdropFilter: "blur(5px)"
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
                            className="glass"
                            style={{
                                width: "100%",
                                maxWidth: "800px",
                                maxHeight: "80vh",
                                overflowY: "auto",
                                borderRadius: "24px",
                                padding: "2rem",
                                position: "relative",
                                backgroundColor: "var(--bg-primary)", // Ensure opacity for readability
                                color: "var(--text-primary)",
                                border: "1px solid var(--glass-border)"
                            }}
                        >
                            <button
                                onClick={() => setSelectedPost(null)}
                                style={{
                                    position: "absolute",
                                    top: "1.5rem",
                                    right: "1.5rem",
                                    background: "transparent",
                                    border: "none",
                                    cursor: "pointer",
                                    color: "var(--text-secondary)",
                                    padding: "0.5rem",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "50%",
                                    transition: "background-color 0.2s"
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                            >
                                <X size={24} />
                            </button>

                            <div style={{ marginBottom: "2rem" }}>
                                {selectedPost.image && (
                                    <div style={{
                                        borderRadius: "16px",
                                        overflow: "hidden",
                                        marginBottom: "2rem",
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        backgroundColor: "rgba(0,0,0,0.2)"
                                    }}>
                                        <img
                                            src={selectedPost.image}
                                            alt={selectedPost.title}
                                            style={{
                                                maxWidth: "100%",
                                                maxHeight: "60vh",
                                                height: "auto",
                                                objectFit: "contain",
                                                display: "block"
                                            }}
                                        />
                                    </div>
                                )}
                                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                                    {selectedPost.tags.map(tag => (
                                        <span
                                            key={tag}
                                            style={{
                                                fontSize: "0.85rem",
                                                padding: "0.25rem 0.75rem",
                                                borderRadius: "20px",
                                                backgroundColor: "var(--accent)",
                                                color: "#fff",
                                                fontWeight: 500
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem", lineHeight: 1.2 }}>
                                    {selectedPost.title}
                                </h2>

                                <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
                                    {selectedPost.date}
                                </p>
                            </div>

                            <div style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--text-primary)" }}>
                                {selectedPost.content}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
