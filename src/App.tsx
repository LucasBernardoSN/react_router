import { Center, Heading } from '@chakra-ui/react';
import { ToogleColorModeButton } from './components/ToogleColorModeButton';

export function App() {
  return (
    <Center
      flexDirection="column"
      h="100vh"
    >
      <ToogleColorModeButton />
      <Heading
        textAlign="center"
        mb="8"
      >
        Hello World!
      </Heading>
    </Center>
  );
}
