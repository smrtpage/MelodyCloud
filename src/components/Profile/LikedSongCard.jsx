import { Text, Button, Flex, Image } from '@chakra-ui/react';
import { formatSongDate } from '../../utils/formatSongDate';
import { BsThreeDots } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function LikedSongCard({ id, title, cover, author, createdAt, likesCount }) {
  return (
    <Flex key={id} alignItems="center" justifyContent="space-between">
      <Flex gap="20px" alignItems="center" justifyContent="center">
        <Text width="50px" fontSize="25px">
          {id}
        </Text>
        <Image width="100px" height="80px" borderRadius="5px" src={cover} />
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
  title: PropTypes.any,
  cover: PropTypes.any,
  createdAt: PropTypes.any,
  isLiked: PropTypes.any,
  likesCount: PropTypes.any,
};
export default LikedSongCard;
