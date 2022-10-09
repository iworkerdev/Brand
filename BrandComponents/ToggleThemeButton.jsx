import { Button, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

import React from "react"

const ToggleThemeButton = ({ ...props }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button variant={"ghost"} onClick={toggleColorMode} {...props}>
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  )
}

export default ToggleThemeButton
