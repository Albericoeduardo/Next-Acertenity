"use client";

import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiGit, SiJavascript, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiSupabase, SiSvelte, SiTailwindcss, SiTypescript } from 'react-icons/si'

const Skills = () => {

  const skills = [
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "JavaScript",
      Icon: SiJavascript,
    },
    {
      text: "Git",
      Icon: SiGit,
    },
    {
      text: "Node.js",
      Icon: SiNodedotjs,
    },
    {
      text: "Python",
      Icon: SiPython,
    },
    {
      text: "TypeScript",
      Icon: SiTypescript,
    },
    {
      text: "Postgresql",
      Icon: SiPostgresql,
    },
  ]

  return (
    <div className='max-w-5xl mx-auto px-8'>
        <Title 
          text='Skills'
          classname='flex flex-col items-center justify-center -rotate-6'
         />

         <HoverEffect 
          items={skills}
         />
    </div>
  )
}

export default Skills