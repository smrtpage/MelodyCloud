import { Alert, Flex, Stack } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import SongCard from './SongCard';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/authSelectors';

function SongsList({ songs, onChangeLike }) {
  const user = useSelector(selectUser);
  return (
    <Stack display="flex" alignItems="center" justifyContent="center">
      {!user && (
        <Alert
          fontSize="20px"
          width="600px"
          borderRadius="10px"
          marginTop="50px"
          status="info"
        >
          Please Login To Play Songs And Like Them!
        </Alert>
      )}
      <Flex
        marginTop="50px"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="20px"
        flexWrap="wrap"
      >
        {songs.map((song) => (
          <SongCard
            key={song.id}
            title={song.title}
            author={song.user.username}
            authorId={song.user.id}
            isLiked={song.isLiked}
            genre={song.genre}
            audio={song.audio}
            cover={song.cover}
            id={song.id}
            onChangeLike={onChangeLike}
          />
        ))}
      </Flex>
    </Stack>
  );
}

SongsList.propTypes = {
  songs: PropTypes.array.isRequired,
  onLike: PropTypes.any,
  onChangeLike: PropTypes.any,
};
export default SongsList;
