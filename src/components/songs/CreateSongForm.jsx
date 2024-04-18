import { Input, Button, Select, Text, Spinner } from '@chakra-ui/react';
import { createSongService } from '../../services/songsServices';
import { useState } from 'react';

function CreateSongForm() {
  const [postSongLoading, setPostSongLoading] = useState(false);

  function handleSubmit(e) {
    setPostSongLoading(true);

    e.preventDefault();

    const formData = new FormData(e.target);
    createSongService(formData)
      .then((data) => console.log(data))
      .finally(() => setPostSongLoading(false));
  }

  return (
    <form
      style={{
        width: '500px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      onSubmit={handleSubmit}
    >
      <Input
        marginBottom="20px"
        size="lg"
        required
        type="text"
        placeholder="Name"
        name="title"
        maxWidth="500px"
      />

      <Select
        marginBottom="10px"
        size="lg"
        maxWidth="500px"
        name="genre"
        required
        placeholder="Select your genre"
      >
        <option value="ROCK">ROCK</option>
        <option value="HIP_HOP">HIP_HOP</option>
        <option value="POP">POP</option>
        <option value="JAZZ">JAZZ</option>
        <option value="COUNTRY">COUNTRY</option>
        <option value="ELECTRONIC">ELECTRONIC</option>
        <option value="CLASSICAL">CLASSICAL</option>
      </Select>

      <Text
        alignSelf="flex-start"
        fontSize="20px"
        fontWeight="500"
        marginBottom="10px"
      >
        Select song cover:
      </Text>

      <Input
        marginBottom="10px"
        size="lg"
        maxWidth="500px"
        type="file"
        placeholder="Cover"
        name="cover"
      />

      <Text
        alignSelf="flex-start"
        fontSize="20px"
        fontWeight="500"
        marginBottom="10px"
      >
        Select song:
      </Text>

      <Input
        marginBottom="20px"
        size="lg"
        maxWidth="500px"
        required
        type="file"
        placeholder="Audio"
        name="audio"
        accept="audio/mp3"
      />

      {postSongLoading ? (
        <Spinner />
      ) : (
        <Button type="submit" size="lg">
          Post
        </Button>
      )}
    </form>
  );
}

export default CreateSongForm;
