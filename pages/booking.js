import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import Head from 'next/head';

import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import { maxScreenWidth } from '../constants/style';

const Booking = () => {
  return (
    <Box bg="primary.codgray">
      <Head>
        <title>Dine - Booking</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        role="main"
        direction="column"
        align="center"
        bgImage={{
          base: '/images/hero-bg-mobile@2x.jpg',
          md: '/images/hero-bg-tablet@2x.jpg',
          xl: '/images/hero-bg-desktop@2x.jpg',
        }}
        bgRepeat="no-repeat"
        bgPos="top"
        bgSize="cover"
      >
        <Flex
          w="full"
          maxW={maxScreenWidth}
          justify={{ base: 'center', md: 'flex-start' }}
          pt="12"
          px={{ md: 12, xl: 0 }}
          mb={{ base: 8, md: '100px', lg: '100px', xl: '150px' }}
        >
          <Logo />
        </Flex>

        <Flex
          direction={{ base: 'column', xl: 'row' }}
          w="full"
          maxW={maxScreenWidth}
        >
          <Flex
            pb={{ base: 20, md: 36, xl: '76px' }}
            textAlign={{ base: 'center', xl: 'left' }}
            direction="column"
            justify="center"
            align={{ base: 'center', xl: 'flex-start' }}
            px={{ base: 6, xl: 0 }}
            w={{ xl: '545px' }}
          >
            <Heading as="h1" variant="h1" color="white" mb="6">
              Reservations
            </Heading>
            <Text
              textStyle={{ base: 'body2', md: 'body1' }}
              color="white"
              maxW={{ base: '573px', xl: '445px' }}
              mx={{ base: 'auto', xl: 0 }}
              mb={{ base: 6, md: 12 }}
            >
              We can’t wait to host you. If you have any special requirements
              please feel free to call on the phone number below. We’ll be happy
              to accommodate you.
            </Text>
            <Link
              href="#form"
              variant="dark"
              mb="100px"
              w="fit-content"
              display={{ base: 'block', md: 'none' }}
            >
              Reserve place
            </Link>
          </Flex>
        </Flex>

        <Flex
          w={{ base: 'full' }}
          bg="white"
          mx="auto"
          justify={{ base: 'center' }}
          className="hello"
          maxH={{ sm: '539px', md: '499px', xl: '311px' }}
        >
          <Flex
            w="full"
            maxW={maxScreenWidth}
            justify={{ base: 'center', xl: 'flex-end' }}
            mx={{ base: 6, md: '0', xl: '36' }}
            p={{ base: 6, xl: 0 }}
          >
            <BookingForm />
          </Flex>
        </Flex>
      </Flex>

      <Footer />
    </Box>
  );
};

export default Booking;
