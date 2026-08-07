import { motion } from "framer-motion";
import { reveal } from "../animations/variants";

export default function Reveal({ children, className = "", delay = 0 }) {
  return <motion.div className={className} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.16 }} transition={{ delay }}>{children}</motion.div>;
}
