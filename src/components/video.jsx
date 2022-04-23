import React from 'react'
import vid from "../video/EncryDecrypOutput.mp4"
import "./video.css"
import * as faico from "react-icons/fa";

export default function Video() {

    const links = "#"
    function git(){
        window.open(links, "_blank");
    }
  return (
    <div className='videocontaniner'>
        <div className='header'>
            <p>EncryDecryp Mobile</p>
        </div>
        <div className='videocontent'>
            <video className='control' height="600px" width="300px" controls muted>
                <source src={vid} type='video/mp4'/>
            </video>
        </div>
        <footer className='foo'>
            <p>View the source code in Github</p>
            <a href='https://github.com/Toxic-Whitelgnd/Encryp_Decryp_Android'>
            <faico.FaGithub />
            </a>
        </footer>

    </div>
  )
}
