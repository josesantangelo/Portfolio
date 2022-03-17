import React from 'react'
import { Button, ButtonGroup, IconButton } from '@chakra-ui/react'
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai'
const icons = [
    {
        tag: <AiOutlineGithub color='white' size="100%" hover={{ color: "red" }} onMouseEnter={(e) => e.target.color = 'blue'} />,
        key: "github",
        open: "http://www.google.com",
    },
    {
        tag: <AiOutlineLinkedin color='white' size="100%" />,
        key: "linkedin",
        open: "http://www.google.com",
    },
    {
        tag: <AiOutlineTwitter color='white' size="100%" />,
        key: "twitter",
        open: "http://www.google.com",
    },
]
const NetworksFixed = () => {
    return (

        <ButtonGroup
            zIndex={999}
            position={"fixed"}
            right={5}
            bottom={200}
            flexDirection="column"
            gap={10}
            backgroundColor="transparent"
            justifyContent="center"
            alignItems="flex-end"
        >
            {icons.map(element => {
                return (
                    <IconButton backgroundColor="transparent"
                        key={element.key}
                        aria-label={`go to personal ${element.key}`}
                        width={20}
                        height={20}
                        icon={element.tag}
                        _hover={{
                            backgroundColor: "transparent",
                        }}

                    />
                )
            })}
        </ButtonGroup>


    )
}

export default NetworksFixed