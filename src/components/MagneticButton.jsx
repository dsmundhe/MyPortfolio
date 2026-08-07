import { useRef } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({ children, className = "", ...props }) {
  const ref = useRef(null);
  const move = (event) => {
    const box = ref.current.getBoundingClientRect();
    ref.current.style.transform = `translate(${(event.clientX - box.left - box.width / 2) * 0.12}px, ${(event.clientY - box.top - box.height / 2) * 0.12}px)`;
  };
  return <motion.a ref={ref} onMouseMove={move} onMouseLeave={() => { ref.current.style.transform = "translate(0, 0)"; }} className={`magnetic-button ${className}`} {...props}>{children}</motion.a>;
}
