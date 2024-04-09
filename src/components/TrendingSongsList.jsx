import TrendingSongCard from './TrendingSongCard';
import { Stack, Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function TrendingSongsList({ songs }) {
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
TrendingSongsList.propTypes = {
  songs: PropTypes.any,
};
export default TrendingSongsList;
