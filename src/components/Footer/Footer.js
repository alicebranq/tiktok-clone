import React from 'react'
import './Footer.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function Footer({name, description, music}) {
    return (
        <div className='video_footer's>
            <div className='videofooter_text'>

                <h3> @{ name } </h3>
                <p> {description}</p>

                <div className='videofooter_music'>
                    <MusicNoteIcon className='videofooter_musicicon' />
                    <div className='videofooter_music_text'>
                        <p> {music} </p>
                    </div>
                </div>

            </div>
            <img 
                className='videofooter_record'
                alt='Imagem de um CD em Vinil girando'
                src=''
            />

        </div>
    )
}

export default Footer