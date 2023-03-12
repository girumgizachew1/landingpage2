import React from 'react'
import Image from 'next/image';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Land() {
    const { ref, inView } = useInView();
    const variantimage1 = {
        hidden: {
            rotate:-45,
            scale: 1.5,
            x: "-10vw",
          y: "-100vh",
        },
        visible: {
            rotate:-10,
            scale: 1,
            x: 0,
            y: 0,
          transition: {
            type: "spring",
            stiffness: 30,
            duration: 3,
          },
        },
        exit: {
            rotate: -30,
            scale: 1.4,
            x: "-40vw",
            y: "95vh",
            transition: {
              type: "spring",
              stiffness: 30,
              duration: 1,
            },
          },
      };
      const variantimage2 = {
        hidden: {
          rotate:-45,
          scale: 1.5,
          x: "5vw",
          y: "80vh",
        },
        visible: {
          rotate:10,
          scale: 1,
          x: 0,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 30,
            duration: 3,
          },
        },
        exit: {
            rotate: 30,
            scale: 1.5,
            x: "8vw",
            y: "95vh",
            transition: {
              type: "spring",
              stiffness: 30,
              duration: 1,
            },
          },
      };





  return (
    <div  className='bg-zinc-900 mt-10' >
        <div className='w-full flex flex-row h-full mb-56'>
            <div className='ml-32 mt-14 basis-1/2'>
                <h1 className='text-8xl bg-gradient-to-r from-red-500 to-yellow-500'>ENERGY TO</h1>
                <h1 className='text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-500 via-pink-500 to-red-500 -ml-2'>EXTREME</h1>
                <h1 className='mt-10  pt-4 text-lg font-bold'>Bucked Up has got your back.</h1>
                <h1 className='text-gray-300 text-base pr-32'>Introducing Bucked Up, the energy drink that is designed to give you the boost you need to tackle any challenge that comes your way.</h1>
                <button className='mt-4 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-sm'>View Product</button>
            </div>
            <div className='w-full basis-1/2 flex justify-center items-center mt-16 -ml-40'>
                <div className='flex flex-row relative w-120 h-120 sm:w-160 sm:h-160 lg:w-200 lg:h-200'>
                <motion.div
                        className="w-full h-full transform  -mt-40 -rotate-20 z-10"
                        initial="hidden" // use variants to define initial and animate properties
                        animate={inView ? "exit": "visible"}
                        variants={variantimage1}>
                                <Image src='/image9.png' alt='image' width={160} height={490}  objectFit='cover'   />
                    </motion.div>
                    <motion.div
                        className="w-full h-full transform rotate-25 -mt-14 -ml-80 z-1"
                        initial="hidden" // use variants to define initial and animate properties
                        animate={inView ? "exit": "visible"}
                        variants={variantimage2}>
                          
    
                        <Image src='/image5.png' alt='image' width={700} height={700}  objectFit='cover' />       
                    </motion.div>
                </div>
            </div>
        </div>
        <div className='h-screen w-full bg-zinc-900 flex justify-center' ref={ref}>
        
        <div className='mt-20 space-y-2'>
            <h1 className='text-7xl px-56' >LIVE THE</h1>
            <h1 className='z-10 text-9xl text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-500 via-pink-500 to-red-500 '>EXPERIENCE</h1>
            <h1 className='text-3xl px-48' >BUCKED UP Energy Drink</h1>
        </div>
    </div>
</div>
  )
}

export default Land