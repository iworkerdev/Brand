import BrandButton from "./BrandButton"
import BrandColors from "./BrandColors"
import BrandText from "./BrandText"
import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
}

const breakpoints = {
  sm: "360px",
  sxm: "480px",
  md: "640px",
  mxd: "800px",
  xl: "1024px",
  xxl: "1280px",
  xxxl: "1440px",
}

const theme = extendTheme({
  config,
  breakpoints,
  colors: BrandColors,
  components: {
    Button: BrandButton,
    Text: BrandText,
  },
  styles: {
    global: (props) => ({
      body: {
        color: mode("text.light.300", "text.dark.300")(props),
        bg: mode(
          "backgrounds.light.primary.300",
          "backgrounds.dark.primary.300"
        )(props),
        lineHeight: "base",
        fontFamily: "'DM Sans', sans-serif",
      },
    }),
  },
})

export default theme
