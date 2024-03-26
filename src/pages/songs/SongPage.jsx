import { Heading, Stack, Text, Flex, Button } from '@chakra-ui/react';

function SongPage() {
  return (
    <>
      <Stack
        padding="15px 10px"
        borderRadius="5px"
        rowGap="20px"
        display="flex"
        flexDirection="column"
        // alignItems="center"
        // justifyContent="center"
      >
        <Stack>
          <Stack
            width="130px"
            height="130px"
            borderRadius="5px"
            backgroundColor="pink"
          ></Stack>
        </Stack>
      </Stack>
    </>
  );
}
export default SongPage;
