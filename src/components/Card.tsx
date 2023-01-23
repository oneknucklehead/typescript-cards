import { Box, Button, Flex, Image, Text, Icon } from '@chakra-ui/react'
import { AiFillHeart } from 'react-icons/ai'
import React, { FC, useState } from 'react'
import CountDownTimer from './CoundownTimer'

interface CardProps {
  tagName: string
  userId: string
  likes: number
  userName: string
  bidPrice: string
  btns: string[]
  days: number
  hours: number
  minutes: number
  seconds: number
  src: string
}

const Card: FC<CardProps> = ({
  tagName,
  userId,
  likes,
  userName,
  bidPrice,
  btns,
  hours,
  minutes,
  seconds,
  days,
  src,
}) => {
  const [btnActive1, setBtnActive1] = useState<boolean>(true)
  const [btnActive2, setBtnActive2] = useState<boolean>(false)
  const [likeActive, setLikeActive] = useState<boolean>(false)
  return (
    <>
      <Box bg='#003151' borderRadius='md' boxShadow='xl'>
        <Box p='5'>
          <Box>
            <Flex
              mb='3'
              w='100%'
              justifyContent='space-between'
              alignItems='center'
            >
              <Box
                key={tagName}
                onClick={() => setBtnActive1(!btnActive1)}
                border='2px'
                borderColor={`${btnActive1 ? '#758096' : '#F28C28'}`}
                borderRadius='full'
                as='b'
                color={`${btnActive1 ? '#758096' : '#fff'}`}
                px='3'
                py='0'
              >
                Hot Deal
              </Box>
              <Box
                key={tagName}
                onClick={() => setBtnActive2(!btnActive2)}
                border='2px'
                borderColor={`${btnActive2 ? '#758096' : '#F28C28'}`}
                borderRadius='full'
                as='b'
                color={`${btnActive2 ? '#758096' : '#fff'}`}
                px='3'
                py='0'
              >
                {tagName}
              </Box>
            </Flex>
          </Box>

          <Image
            src={src}
            alt='card profile'
            borderRadius='md'
            borderColor='gray'
            objectFit='cover'
            w='100%'
            h='200px'
          />
          <Flex
            w='100%'
            justifyContent='space-between'
            alignItems='center'
            mt={3}
          >
            <Text fontWeight='semibold' color={'#fff'}>
              {userId}
            </Text>
            <Flex gap='2' fontWeight='semibold' alignItems='center'>
              <Icon
                as={AiFillHeart}
                w={6}
                h={6}
                onClick={() => setLikeActive(!likeActive)}
                color={`${likeActive ? '#FF647F' : 'gray.500'}`}
              />
              <Text color={'#fff'}>{likes}</Text>
            </Flex>
          </Flex>
          <Text color='blue.300'>{userName}</Text>
          <Flex w='100%' justifyContent='space-between' alignItems='center'>
            <Box
              border={'1px'}
              py='2'
              px='3'
              borderRadius={'md'}
              borderColor='#758096'
            >
              <Text fontSize='14px' fontWeight='semibold' color='#7CFC00'>
                HIGHEST BID
              </Text>
              <Text color={'#fff'} fontSize='18px' fontWeight='bold'>
                {bidPrice}
              </Text>
            </Box>
            <Box
              border={'1px'}
              py='2'
              px='3'
              borderRadius={'md'}
              borderColor='#758096'
            >
              <Text fontSize='14px' fontWeight='semibold' color='blue.200'>
                AUCTION ENDS IN
              </Text>
              <Text color={'#fff'} fontSize='18px' fontWeight='bold'>
                <CountDownTimer
                  days={days}
                  hours={hours}
                  minutes={minutes}
                  seconds={seconds}
                />
              </Text>
            </Box>
          </Flex>

          <Flex gap='2' my='2'>
            {btns[1] && (
              <Button
                w='100%'
                bg='transparent'
                border='1px'
                rounded='none'
                fontSize='14px'
                px='3'
                py='5'
                color={'#fff'}
              >
                {btns[1]}
              </Button>
            )}
            {btns[0] && (
              <Button
                w='100%'
                bg='blue.500'
                fontSize='14px'
                px='3'
                py='5'
                border='1px'
                borderColor='blue.500'
                rounded='none'
                color={'#fff'}
              >
                {btns[0]}
              </Button>
            )}
          </Flex>
        </Box>
      </Box>
    </>
  )
}

export default Card
