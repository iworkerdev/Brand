import BrandButton from "./BrandButton"
import BrandColors from "./BrandColors"
import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const theme = extendTheme({
  colors: BrandColors,
  components: {
    Button: BrandButton,
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
        fontFamily: "body",
      },
    }),
  },
})

export default theme
