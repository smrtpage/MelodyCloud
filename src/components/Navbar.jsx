import { Input, Flex, Button, useColorMode, Avatar } from '@chakra-ui/react';
import { CiSearch } from 'react-icons/ci';
import { IoExitOutline } from 'react-icons/io5';

import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/authSelectors';
import { logoutAction } from '../redux/authActions';

function Navbar() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function logout() {
    dispatch(logoutAction());
    navigate('/register');
  }
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div style={{ marginBottom: '10px' }}>
      <Flex padding="0 20px" alignItems="center" justifyContent="space-between">
        <Flex width="80%" alignItems="center">
          <Input
            placeholder="Discover your music here..."
            borderRadius="30px"
            outline="none"
            variant="outlined"
            border="none"
            backgroundColor="#616161"
            _placeholder={{ color: '#D5D5D5' }}
            height="50px"
            paddingLeft="50px"
            position="relative"
          />
          <Button
            textAlign="center"
            variant="ghost"
            _hover={{ background: 'none' }}
            position="absolute"
          >
            <CiSearch fontSize="30px" fontWeight="600" />
          </Button>
        </Flex>
        <Flex gap="20px">
          <Button onClick={toggleColorMode} height="50px" variant="ghost">
            {colorMode === 'light' ? (
              <MdOutlineDarkMode fontSize="30px" />
            ) : (
              <MdOutlineLightMode fontSize="30px" />
            )}
          </Button>
          <Flex alignItems="center" gap="10px" justifyContent="center">
            <Avatar as={Link} to="/"></Avatar>
            {user && user.username}
            <Button variant="ghost" onClick={logout}>
              <IoExitOutline fontSize="30px" />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
export default Navbar;
