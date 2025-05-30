// import {
//   Box,
//   Heading,
//   Container,
//   Text,
//   Button,
//   Stack,
// } from "@chakra-ui/react";


// export default function Header({ color }) {

//   const scrollToContact = () => {
//     const contactSection = document.querySelector("#contact");
//     contactSection.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <>
//       <Heading>
//         <link
//           href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
//           rel="stylesheet"
//         />
//       </Heading>

//       <Container maxW={"7xl"} id="hero">
//         <Stack
//           as={Box}
//           textAlign={"center"}
//           spacing={{ base: 8, md: 14 }}
//           pb={{ base: 20, md: 36 }}
//           pt={{ base: 36, md: 52 }}
//         >
//           <Heading
//             fontWeight={600}
//             fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
//             lineHeight={"110%"}
//           >



//             <text>
//             Hi, my name is 
//             </text>
//            <br />
//             <Text as={"span"} color={`${color}.400`}>
//             Gowtam Sai Sankar G.
//             </Text>
//           </Heading>
//           <Text
//             color={"gray.500"}
//             fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
//           >
//          I'm an enthusiastic software engineer with expertise in machine learning, leadership, and IoT. I thrive on solving real-world challenges through innovative software and hardware solutions. My track record includes accolades like a 3rd place in the J-HUB HACKATHON LEAGUE under TEQIP.

//           </Text>
//           <Stack
//             direction={"column"}
//             spacing={3}
//             align={"center"}
//             alignSelf={"center"}
//             position={"relative"}
//           >
//       <Button
//   colorScheme={color}
//   bg={`${color}.400`}
//   rounded={"full"}
//   px={6}
//   _hover={{
//     bg: `${color}.500`,
//   }}
//   onClick={() => window.open("https://www.linkedin.com/in/gowtam-1998/", "_blank")}
// >
//   Let's connect!
// </Button>

//             <Button
//               variant={"link"}
//               colorScheme={"blue"}
//               size={"sm"}
//               onClick={scrollToContact}
//             >
//               Contact Me
//             </Button>

//           </Stack>
//         </Stack>
//       </Container>
//     </>
//   );
// }


import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";

export default function Header({ color }) {

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Heading>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Heading>

      <Container maxW={"7xl"} id="hero">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
          pt={{ base: 36, md: 52 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            <text>
              Hi, my name is
            </text>
            <br />
            <Text as={"span"} color={`${color}.400`}>
              Brahmarshi Jasti
            </Text>
          </Heading>
          <Text
            color={"gray.500"}
            fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
          >
            I am currently pursuing a Master’s degree in Computer Science at the University of Houston, where I serve as a Research Assistant focused on an AI project aimed at predicting patient responses to deep brain stimulation for Parkinson’s disease and essential tremor. In this role, I develop advanced deep learning models using PyTorch, leveraging SLURM-managed high-performance computing clusters.
            <br /><br />
            Prior to my graduate studies, I worked for three years as a Software Developer at Citigroup, where I engineered Java Spring Boot MicroServices and SQL data pipelines for over-the-counter (OTC) risk analysis and trade processing. In this enterprise environment, I gained experience in developing secure, high-performance backend services and managing complex data workflows for critical financial operations. I interned as a Software Development Engineer at Amazon, contributing to the development of large-scale payment systems. During this internship, I used Java and Spring to enhance an invoice processing pipeline for high-volume billing operations, strengthening my skills in scalable system design and code quality best practices.
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={color}
              bg={`${color}.400`}
              rounded={"full"}
              px={6}
              _hover={{
                bg: `${color}.500`,
              }}
              onClick={() => window.open("https://www.linkedin.com/in/jasti-brahmarshi/", "_blank")}
            >
              Let's connect!
            </Button>

            <Button
              variant={"link"}
              colorScheme={"blue"}
              size={"sm"}
              onClick={scrollToContact}
            >
              Contact Me
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}