import SearchBar from '../components/SearchBar';
import { Stack, Text } from '@chakra-ui/react';
import { getAllSongsService } from '../services/songsServices';
import { useState, useEffect } from 'react';
import SongsList from '../components/SongsList';
import { Spinner } from '@chakra-ui/react';

function DiscoveryPage() {
  const [songs, setSongs] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (query === '') {
      getAllSongsService()
        .then((data) => setSongs(data.items))
        .catch((err) => console.log(err));
    }
    getAllSongsService({ q: query, perPage: 12 })
      .then((data) => setSongs(data.items))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [query]);

  function search(newQuery) {
    setQuery(newQuery);
  }

  return (
    <Stack
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      marginTop="20px"
    >
      <SearchBar onSearch={search} />

      {isLoading ? (
        <Spinner marginTop="200px" width="200px" height="200px" />
      ) : (
        <SongsList songs={songs} />
      )}

      {songs.length === 0 && (
        <Text fontSize="30px" color="#ccc">
          On query {query} nothing was founded
        </Text>
      )}
    </Stack>
  );
}
export default DiscoveryPage;
