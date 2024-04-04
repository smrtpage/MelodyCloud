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
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUserService } from '../../services/usersServices';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/authSelectors';
import Navbar from '../../components/Navbar';

function ProfilePage() {
  const { userId } = useParams();

  const authUser = useSelector(selectUser);

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getUserService(userId)
      .then((data) => setUser(data))
      .finally(() => setIsLoading(false));
  }, [userId]);

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
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Flex direction="row" gap={10}>
              <Avatar name={user.firstName} boxSize="15rem" />
              <Flex direction="column" justifyContent="center">
                <Text fontSize="5xl" color="yellow">
                  @{user.username}
                </Text>
                <Flex>
                  <Text marginEnd="10px" fontSize="2xl">
                    {user.firstName}
                  </Text>
                  <Text fontSize="2xl">{user.lastName}</Text>
                </Flex>
                <Text fontSize="xl">112 followers</Text>
              </Flex>
            </Flex>
            {!authUser && (
              <ButtonGroup>
                <Button>Follow</Button>
              </ButtonGroup>
            )}
          </Flex>
        )
      )}
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
