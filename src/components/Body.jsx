import React from 'react';
import {Button, Text} from '@chakra-ui/react';
import {BsCloudDownload} from 'react-icons/bs';
import Editor from './Editor';
import Resume from './Resume';


const Body = () => {
  const colors=["#3C486B","#577D86","#FF6000","#19376D","#000000"];

const sections={
    basisinfo:"Basic info",
    education:"Education",
    workExp:"Work Experience",
    project:"Projects",
    achivement:"Achivement",
    summery:"Summery",
    other:"Others"
               }

  return (
    <>
       <Text 
       textAlign={'center'} 
       fontSize={'3xl'} 
       textColor={'blue.800'} 
       fontWeight={'bold'}
       marginTop={'10'}
       >Resume Builder</Text>
      <div className='flex justify-evenly w-[90%] m-auto gap-2'>
         <div className='flex  w-[90%] m-auto gap-2'>
           {
          colors.map((color)=>(
            <div key={color} style={{ backgroundColor: color }} className="w-8 h-8 rounded-full cursor-pointer ">
              
            </div>
          ))
           }
         </div>
        
         <Button bgColor={'blue.600'} textColor={'white'} paddingX={'10'}>
            <BsCloudDownload size={25}/>
         </Button>
      </div>

       <div className='mt-16 w-[80%] mx-auto shadow-2xl border min-h-[35rem] mb-5'>
         <Editor sections={sections}/>
       </div>

       <div>
         <Resume />
       </div>
    </>
  )
}
export default Body;