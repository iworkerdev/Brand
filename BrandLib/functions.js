export const getColorModeValue = (lightVariant, darkVariant) => (props) => {
  const { colorMode } = props
  return colorMode === "light" ? lightVariant : darkVariant
}
