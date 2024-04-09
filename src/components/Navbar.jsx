import { Flex, Button, useColorMode, Avatar } from '@chakra-ui/react';
import { IoExitOutline } from 'react-icons/io5';
import SearchBar from './SearchBar';
import PropTypes from 'prop-types';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/authSelectors';
import { logoutAction } from '../redux/authActions';

function Navbar({ onSearch }) {
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
        <SearchBar onSearch={onSearch} />
        <Flex gap="20px">
          <Button onClick={toggleColorMode} height="50px" variant="ghost">
            {colorMode === 'light' ? (
              <MdOutlineDarkMode fontSize="30px" />
            ) : (
              <MdOutlineLightMode fontSize="30px" />
            )}
          </Button>
          {user && (
            <Flex alignItems="center" gap="10px" justifyContent="center">
              <Avatar as={Link} to={`/users/${user.id}`} />
              {user && user.username}
              <Button variant="ghost" onClick={logout}>
                <IoExitOutline fontSize="30px" />
              </Button>
            </Flex>
          )}
        </Flex>
      </Flex>
    </div>
  );
}
Navbar.propTypes = {
  onSearch: PropTypes.any,
};
export default Navbar;
