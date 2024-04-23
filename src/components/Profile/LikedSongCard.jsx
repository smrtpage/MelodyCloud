import { Text, Button, Flex, Image, Box } from '@chakra-ui/react';
import { formatSongDate } from '../../utils/formatSongDate';
import { BsThreeDots } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaPlay, FaPause } from 'react-icons/fa';
import { MdOutlineImageNotSupported } from 'react-icons/md';

function LikedSongCard({
  id,
  title,
  cover,
  author,
  audio,
  createdAt,
  likesCount,
  onPlayAudio,
  isPlaying,
}) {
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
        <Flex flexDirection="column">
          <Text
            as={Link}
            to={`/audios/${id}`}
            width="150px"
            fontSize="20px"
            fontWeight="600"
          >
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
        <Button variant="ghost">
          <BsThreeDots fontSize="25px" />
        </Button>
      </Flex>
    </Flex>
  );
}
LikedSongCard.propTypes = {
  id: PropTypes.any,
  author: PropTypes.any,
  audio: PropTypes.any,
  title: PropTypes.any,
  cover: PropTypes.any,
  createdAt: PropTypes.any,
  isLiked: PropTypes.any,
  likesCount: PropTypes.any,
  onPlayAudio: PropTypes.any,
  isPlaying: PropTypes.any,
};
export default LikedSongCard;
