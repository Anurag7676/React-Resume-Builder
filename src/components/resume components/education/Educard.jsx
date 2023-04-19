import React from 'react'

const Educard = ({item}) => {
      const {title,institution,start,end,marks}=item
    console.log(title,institution,start,end,marks);

    // console.log(item);
  return (
    <>
      <div >
         <p className='pl-4 text-lg'><b>Course:</b> {title}</p>
         <p className='pl-4 text-lg'><b>Institution:</b> {institution}</p>
           <div className='flex gap-x-5'>
             <p className='pl-4 text-lg'><b>Start:</b> {start} </p>
             <p className='pl-4 text-lg'><b>End :</b> {end} </p>
           </div>
        
         <p className='pl-4 text-lg'><b>Percentage / CGPA :</b>{marks}</p>
      </div>
    </>
  )
}

export default Educard