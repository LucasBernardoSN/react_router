import { IconButton } from '@chakra-ui/react';
import { SignOut } from 'phosphor-react';

export function SignOutButton() {
  function handleSignOut() {
    console.log('SignOut');
  }

  return (
    <IconButton
      aria-label="Muda o tema da aplicação"
      icon={
        <SignOut
          weight="bold"
          width={20}
          height={20}
        />
      }
      onClick={() => handleSignOut()}
      variant="ghost"
      size="md"
    />
  );
}
