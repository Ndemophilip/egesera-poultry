"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function ClientTransition({ children }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Trigger the golden overlay briefly when path changes
    setIsTransitioning(true);
    const timeout = setTimeout(() => setIsTransitioning(false), 700);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {/* Smooth content fade */}
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="pt-[100px]"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {/* ✨ Golden fade overlay */}
      {isTransitioning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(250, 208, 44, 0.95) 0%, rgba(250, 208, 44, 0.85) 100%)",
          }}
        />
      )}
    </>
  );
}
