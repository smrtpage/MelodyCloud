import { Text, Button, Flex, Spinner, Image } from '@chakra-ui/react';
import { useState } from 'react';
import { formatSongDate } from '../utils/formatSongDate';
import { likeSongService } from '../services/songsServices';
import { FaHeart } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { BsThreeDots } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdOutlineImageNotSupported } from 'react-icons/md';

function TrendingSongCard({ id, title, cover, author, createdAt, likesCount }) {
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
        {cover ? (
          <Image width="100px" height="80px" borderRadius="5px" src={cover} />
        ) : (
          <MdOutlineImageNotSupported
            fontSize="100px"
            width="100px"
            height="80px"
          />
        )}

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
};
export default TrendingSongCard;
