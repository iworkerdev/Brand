import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react"

import React from "react"
import { useRef } from "react"

const ConfirmationDialogModal: React.FC<{
  title: string
  description: string
  onConfirm: () => void
  onCancel?: () => void
  confirmButtonText?: string
  cancelButtonText?: string
  children: (onOpen: () => void) => React.ReactNode
}> = ({
  children,
  title,
  description,
  onConfirm,
  onCancel,
  confirmButtonText = "Confirm",
  cancelButtonText = "Cancel",
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef<HTMLButtonElement>(null)

  const modalBg = useColorModeValue(
    "backgrounds.light.primary.200",
    "backgrounds.dark.primary.200"
  )
  const borderColor = useColorModeValue("borders.light.100", "borders.dark.100")

  const handleConfirmation = () => {
    onConfirm()
    onClose()
  }

  return (
    <>
      {children(onOpen)}
      <AlertDialog
        motionPreset='slideInBottom'
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        leastDestructiveRef={cancelRef}
      >
        <AlertDialogOverlay>
          <AlertDialogContent
            backdropBlur={0.7}
            bg={modalBg}
            p={5}
            borderColor={borderColor}
            borderRadius={"10px"}
            boxShadow={"0px 2px 4px rgba(90, 90, 90, 0.15)"}
            display={"flex"}
            gap={3}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <AlertDialogHeader>
              <Text fontWeight={700} size={"2xl"} variant={"black_white"}>
                {title}
              </Text>
            </AlertDialogHeader>

            <AlertDialogBody>
              <Text variant={"secondary"} size={"sm"} textAlign={"center"}>
                {description}
              </Text>
            </AlertDialogBody>

            <AlertDialogFooter
              display={"flex"}
              justifyContent={"center"}
              gap={8}
            >
              <Button
                variant={"secondary"}
                py={2}
                size={"sm"}
                px={5}
                ref={cancelRef}
                onClick={() => {
                  typeof onCancel === "function" && onCancel()
                  onClose()
                }}
              >
                {cancelButtonText}
              </Button>
              <Button
                variant={"danger"}
                size={"sm"}
                py={2}
                px={5}
                onClick={handleConfirmation}
              >
                {confirmButtonText}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
export default ConfirmationDialogModal
