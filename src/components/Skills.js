import React from "react";
import Lottie from "lottie-react";
import { Divider, Text, Container, Grid, Box, Flex } from "@chakra-ui/react";
import animationData from "../assets/Animation - 1692742436044.json";
import { Fade } from "react-reveal";

// Updated skills array based on your resume
const skills = [
  // Frontend
  "JavaScript", "React", "Next.js", "JSP", "HTML5", "CSS3", "Tailwind CSS", "XML", "TypeScript", "Express.js",
  // Backend
  "Spring Boot", "Spring Integration", "Spring Batch", "Node.js", "Hibernate", "JPA", "Servlets", "JDBC", "REST APIs", "GraphQL", "gRPC",
  "OpenAPI", "OAuth2", "Apache Kafka", "RabbitMQ", "Microservices", "MVC", "Hystrix", "Maven", "Gradle", "Linux", "Selenium", "Cucumber",
  // Programming Languages
  "Python", "Java", "TypeScript", "JavaScript", "C", "C++", "Bash",
  // Databases
  "SQL", "NoSQL", "PL/SQL", "PostgreSQL", "Oracle SQL", "Microsoft SQL Server", "MongoDB", "AWS DynamoDB", "Redis",
  // Tools/Technologies
  "Git", "CI/CD", "Docker", "Jenkins", "Jira", "AWS (EC2, S3, Lambda, CloudWatch, IAM)", "Helm", "Terraform",
  "JUnit", "TestNG", "Mockito", "JMeter"
];

// Updated soft skills based on your resume
const softskills = [
  {
    title: "Soft Skills",
    content:
      "Multitasking, Business Analysis, Project Management, Strategic Planning, Agile Development, Adaptability, Research and Analysis, Collaboration, Communication"
  }
];

export default function Skills({ color }) {
  return (
    <Container maxW={"8xl"} id="skills">
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        {/* Left side with skills */}
        <Fade>
          <Box>
            <Text fontWeight={800} fontSize="2xl" mb={4}>Skills</Text>
            <Divider orientation="horizontal" mb={10} />
            <ul
              style={{
                columns: 3,
                WebkitColumns: 3,
                MozColumns: 3,
              }}
            >
              {skills.map((skill, index) => (
                <Fade key={index} bottom>
                  <li key={index} className="bullet-item">
                    <Flex align="center">
                      {/* Add bullet icon */}
                      <svg
                        className="bullet-icon"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        style={{ marginRight: "0.5rem" }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>{skill}</span>
                    </Flex>
                  </li>
                </Fade>
              ))}
            </ul>
            <Divider orientation="horizontal" mb={10} />
            {softskills.map((softskill, index) => (
              <Fade key={index} bottom>
                <div key={index} className="soft-skill-item">
                  <Flex align="center">
                    {/* Add bullet icon */}
                    <svg
                      className="bullet-icon"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      style={{ marginRight: "0.5rem" }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <Text fontWeight={800} className="skill-content">
                      {softskill.title}
                    </Text>
                  </Flex>
                  <Text
                    className="skill-content"
                    color={"gray.500"}
                    fontSize="xl"
                    mb="2"
                    mt="2"
                  >
                    {softskill.content}
                  </Text>
                </div>
              </Fade>
            ))}
          </Box>
        </Fade>
        {/* Right side with animation */}
        <div className="animation-container-S">
          <Lottie animationData={animationData} />
        </div>
      </Grid>
    </Container>
  );
}