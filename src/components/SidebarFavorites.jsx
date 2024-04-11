import { Heading, Stack, Text, Flex, Button } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
function SidebarFavorites() {
  return (
    <Stack>
      <Stack
        padding="15px 10px"
        borderRadius="5px"
        // backgroundColor="#2B2B2B"
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
          <Heading fontSize="25px" fontWeight="600">
            My Favorites
          </Heading>

          <Button variant="ghost">See All</Button>
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
              {/* <Text fontWeight="600">{favorite.author}</Text> */}
              <Text fontSize="14px" fontWeight="400">
                {/* {favorite.title} */}
              </Text>
            </Flex>

            <Button variant="ghost">
              <BsThreeDotsVertical fontSize="25px" />
            </Button>
          </Flex>
        </Flex>
      </Stack>
    </Stack>
  );
}
export default SidebarFavorites;
