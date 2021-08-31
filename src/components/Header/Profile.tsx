import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Vinícius de Souto</Text>
        <Text color="gray.300" fontSize="small">viniciusdesouto@gmail.com</Text>
      </Box>

      <Avatar size="md" name="Vinicius de Souto" src="https://github.com/soutovnc.png" />
    </Flex>
  )
}