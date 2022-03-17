import React from 'react'
import { Stack, Text, Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { MotionText, MotionButton, HomeName, HomeDegree, HomeButton } from '../utils/animations'
const Home = () => {


    return (
        <Stack
            backgroundColor="#131313"
            padding="15rem 0 28.65rem 10rem"
            color="white"
        >
            <MotionText
                fontSize={60}
                fontWeight="semibold"
                variants={HomeName}
                initial="hidden"
                animate="visible"
                transition={HomeName.transition}
            >
                Jose Luis Santangelo
            </MotionText>
            <MotionText
                fontSize={25}
                variants={HomeDegree}
                initial="hidden"
                animate="visible"
                transition={HomeDegree.transition}
            >Fullstack Developer</MotionText>
            <MotionButton
                size="sm"
                color="black"
                width="10rem"
                rightIcon={<ArrowForwardIcon />}
                variants={HomeButton}
                initial="hidden"
                animate="visible"
                transition={HomeButton.transition}
                _hover={{ boxShadow: "1px 1px 10px 1px gray", backgroundColor: 'gray.200' }}
                fontSize={15}
            >
                About me</MotionButton>
        </Stack >
    )
}

export default Home