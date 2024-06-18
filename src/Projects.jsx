import React from 'react';
import PContainer from './PContainer';
import ProjectData from './ProjectData';

function Projects(props) {
    let [data, setData] = React.useState(ProjectData.data.projectData)

    let renderProject = data.map((data, i) => {
        return  <PContainer 
        key={i}
        data={data}/>
    })
    return (
        <div ref={props.projects} className='projectsContainer'>
            <div className="container">
                {/* <a href="#" target='_blank'>This is a test link</a> */}
                <h3>Portfolio</h3>
                <h1>All of my Personal Projects</h1>
                {renderProject}
            </div>
        </div>
    );
}

export default Projects;