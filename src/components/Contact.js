import { Container, Divider, Grid, Text, Box, HStack, Heading, Center, Stack } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../assets/ojyKm9l8OX.json";
import { Reveal } from "./Reveal.tsx";

export default function Contact({ color }) {

  return (
    <Container maxW={"8xl"} id="contact">
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        {/* Left Side: Contact Details */}
        <Box>
          <Text fontWeight={800} fontSize="2xl" mb={4}>
            Contact
          </Text>
          <Divider orientation="horizontal" mb={20} />
          <Stack spacing={4} as={Container} maxW={"3xl"}>
            <Reveal>
              <div className="contact">
                <Heading fontSize={"3xl"}>Let's stay in touch!</Heading>
              </div>
            </Reveal>
            <Reveal>
              <Text color={"gray.600"} fontSize={"xl"} px={4}>
                Interested in software development and web development? Feel free to get in touch with me today!
              </Text>
            </Reveal>
            <Center>
              <Reveal>
                <HStack spacing={8} pt={4}>
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/jasti-brahmarshi/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={44} color={`${color}.500`} />
                  </a>
                  {/* GitHub */}
                  <a href="https://github.com/brahmarshi-jasti" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={44} color={`${color}.500`} />
                  </a>
                  {/* Email */}
                  <a href="mailto:jasti.rishi1@gmail.com">
                    <FaEnvelope size={44} color={`${color}.500`} />
                  </a>
                  <a href="tel:+13464018635">
                    <FaPhone size={44} color={`${color}.500`} />
                  </a>
                </HStack>
              </Reveal>
            </Center>
            <Center>
              {/* Email */}
              <Reveal>
                <Text fontWeight={600} fontSize={"lg"} mt={10} color={"gray.600"}>
                  <a href="mailto:jasti.rishi1@gmail.com">
                    jasti.rishi1@gmail.com
                  </a>
                </Text>
              </Reveal>
            </Center>
          </Stack>
        </Box>

        {/* Right Side Animation */}
        <Lottie
          animationData={animationData}
        />
      </Grid>
    </Container>
  );
}