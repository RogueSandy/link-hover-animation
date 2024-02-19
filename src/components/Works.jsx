import React, { useState } from 'react'
import Button from './Button'
import './Work.css'
import Modal from './Modal'

const workLinks = [
    {
        "title": "Me",
        "body": "Me and a Shared Personal Space.",
        "href": "/",
    },
    {
        "title": "Code With Gaminig",
        "body": "A Piece of Virtual Riality with the Passion.",
        "href": "/",
    },
    {
        "title": "Spotify",
        "body": "A Melody into the Peace.",
        "href": "/",
    },
]

export default function Works() {
    const [modal, setModal] = useState({active: false, index: null})
    return (
        <section id="works">
            <Modal modal={modal} workLinks={workLinks}/>
            <div className="main-content">
                <h1>do What I Love:</h1>
                <div className="links">
                    {
                        workLinks.map(({ href, title, body }, index) => {
                            return <a href={href} 
                                    key={index} 
                                    onMouseEnter={() => setModal({active:true, index: index})}
                                    onMouseLeave={() => setModal({active:false, index: index})}
                                >
                                <div className="content">
                                    <h1>{title}</h1>
                                    <p>{body}</p>
                                </div>
                                <div className="arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="white" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
                                </div>
                            </a>
                        })
                    }
                </div>
                <Button />
            </div>
        </section>
    )
}
