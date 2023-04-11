import React from 'react'
import './Footer.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function Footer() {
    return (
        <div className='video_footer's>
            <div className='videofooter_text'>

                <h3> @nome da conta </h3>
                <p> descrição </p>

                <div className='videofooter_music'>
                    <MusicNoteIcon className='videofooter_musicicon' />
                    <div className='videofooter_music_text'>
                        <p> Music Title </p>
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