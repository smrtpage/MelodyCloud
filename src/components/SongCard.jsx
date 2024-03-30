import {
  Stack,
  Card,
  CardBody,
  CardFooter,
  Button,
  Text,
  Heading,
  Image,
  Divider,
  Flex,
} from '@chakra-ui/react';
import { FaRegHeart } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { CiPlay1 } from 'react-icons/ci';
import PropTypes from 'prop-types';

function SongCard({ author, title, cover, genre, audio }) {
  return (
    <Card backgroundColor="#3b3b3b" maxW="sm">
      <CardBody display="flex" flexDirection="column" rowGap="10px">
        {cover ? (
          <Image src={cover} alt={title} borderRadius="lg" maxW="300px" />
        ) : (
          <Flex
            alignItems="center"
            justifyContent="center"
            backgroundColor="#000"
            height="200px"
            width="300px"
            color="#fff"
            fontSize="30px"
          >
            No cover
          </Flex>
        )}

        <Heading>{title}</Heading>
        <Text fontSize="20px" color="#ccc">
          {author}
        </Text>
        <Text fontSize="20px" color="#ccc">
          Genre: {genre}
        </Text>
      </CardBody>
      <Divider />
      <CardFooter>
        <Flex
          width="100%"
          gap="50px"
          alignItems="center"
          justifyContent="center"
        >
          <Button variant="ghost">
            <FaRegHeart fontSize="25px" />
          </Button>
          <Button variant="ghost">
            <CiPlay1 fontSize="30px" />
          </Button>
          <Button variant="ghost">
            <BsThreeDots fontSize="25px" />
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  );
}

SongCard.propTypes = {
  author: PropTypes.any,
  title: PropTypes.any,
  cover: PropTypes.any,
  genre: PropTypes.any,
  audio: PropTypes.any,
};

export default SongCard;
