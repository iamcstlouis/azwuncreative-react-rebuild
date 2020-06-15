import React from 'react'
import { Link } from 'react-router-dom';

function SingleProject({ projectLink, imageUrl, alt, projectName, projectDesc }) {
    return (
        <div className='project'>
            <a href={projectLink} className='project-overlay' rel="noopener noreferrer" target='_blank'>
                <div className='img-wrapper'>
                    <img src={imageUrl} alt={alt} data-aos='fade-up' />
                </div>

                <div className='copy-wrapper'>
                    <h2 className='project-name' data-aos='fade-left'>{projectName}</h2>
                    <p className='project-desc' data-aos='fade-right'>{projectDesc}</p>
                </div>
            </a>
        </div>
    )
}

export default SingleProject
