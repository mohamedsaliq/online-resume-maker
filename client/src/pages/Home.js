import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import templateimg from '../resources/templates/template1.jpg'
import templateimg1 from '../resources/templates/template2.jpg'
import '../resources/templates.css'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const templates=[
    {
      title:'Simple Resume',
      image:templateimg,
    },
    {
      title:'Highlighted Resume',
      image:templateimg1,
    }
  ];
  return (
    <DefaultLayout>
      <div className='row home'>
        {templates.map((template , index)=>{
          return <div className='col-md-4'>
            <div className='template01'>
            <img src={template.image} height='400' alt=''/>
            <div className='text01'>
            <p>{template.title}</p>
            <button onClick={()=>navigate(`/templates/${index+1}`)}>Try</button>
            </div>
            </div>

          </div>
        })}
       
      </div>
    </DefaultLayout>
  )
}

export default Home