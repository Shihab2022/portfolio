/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { ContactCard } from "./ContactCard";
import { contactConfig } from "@/src/data/contact";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const ContactInfo = () => {
  const { cards } = contactConfig;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="space-y-4 w-full"
    >
      {cards.map((card) => (
        <motion.div key={card.id} variants={itemVariants}>
          <ContactCard {...card} icon={card.icon as any} />
        </motion.div>
      ))}
    </motion.div>
  );
};
