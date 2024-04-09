import {
  Heading,
  Stack,
  Text,
  Flex,
  Image,
  Spinner,
  Button,
} from '@chakra-ui/react';
import { getSongDetailsService } from '../../services/songsServices';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { formatSongDate } from '../../utils/formatSongDate';
import { likeSongService } from '../../services/songsServices';
import { FaHeart } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import Navbar from '../../components/Navbar';
// import Navigation from '../../components/Navigation';
import { FaRegHeart } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';

function SongPage() {
  const { audioId } = useParams();
  const [song, setSong] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [likeLoading, setLikeLoading] = useState(false);

  function handleLikeSong() {
    setLikeLoading(true);
    likeSongService(audioId)
      .then((song) => setSong(song))
      .catch((err) => console.log(err))
      .finally(() => setLikeLoading(false));
  }

  useEffect(() => {
    setIsLoading(true);
    getSongDetailsService(audioId)
      .then((data) => setSong(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [audioId]);
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
      >
        {isLoading && <Spinner margin="0 auto" width="200px" height="200px" />}
        {song && (
          <Flex margin="50px 50px" gap="50px">
            <Image
              width="450px"
              height="330px"
              borderRadius="10px"
              src={song.cover}
            ></Image>
            <Stack display="flex" flexDirection="column" rowGap="15px">
              <Heading color="#ccc">{song.genre}</Heading>
              <Heading fontSize="50px">{song.title}</Heading>
              <Text fontSize="20px" color="#ccc">
                By {song.user.username}
              </Text>
              <Text fontSize="20px" color="#ccc">
                {formatSongDate(song.createdAt)}
              </Text>
              {likeLoading ? (
                <Spinner />
              ) : (
                <Button
                  rightIcon={
                    song.isLiked ? (
                      <FaHeart color="#D6D10F" />
                    ) : (
                      <CiHeart fontSize="30px" />
                    )
                  }
                  onClick={handleLikeSong}
                  fontSize="25px"
                  height="50px"
                  width="200px"
                >
                  Like
                </Button>
              )}
              <Text fontSize="20px" color="#ccc">
                Likes: {song._count.likedBy}
              </Text>
            </Stack>
          </Flex>
        )}
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
