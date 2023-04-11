import React, { useRef, useState } from 'react'
import "./Video.css"
import Footer from '../components/Footer/Footer';
import SideBar from '../components/SideBar/SideBar'

function Video({likes, messages, shares, name, description, music, url}) {

    const videoRef = useRef(null);
    const [play, setPlay] = useState(false);

    function handdleStart() {
        if (play) {
            videoRef.current.pause();
            setPlay(false);
        } else {
            videoRef.current.play();
            setPlay(true);
        }

        videoRef.current.play()
    }

    return (
        <div className='video'>
            <video
                className='video__player'
                ref={videoRef}
                onClick={handdleStart}
                loop
                src={url}
            />
            <SideBar 
                likes={likes}
                messages={messages}
                shares={shares}
            />
            <Footer 
                name={name}
                description={description}
                music={music}
            />
        </div>
    );
}

export default Video