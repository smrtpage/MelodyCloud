import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function LibrariesButton({ text, to }) {
  return (
    <Button
      as={Link}
      to={to}
      variant="ghost"
      size="lg"
      justifyContent="flex-start"
    >
      {text}
    </Button>
  );
}

LibrariesButton.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default LibrariesButton;
