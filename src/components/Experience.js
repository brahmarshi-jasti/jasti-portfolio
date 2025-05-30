import React, { useState } from "react";
import {
  Divider,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  List,
  ListItem,
  ListIcon,
  Button,
  ButtonGroup,
  Center,
  Image,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Fade } from "react-reveal";
import { Reveal } from "./Reveal.tsx";

import uhLogo from "../assets/uh.svg"; // Add your University of Houston logo
import citiLogo from "../assets/citi.png"; // Add your Citigroup logo
import amazonLogo from "../assets/amazon.png"; // Add your Amazon logo

export default function Experience({ color }) {
  const [selectedExperience, setSelectedExperience] = useState("uh");

  const handleSelectExperience = (experience) => {
    setSelectedExperience(experience);
  };

  return (
    <>
      <Container maxW={"8xl"} id="experience">
        <Box
          as={Box}
          textAlign={"left"}
          spacing={{ base: 8, md: 2 }}
          pb={{ base: 20, md: 36 }}
        >
          <div>
            <Text fontWeight={800} fontSize="2xl" mb={4}>
              Experience
            </Text>
            <Divider mb={8} orientation="horizontal" />
          </div>

          <Center px={4}>
            <ButtonGroup variant="outline" mb={8}>
              <Button onClick={() => handleSelectExperience("uh")}>
                University of Houston
              </Button>
              <Button onClick={() => handleSelectExperience("citi")}>
                Citigroup
              </Button>
              <Button onClick={() => handleSelectExperience("amazon")}>
                Amazon
              </Button>
            </ButtonGroup>
          </Center>

          {selectedExperience === "uh" && (
            <Fade bottom>
              <Card size="sm">
                <CardHeader>
                  <Flex justifyContent="space-between">
                    <Reveal>
                      <HStack>
                        <Image
                          src={uhLogo}
                          alt="University of Houston Logo"
                          h={10}
                        />
                        <Box px={2} align="left">
                          <Text fontWeight={600}>University of Houston</Text>
                          <Text>Research Assistant | Jan 2024 - May 2025</Text>
                        </Box>
                      </HStack>
                    </Reveal>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Flex>
                    <List align="left" spacing={3}>
                      <Reveal>
                        <ListItem>
                          <ListIcon
                            boxSize={6}
                            as={ChevronRightIcon}
                            color={`${color}.500`}
                          />
                          Designed and implemented a 3-layer BiLSTM and a Transformer using PyTorch and TensorFlow to classify adversarial and benign queries on CIFAR-10 and ImageNet-1K datasets, achieving 98.22% accuracy.
                        </ListItem>
                      </Reveal>
                      <Reveal>
                        <ListItem>
                          <ListIcon
                            boxSize={6}
                            as={ChevronRightIcon}
                            color={`${color}.500`}
                          />
                          Optimized GPU-accelerated deep learning workflows using SLURM-based HPC clusters, reducing processing time by 50%.
                        </ListItem>
                      </Reveal>
                    </List>
                  </Flex>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Fade>
          )}

          {selectedExperience === "citi" && (
            <Fade bottom>
              <Card size="sm">
                <CardHeader>
                  <Flex justifyContent="space-between">
                    <Reveal>
                      <HStack>
                        <Image
                          src={citiLogo}
                          alt="Citigroup Logo"
                          h={10}
                        />
                        <Box px={2} align="left">
                          <Text fontWeight={600}>Citigroup</Text>
                          <Text>Software Developer | Jul 2018 - Aug 2021</Text>
                        </Box>
                      </HStack>
                    </Reveal>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Flex>
                    <List align="left" spacing={3}>
                      <Reveal>
                        <ListItem>
                          <ListIcon
                            boxSize={6}
                            as={ChevronRightIcon}
                            color={`${color}.500`}
                          />
                          Designed and deployed a high-performance Java microservice using Spring Boot for OTC derivative risk analysis, processing 5M+ trades and reducing risk calculation latency by 20%.
                        </ListItem>
                      </Reveal>
                      <Reveal>
                        <ListItem>
                          <ListIcon
                            boxSize={6}
                            as={ChevronRightIcon}
                            color={`${color}.500`}
                          />
                          Engineered data enrichment and validation processes to improve counterparty credit risk calculations by 25%, preventing pre-settlement exposure errors.
                        </ListItem>
                      </Reveal>
                      <Reveal>
                        <ListItem>
                          <ListIcon
                            boxSize={6}
                            as={ChevronRightIcon}
                            color={`${color}.500`}
                          />
                          Implemented Spring Batch and integrated Apache Kafka for event-driven data handling, enabling real-time Value at Risk (VAR) calculations.
                        </ListItem>
                      </Reveal>
                      <Reveal>
                        <ListItem>
                          <ListIcon
                            boxSize={6}
                            as={ChevronRightIcon}
                            color={`${color}.500`}
                          />
                          Enhanced React.js components for a compliance team's internal portal and developed optimized RESTful APIs using Spring MVC.
                        </ListItem>
                      </Reveal>
                      <Reveal>
                        <ListItem>
                          <ListIcon
                            boxSize={6}
                            as={ChevronRightIcon}
                            color={`${color}.500`}
                          />
                          Collaborated with cross-functional teams using Agile methodologies and CI/CD pipelines with Jenkins, Autosys, and Shell scripting.
                        </ListItem>
                      </Reveal>
                    </List>
                  </Flex>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Fade>
          )}

          {selectedExperience === "amazon" && (
            <Fade bottom>
              <Card size="sm">
                <CardHeader>
                  <Flex justifyContent="space-between">
                    <Reveal>
                      <HStack>
                        <Image
                          src={amazonLogo}
                          alt="Amazon Logo"
                          h={10}
                        />
                        <Box px={2} align="left">
                          <Text fontWeight={600}>Amazon</Text>
                          <Text>Software Development Engineer Intern | Jul 2017 - Dec 2017</Text>
                        </Box>
                      </HStack>
                    </Reveal>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Flex>
                    <List align="left" spacing={3}>
                      <Reveal>
                        <ListItem>
                          <ListIcon
                            boxSize={6}
                            as={ChevronRightIcon}
                            color={`${color}.500`}
                          />
                          Optimized payment processing for $10M+/month billing operations by enhancing invoice validation pipelines, achieving a 25% reduction in processing time.
                        </ListItem>
                      </Reveal>
                      <Reveal>
                        <ListItem>
                          <ListIcon
                            boxSize={6}
                            as={ChevronRightIcon}
                            color={`${color}.500`}
                          />
                          Enhanced Invoice Validation module using Java, Spring, and AWS DynamoDB, implementing custom JSON serialization/deserialization and robust logging.
                        </ListItem>
                      </Reveal>
                      <Reveal>
                        <ListItem>
                          <ListIcon
                            boxSize={6}
                            as={ChevronRightIcon}
                            color={`${color}.500`}
                          />
                          Ensured zero production defects and achieved 100% unit test coverage with JUnit and Mockito, leveraging SonarQube for static code analysis.
                        </ListItem>
                      </Reveal>
                    </List>
                  </Flex>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Fade>
          )}
        </Box>
      </Container>
    </>
  );
}