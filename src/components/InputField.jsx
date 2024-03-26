import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

function InputField({ required, label, disabled, meta, ...inputProps }) {
  return (
    <FormControl
      isRequired={required}
      isDisabled={disabled}
      isInvalid={!!meta.error && meta.touched}
    >
      <FormLabel>{label}</FormLabel>
      <Input {...inputProps} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}

InputField.propTypes = {
  required: PropTypes.bool,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  meta: PropTypes.object.isRequired,
};

export default InputField;
