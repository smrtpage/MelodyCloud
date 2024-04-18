import LikedSongCard from '../Profile/LikedSongCard';
import { Stack } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function LikedSongsList({ songs }) {
  return (
    <Stack>
      <Stack
        padding="30px 10px"
        display="flex"
        rowGap="30px"
        flexDirection="column"
      >
        {songs.map((song) => (
          <LikedSongCard
            key={song.id}
            id={song.id}
            title={song.title}
            createdAt={song.createdAt}
            author={song.user.username}
            cover={song.cover}
            likesCount={song._count.likedBy}
          />
        ))}
      </Stack>
    </Stack>
  );
}
LikedSongsList.propTypes = {
  songs: PropTypes.any,
};
export default LikedSongsList;
