import { Box } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" my={8}>
      &copy; {new Date().getFullYear()} Andre Putera Pratama. All Rights Reserved.
    </Box>
  )
}
