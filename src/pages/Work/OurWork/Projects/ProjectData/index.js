import React, { useState } from 'react'
import SingleProject from '../SingleProject'
import iamCStlouisImage from '../../../../../images/work/project_iamcstlouis.png'
import palmeriaBeautyImage from '../../../../../images/work/project_palmeria_beauty.png'
import steaknBeer from '../../../../../images/work/project_steak_n_beer.png'
import vapeViewsImage from '../../../../../images/work/project_vapeviews.png'

const ProjectsData = () => {
    // const [projects, setProject] = useState ([
    const [projects] = useState([
        {
            project: 'iamCStlouis',
            projectLink: "https://iamcstlouis.com/",
            img: iamCStlouisImage,
            alt:
                "Artist's Online Portfolio site design and build by Azwun Creative",
            projectName: "iamCStlouis - Painter’s Portfolio",
            projectDesc: "Web Design and Development."
        },
        {
            project: 'Palmeria Beauty',
            projectLink: "http://palmeriabeauty.com/",
            img: palmeriaBeautyImage,
            alt:
                "Artist's Online Portfolio site design and build by Azwun Creative",
            projectName: "Palmeria Beauty",
            projectDesc: "Web Design and Development."
        },
        {
            project: 'Steak N Beer',
            projectLink: "https://steaknbeer.netlify.app/",
            img: steaknBeer,
            alt:
                "Artist's Online Portfolio site design and build by Azwun Creative",
            projectName: "Steak ’N’ Beer",
            projectDesc: "Web Design and Development."
        },
        {
            project: 'VapeViews',
            projectLink: "https://vapeviews.netlify.app/",
            img: vapeViewsImage,
            alt:
                "Artist's Online Portfolio site design and build by Azwun Creative",
            projectName: "VapeViews",
            projectDesc: "Web Design and Development."
        }
    ])

    return (
        <React.Fragment>
            {projects.map(project => (
                <SingleProject projectLink={project.projectLink} imageUrl={project.img} alt={project.alt} projectName={project.projectName} projectDesc={project.projectDesc} key={project.project} />
            ))
            }
        </React.Fragment>
    )
}

export default ProjectsData