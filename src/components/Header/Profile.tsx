import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>William Klywerston</Text>
          <Text
            color="gray.300"
            fontSize="small"
          >
            williamklywerston10@gmail.com
          </Text>
        </Box>
      ) }

      <Avatar size="md" name="Wiliam Klywerston" src="https://github.com/williamKly.png" />
    </Flex>
  )
}