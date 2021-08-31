import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Vinícius de Souto</Text>
          <Text color="gray.300" fontSize="small">viniciusdesouto@gmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Vinicius de Souto" src="https://github.com/soutovnc.png" />
    </Flex>
  )
}