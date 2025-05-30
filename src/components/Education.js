import React from 'react';
import {
  Container,
  Grid,
  Box,
  Text,
  Divider,
} from '@chakra-ui/react';
import Lottie from 'lottie-react';
import animationData from '../assets/R6IO8MHpbe.json'; // Replace with your animation file
import { Reveal } from "./Reveal.tsx";

const EducationPage = () => {
  return (
    <Container maxW={'8xl'} id="Education">
      <Grid
        templateColumns={{ base: '1fr', md: '1fr 1fr' }}
        gap={{ base: 8, md: 15 }}
        pb={{ base: 20, md: 36 }}
      >
        {/* Left Side: Graduate and Undergraduate */}
        <Box>
          <Text fontWeight={800} fontSize="2xl" mb={4}>
            Education
          </Text>
          <Divider orientation="horizontal" mb={6} />

          {/* Graduate */}
          <Box mb={6}>
            <Reveal>
              <Text fontWeight={600} fontSize="lg">
                University of Houston, Houston, TX{' '}
                <span style={{ fontSize: "md", color: "gray.600", fontWeight: 200 }}>
                  | Aug 2023 - May 2025
                </span>
              </Text>
            </Reveal>
            <Reveal>
              <Text fontWeight={400}>
                Master of Science in Computer Science
              </Text>
            </Reveal>
            <Reveal>
              <Text fontSize="md" fontWeight={200}>
                GPA: 3.55
              </Text>
            </Reveal>
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
                Relevant Coursework: Data Structures and Algorithms, Cloud Computing, Machine Learning, Computer Networks, Distributed Systems, Digital Image Processing, System Design.
              </div>
            </Reveal>
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
                Research Assistant: AI for predicting patient responses to deep brain stimulation for Parkinson’s disease and essential tremor.
              </div>
            </Reveal>
          </Box>

          {/* Undergraduate */}
          <Box>
            <Reveal>
              <Text fontWeight={600} fontSize="lg">
                Birla Institute of Technology and Science, Pilani, India{' '}
                <span style={{ fontSize: "md", color: "gray.600" }}>
                  | Aug 2014 - May 2018
                </span>
              </Text>
            </Reveal>
            <Reveal>
              <Text fontWeight={400}>
                Bachelor of Engineering in Computer Science
              </Text>
            </Reveal>
            <Reveal>
              <Text fontSize="md" fontWeight={300}>
                GPA: 3.11/4.0
              </Text>
            </Reveal>
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
                Relevant Coursework: Data Structures, Operating Systems, Cloud Computing, Computer Networks, Machine Learning, System Design, Database Management Systems, Software Engineering.
              </div>
            </Reveal>
          </Box>
        </Box>

        {/* Right Side: Animation */}
        <div>
          <Lottie
            animationData={animationData}
            className="animation-container-E"
          />
        </div>
      </Grid>
    </Container>
  );
};

export default EducationPage;