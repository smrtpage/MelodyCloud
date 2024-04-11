import { Heading, Stack, Text, Flex, Button, Image } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { getUserLikesService } from '../services/usersServices';
import { selectUser } from '../redux/authSelectors';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { MdOutlineImageNotSupported } from 'react-icons/md';

function SidebarFavorites() {
  const user = useSelector(selectUser);
  const [likedSongs, setLikedSongs] = useState([]);
  useEffect(() => {
    getUserLikesService(user.id).then((data) => setLikedSongs(data.items));
  }, [user.id]);
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
          {likedSongs.map((song) => (
            <Flex
              key={song.id}
              gap="10px"
              alignItems="center"
              justifyContent="center"
            >
              {song.cover ? (
                <Image
                  width="70px"
                  height="70px"
                  borderRadius="5px"
                  src={song.cover}
                ></Image>
              ) : (
                <MdOutlineImageNotSupported
                  width="70px"
                  height="70px"
                  fontSize="70px"
                />
              )}

              <Flex flexDirection="column" alignItems="flex-start">
                <Text fontWeight="600" fontSize="18px" width="100px">
                  {song.title}
                </Text>
                <Text fontSize="14px" width="100px" fontWeight="400">
                  {song.user.username}
                </Text>
              </Flex>

              <Button variant="ghost">
                <BsThreeDotsVertical fontSize="25px" />
              </Button>
            </Flex>
          ))}
        </Flex>
      </Stack>
    </Stack>
  );
}
export default SidebarFavorites;
