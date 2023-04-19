import React from 'react'
import Educard from './Educard'
import { useSelector } from 'react-redux'

const EducatioDetails = () => {

    const{user}=useSelector((state)=>state);

       const educations=user.education.details;

  return (
    <>
       <div className='min-w-[50%] mt-8'>
          <h1 className='text-3xl font-medium text-left pl-3'>Education</h1>
         <div>
            { educations.map((item,index)=>(
            
              <Educard key={index} item={item}/>
            ))
         
           }
            </div>
       </div>
      
     
    </>
  )
}

export default EducatioDetails