import React, { useState } from 'react'
import { Button } from '@chakra-ui/react';
import { useDispatch} from 'react-redux';
import { edu } from '../../Redux/slice/UserSlice';
const Education = () => {

   const[data,setData]=useState({
     title:'',
     institution:'',
     start:"",
     end:"",
     marks:""
   })
function changeHandler(e)
{
  setData((prev)=>(
    {
      ...prev,
      [e.target.name]:e.target.value
    }
  ))
}

 const dispatch=useDispatch();

 function submitHandler(e){
  e.preventDefault();

    dispatch(edu(data));
    setData({
      title:'',
      institution:'',
      start:"",
      end:"",
      marks:""
    })
 }
  return (
    <>
      <div className='m-9'>
           <form className='flex flex-col ' onSubmit={submitHandler}>
             
              <lable>
                <p className='text-2xl text-sky-800 font-serif  pl-4'>Title</p>
                <input type='text' 
                 className=' min-w-[60%] ml-4 mt-3 py-2 border-2 rounded-sm outline-none px-4'
                 placeholder='Enter course name eg.Btech'
                 name='title'
                 value={data.title}
                 onChange={changeHandler}
                 />
              </lable>

              <lable>
                <p className='text-2xl text-sky-800 font-serif  pl-4'>Institution</p>
                <input type='text' 
                 className=' min-w-[60%] ml-4 mt-3 py-2 border-2 rounded-sm outline-none px-4'
                placeholder='Enter overview of project'
                 name='institution'
                 value={data.institution}
                 onChange={changeHandler}
                 />
              </lable>

              <div className='w-full flex gap-5 mt-5 '>
                 <label className='w-[47%]'>
                   <p className='text-2xl text-sky-800 font-serif  pl-4'>Start</p>
                   <input type='date' 
                     className='px-4 w-full ml-4 mt-3 py-2 border-2 rounded-sm outline-none'
                     placeholder='Enter deployed link of project '
                     name='start'
                     value={data.start}
                     onChange={changeHandler}
                      />
                 </label>

                 <label className='w-[47%]'>
                   <p className='text-2xl text-sky-800 font-serif  pl-4'>End</p>
                     <input type='date' 
                       className='px-4 w-full ml-4 mt-3 py-2 border-2 rounded-sm outline-none'
                       placeholder='Enter end date' 
                       name='end'
                      value={data.end}
                      onChange={changeHandler}
                       />
                   </label>

              </div>

              <lable>
                <p className='text-2xl text-sky-800 font-serif  pl-4'>Percentage / CGPA</p>
                <input type='text' 
                 className=' min-w-[60%] ml-4 mt-3 py-2 border-2 rounded-sm outline-none px-4'
                placeholder='Enter overview of project'
                name='marks'
                value={data.marks}
                onChange={changeHandler}
                 />
              </lable>
             
              <Button 
                type='submit'
                bgColor={'gray.200'} 
                marginLeft={'4'} 
                width={'fit-content'} 
                marginTop={'1.5'}>Save</Button>
           </form>
        </div>

    </>
  )
}

export default Education;