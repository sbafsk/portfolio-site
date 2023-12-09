"use client"

import React from "react"
import SectionHeading from "./section-heading"
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"

export default function About() {
  const { ref } = useSectionInView("About")

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a Software Developer with seven years of experience, having great
        skills like excellent reasoning ability, critical thinking, and a
        problem-solving mindset that help me build and contribute to building
        excellent products.
        <br />
        During the last years I enrolled myself in several internet courses and
        bootcamps to learn and gain expertise in popular web development tech
        stacks that lead me to join an excellent company to collaborate
        effectively with their mission and objectives.
      </p>
    </motion.section>
  )
}
