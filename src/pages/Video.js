import React, { useRef, useState } from 'react'
import "./Video.css"
import Footer from '../components/Footer/Footer';
import SideBar from '../components/SideBar/SideBar'

function Video() {

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
                src='https://v16-webapp-prime.tiktok.com/video/tos/maliva/tos-maliva-ve-0068c799-us/71315e85e6624c8f8384847bedeb8b97/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1442&bt=721&cs=0&ds=3&ft=_RwJrBiTq8ZmoYK~Cc_vj370iAhLrus&mime_type=video_mp4&qs=0&rc=ZTc0PDY1NzhpNjtpZmQ0OkBpanQ3Nmc6ZnEzaTMzZzczNEAwNi9eLl41NjExYTUxLl9hYSNtal9hcjRvNXJgLS1kMS9zcw%3D%3D&btag=80000&expire=1680229134&l=202303302018395AD896A8EC5F105F1F8B&ply_type=2&policy=2&signature=52c1d4e83128db8645857f4c8e8560fb&tk=tt_chain_token'
            >
            </video>
            <SideBar />
            <Footer />
        </div>
    );
}

export default Video