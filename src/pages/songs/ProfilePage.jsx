import {
  Stack,
  Avatar,
  Flex,
  Text,
  ButtonGroup,
  Button,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Tabs,
} from '@chakra-ui/react';

function ProfilePage() {
  return (
    <Stack padding="30px">
      <Flex
        marginStart="40px"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex direction="row" gap={10}>
          <Avatar name="User" boxSize="15rem" />
          <Flex direction="column" justifyContent="center">
            <Text fontSize="6xl">John Doe</Text>
            <Text fontSize="xl">112 followers</Text>
          </Flex>
        </Flex>
        <ButtonGroup>
          <Button>Follow</Button>
        </ButtonGroup>
      </Flex>
      <Tabs marginTop="35px" colorScheme="yellow">
        <TabList>
          <Tab fontSize="25px">Libraries</Tab>
          <Tab fontSize="25px">Favourites</Tab>
          <Tab fontSize="25px">Followers</Tab>
          <Tab fontSize="25px">Follows</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Text>Libraries</Text>
          </TabPanel>
          <TabPanel>
            <Text>Favourites</Text>
          </TabPanel>
          <TabPanel>
            <Text>Followers</Text>
          </TabPanel>
          <TabPanel>
            <Text>Follows</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
}
export default ProfilePage;
