import { IconButton, useColorMode } from '@chakra-ui/react';
import { Moon, Sun } from 'phosphor-react';

export function ToogleColorModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Muda o tema da aplicação"
      icon={
        colorMode === 'light' ? (
          <Sun
            weight="bold"
            width={20}
            height={20}
          />
        ) : (
          <Moon
            width={20}
            height={20}
            weight="bold"
          />
        )
      }
      onClick={toggleColorMode}
      position="absolute"
      top="1rem"
      left="1rem"
      variant="ghost"
      size="md"
    />
  );
}
