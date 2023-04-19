import React, { useState } from 'react';

import Projects from './resume components/projects/Projects';
import EducatioDetails from './resume components/education/EducatioDetails';
import BasicDeatils from './resume components/BasicDeatils';
import EcperienceDetails from './resume components/experience/EcperienceDetails';
import AchiveDetails from './resume components/achivement/AchiveDetails';
import SkillDetails from './resume components/skills/SkillDetails';
import OtherDetails from './resume components/other/OtherDetails';
import { HStack } from '@chakra-ui/react';

const Resume = () => {



  return (
    <>
      <h1 className='text-4xl text-center text-blue-800 mt-16'> Resume</h1>
      <div className='my-3 rounded-md border-2 mx-auto shadow-2xl w-[80%] min-h-[50rem] p-4'>
        <BasicDeatils />

        <HStack width={'90%'} marginX={'auto'} marginTop={'3'} alignItems={'flex-start'}>
           <SkillDetails/>
           <EducatioDetails/>
        </HStack>
         
           <div className='w-[90%] mx-auto'>
             <Projects/>
           </div>
           <div className='w-[90%] mx-auto'>
             <EcperienceDetails/>
           </div>
           <div className='w-[90%] mx-auto'>
            <AchiveDetails />
           </div>
           <div className='w-[90%] mx-auto'>
             <OtherDetails/>
           </div>
      </div>

      
    </>
  );
};

export default Resume;
