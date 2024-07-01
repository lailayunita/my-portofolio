import { Box, Center, Container, Flex, Grid, Heading } from "@chakra-ui/react";
import { DiJavascript } from "react-icons/di";
import { FaCss3Alt, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";
FaGithub;
const Tools = () => {
  return (
    <>
      <Container maxW="7xl" h="100%" py={4} my={10}>
        <Flex
          gap={6}
          alignItems="center"
          direction={{ base: "column", md: "row" }}
          border="1px solid #616161"
          borderRadius="8px"
          p={4}
        >
          <Box w={{ base: "100%", md: "50%" }}>
            <Heading size="lg" textAlign={{ base: "center", md: "left" }}>
              Skills & Tools
            </Heading>
          </Box>
          <Grid
            templateColumns={{ base: "repeat( 3, 1fr)", md: "repeat(6, 1fr)" }}
            gap={6}
            alignItems="center"
            textAlign="center"
            // color="#616161"
          >
            <Box m="auto">
              <FaHtml5 size="60px" />
              <Center>HTML</Center>
            </Box>
            <Box m="auto">
              <DiJavascript size="60px" />
              <Center>Javascript</Center>
            </Box>
            <Box m="auto">
              <FaCss3Alt size="60px" />
              <Center>CSS</Center>
            </Box>
            <Box m="auto">
              <FaReact size="60px" />
              <Center>React</Center>
            </Box>
            <Box m="auto">
              <SiChakraui size="60px" />
              <Center>Chakra UI</Center>
            </Box>
            <Box m="auto">
              <FaGithub size="60px" />
              <Center>Gtihub</Center>
            </Box>
          </Grid>
        </Flex>
      </Container>
    </>
  );
};

export default Tools;
