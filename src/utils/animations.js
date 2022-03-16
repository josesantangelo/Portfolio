import { Link, Text } from '@chakra-ui/react'
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

export const HomeName = {
    hidden: {
        y: -200,
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
        y: 200,
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


export const MotionLink = motion(Link)
export const MotionText = motion(Text)



