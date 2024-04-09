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
  Spinner,
  List,
  ListItem,
  Heading,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { followService, getUserService } from '../../services/usersServices';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/authSelectors';
import Navbar from '../../components/Navbar';

function ProfilePage() {
  const { userId } = useParams();

  const authUser = useSelector(selectUser);

  const isAuthUser = authUser.id === Number(userId);

  const [user, setUser] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getUserService(userId)
      .then((data) => setUser(data))
      .finally(() => setIsLoading(false));
  }, [userId]);

  function follow() {
    followService(userId).then((newUser) => setUser(newUser));
  }

  return (
    <Stack padding="30px">
      <Navbar />
      {isLoading ? (
        <Flex justify="center" align="center" minHeight="200px">
          <Spinner size="xl" color="yellow" />
        </Flex>
      ) : (
        user && (
          <Flex
            marginTop="60px"
            marginStart="40px"
            direction="column"
            justifyContent="space-between"
          >
            <Flex direction="row" gap={10}>
              <Avatar name={user.firstName} boxSize="15rem" />
              <Flex direction="column" justifyContent="center">
                <Flex direction="column" justifyContent="space-between">
                  <Stack>
                    <Text fontSize="5xl" color="yellow">
                      @{user.username}
                    </Text>
                    <Text marginEnd="10px" fontSize="2xl">
                      {user.firstName}
                    </Text>
                    <Text fontSize="2xl">{user.lastName}</Text>
                  </Stack>
                  {!isAuthUser && (
                    <ButtonGroup>
                      <Button
                        colorScheme="yellow"
                        variant={user.isFollowing ? 'outline' : 'solid'}
                        onClick={follow}
                      >
                        {user.isFollowing ? 'Unfollow' : 'Follow'}
                      </Button>
                    </ButtonGroup>
                  )}
                </Flex>
                <Text fontSize="xl">{user._count.followers} followers</Text>
              </Flex>
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
                  <List>
                    <ListItem>
                      <Stack border="1px" padding="25px" borderRadius="50px">
                        <Heading>user</Heading>
                        <Text>2.345.000</Text>
                        <Text>December, 20, 2022</Text>
                      </Stack>
                    </ListItem>
                  </List>
                </TabPanel>
                <TabPanel>
                  <Text>Follows</Text>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        )
      )}
    </Stack>
  );
}
export default ProfilePage;
