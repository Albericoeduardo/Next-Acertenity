import React from 'react'
import Title from './Title'
import { SiAngular, SiCss3, SiExpress, SiFirebase, SiFlutter, SiFramer, SiHtml5, SiNextdotjs, SiNodedotjs, SiReact, SiRedux, SiSass, SiTailwindcss, SiVite } from 'react-icons/si'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'

const Projects = () => {

    const projects = [
        {
            title: "Web Portfolio",
            tech: [SiReact, SiSass, SiExpress, SiNodedotjs, SiRedux],
            link: "https://alberico-eduardo.vercel.app/",
            cover: "/project-1.png",
            background: "bg-green-500",
        },
        {
            title: "Ai Summarizer",
            tech: [SiReact, SiVite, SiTailwindcss, SiRedux],
            link: "https://ai-summarizer-rosy.vercel.app/",
            cover: "/project-2.png",
            background: "bg-indigo-500",
        },
        {
            title: "Metaverse website",
            tech: [SiNextdotjs, SiTailwindcss, SiFramer],
            link: "https://metaversus-alberico.vercel.app/",
            cover: "/project-3.png",
            background: "bg-green-500",
        },
        {
            title: "PSN Store",
            tech: [SiAngular, SiHtml5, SiCss3],
            link: "https://psn-store-one.vercel.app/",
            cover: "/project-5.png",
            background: "bg-indigo-500",
        },
    ]

  return (
    <div className='py-10 p-5 sm:p-0'>
        <Title 
          text='Projects'
          classname='flex flex-col items-center justify-center rotate-6'
         />

         <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
            {projects.map((project, index)=> {
                return (
                    <Link key={index} href={project.link}>
                        <div className={cn("p-5 rounded-md", project.background)}>
                            <DirectionAwareHover 
                                imageUrl={project.cover}
                                className='w-full space-y-5 cursor-pointer'
                            >
                                <div className='space-y-5'>
                                    <h1 className='font-bold'>{project.title}</h1>
                                    <div className='flex items-center gap-5'>
                                        {project.tech.map((Icon, index)=>{
                                            return (
                                                <Icon className='w-8 h-8' key={index}/>
                                            )
                                        })}
                                    </div>
                                </div>
                            </DirectionAwareHover>
                        </div>
                    </Link>
                )})}
         </div>

    </div>
  )
}

export default Projects