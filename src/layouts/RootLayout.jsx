import Menu from '../components/Navigation';

import SidebarFavorites from '../components/SidebarFavorites';
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
        <Box
          width="300px"
          height="100vh"
          flexShrink={0}
          position="sticky"
          top="0"
          borderLeftWidth="1px"
          py="16px"
          pr="8px"
          pl="16px"
        >
          <SidebarFavorites />
        </Box>
      </Flex>
    </Stack>
  );
}
export default RootLayout;
