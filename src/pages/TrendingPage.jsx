import { Stack, Heading, Text, Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';

function TrendingPage() {
  return (
    <Stack>
      <Stack
        padding="30px 0"
        borderRadius="20px"
        backgroundColor="#D6D10F"
        rowGap="20px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Heading color="#000" fontSize="40px" fontWeight="500">
          Authorize On Melody Cloud
        </Heading>
        <Text color="#000" width="500px" fontSize="20px" fontWeight="400">
          If you are not authorized on Melody Cloud, you would not receive a
          fresh info about some cool music. So, why not to register and always
          stay tuned!
        </Text>
        <Flex marginTop="20px" gap="20px">
          <Button
            padding="27px 5px"
            width="120px"
            backgroundColor="#fff"
            color="#000"
            border="none"
            borderRadius="40px"
            _hover={{ transform: 'translateY(5px)' }}
            fontWeight="600"
            fontSize="18px"
            as={Link}
            to="/register"
          >
            Register
          </Button>
          <Button
            padding="27px 5px"
            width="120px"
            borderRadius="40px"
            _hover={{ transform: 'translateY(5px)' }}
            variant="outline"
            color="#000"
            border="solid 1px #000"
            fontWeight="600"
            fontSize="18px"
            as={Link}
            to="/login"
          >
            Login
          </Button>
        </Flex>
      </Stack>

      <Stack margin="30px 50px">
        <Heading fontSize="30px" fontWeight="600">
          Recently Played
        </Heading>
        <Flex
          marginTop="30px"
          alignItems="center"
          justifyContent="center"
          gap="40px"
        >
          <Stack>
            <Stack
              width="200px"
              height="200px"
              borderRadius="20px"
              backgroundColor="#ccc"
            />
            <Stack margin="5px 10px" rowGap="0">
              <Text fontSize="18px" fontWeight="600">
                Without Me
              </Text>
              <Text fontSize="18px" color="#ccc" fontWeight="400">
                Eminem
              </Text>
            </Stack>
          </Stack>
          <Stack>
            <Stack
              width="200px"
              height="200px"
              borderRadius="20px"
              backgroundColor="#ccc"
            />
            <Stack margin="5px 10px" rowGap="0">
              <Text fontSize="18px" fontWeight="600">
                Without Me
              </Text>
              <Text fontSize="18px" color="#ccc" fontWeight="400">
                Eminem
              </Text>
            </Stack>
          </Stack>
          <Stack>
            <Stack
              width="200px"
              height="200px"
              borderRadius="20px"
              backgroundColor="#ccc"
            />
            <Stack margin="5px 10px" rowGap="0">
              <Text fontSize="18px" fontWeight="600">
                Without Me
              </Text>
              <Text fontSize="18px" color="#ccc" fontWeight="400">
                Eminem
              </Text>
            </Stack>
          </Stack>
          <Stack>
            <Stack
              width="200px"
              height="200px"
              borderRadius="20px"
              backgroundColor="#ccc"
            />
            <Stack margin="5px 10px" rowGap="0">
              <Text fontSize="18px" fontWeight="600">
                Without Me
              </Text>
              <Text fontSize="18px" color="#ccc" fontWeight="400">
                Eminem
              </Text>
            </Stack>
          </Stack>
          <Stack>
            <Stack
              width="200px"
              height="200px"
              borderRadius="20px"
              backgroundColor="#ccc"
            />
            <Stack margin="5px 10px" rowGap="0">
              <Text fontSize="18px" fontWeight="600">
                Without Me
              </Text>
              <Text fontSize="17px" color="#ccc" fontWeight="400">
                Eminem
              </Text>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
      <Stack>
        <Heading marginLeft="50px" fontSize="30px" fontWeight="600">
          Trending Songs
        </Heading>
        <Stack
          padding="30px 50px"
          display="flex"
          rowGap="30px"
          flexDirection="column"
        >
          <Flex alignItems="center" justifyContent="space-between">
            <Flex gap="20px" alignItems="center" justifyContent="center">
              <Text fontSize="25px">1</Text>
              <Stack
                width="80px"
                height="80px"
                borderRadius="5px"
                backgroundColor="#ccc"
              />
              <Flex flexDirection="column">
                <Text fontSize="20px" fontWeight="600">
                  Strangeville
                </Text>
                <Text fontSize="16px" color="#ccc" fontWeight="400">
                  Tommy Vega
                </Text>
              </Flex>
            </Flex>
            <Text fontSize="19px" color="#ccc" fontWeight="400">
              2.345.000
            </Text>
            <Text fontSize="19px" color="#ccc" fontWeight="400">
              December, 20, 2022
            </Text>
            <Flex gap="20px">
              <Button variant="ghost">
                <FaRegHeart fontSize="25px" />
              </Button>
              <Button variant="ghost">
                <BsThreeDots fontSize="25px" />
              </Button>
            </Flex>
          </Flex>
          <Flex alignItems="center" justifyContent="space-between">
            <Flex gap="20px" alignItems="center" justifyContent="center">
              <Text fontSize="25px">2</Text>
              <Stack
                width="80px"
                height="80px"
                borderRadius="5px"
                backgroundColor="#ccc"
              />
              <Flex flexDirection="column">
                <Text fontSize="20px" fontWeight="600">
                  Strangeville
                </Text>
                <Text fontSize="16px" color="#ccc" fontWeight="400">
                  Tommy Vega
                </Text>
              </Flex>
            </Flex>
            <Text fontSize="19px" color="#ccc" fontWeight="400">
              1.328.700
            </Text>
            <Text fontSize="19px" color="#ccc" fontWeight="400">
              December, 21, 2022
            </Text>
            <Flex gap="20px">
              <Button variant="ghost">
                <FaRegHeart fontSize="25px" />
              </Button>
              <Button variant="ghost">
                <BsThreeDots fontSize="25px" />
              </Button>
            </Flex>
          </Flex>
          <Flex alignItems="center" justifyContent="space-between">
            <Flex gap="20px" alignItems="center" justifyContent="center">
              <Text fontSize="25px">3</Text>
              <Stack
                width="80px"
                height="80px"
                borderRadius="5px"
                backgroundColor="#ccc"
              />
              <Flex flexDirection="column">
                <Text fontSize="20px" fontWeight="600">
                  Strangeville
                </Text>
                <Text fontSize="16px" color="#ccc" fontWeight="400">
                  Tommy Vega
                </Text>
              </Flex>
            </Flex>
            <Text fontSize="19px" color="#ccc" fontWeight="400">
              2.345.000
            </Text>
            <Text fontSize="19px" color="#ccc" fontWeight="400">
              December, 20, 2022
            </Text>
            <Flex gap="20px">
              <Button variant="ghost">
                <FaRegHeart fontSize="25px" />
              </Button>
              <Button variant="ghost">
                <BsThreeDots fontSize="25px" />
              </Button>
            </Flex>
          </Flex>
        </Stack>
      </Stack>
    </Stack>
  );
}
export default TrendingPage;
