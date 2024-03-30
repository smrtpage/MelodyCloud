import { Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import SongCard from './SongCard';

function SongsList({ songs }) {
  return (
    <Flex
      marginTop="50px"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap="20px"
    >
      {songs.map((song) => (
        <SongCard
          key={song.id}
          title={song.title}
          author={song.user.username}
          genre={song.genre}
          audio={song.audio}
          cover={song.cover}
          id={song.id}
        />
      ))}
    </Flex>
  );
}

SongsList.propTypes = {
  songs: PropTypes.array.isRequired,
};
export default SongsList;
