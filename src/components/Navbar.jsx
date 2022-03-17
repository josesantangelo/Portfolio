import React from 'react'
import { Stack } from '@chakra-ui/react'
import { navBarElements } from '../utils/constants'
import { MotionLink, NavLink } from '../utils/animations'

const Navbar = () => {
    return (

        <Stack flexDirection="row"
            alignItems="flex-end"
            justifyContent="flex-end"
            backgroundColor="#131313"
            gap={8}
            padding={4}
        >
            {navBarElements.map(element => {
                return (
                    <MotionLink
                        color="white"
                        key={element.key}
                        fontWeight="semibold"
                        _hover={{ color: "gray.300" }}
                        fontSize={18}
                        variants={NavLink}
                        initial="hidden"
                        animate="visible"
                        transition={NavLink.transition}
                    >
                        {element.name}
                    </MotionLink>)
            }
            )
            }
        </Stack>

    )
}

export default Navbar