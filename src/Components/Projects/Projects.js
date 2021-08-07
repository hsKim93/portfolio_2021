import React, {useState, useEffect} from 'react';
import './Projects.css';
import Project from './Project';
import { projectInfo } from '../datas/projectInfo';

function debounce(fn, ms) {
    let timer
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    };
  }

function Projects() {

    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
      })
      useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
          setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
          })
        }, 0)
    
        window.addEventListener('resize', debouncedHandleResize)
    
        return _ => {
          window.removeEventListener('resize', debouncedHandleResize)
        
    }
      })

    return (
        <div id='projects' className='zone projects_display bb bw1 b--black-30'>
            <h1 className='mt6 mb0 f1 p_title'>Projects</h1>
            {projectInfo.map((project, i) => {
                return (<Project
                    title={project.title}
                    image={project.image}
                    description={project.description}
                    stacks={project.stacks}
                    source={project.source}
                    web={project.web}
                    index={i}
                    key={i}
                    width={dimensions.width}
                />)
            })}
        </div>
    )
}

export default Projects;