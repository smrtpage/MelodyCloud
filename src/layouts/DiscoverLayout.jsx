import Menu from '../components/Navigation';

import { Outlet } from 'react-router-dom';
import { Stack, Flex, Box } from '@chakra-ui/react';

function RootLayout() {
  return (
    <Stack>
      <Flex>
        <Box
          width="300px"
          height="100vh"
          flexShrink={0}
          position="sticky"
          top="0"
          borderRightWidth="1px"
          py="16px"
          pl="8px"
          pr="16px"
        >
          <Menu />
        </Box>
        <Box flexGrow={1} p="16px">
          <Outlet />
        </Box>
      </Flex>
    </Stack>
  );
}
export default RootLayout;
