import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";

interface ProjectProps {
  image: string;
  title: string;
  description: string;
}

const ProjectCard: FC<ProjectProps> = ({ image, title, description }) => {
  return (
    <>
      <Card maxW="sm">
        <Image
          src={image}
          alt="Green double couch with wooden legs"
          borderTopRadius="lg"
        />
        <CardBody>
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>{description}</Text>
          </Stack>
        </CardBody>

        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProjectCard;
