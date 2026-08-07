import { AnimatePresence, motion } from "framer-motion";
import { Command, CornerDownLeft, Search, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { commandItems } from "../data/portfolio";
import { scrollToId } from "../hooks/useScrollProgress";

export default function CommandPalette({ open, onClose }) {
  const input = useRef(null);
  useEffect(() => { if (open) input.current?.focus(); }, [open]);
  return <AnimatePresence>{open && <motion.div className="command-overlay" onMouseDown={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><motion.div className="command-palette" onMouseDown={(e) => e.stopPropagation()} initial={{ opacity: 0, y: 14, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8, scale: .98 }}>
    <div className="command-search"><Search size={18}/><input ref={input} placeholder="Jump to a section..." aria-label="Search portfolio"/><button onClick={onClose}><X size={16}/></button></div>
    <p className="command-label">Navigate</p>{commandItems.map((item) => <button key={item.target} className="command-item" onClick={() => { scrollToId(item.target); onClose(); }}><span><Command size={16}/>{item.label}</span><kbd>{item.shortcut}</kbd></button>)}
    <div className="command-tip"><span><CornerDownLeft size={14}/> select</span><span>esc to close</span></div>
  </motion.div></motion.div>}</AnimatePresence>;
}
