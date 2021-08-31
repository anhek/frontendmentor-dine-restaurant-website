import { Box, Flex } from '@chakra-ui/react';
import Head from 'next/head';

import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HighlightsContainer from '../components/HighlightsContainer';
import MainContainer from '../components/MainContainer';
import ReservationBanner from '../components/ReservationBanner';

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Dine</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex role="main" direction="column" align="center">
        <Hero />
        <MainContainer />
        <HighlightsContainer />
        <Box bg="green.100" w="full" h="300px">
          Hello
        </Box>
      </Flex>
      <ReservationBanner />
      <Footer />
    </Box>
  );
}
