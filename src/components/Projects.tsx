import { Center, Container, Flex, Grid, Heading } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <Container maxW="7xl" py={4} my={10}>
        <Flex direction="column" gap={6}>
          <Heading size="lg">
            <Center>Projects</Center>
          </Heading>
          <Grid
            templateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            }}
            gap={4}
          >
            <ProjectCard
              image="https://ewm.swiss/application/files/5316/1553/3197/Beautiful_Website_EWM_SA_Digital_Agency_Geneva.jpg"
              title="Project 1"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                doloribus."
            />
            <ProjectCard
              image="https://ewm.swiss/application/files/5316/1553/3197/Beautiful_Website_EWM_SA_Digital_Agency_Geneva.jpg"
              title="Project 2"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                doloribus."
            />
            <ProjectCard
              image="https://ewm.swiss/application/files/5316/1553/3197/Beautiful_Website_EWM_SA_Digital_Agency_Geneva.jpg"
              title="Project 3"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                doloribus."
            />
            <ProjectCard
              image="https://ewm.swiss/application/files/5316/1553/3197/Beautiful_Website_EWM_SA_Digital_Agency_Geneva.jpg"
              title="Project 4"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                doloribus."
            />
          </Grid>
        </Flex>
      </Container>
    </>
  );
};

export default Projects;
