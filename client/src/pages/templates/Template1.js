import React from 'react'
import '../../resources/templates.css'

function Template1() {
    const user = JSON.parse(localStorage.getItem('online-resume-user'))
    return (
        <div className='template1-parent'>
            <div className='d-flex justify-content-between'>
                <h1>{user.firstName}<span> </span>{user.lastName}</h1>
                <div>
                    <p style={{fontSize:'15px'}}>{user.email}</p>
                    <p style={{fontSize:'15px'}}>{user.address}</p>
                    <p style={{fontSize:'15px'}}>{user.mobileNumber}</p>
                </div>



            </div >
            <div className='temp1'>
            <div className='divider mt-2'></div>

            <div className='objective mt-3'>
                <h3>Objective</h3>
                <hr style={{marginTop:'5px',marginBottom:'5px'}} />
                <p>{user.careerObjective}</p>
            </div>


            <div className='divider mt-2'></div>


            <div className='education mt-3'>
                <h3>Education</h3>
                <hr style={{marginTop:'5px',marginBottom:'5px'}} />
                {user.education.map((education) => {
                    return <div>
                        <h6><b>{education.range} :</b><p style={{ marginBottom: 12 }}>{education.qualification} with {education.percentage} in {education.institution}</p></h6>


                    </div>
                })}
            </div>

            <div className='divider mt-2'></div>

            <div className='experience mt-3'>
                <h3>Experience</h3>
                <hr style={{marginTop:'5px',marginBottom:'5px'}} />
                {user.experience.map((experience) => {
                    return <div className='d-flex align-items-center'>
                        <h6 style={{ width: 60 }}>
                            <b>{experience.range} : </b>
                        </h6>
                        <p style={{ marginBottom: 2, marginTop: 0 }}>Worked in <b>{experience.company}</b> for <b>{experience.years}</b> in <b>{experience.place}</b></p>


                    </div>
                })}
            </div>

            <div className='divider mt-2'></div>

            <div className='projects mt-3'>
                <h3>Projects</h3>
                <hr style={{marginTop:'5px',marginBottom:'5px'}} />
                {user.projects.map((projects) => {
                    return <div className='d-flex flex-column'>
                        <h6>
                            <b>{projects.title} [{projects.range}] : </b>
                        </h6>
                        <p style={{ marginBottom: 2, marginTop: 0 }}>
                            {projects.rating}
                        </p>


                    </div>
                })}
            </div>

            <div className='divider mt-2'></div>

            <div className='skills mt-3'>
                <h3>Skills</h3>
                <hr style={{marginTop:'5px',marginBottom:'5px'}} />
                {user.skills.map((skills) => {
                    return <p>{skills.technology}  </p>
                      
                 
                })}
            </div>

            </div>

        </div>

    )
}

export default Template1