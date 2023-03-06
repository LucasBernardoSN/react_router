import {
  Button,
  Flex,
  FormLabel,
  Grid,
  Heading,
  Input,
} from '@chakra-ui/react';

export function SingIn() {
  async function handleSignIn() {
    // eslint-disable-next-line no-console
    console.log('handleSignIn');
  }

  return (
    <Grid
      m="0 auto"
      maxW="48em"
      h="100vh"
      templateColumns="repeat(3 1fr)"
    >
      <Grid
        templateColumns={['1fr', null, '1fr 1fr']}
        templateRows={['30% 1fr', null, '1fr']}
        p={['4']}
        gap="8"
      >
        <Flex
          alignItems={['end', null, 'center']}
          justifyContent={['center', null, 'start']}
        >
          <Flex
            flexDir="column"
            gap={['4']}
          >
            <Heading
              textAlign={['center']}
              fontSize={['4xl', '5xl']}
              color="slate12"
            >
              React Router
            </Heading>
            <Heading
              color="primary"
              textAlign="center"
              fontSize={['2xl', '3xl', '4xl']}
            >
              Faça seu login <br />
              na plataforma
            </Heading>
          </Flex>
        </Flex>
        <Flex
          justifyContent={['center', null, 'end']}
          alignItems={['start', null, 'center']}
        >
          <Flex
            as="form"
            flexDir="column"
            minW="240px"
            maxW="400px"
            flex="1"
            p="8"
            borderRadius={8}
            bg="slate3"
            boxShadow="md"
            onSubmit={() => handleSignIn()}
          >
            <FormLabel>
              Username
              <Input
                mt="1"
                name="login"
                type="login"
                _focusVisible={{
                  boxShadow: `0px 0px 0px 2px var(--chakra-colors-primary)`,
                }}
              />
            </FormLabel>
            <FormLabel>
              Password
              <Input
                mt="1"
                name="password"
                type="password"
                _focusVisible={{
                  boxShadow: `0px 0px 0px 2px var(--chakra-colors-primary)`,
                }}
              />
            </FormLabel>

            <Button
              colorScheme="cyan"
              mt="4"
            >
              Sign In
            </Button>
          </Flex>
        </Flex>
      </Grid>
    </Grid>
  );
}
