// components/Footer.tsx
// components/Footer.tsx
import { Container, Flex, Text, Divider } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      as="footer"
    //   position="fixed"
    mt={10}
      bottom={0}
      left={0}
      right={0}
      direction="column"
      align="center"
      bg="#bfbdb8"
      color="white"
      py={4}
      marginTop={140}
      zIndex={1000}
    >
      <Divider borderColor="gray.400" mb={2} /> {/* Divider line above the footer */}
      <Container maxW="1200px">
        <Text fontSize="sm" textAlign="center">
          © 2024 Fortune Farm. All rights reserved.
        </Text>
      </Container>
    </Flex>
  );
}
