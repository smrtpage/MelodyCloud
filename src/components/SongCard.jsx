import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Text,
  Heading,
  Image,
  Divider,
  Flex,
  Spinner,
} from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import PropTypes from 'prop-types';
import { selectUser } from '../redux/authSelectors';
import { Link } from 'react-router-dom';
import { likeSongService } from '../services/songsServices';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function SongCard({
  id,
  author,
  title,
  cover,
  genre,
  audio,
  isLiked,
  authorId,
  onChangeLike,
}) {
  const user = useSelector(selectUser);
  const [likeLoading, setLikeLoading] = useState(false);
  const [song, setSong] = useState([]);

  async function handleLikeSong() {
    setLikeLoading(true);
    try {
      const response = await likeSongService(id);
      setSong(response);
      onChangeLike(!isLiked);
    } catch (err) {
      console.log(err);
    }

    setLikeLoading(false);
  }

  return (
    <Card backgroundColor="#3b3b3b" maxW="sm">
      <CardBody display="flex" flexDirection="column" rowGap="10px">
        {cover ? (
          <Image src={cover} alt={title} borderRadius="lg" />
        ) : (
          <Flex
            alignItems="center"
            justifyContent="center"
            backgroundColor="#000"
            color="#fff"
            height="230px"
            fontSize="30px"
            width="350px"
          >
            No cover
          </Flex>
        )}

        <Heading as={Link} to={`/audios/${id}`}>
          {title}
        </Heading>
        <Text as={Link} to={`/users/${authorId}`} fontSize="20px" color="#ccc">
          {author}
        </Text>
        <Text fontSize="20px" color="#ccc">
          Genre: {genre}
        </Text>
      </CardBody>

      {user && (
        <CardFooter>
          <Divider />
          <Flex width="100%" alignItems="center" justifyContent="center">
            <audio src={audio} controls></audio>
            {likeLoading ? (
              <Spinner />
            ) : (
              <Button
                leftIcon={
                  isLiked ? (
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
          </Flex>
        </CardFooter>
      )}
    </Card>
  );
}

SongCard.propTypes = {
  id: PropTypes.any,
  author: PropTypes.any,
  title: PropTypes.any,
  cover: PropTypes.any,
  genre: PropTypes.any,
  audio: PropTypes.any,
  isLiked: PropTypes.any,
  authorId: PropTypes.any,
  onLike: PropTypes.any,
};

export default SongCard;
