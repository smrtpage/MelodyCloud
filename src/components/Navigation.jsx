import { Box, Image, Flex, Text, Heading, Stack } from '@chakra-ui/react';
import Logo from '../assets/LogoMusicCloud.svg';
import { PiScreencastBold } from 'react-icons/pi';
import { FiCompass } from 'react-icons/fi';
import { GoHome } from 'react-icons/go';
import NavigationButton from './NavigationButton';
import LibrariesButton from './LibrariesButton';

function Navigation() {
  return (
    <div>
      <Box>
        <Flex alignItems="center" justifyContent="space-evenly">
          <Image src={Logo} />
          <Heading as="h5" size="lg">
            MelodyCloud
          </Heading>
        </Flex>

        <Stack marginStart="25px" marginTop="40px" marginBottom="50px">
          <Flex direction="column">
            <NavigationButton
              to="/"
              icon={<GoHome size="35px" />}
              text="Home"
            ></NavigationButton>
            <NavigationButton
              to="/discovery"
              icon={<FiCompass size="35px" />}
              text="Discover"
            ></NavigationButton>
            <NavigationButton
              to="/create-song"
              icon={<PiScreencastBold size="35px" />}
              text="Create"
            ></NavigationButton>
          </Flex>

          <Flex direction="column" marginTop="20px">
            <Text color="gray" justifyContent="flex-start" marginBottom="25px">
              Your Library
            </Text>
            <LibrariesButton text="Favourite" to="/" />
            <LibrariesButton text="Recently Played" to="/" />
            <LibrariesButton text="Friends" to="/" />
          </Flex>
        </Stack>
      </Box>
    </div>
  );
}

export default Navigation;
