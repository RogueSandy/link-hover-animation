import React from 'react'
import './Modal.css'
import { motion } from 'framer-motion'

const bgColors = [
    "rgb(250, 164, 164)",
    "rgb(246, 250, 164)",
    "rgb(164, 250, 249)",
]

const imagesSrc = [
    {
        src: "src/assets/1.jpg",
    },
    {
        src: "src/assets/2.jpg",
    },
    {
        src: "src/assets/3.jpg",
    },
]

export default function Modal({modal}) {
    const { active, index} = modal
  return (
    <div className="modal">
        <div className="overlay" style={{background: active ? bgColors[index] : ""}}></div>
            <div className="images">
                <motion.div 
                    className="cover"
                    style={{
                        x: - index * 25 + "%",
                        y: - index * 65 + "%",
                    }}
                >
                    {
                        imagesSrc.map(({src}, index) => {
                            return <div className='img-container' key={index}>
                                <motion.img animate={{rotate: active ? 12.5 : 10}} src={src} alt="img" />
                                {/* <video src="src/assets/1vid.mp4" type="video/mp4" autoPlay loop muted /> */}
                            </div>
                        })
                    }
                </motion.div>
            </div>
    </div>
  )
}
