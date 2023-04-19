import { Stack, VStack,Image } from '@chakra-ui/react';
import React from 'react';
import hero from '../assts/hero.svg'

const HeroSection = () => {
  return (
     <>
        <Stack direction={['column','row']} maxW={'90vw'} minH={'80vh'} margin={'auto'}>
            <VStack w={['full','50%']} alignItems={'center'} justifyContent={'center'} rowGap={'6'}>
                <h1 className='text-6xl text-sky-800 font-semibold font-sans'>
                    A resume that stand out!
                </h1>

                <h1 className='text-6xl text-sky-800 font-semibold font-sans'>
                  Make A resume .Its FREE*
                </h1>
            </VStack>

            <VStack w={['full','50%']} >
              <Image src={hero} />
                
            </VStack>
        </Stack>
     </>
  )
}

export default HeroSection;