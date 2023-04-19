import { HStack, Tag, TagCloseButton, TagLabel } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux';
// import { removeWork } from '../Redux/slice/UserSlice';

const Chips = ({workexp,item,id ,arr,updater,updateHandler}) => {

  const dispatch=useDispatch();

  const filterArr=arr.filter((item)=>item.start!==id)

  function deleteHandler()
  {

    dispatch((updater(filterArr)));
  }
  return (
    <>
         <HStack spacing={4} marginX={'3'} marginY={'3'} cursor={'pointer'}>
  {['md'].map((size) => (
    <Tag
      size={size}
      key={size}
      borderRadius='full'
      variant='solid'
      colorScheme='green'
    >
      <TagLabel onClick={()=>updateHandler(id)}>{workexp} {item}</TagLabel>
      <TagCloseButton onClick={deleteHandler} />
    </Tag>
  ))}
</HStack>
    </>
  )
}

export default Chips