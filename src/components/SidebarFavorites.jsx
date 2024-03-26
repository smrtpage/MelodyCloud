import { Heading, Stack, Text, Flex, Button } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';

function SidebarFavorites() {
  return (
    <Stack>
      <Stack
        padding="15px 10px"
        borderRadius="5px"
        backgroundColor="#2B2B2B"
        rowGap="20px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          width="100%"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading color="white" fontSize="25px" fontWeight="600">
            My Favorites
          </Heading>

          <Button variant="ghost" color="#D6D10F">
            See All
          </Button>
        </Stack>

        <Flex
          flexDirection="column"
          gap="10px"
          alignItems="center"
          justifyContent="center"
        >
          <Flex gap="10px" alignItems="center" justifyContent="center">
            <Stack
              width="70px"
              height="70px"
              borderRadius="5px"
              backgroundColor="pink"
            ></Stack>

            <Flex flexDirection="column" alignItems="flex-start">
              <Text color="white" fontWeight="600">
                Dead Eyes
              </Text>
              <Text color="white" fontSize="14px" fontWeight="400">
                Promoting Sounds...
              </Text>
            </Flex>

            <Button variant="ghost">
              <BsThreeDotsVertical fontSize="25px" color="white" />
            </Button>
          </Flex>

          <Flex gap="10px" alignItems="center" justifyContent="center">
            <Stack
              width="70px"
              height="70px"
              borderRadius="5px"
              backgroundColor="pink"
            ></Stack>

            <Flex flexDirection="column" alignItems="flex-start">
              <Text color="white" fontWeight="600">
                Wish I Was Better
              </Text>
              <Text color="white" fontSize="14px" fontWeight="400">
                Promoting Sounds...
              </Text>
            </Flex>

            <Button variant="ghost">
              <BsThreeDotsVertical fontSize="25px" color="white" />
            </Button>
          </Flex>

          <Flex gap="10px" alignItems="center" justifyContent="center">
            <Stack
              width="70px"
              height="70px"
              borderRadius="5px"
              backgroundColor="pink"
            ></Stack>

            <Flex flexDirection="column" alignItems="flex-start">
              <Text color="white" fontWeight="600">
                Dead Eyes
              </Text>
              <Text color="white" fontSize="14px" fontWeight="400">
                Promoting Sounds...
              </Text>
            </Flex>

            <Button variant="ghost">
              <BsThreeDotsVertical fontSize="25px" color="white" />
            </Button>
          </Flex>

          <Flex gap="10px" alignItems="center" justifyContent="center">
            <Stack
              width="70px"
              height="70px"
              borderRadius="5px"
              backgroundColor="pink"
            ></Stack>

            <Flex flexDirection="column" alignItems="flex-start">
              <Text color="white" fontWeight="600">
                Dead Eyes
              </Text>
              <Text color="white" fontSize="14px" fontWeight="400">
                Promoting Sounds...
              </Text>
            </Flex>

            <Button variant="ghost">
              <BsThreeDotsVertical fontSize="25px" color="white" />
            </Button>
          </Flex>

          <Flex gap="10px" alignItems="center" justifyContent="center">
            <Stack
              width="70px"
              height="70px"
              borderRadius="5px"
              backgroundColor="pink"
            ></Stack>

            <Flex flexDirection="column" alignItems="flex-start">
              <Text color="white" fontWeight="600">
                Dead Eyes
              </Text>
              <Text color="white" fontSize="14px" fontWeight="400">
                Promoting Sounds...
              </Text>
            </Flex>

            <Button variant="ghost">
              <BsThreeDotsVertical fontSize="25px" color="white" />
            </Button>
          </Flex>

          <Flex gap="10px" alignItems="center" justifyContent="center">
            <Stack
              width="70px"
              height="70px"
              borderRadius="5px"
              backgroundColor="pink"
            ></Stack>

            <Flex flexDirection="column" alignItems="flex-start">
              <Text color="white" fontWeight="600">
                Dead Eyes
              </Text>
              <Text color="white" fontSize="14px" fontWeight="400">
                Promoting Sounds...
              </Text>
            </Flex>

            <Button variant="ghost">
              <BsThreeDotsVertical fontSize="25px" color="white" />
            </Button>
          </Flex>
        </Flex>
      </Stack>
    </Stack>
  );
}
export default SidebarFavorites;
