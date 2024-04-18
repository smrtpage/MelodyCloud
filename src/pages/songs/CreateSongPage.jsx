import { Heading, Stack, Button } from '@chakra-ui/react';
import CreateSongForm from '../../components/songs/CreateSongForm';

function CreateSongPage() {
  function goBack() {
    window.history.back();
  }

  return (
    <Stack>
      <Button
        width="100px"
        marginTop="50px"
        marginLeft="50px"
        justifySelf="flex-start"
        onClick={goBack}
      >
        Go Back
      </Button>

      <Stack
        height="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Heading marginTop="30px" textAlign="center" mb="16px">
          Create Song
        </Heading>

        <CreateSongForm />
      </Stack>
    </Stack>
  );
}

export default CreateSongPage;
