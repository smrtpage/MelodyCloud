import { Flex, Text, Image, Button, Spinner, Box } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { BsThreeDots } from 'react-icons/bs';
import { FaPlay, FaPause } from 'react-icons/fa';
import { formatSongDate } from '../utils/formatSongDate';
import { likeSongService } from '../services/songsServices';
import { MdOutlineImageNotSupported } from 'react-icons/md';
import PropTypes from 'prop-types';

function TrendingSongCard({
  id,
  title,
  cover,
  audio,
  author,
  createdAt,
  likesCount,
  onPlayAudio,
  isPlaying,
}) {
  const [likeLoading, setLikeLoading] = useState(false);
  const [song, setSong] = useState([]);

  function handleLikeSong() {
    setLikeLoading(true);
    likeSongService(id)
      .then((song) => setSong(song))
      .catch((err) => console.log(err))
      .finally(() => setLikeLoading(false));
  }

  return (
    <Flex key={id} alignItems="center" justifyContent="space-between">
      <Flex gap="20px" alignItems="center" justifyContent="center">
        <Text width="50px" fontSize="25px">
          {id}
        </Text>

        <Box position="relative" width="100px" height="80px">
          {cover ? (
            <Image
              borderRadius="5px"
              src={cover}
              width="100%"
              height="100%"
              zIndex="1"
            />
          ) : (
            <MdOutlineImageNotSupported
              fontSize="100px"
              width="100px"
              height="80px"
            />
          )}

          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            transition="0.3s all ease"
            _hover={{ opacity: 1 }}
            opacity="0"
            zIndex="10"
            cursor="pointer"
            onClick={() => onPlayAudio(audio)}
          >
            {isPlaying ? (
              <FaPause fontSize="40px" color="white" />
            ) : (
              <FaPlay fontSize="40px" color="white" />
            )}
          </Box>
        </Box>

        <Flex as={Link} to={`/audios/${id}`} flexDirection="column">
          <Text width="150px" fontSize="20px" fontWeight="600">
            {title}
          </Text>
          <Text width="150px" fontSize="16px" color="#ccc" fontWeight="400">
            {author}
          </Text>
        </Flex>
      </Flex>

      <Text width="150px" fontSize="19px" color="#ccc" fontWeight="400">
        {likesCount}
      </Text>
      <Text width="300px" fontSize="19px" color="#ccc" fontWeight="400">
        {formatSongDate(createdAt)}
      </Text>

      <Flex gap="20px">
        {likeLoading ? (
          <Spinner margin="0 auto" />
        ) : (
          <Button
            leftIcon={
              song.isLiked ? (
                <FaHeart color="#D6D10F" />
              ) : (
                <CiHeart fontSize="30px" />
              )
            }
            onClick={handleLikeSong}
            variant="ghost"
            fontSize="25px"
          ></Button>
        )}
        <Button variant="ghost">
          <BsThreeDots fontSize="25px" />
        </Button>
      </Flex>
    </Flex>
  );
}

TrendingSongCard.propTypes = {
  id: PropTypes.any,
  author: PropTypes.any,
  title: PropTypes.any,
  cover: PropTypes.any,
  createdAt: PropTypes.any,
  isLiked: PropTypes.any,
  likesCount: PropTypes.any,
  onPlayAudio: PropTypes.any,
  audio: PropTypes.any,
  isPlaying: PropTypes.any,
};

export default TrendingSongCard;
