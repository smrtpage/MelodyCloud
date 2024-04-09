import { Input, Button, Select } from '@chakra-ui/react';
import { createSongService } from '../../services/songsServices';

function CreateSongForm() {
  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    createSongService(formData).then((data) => console.log(data));
  }

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
      }}
      onSubmit={handleSubmit}
    >
      <Input
        size="lg"
        required
        type="text"
        placeholder="Name"
        name="title"
        maxWidth="500px"
      />

      <Select
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

      <Input
        size="lg"
        maxWidth="500px"
        type="file"
        placeholder="Cover"
        name="cover"
      />

      <Input
        size="lg"
        maxWidth="500px"
        required
        type="file"
        placeholder="Audio"
        name="audio"
        accept="audio/mp3"
      />

      <Button size="lg" type="submit">
        Post
      </Button>
    </form>
  );
}

export default CreateSongForm;
