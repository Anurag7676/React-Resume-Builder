import React, { useState } from 'react'
import { Button } from '@chakra-ui/react';
import { achieve } from '../../Redux/slice/UserSlice';
import { useDispatch } from 'react-redux';
const Achivements = () => {

  const[data,setData]=useState({
    title:'',
    description:''
  });

  const dispatch=useDispatch();

  function changeHandler(e)
  {
    setData((prev)=>(
      {
        ...prev,
        [e.target.name]:e.target.value
      }
    ))
  };

  function submitHandler(e)
  {
    e.preventDefault();
    dispatch(achieve(data));
    console.log(data);

  }

  return (
    <>
        <div className='m-9'>
           <form className='flex flex-col ' onSubmit={submitHandler}>
              <lable>
                <p className='text-2xl text-sky-800 font-serif  pl-4'>Title</p>
                <input type='text' 
                 className=' min-w-[60%] ml-4 mt-3 py-2 border-2 rounded-sm outline-none px-4'
                placeholder='Enter section title'
                name='title'
                value={data.title}
                onChange={changeHandler}
                 />
              </lable>
    
               <label className='w-full my-4' >
                <p className='text-2xl text-sky-800 font-serif  pl-4 '>Details</p>
                <textarea 
                 className='border-2 rounded-md outline-none w-[70%] ml-3 p-4'
                 name="description"
                 value={data.description}
                 onChange={changeHandler}
                 id="" 
                cols="30" 
                rows="10" />
               </label>
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

export default Achivements;