import {
  Divider,
  Stack,
  Text,
  Container,
  Card,
  CardBody,
  Grid,
  Heading,
  HStack,
  Tag,
} from "@chakra-ui/react";
import { Fade } from "react-reveal";
import { Carousel } from 'react-responsive-carousel';
import animationData from "../assets/animation_lm6z1slw.json";
import Lottie from "lottie-react";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const projects = [
  {
    title: "Library Management System",
    description:
      `• Designed and deployed a cloud-native architecture, utilizing Spring Boot microservices and Spring Cloud components, resulting in a 40% reduction in system latency and enabling 99.9% service availability through fault-tolerant design.
• Integrated real-time monitoring with Elasticsearch, Logstash, Kibana, and Grafana, enhancing system observability.`,
    tech: ["Spring Boot", "Spring Cloud", "React", "Docker", "Kubernetes", "ELK", "Grafana"],
  },
  {
    title: "Quant Trading Platform",
    description:
      `• Deployed a real-time trading platform for data streaming using serverless architecture, provisioning infrastructure with AWS CDK for scalability and efficiency.
• Implemented CloudWatch for performance monitoring.`,
    tech: ["Python", "AWS Lambda", "DynamoDB", "Kinesis", "CloudWatch"],
  },
  {
    title: "Event Management System",
    description:
      `• Architected and deployed a full-stack event management platform streamlining event creation and registration for 500+ users with 99.8% reliability.
• Engineered secure authentication using Passport.js and JWT tokens.`,
    tech: ["Node.js", "Express.js", "React.js", "MySQL", "Sequelize", "Passport.js", "JWT"],
  },
];

export default function Projects({ color }) {
  return (
    <Container maxW={"8xl"} id="projects" py={{ base: 16, md: 32 }}>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={{ base: 8, md: 15 }}
        alignItems="stretch"
        pb={{ base: 20, md: 36 }}
        minH={{ base: "800px", md: "900px" }}
      >
        <Stack align="center" justify="center" spacing={4}>
          <Text fontWeight={800} fontSize="2xl" mb={4}>Projects</Text>
          <Divider orientation="horizontal" />
          <Lottie
            animationData={animationData}
            className="animation-container-p"
            style={{ maxWidth: 350, width: "100%" }}
          />
        </Stack>
        <Stack
          flex="1"
          px={4}
          spacing={4}
          align="center"
          justify="center"
          height="100%"
        >
          <Carousel
            className="Pbox"
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay={false}
            emulateTouch
          >
            {projects.map((project, idx) => (
              <Fade bottom key={idx}>
                <Card width="100%" minH="450px" display="flex" alignItems="stretch">
                  <CardBody align="left" px={8} py={8} height="100%">
                    <HStack justify="space-between" mb={2}>
                      <Heading size="md">{project.title}</Heading>
                    </HStack>
                    <HStack spacing={2} mb={2} flexWrap="wrap">
                      {project.tech.map((tech, i) => (
                        <Tag key={i} colorScheme="teal" size="md" mb={1}>{tech}</Tag>
                      ))}
                    </HStack>
                    <Text fontSize="md" py={2} whiteSpace="pre-line">
                      {project.description}
                    </Text>
                  </CardBody>
                </Card>
              </Fade>
            ))}
          </Carousel>
        </Stack>
      </Grid>
    </Container>
  );
}