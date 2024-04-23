import TrendingSongCard from './TrendingSongCard';
import { Stack, Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function TrendingSongsList({ songs, onPlayAudio, currentAudio, isPlaying }) {
  return (
    <Stack>
      <Heading marginLeft="50px" fontSize="30px" fontWeight="600">
        Trending Songs
      </Heading>
      <Stack
        padding="30px 50px"
        display="flex"
        rowGap="30px"
        flexDirection="column"
      >
        {songs.map((song) => (
          <TrendingSongCard
            key={song.id}
            audio={song.audio}
            authorId={song.user.id}
            id={song.id}
            title={song.title}
            createdAt={song.createdAt}
            author={song.user.username}
            cover={song.cover}
            likesCount={song._count.likedBy}
            onPlayAudio={onPlayAudio}
            isPlaying={isPlaying && currentAudio === song.audio}
          />
        ))}
      </Stack>
    </Stack>
  );
}
TrendingSongsList.propTypes = {
  songs: PropTypes.any,
  onPlayAudio: PropTypes.any,
  currentAudio: PropTypes.any,
  isPlaying: PropTypes.any,
};
export default TrendingSongsList;
