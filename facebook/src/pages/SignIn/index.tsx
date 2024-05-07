import { Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';

// Components
import { SignInForm } from '@/components';

const SignInPage = () => (
  <Flex as='main' bg='secondary' minH='100vh'>
    <Container size='lg'>
      <Flex py='80px' justifyContent='space-between'>
        <Stack>
          <Heading as='h1' color='primary' fontSize='70px'>
            facebook
          </Heading>
          <Text fontSize='3xl' maxW='628px'>
            Facebook help you connect and share with the people in your life.
          </Text>
        </Stack>
        <SignInForm />
      </Flex>
    </Container>
  </Flex>
);

export default SignInPage;
