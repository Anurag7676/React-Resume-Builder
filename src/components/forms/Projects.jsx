import React, { useState } from 'react'
import { Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { project } from '../../Redux/slice/UserSlice';
const Projects = () => {

  const dispatch=useDispatch();

  const[projectdata,setProjectdata]=useState({
    project:'',
    project_title:'',
    overview:'',
    deloyed_link:'',
    github_link:'',
    project_description:''

  });

  function changeHandler(e)
  {
   setProjectdata((prev)=>(
    {
      ...prev,
      [e.target.name]:e.target.value
    }
   ))
  };

  function submitHandler(e)
  {
    e.preventDefault();
     dispatch(project(projectdata));
     
     setProjectdata({
      project:'',
      project_title:'',
      overview:'',
      deloyed_link:'',
      github_link:'',
      project_description:''
     })
  }

  return (
    <>
      <div className='m-9'>
           <form className='flex flex-col ' onSubmit={submitHandler}>
              <lable>
                <p className='text-2xl text-sky-800 font-serif  pl-4'>Project</p>
                <input type='text' 
                 className=' min-w-[60%] ml-4 mt-3 py-2 border-2 rounded-sm outline-none px-4'
                placeholder='Enter section title' 
                 name='project'
                 value={projectdata.project} 
                 onChange={changeHandler}
                />
              </lable>

              <lable>
                <p className='text-2xl text-sky-800 font-serif  pl-4'>Title</p>
                <input type='text' 
                 className=' min-w-[60%] ml-4 mt-3 py-2 border-2 rounded-sm outline-none px-4'
                 placeholder='Enter project eg.title'
                 name='project_title'
                 value={projectdata.project_title}
                 onChange={changeHandler}
                 />
              </lable>
              <lable>
                <p className='text-2xl text-sky-800 font-serif  pl-4'>Overview</p>
                <input type='text' 
                 className=' min-w-[60%] ml-4 mt-3 py-2 border-2 rounded-sm outline-none px-4'
                placeholder='Enter overview of project'
                 name='overview'
                 value={projectdata.overview}
                 onChange={changeHandler}
                 />
              </lable>

              <div className='w-full flex gap-5 mt-5 '>
                 <label className='w-[47%]'>
                   <p className='text-2xl text-sky-800 font-serif  pl-4'>Deployed Link</p>
                    <input type='text' 
                     className='px-4 w-full ml-4 mt-3 py-2 border-2 rounded-sm outline-none'
                     placeholder='Enter deployed link of project '
                     name='deloyed_link'
                     value={projectdata.deloyed_link}
                     onChange={changeHandler}
                      />
                 </label>

                   <label className='w-[47%]'>
                   <p className='text-2xl text-sky-800 font-serif  pl-4'>Github link</p>
                     <input type='text' 
                       className='px-4 w-full ml-4 mt-3 py-2 border-2 rounded-sm outline-none'
                       placeholder='Enter github link of your project'
                       name='github_link'
                       value={projectdata.github_link}
                       onChange={changeHandler}
                        />
                   </label>

              </div>

              <lable className='w-full mt-3'>
                <p className='text-2xl text-sky-800 font-serif  pl-4'> Project Description</p>
                  <textarea 
                  onChange={changeHandler}
                  className='border-2 rounded-md outline-none ml-3 w-[70%] '
                  name="project_description" 
                  value={projectdata.project_description}
                  id="" 
                  cols="30" 
                  rows="10">

                  </textarea>
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

export default Projects;