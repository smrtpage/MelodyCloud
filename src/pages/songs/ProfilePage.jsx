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
import { useEffect, useState, useMemo, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  followService,
  getUserService,
  userLikedSongs,
} from '../../services/usersServices';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/authSelectors';
import Navbar from '../../components/Navbar';
import LikedSongsList from '../../components/Profile/LikedSongsList';

const ProfilePage = () => {
  const { userId } = useParams();
  const authUser = useSelector(selectUser);
  const isAuthUser = authUser.id === Number(userId);

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [followingUsers, setFollowingUsers] = useState([]);
  const [followersUsers, setFollowersUsers] = useState([]);
  const [likedSongs, setLikedSongs] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayAudio = (audioUrl) => {
    const audioEl = audioRef.current;
    if (currentAudio === audioUrl) {
      if (isPlaying) {
        audioEl.pause();
      } else {
        audioEl.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      setCurrentAudio(audioUrl);
      setIsPlaying(true);
      setTimeout(() => audioEl.play(), 100);
    }
  };

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    }
  }, [isPlaying]);

  useEffect(() => {
    setIsLoading(true);
    getUserService(userId)
      .then((data) => setUser(data))
      .finally(() => setIsLoading(false));
  }, [userId]);

  const handleFollow = () => {
    followService(userId).then((newUser) => setUser(newUser));
  };

  useEffect(() => {
    if (user) {
      Promise.all(user.following.map((item) => getUserService(item.id)))
        .then((data) => setFollowingUsers(data))
        .finally(() => setIsLoading(false));
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      Promise.all(user.followers.map((item) => getUserService(item.id)))
        .then((data) => setFollowersUsers(data))
        .finally(() => setIsLoading(false));
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      userLikedSongs(userId).then((data) => setLikedSongs(data.items));
    }
  }, [user, userId]);

  console.log(likedSongs);

  const createFollowingListItems = useMemo(() => {
    return followingUsers.map((item, index) => (
      <ListItem marginTop="25px" key={index}>
        <Stack
          as={Link}
          to={`/users/${item.id}`}
          border="1px"
          padding="25px"
          borderRadius="50px"
          _hover={{
            color: 'yellow',
            backgroundColor: '#2B2B2B',
            transition: '0.5s ',
          }}
        >
          <Heading>{item.username}</Heading>
          <Text>
            {item.firstName} {item.lastName}
          </Text>
          <Text>Followers: {item._count.followers}</Text>
        </Stack>
      </ListItem>
    ));
  }, [followingUsers]);

  const createFollowersListItems = useMemo(() => {
    return followersUsers.map((item, index) => (
      <ListItem marginTop="25px" key={index}>
        <Stack
          as={Link}
          to={`/users/${item.id}`}
          border="1px"
          padding="25px"
          borderRadius="50px"
          _hover={{
            color: 'yellow',
            backgroundColor: '#2B2B2B',
            transition: '0.5s ',
          }}
        >
          <Heading>{item.username}</Heading>
          <Text>
            {item.firstName} {item.lastName}
          </Text>
          <Text>Followers: {item._count.followers}</Text>
        </Stack>
      </ListItem>
    ));
  }, [followersUsers]);

  return (
    <Stack>
      <Navbar />
      {isLoading ? (
        <Flex justify="center" align="center" minHeight="200px">
          <Spinner size="xl" color="yellow" />
        </Flex>
      ) : (
        user && (
          <Flex
            marginTop="60px"
            direction="column"
            justifyContent="space-between"
          >
            <Flex direction="row" gap={10}>
              <Avatar name={user.firstName} boxSize="15rem" />
              <Flex direction="column" justifyContent="center">
                <Text fontSize="5xl" color="yellow">
                  @{user.username}
                </Text>
                <Text marginEnd="10px" fontSize="2xl">
                  {user.firstName} {user.lastName}
                </Text>
                <Text fontSize="xl">{user._count.followers} followers</Text>
                {!isAuthUser && (
                  <ButtonGroup>
                    <Button
                      colorScheme="yellow"
                      variant={user.isFollowing ? 'outline' : 'solid'}
                      onClick={handleFollow}
                    >
                      {user.isFollowing ? 'Unfollow' : 'Follow'}
                    </Button>
                  </ButtonGroup>
                )}
              </Flex>
            </Flex>
            <Tabs marginTop="35px" colorScheme="yellow">
              <TabList>
                <Tab fontSize="25px">Favourites</Tab>
                <Tab fontSize="25px">Followers</Tab>
                <Tab fontSize="25px">Follows</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Text>
                    <LikedSongsList
                      onPlayAudio={handlePlayAudio}
                      currentAudio={currentAudio}
                      isPlaying={isPlaying}
                      songs={likedSongs}
                    />
                  </Text>
                </TabPanel>
                <TabPanel>
                  <List>{createFollowersListItems}</List>
                </TabPanel>
                <TabPanel>
                  <List>{createFollowingListItems}</List>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        )
      )}
      <audio
        ref={audioRef}
        src={currentAudio}
        onEnded={() => setIsPlaying(false)}
        onLoadedMetadata={() => {
          if (isPlaying) audioRef.current.play();
        }}
      >
        Your browser does not support the audio element.
      </audio>
    </Stack>
  );
};

export default ProfilePage;
