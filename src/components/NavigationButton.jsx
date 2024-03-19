import { Button, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavigationButton({ text, icon, to }) {
  return (
    <Button
      as={Link}
      to={to}
      variant="ghost"
      size="lg"
      justifyContent="flex-start"
      height="60px"
      _hover={{
        color: 'yellow',
        backgroundColor: '#2B2B2B',
        transition: '0.5s ',
      }}
    >
      <Flex alignItems="center" gap="2">
        {icon}
        <Text>{text}</Text>
      </Flex>
    </Button>
  );
}

NavigationButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavigationButton;
