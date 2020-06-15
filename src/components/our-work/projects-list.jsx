import React, { useState } from 'react'
import SingleProject from './single-project.component'

const ProjectsData = () => {
    // const [projects, setProject] = useState ([
    const [projects] = useState ([
        {
            project: 'iamCStlouis',
            projectLink: "https://iamcstlouis.com/",
            img: require("../../assets/imgs/work/project_iamcstlouis.png"),
            alt:
                "Artist's Online Portfolio site design and build by Azwun Creative",
            projectName: "iamCStlouis - Painter’s Portfolio",
            projectDesc: "Web Design and Development."
        },
        {
            project: 'Palmeria Beauty',
            projectLink: "http://palmeriabeauty.com/",
            img: require("../../assets/imgs/work/project_palmeria_beauty.png"),
            alt:
                "Artist's Online Portfolio site design and build by Azwun Creative",
            projectName: "Palmeria Beauty",
            projectDesc: "Web Design and Development."
        },
        {
            project: 'Steak N Beer',
            projectLink: "https://steaknbeer.netlify.app/",
            img: require("../../assets/imgs/work/project_steak_n_beer.png"),
            alt:
                "Artist's Online Portfolio site design and build by Azwun Creative",
            projectName: "Steak ’N’ Beer",
            projectDesc: "Web Design and Development."
        },
        {
            project: 'VapeViews',
            projectLink: "https://vapeviews.netlify.app/",
            img: require("../../assets/imgs/work/project_vapeviews.png"),
            alt:
                "Artist's Online Portfolio site design and build by Azwun Creative",
            projectName: "VapeViews",
            projectDesc: "Web Design and Development."
        }
    ])

    return (
        <>
        { projects.map( project => (
            <SingleProject projectLink={project.projectLink} imageUrl={project.img} alt={project.alt} projectName={project.projectName} projectDesc={project.projectDesc} key={project.project} />
        ))
        }
        </>
    )
}

export default ProjectsData