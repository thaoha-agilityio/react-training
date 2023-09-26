import { Heading, Text } from '@chakra-ui/react';

const App = () => {
  return (
    <>
      <Heading fontWeight='bolder'>Hello word</Heading>
      <Text color={'red'} fontWeight='bolder'>
        Hello word
      </Text>
      <Text fontWeight='medium'>Hello word</Text>
      <Text fontWeight='normal'>Hello word</Text>
      <Text fontWeight='light'>Hello word</Text>
    </>
  );
};

export default App;
