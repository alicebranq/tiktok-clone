import React, { useState } from 'react'
import "./SideBar.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';


function SideBar() {

    const [liked, setLiket] = useState(false)

    function handleLike(){
        setLiked(!liked)
    }

    return (
        <div className='video_sidebar'>
            <div 
                className='video_sidebar_options'
                onClick={handleLike}
            >
                {liked ? <FavoriteBorderIcon fontSize='large'/> : <FavoriteIcon  />} 
                <p> { liked ? 300 + 1 : 300} </p>
            </div>
            <div className='video_sidebar_options'>
                <ChatIcon fontSize='large'/>
                <p> Comentários</p>
            </div>
            <div className='video_sidebar_options'>
                <ShareIcon fontSize='large'/>
                <p> Compartilhar </p>
            </div>

        </div>
    )
}

export default SideBar