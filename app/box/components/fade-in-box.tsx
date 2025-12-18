"use client";
import { motion } from "framer-motion";

export default function FadeInBox() {
    return (
        <motion.div
            style={{
                width: "100px",
                height: "100px",
                backgroundColor: "pink",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        />
    )
}