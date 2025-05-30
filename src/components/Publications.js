
import React from 'react';
import {
  Container,
  Grid,
  Box,
  Text,
  Divider,
} from '@chakra-ui/react';
import Lottie from 'lottie-react';
import animationData from '../assets/animation_lm7xvn06.json'; // Replace with your animation file
import { Reveal } from "./Reveal.tsx";

const Publications = () => {
  return (
    <Container maxW={'8xl'} id="Publications">
      <Grid
        templateColumns={{ base: '1fr', md: '1fr 1fr' }}
        gap={{ base: 8, md: 15 }}
        pb={{ base: 20, md: 36 }}
      >
        {/* Left Side: Animation */}
        <div>
          <Lottie
            animationData={animationData}
            className="animation-container-PP"
          />
        </div>

        {/* Right Side: Text */}
        <Box>
          <Reveal>
            <Text fontWeight={800} fontSize="2xl" mb={4}>
              Publications
            </Text>
          </Reveal>
          <Divider orientation="horizontal" mb={6} />
          {/* No publications for now */}
        </Box>
      </Grid>
    </Container>
  );
};

export default Publications;