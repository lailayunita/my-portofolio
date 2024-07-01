import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { MdDownload } from "react-icons/md";

const Jumbotron = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:lailayunita131@gmail.com";
  };

  return (
    <>
      <Container maxW="7xl" my={10} color="white">
        <Flex
          justifyContent="space-around"
          gap={4}
          alignItems="center"
          direction={{ base: "column-reverse", md: "row" }}
          p={10}
          bg="#616161"
          h={{ base: "100%", md: "80vh" }}
          borderRadius="10px"
        >
          <Flex direction="column" gap={4}>
            <Box>
              <Heading size="lg">Hi, I am Laila Yunita</Heading>
            </Box>
            <Text>I am Fullstack Development Student at Purwadhika</Text>
            <Stack direction="row" spacing={4}>
              <Button
                leftIcon={<MdEmail />}
                colorScheme="whiteAlpha"
                variant="solid"
                onClick={handleEmailClick}
              >
                Email Me
              </Button>
              <Link href="../public/laila-yunita-cv.pdf" download>
                <Button
                  leftIcon={<MdDownload />}
                  colorScheme="whiteAlpha"
                  variant="outline"
                >
                  Download CV
                </Button>
              </Link>
            </Stack>
          </Flex>
          <Box>
            <Image
              src="/ilustration.png"
              alt="Profile picture"
              w={{ base: "150px", sm: "200px", md: "300px" }}
              h={{ base: "150px", sm: "200px", md: "300px" }}
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Jumbotron;
