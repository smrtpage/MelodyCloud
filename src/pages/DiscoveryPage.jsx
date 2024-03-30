import SearchBar from '../components/SearchBar';
import { Stack, Heading, Text } from '@chakra-ui/react';
import { getAllSongsService } from '../services/songsServices';
import { useState, useEffect } from 'react';
import SongsList from '../components/SongsList';

function DiscoveryPage() {
  const [songs, setSongs] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query === '') {
      getAllSongsService()
        .then((data) => setSongs(data.items))
        .catch((err) => console.log(err));
    }
    getAllSongsService(query).then((data) => setSongs(data.items));
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
      <SongsList songs={songs} />
    </Stack>
  );
}
export default DiscoveryPage;
