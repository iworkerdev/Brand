// theme.ts (tsx file with usage of StyleFunctions, see 4.)

import { darken, transparentize, whiten } from "@chakra-ui/theme-tools"

const mode = (lightVariant, darkVariant) => (props) => {
  const { colorMode } = props
  return colorMode === "light" ? lightVariant : darkVariant
}

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

    primary: (props) => ({
      bg: mode(
        "backgrounds.light.neutral.400",
        "backgrounds.dark.neutral.400"
      )(props),
      color: "white",
      _hover: {
        bg: mode(
          whiten("backgrounds.light.neutral.400", 20),
          darken("backgrounds.dark.neutral.400", 20)
        )(props),
      },
    }),
    primary_outline: (props) => ({
      bg: "transparent",
      color: mode(
        "backgrounds.light.neutral.400",
        "backgrounds.dark.neutral.400"
      )(props),
      border: "1px solid",
      color: mode("text.light.300", "text.dark.300")(props),
      borderColor: mode(
        "backgrounds.light.neutral.400",
        "backgrounds.dark.neutral.400"
      )(props),
      _hover: {
        color: mode("text.dark.300", "text.light.300")(props),

        bg: mode(
          "backgrounds.light.neutral.400",
          "backgrounds.dark.neutral.400"
        )(props),
      },
    }),

    accent: (props) => ({
      bg: mode(
        "backgrounds.light.accent.300",
        "backgrounds.dark.accent.300"
      )(props),
      color: "white",
      _hover: {
        bg: mode(
          whiten("backgrounds.light.accent.300", 20),
          darken("backgrounds.dark.accent.300", 20)
        )(props),
      },
    }),

    accent_outline: (props) => ({
      bg: "transparent",
      color: mode("text.light.accent", "text.dark.accent")(props),
      border: "1px solid",
      borderColor: mode(
        "backgrounds.light.accent.300",
        "backgrounds.dark.accent.300"
      )(props),
      _hover: {
        color: "white",

        bg: mode(
          "backgrounds.light.accent.300",
          "backgrounds.dark.accent.300"
        )(props),
      },
    }),

    attention: (props) => ({
      bg: mode(
        "backgrounds.light.attention.300",
        "backgrounds.dark.attention.300"
      )(props),
      color: "white",
      _hover: {
        bg: mode(
          whiten("backgrounds.light.attention.300", 20),
          darken("backgrounds.dark.attention.300", 20)
        )(props),
      },
    }),

    attention_outline: (props) => ({
      bg: "transparent",
      color: mode("text.light.attention", "text.dark.attention")(props),
      border: "1px solid",
      borderColor: mode(
        "backgrounds.light.attention.300",
        "backgrounds.dark.attention.300"
      )(props),
      _hover: {
        color: "white",

        bg: mode(
          "backgrounds.light.attention.300",
          "backgrounds.dark.attention.300"
        )(props),
      },
    }),

    danger: (props) => ({
      bg: mode(
        "backgrounds.light.danger.300",
        "backgrounds.dark.danger.300"
      )(props),
      color: "white",
      _hover: {
        bg: mode(
          whiten("backgrounds.light.danger.300", 20),
          darken("backgrounds.dark.danger.300", 20)
        )(props),
      },
    }),

    danger_outline: (props) => ({
      bg: "transparent",
      color: mode("text.light.danger", "text.dark.danger")(props),
      border: "1px solid",
      borderColor: mode(
        "backgrounds.light.danger.300",
        "backgrounds.dark.danger.300"
      )(props),
      _hover: {
        color: "white",
        bg: mode(
          "backgrounds.light.danger.300",
          "backgrounds.dark.danger.300"
        )(props),
      },
    }),

    open: (props) => ({
      bg: mode(
        "backgrounds.light.open.300",
        "backgrounds.dark.open.300"
      )(props),
      color: "white",
      _hover: {
        bg: mode(
          whiten("backgrounds.light.open.300", 20),
          darken("backgrounds.dark.open.300", 20)
        )(props),
      },
    }),

    open_outline: (props) => ({
      bg: "transparent",
      color: mode("text.light.open", "text.dark.open")(props),
      border: "1px solid",
      borderColor: mode(
        "backgrounds.light.open.300",
        "backgrounds.dark.open.300"
      )(props),
      _hover: {
        color: "white",
        bg: mode(
          "backgrounds.light.open.300",
          "backgrounds.dark.open.300"
        )(props),
      },
    }),

    closed: (props) => ({
      bg: mode(
        "backgrounds.light.closed.300",
        "backgrounds.dark.closed.300"
      )(props),
      color: "white",
      _hover: {
        bg: mode(
          whiten("backgrounds.light.closed.300", 20),
          darken("backgrounds.dark.closed.300", 20)
        )(props),
      },
    }),

    closed_outline: (props) => ({
      bg: "transparent",
      color: mode("text.light.closed", "text.dark.closed")(props),
      border: "1px solid",
      borderColor: mode(
        "backgrounds.light.closed.300",
        "backgrounds.dark.closed.300"
      )(props),
      _hover: {
        color: "white",
        bg: mode(
          "backgrounds.light.closed.300",
          "backgrounds.dark.closed.300"
        )(props),
      },
    }),

    done: (props) => ({
      bg: mode(
        "backgrounds.light.done.300",
        "backgrounds.dark.done.300"
      )(props),
      color: "white",
      _hover: {
        bg: mode(
          whiten("backgrounds.light.done.300", 20),
          darken("backgrounds.dark.done.300", 20)
        )(props),
      },
    }),

    done_outline: (props) => ({
      bg: "transparent",
      color: mode("text.light.done", "text.dark.done")(props),
      border: "1px solid",
      borderColor: mode(
        "backgrounds.light.done.300",
        "backgrounds.dark.done.300"
      )(props),
      _hover: {
        color: "white",
        bg: mode(
          "backgrounds.light.done.300",
          "backgrounds.dark.done.300"
        )(props),
      },
    }),

    secondary: (props) => ({
      bg: mode(
        "backgrounds.light.secondary.200",
        "backgrounds.dark.secondary.200"
      )(props),
      color: mode("text.light.300", "text.dark.300")(props),
      _hover: {
        color: mode("text.light.300", "text.dark.300")(props),
        bg: mode(
          whiten("backgrounds.light.secondary.200", 20),
          darken("backgrounds.dark.secondary.200", 20)
        )(props),
      },
    }),

    secondary_outline: (props) => ({
      bg: "transparent",
      color: mode("text.light.secondary", "text.dark.secondary")(props),
      border: "1px solid",
      borderColor: mode(
        "backgrounds.light.secondary.200",
        "backgrounds.dark.secondary.200"
      )(props),
      _hover: {
        color: mode("text.light.300", "text.dark.300")(props),
        bg: mode(
          "backgrounds.light.secondary.200",
          "backgrounds.dark.secondary.200"
        )(props),
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
    variant: "primary", // default is solid
    _focus: {
      boxShadow: "0 0 0 3px #fff, 0 0 0 6px #efdfde",
      outline: "none",
    },
  },
}

export default BrandButton
