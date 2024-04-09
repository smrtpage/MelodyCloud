import { Input, Flex, Button } from '@chakra-ui/react';
import { CiSearch } from 'react-icons/ci';
import { useState } from 'react';
import PropTypes from 'prop-types';

function SearchBar({ onSearch, defaultValue = '' }) {
  const [query, setQuery] = useState(defaultValue);

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(query);
  }
  return (
    <div>
      <Flex as="form" width="950px" alignItems="center" onSubmit={handleSubmit}>
        <Input
          placeholder="Discover your music here..."
          borderRadius="30px"
          outline="none"
          variant="outlined"
          border="none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          backgroundColor="#616161"
          _placeholder={{ color: '#D5D5D5' }}
          height="50px"
          paddingLeft="50px"
          position="relative"
        />
        <Button
          type="submit"
          textAlign="center"
          variant="ghost"
          _hover={{ background: 'none' }}
          position="absolute"
        >
          <CiSearch fontSize="30px" fontWeight="600" />
        </Button>
      </Flex>
    </div>
  );
}
SearchBar.propTypes = {
  onSearch: PropTypes.any,
  defaultValue: PropTypes.any,
};
export default SearchBar;
