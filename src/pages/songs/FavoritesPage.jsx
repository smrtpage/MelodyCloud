import { getUserLikesService } from '../../services/usersServices';
import { selectUser } from '../../redux/authSelectors';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Flex, Stack, Heading, Button, Spinner } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import SongCard from '../../components/SongCard';
import { IoArrowBackOutline } from 'react-icons/io5';

function FavoritesPage() {
  const user = useSelector(selectUser);
  const [isLoading, setIsLoading] = useState(false);
  const [likedSongs, setLikedSongs] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getUserLikesService(user.id)
      .then((data) => setLikedSongs(data.items))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [user.id]);
  return (
    <Stack display="flex" alignItems="center" justifyContent="center">
      <Button
        position="absolute"
        top="50px"
        left="150px"
        leftIcon={<IoArrowBackOutline />}
        as={Link}
        to="/"
      >
        To Home
      </Button>
      <Heading marginTop="50px" fontSize="50px">
        All Favorites
      </Heading>
      {isLoading ? (
        <Spinner marginTop="200px" width="200px" height="200px" />
      ) : (
        <Flex
          margin="50px 0"
          width="100%"
          alignItems="center"
          justifyContent="center"
          gap="20px"
          flexWrap="wrap"
        >
          {likedSongs.map((song) => (
            <SongCard
              key={song.id}
              title={song.title}
              author={song.user.username}
              isLiked={song.isLiked}
              genre={song.genre}
              audio={song.audio}
              cover={song.cover}
              id={song.id}
            />
          ))}
        </Flex>
      )}
    </Stack>
  );
}
export default FavoritesPage;
