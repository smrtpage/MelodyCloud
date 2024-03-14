import {
  Box,
  Image,
  Flex,
  Text,
  Button,
  Heading,
  Stack,
} from '@chakra-ui/react';
import Logo from '../assets/LogoMusicCloud.png';
import { PiScreencastBold } from 'react-icons/pi';
import { FiCompass } from 'react-icons/fi';
import { GoHome } from 'react-icons/go';

function Navigation() {
  return (
    <div>
      <Box>
        <Flex alignItems="center" justifyContent="space-around">
          <Image src={Logo} boxSize="40px" />
          <Heading as="h5" size="lg">
            MelodyCloud
          </Heading>
        </Flex>

        <Stack marginStart="25px" marginTop="50px" marginBottom="50px">
          <Flex direction="column">
            <Button
              variant="ghost"
              size="lg"
              justifyContent="flex-start"
              height="60px"
              _hover={{
                color: 'yellow',
                backgroundColor: 'gray.100',
                transition: '0.5s ',
              }}
            >
              <Flex alignItems="center" gap="2">
                <GoHome size="35px" />
                <Text>Home</Text>
              </Flex>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              justifyContent="flex-start"
              height="60px"
              _hover={{
                color: 'yellow',
                backgroundColor: 'gray.100',
                transition: '0.5s ',
              }}
            >
              <Flex alignItems="center" gap="2">
                <FiCompass size="35px" />
                <Text>Discover</Text>
              </Flex>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              justifyContent="flex-start"
              height="60px"
              _hover={{
                color: 'yellow',
                backgroundColor: 'gray.100',
                transition: '0.5s ',
              }}
            >
              <Flex alignItems="center" gap="2">
                <PiScreencastBold size="35px" />
                <Text>Devices</Text>
              </Flex>
            </Button>
          </Flex>

          <Flex direction="column" marginTop="20px">
            <Text color="gray" justifyContent="flex-start" marginBottom="25px">
              Your Library
            </Text>
            <Button variant="ghost" size="lg" justifyContent="flex-start">
              Favorite
            </Button>
            <Button variant="ghost" size="lg" justifyContent="flex-start">
              Recently Played
            </Button>
            <Button variant="ghost" size="lg" justifyContent="flex-start">
              Friends
            </Button>
          </Flex>
        </Stack>
      </Box>
    </div>
  );
}
export default Navigation;
