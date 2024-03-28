import { Heading, Stack, Text, Flex, Button } from '@chakra-ui/react';
import Navbar from '../../components/Navbar';
// import Navigation from '../../components/Navigation';
import { FaRegHeart } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';

function SongPage() {
  return (
    <>
      <Navbar />

      <Stack
        width="100%"
        padding="50px 40px"
        borderRadius="5px"
        rowGap="20px"
        display="flex"
        flexDirection="column"
        // alignItems="center"
        // justifyContent="center"
      >
        <Flex gap="20px" alignItems="flex-end">
          <Stack
            width="200px"
            height="200px"
            borderRadius="5px"
            backgroundColor="pink"
          ></Stack>

          <Flex flexDirection="column">
            <Heading fontSize="60px" fontWeight="500">
              Trance
            </Heading>
            <Flex gap="10px" alignItems="center">
              <Text fontSize="30px" fontWeight="400">
                Metro Boomin
              </Text>
              <Text fontSize="30px" fontWeight="400">
                2.345.000
              </Text>
              <Text fontSize="30px" fontWeight="400">
                December, 20, 2022
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Stack>

      <Flex gap="20px" alignItems="center" padding="0 40px">
        <Button
          width="70px"
          height="70px"
          borderRadius="50%"
          backgroundColor="#D6D10F"
        >
          <FaPlay fontSize="25px" />
        </Button>
        <Button variant="ghost">
          <FaRegHeart fontSize="25px" />
        </Button>
        <Button variant="ghost">
          <BsThreeDots fontSize="25px" />
        </Button>
      </Flex>
    </>
  );
}

export default SongPage;
