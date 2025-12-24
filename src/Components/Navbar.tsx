import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Technologies", href: "#technologies" },
  { name: "Certifications", href: "#certifications" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="glass"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 100,
          borderRadius: "0 0 16px 16px",
          margin: "0 1rem",

          width: "calc(100% - 2rem)"
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, margin: 0, color: "var(--text-primary)" }}>
            ABHIJITH LAL
          </h1>
        </motion.div>

        {/* Desktop Menu */}
        <ul style={{ display: "none", gap: "2rem", listStyle: "none", margin: 0 }} className="desktop-menu">
          <style>{`
            @media (min-width: 768px) {
                .desktop-menu { display: flex !important; }
                .mobile-toggle { display: none !important; }
            }
        `}</style>
          {navLinks.map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ position: "relative", cursor: "pointer" }}
            >
              <a
                href={link.href}
                style={{
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: "1rem",
                  color: "inherit",
                }}
              >
                {link.name}
              </a>
              {hoveredIndex === index && (
                <motion.div
                  layoutId="underline"
                  style={{
                    position: "absolute",
                    bottom: -4,
                    left: 0,
                    right: 0,
                    height: 2,
                    backgroundColor: "var(--accent)",
                  }}
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass"
            style={{
              position: "fixed",
              top: "5rem",
              left: "1rem",
              right: "1rem",
              padding: "2rem",
              zIndex: 99,
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              alignItems: "center"
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "var(--text-primary)"
                }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
