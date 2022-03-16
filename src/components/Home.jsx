import React from 'react'
import { Stack, Text } from '@chakra-ui/react'
import { MotionText, HomeName, HomeDegree } from '../utils/animations'
const Home = () => {
    return (
        <Stack
            height="92.5vh"
            backgroundColor="#131313"
            padding="15rem 0 0 10rem"
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

        </Stack>
    )
}

export default Home