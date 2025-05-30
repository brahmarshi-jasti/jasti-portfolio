// import React from "react";
// import Lottie from "lottie-react";
// import animationData from "../assets/Animation - 1692970360651.json";

// import { Divider, Text, Container, Grid, Flex } from "@chakra-ui/react";

// import { Reveal } from "./Reveal.tsx"; 

// export default function About({ color }) {
//   return (
//     <Container maxW="8xl" id="about">
//       <Grid
//         templateColumns={{ base: "1fr", md: "1fr 1fr" }}
//         gap={{ base: 8, md: 15 }}
//         pb={{ base: 20, md: 36 }}
//       >
//         {/* Left side with animation */}
//         <div>
//           <Text fontWeight={800} fontSize="2xl" mb={2}>
//             About
//           </Text>
//           <Divider orientation="horizontal" />
//           <Text mb={4} color="gray.500" fontSize="xl" px={2}>
//             Innovative Full Stack Developer | Expertise in Java, Spring, and JavaScript
//           </Text>
//           <Lottie animationData={animationData} className="animation-container" />
//         </div>

//         {/* Right side with "About" content */}
//         <div>
//           <div>
//             {/* Apply the fade-in effect to each skill */}

//               <Flex align="center">
//                 {/* Add bullet icon */}

//                 <Text
//                   color="gray.500"
//                   fontSize="xl"
//                   mb="2"
//                   mt="2"

//                   style={{ wordWrap: "break-word" }} // Allow text to wrap
//                 >
//                   {[
//                     {
//                       title: "Software Engineer with over 3+ years of professional experience in software development.",
//                     },
//                     {
//                       title: "Proficiency in a range of programming languages, including Python, JavaScript, SQL, and Java. Experience with Angular and React.",
//                     },
//                     {
//                       title: "Developed Python code for Caesar cipher encryption/decryption. Expertise in configuring firewalls for network security.",
//                     },
//                     {
//                       title: "Integrated Wireshark for packet capture and Firewall Visualization Tool for enhanced security.",
//                     },
//                     {
//                       title: "Expertise in Spring modules, particularly Spring MVC and Spring Core.",
//                     },
//                     {
//                       title: "Experience in Object-Oriented Programming, including MultiThreading, Exception Handling, and Collections.",
//                     },
//                     {
//                       title: "Proficient in version control systems such as Git, ensuring efficient collaboration and code management within development teams.",
//                     },
//                     {
//                       title: "Applied machine learning algorithms for data analysis and created web applications using YOLO.",
//                     },
//                     {
//                       title: "Proficient in handling relational databases, including Oracle and MySQL, and using database tools like PL/SQL Developer and SQL Developer.",
//                     },
//                     {
//                       title: "Skilled in data visualization and statistical analysis using tools like Power BI and Tableau.",
//                     },
//                   ].map((item, index) => (
//                     <div key={index}>
//                        <Reveal>
//                       <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>

//                         <div
//                           className="bullet-icon-container"
//                           style={{ marginRight: "0.5rem" }}
//                         >
//                           <svg
//                             className="bullet-icon"
//                             fill="currentColor"
//                             viewBox="0 0 20 20"
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="20"
//                             height="20"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                               clipRule="evenodd"
//                             ></path>
//                           </svg>
//                         </div>

//                         {item.title}

//                       </div>
//                       </Reveal>
//                     </div>
//                   ))}
//                 </Text>

//               </Flex>

//           </div>
//         </div>
//       </Grid>
//     </Container>
//   );
// }


import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1692970360651.json";
import { Divider, Text, Container, Grid, Flex } from "@chakra-ui/react";
import { Reveal } from "./Reveal.tsx";

export default function About({ color }) {
  return (
    <Container maxW="8xl" id="about">
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={{ base: 8, md: 15 }}
        pb={{ base: 20, md: 36 }}
      >
        {/* Left side with animation */}
        <div>
          <Text fontWeight={800} fontSize="2xl" mb={2}>
            About
          </Text>
          <Divider orientation="horizontal" />
          <Text mb={4} color="gray.500" fontSize="xl" px={2}>
            Software Engineer & Research Assistant | AI, Deep Learning, Java, Spring Boot, AWS
          </Text>
          <Lottie animationData={animationData} className="animation-container" />
        </div>

        {/* Right side with "About" content */}
        <div>
          <div>
            <Flex align="center">
              <Text
                color="gray.500"
                fontSize="xl"
                mb="2"
                mt="2"
                style={{ wordWrap: "break-word" }}
              >
                {[
                  {
                    title: "Currently pursuing a Master’s in Computer Science at the University of Houston, serving as a Research Assistant focused on AI for predicting patient responses to deep brain stimulation.",
                  },
                  {
                    title: "Develop advanced deep learning models using PyTorch and leverage SLURM-managed HPC clusters for large-scale experiments.",
                  },
                  {
                    title: "3 years as a Software Developer at Citigroup, engineering Java Spring Boot microservices and SQL data pipelines for OTC risk analysis and trade processing.",
                  },
                  {
                    title: "Experience developing secure, high-performance backend services and managing complex data workflows in enterprise environments.",
                  },
                  {
                    title: "Software Development Engineer Intern at Amazon, enhancing large-scale payment systems using Java and Spring for high-volume billing operations.",
                  },
                  {
                    title: "Skilled in scalable system design, code quality best practices, and cross-functional team collaboration.",
                  },
                  {
                    title: "Proficient in Python, Java, Spring Boot, SQL, AWS, Docker, and CI/CD pipelines.",
                  },
                  {
                    title: "Strong foundation in machine learning, distributed systems, and cloud-native architectures.",
                  },
                ].map((item, index) => (
                  <div key={index}>
                    <Reveal>
                      <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                        <div
                          className="bullet-icon-container"
                          style={{ marginRight: "0.5rem" }}
                        >
                          <svg
                            className="bullet-icon"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        {item.title}
                      </div>
                    </Reveal>
                  </div>
                ))}
              </Text>
            </Flex>
          </div>
        </div>
      </Grid>
    </Container>
  );
}
