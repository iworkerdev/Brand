// theme.ts (tsx file with usage of StyleFunctions, see 4.)

const BrandButton = {
  // 1. We can update the base styles
  baseStyle: {
    fontWeight: 600, // Normally, it is "semibold"
  },
  // 2. We can add a new button size or extend existing
  sizes: {
    xl: {
      h: "56px",
      fontSize: "lg",
      px: "32px",
    },
  },
  // 3. We can add a new visual variant
  variants: {
    "with-shadow": {
      bg: "red.400",
      boxShadow: "0 0 2px 2px #efdfde",
    },
    // 4. We can override existing variants
    solid: (props) => ({
      bg:
        props.colorMode === "dark"
          ? "backgrounds.light.neutral.400"
          : "backgrounds.dark.neutral.400",
      color: "white",
      _hover: {
        bg:
          props.colorMode === "dark"
            ? "backgrounds.light.neutral.100"
            : "text.light.300",
      },
    }),
    // 5. We can add responsive variants
    sm: {
      bg: "teal.500",
      fontSize: "md",
    },
  },
  // 6. We can overwrite defaultProps
  defaultProps: {
    size: "md", // default is md
    variant: "solid", // default is solid
    _focus: {
      boxShadow: "0 0 0 3px #fff, 0 0 0 6px #efdfde",
      outline: "none",
    },
  },
}

export default BrandButton
