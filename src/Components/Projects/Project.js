import "./Project.css";
import React from 'react';

function Project({ title, image, description, stacks, source, web, index, width }) {

    return (
        width <= 950 ?
            <div className='project_template_sm mv3'>
                    <img className='mv4 img_bg_sm' src={image} alt={title} />
                <div className='project_content'>
                    <h3 className='tc p_title'>{title}</h3>
                    <p className='b tc mb0'>{description}</p>
                    <p className='b tc mt0 mb4 tstk'>Tech stacks:
                        {stacks.map((logo, i) => {
                            return (
                                <img src={logo} alt='logo' height='40px' className='mh2 logos' key={i} />
                            )
                        })}
                    </p>
                </div>
                <div className='a_wrapper_sm'>
                    <a className='web btn btn_web b' rel='noreferrer' target='_blank' href={web}>See Live</a>
                    <a className='source btn btn_src b' rel='noreferrer' target='_blank' href={source}>Source Code</a>
                </div>
            </div>
            :
            index % 2 === 0 ?
                <div className={'project_template mt5 project' + index} >
                    <div className='project_wrapper'>
                            <img className='mb5 mr4 img_bg' src={image} alt={title} />
                        <div className='project_content'>
                            <h3 className='f2 mt2 p_title'>{title}</h3>
                            <p className='b f4 p_desc'>{description}</p>
                        </div>
                    </div>
                    <div className=''>
                        <p className='b tstk'>
                            <a className='btn btn_web mh4' rel='noreferrer' target='_blank' href={web}><span className='btn_txt_web'>See Live</span></a>
                            <a className='btn btn_src' rel='noreferrer' target='_blank' href={source}><span className='btn_txt_src'>Source Code</span></a>
                            <span className='ml5 f3'>Tech stacks:
                                {stacks.map((logo, i) => {
                                    return (
                                        <img src={logo} alt='logo' height='60px' className='mh2 logos' key={i} />
                                    )
                                })}
                            </span>
                        </p>
                    </div>
                </div>
                :
                <div className={'project_template_rev mt5 project' + index}>
                    <div className='project_wrapper'>
                        <div className='project_content'>
                            <h3 className='f2 mt2 p_title'>{title}</h3>
                            <p className='b f4'>{description}</p>
                        </div>
                            <img className='mb5 ml4 img_bg_rev' src={image} alt={title} />
                    </div>
                    <p className='b tstk'>
                        <span className='a_wrapper'>
                            <span className='f3'>
                                Tech stacks:
                                {stacks.map((logo, i) => {
                                    return (
                                        <img src={logo} alt='logo' height='60px' className='mh2 logos logo' key={i} />
                                    )
                                })}
                            </span>
                            <span>
                                <a className='btn btn_web' rel='noreferrer' target='_blank' href={web}><span className='btn_txt_web'>See Live</span></a>
                                <a className='btn btn_src source mh4' rel='noreferrer' target='_blank' href={source}><span className='btn_txt_src'>Source Code</span></a>
                            </span>
                        </span>
                    </p>
                </div>

    )

}

export default Project;