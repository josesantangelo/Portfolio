import { Link, Text, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'


export const NavLink = {
    hidden: {
        y: -40,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
    },
    transition: {
        duration: 1.5,
    }
}

const HomeFalls = -180

export const HomeName = {
    hidden: {
        y: HomeFalls,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
    },
    transition: {
        duration: 1.5,
    }
}

export const HomeDegree = {
    hidden: {
        y: HomeFalls * -1,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
    },
    transition: {
        duration: 1.5,
    }
}



export const HomeButton = {

    hidden: {
        x: 500,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
    },
    transition: {
        type: "spring",
        delay: 1,
        duration: 1,
        stiffness: 120,
    }

}




export const MotionLink = motion(Link)
export const MotionText = motion(Text)
export const MotionButton = motion(Button)



