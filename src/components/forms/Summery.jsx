import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sum } from '../../Redux/slice/UserSlice';

const Summery = () => {
  
  const dispatch=useDispatch();
  const[data,setData]=useState({
   title:'',
   skill:"",
  });

  function changeHandler(e){
    setData((prev)=>(
      {
        ...prev ,
        [e.target.name]:e.target.value
      }
    ))
  }

  function submitHandler(e)
  {
    e.preventDefault();
    dispatch(sum(data));
    
    setData({
      title:'',
      skill:''
   
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
                 placeholder='Enter title eg.Programming Language'
                 name='title'
                 value={data.title}
                 onChange={changeHandler}
                 />
              </lable>
                
              <lable>
                <p className='text-2xl text-sky-800 font-serif  pl-4'>Title</p>
                <input type='text' 
                 className=' min-w-[60%] ml-4 mt-3 py-2 border-2 rounded-sm outline-none px-4'
                 placeholder='Enter skil eg.Java C++'
                 name='skill'
                 value={data.skill}
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

export default Summery;