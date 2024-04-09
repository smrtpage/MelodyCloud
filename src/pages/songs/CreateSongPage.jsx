import { Heading } from '@chakra-ui/react';
import CreateSongForm from '../../components/songs/CreateSongForm';

function CreateSongPage() {
  return (
    <div>
      <Heading marginTop="30px" textAlign="center" mb="16px">
        Create Song
      </Heading>
      <CreateSongForm />
    </div>
  );
}

export default CreateSongPage;
