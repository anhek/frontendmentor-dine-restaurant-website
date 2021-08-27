import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box role="main" maxW="800px" mx="auto" p="8">
        <VStack spacing="6" align="flex-start">
          <Heading as="h1" variant="h1">
            H1. Exquisite dining since 1989
          </Heading>
          <Heading as="h2" variant="h2">
            H2. Enjoyable place for all the family
          </Heading>
          <Heading as="h3" variant="h3l">
            H3l. Seared Salmon Fillet
          </Heading>
          <Heading as="h3" variant="h3s">
            H3s. FAMILY GATHERING
          </Heading>
          <Text textStyle="body1">
            Body1. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
            neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
            ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti.
          </Text>
          <Text textStyle="body2">
            Body2. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
            neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
            ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti.
          </Text>
          <Flex h="120px" w="full" mt="4">
            <Flex
              justify="center"
              align="center"
              bg="primary.beaver"
              color="white"
              flex="1"
              textAlign="center"
            >
              <Heading as="p" variant="h3s">
                Primary Beaver
              </Heading>
            </Flex>
            <Flex justify="center" align="center" flex="1" bg="primary.codgray">
              Primary Codgray
            </Flex>
            <Flex justify="center" align="center" w="20px" bg="white"></Flex>
            <Flex
              justify="center"
              align="center"
              flex="1"
              bg="secondary.mirage"
            ></Flex>
            <Flex
              justify="center"
              align="center"
              flex="1"
              bg="secondary.ebonyclay"
            ></Flex>
            <Flex
              justify="center"
              align="center"
              flex="1"
              bg="secondary.shuttlegray"
            ></Flex>
          </Flex>
        </VStack>
      </Box>
    </Box>
  );
}
