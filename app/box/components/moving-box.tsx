"use client";
import { motion } from "framer-motion";

export default function MovingBox() {
    return (
        <motion.div
            style={{
                width: "100px",
                height: "100px",
                backgroundColor: "pink",
            }}
            initial={{ x: -200, scale: 0.5, rotate: 0 }}
            animate={{ x: 0, scale: 1, rotate: 360 }}
            transition={{ duration: 2 }}
        />
    )
}