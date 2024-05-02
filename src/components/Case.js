import { useState } from "react";
import { CaseSelector } from "../images/Cases"
import { AnimatePresence, motion } from "framer-motion"


export default function Case(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <motion.div className="case"
    onMouseEnter={() => setIsFlipped(true)}
    onMouseLeave={() => setIsFlipped(false)}>
    <AnimatePresence>
      {isFlipped ?
      <motion.p 
      className="case-flipped"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
        {props.description}
      </motion.p>
      :
      <motion.div
      className="case-content" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
        <CaseSelector icon={props.icon}/>
        <h3>{props.title}</h3>
      </motion.div>
      }
      </AnimatePresence>
    </motion.div>
  )
}