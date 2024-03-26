import { Stack, Flex, Alert, AlertIcon, Button } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import InputField from '../InputField';
import { registerService } from '../../services/authServices';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/authActions';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(4)
    .max(12, 'Username can be maximum 12 symbols!')
    .required('Username field is required!'),
  password: yup.string().min(6).max(20).required('Password Field is required!'),
  firstName: yup
    .string()
    .min(2)
    .max(50)
    .required('First Name field is required!'),
  lastName: yup
    .string()
    .min(2)
    .max(50)
    .required('Last Name field is required!'),
});

function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
    },
    validationSchema,
    onSubmit: (results) => {
      setIsLoading(true);
      setError(null);

      registerService(results)
        .then((data) => {
          dispatch(loginAction(data));
          navigate('/login');
        })
        .catch((err) => setError(err.response.data.message))
        .finally(() => setIsLoading(false));
    },
  });
  return (
    <Stack
      as="form"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      rowGap="30px"
      marginRight="20px"
      onSubmit={formik.handleSubmit}
    >
      <InputField
        label="Username"
        placeholder="Username..."
        required
        meta={formik.getFieldMeta('username')}
        {...formik.getFieldProps('username')}
      />

      <InputField
        label="Password"
        placeholder="Password..."
        type="password"
        required
        meta={formik.getFieldMeta('password')}
        {...formik.getFieldProps('password')}
      />

      <Flex gap="10px">
        <InputField
          label="First Name"
          placeholder="First Name..."
          required
          meta={formik.getFieldMeta('firstName')}
          {...formik.getFieldProps('firstName')}
        />

        <InputField
          label="Last Name"
          placeholder="Last Name..."
          required
          meta={formik.getFieldMeta('lastName')}
          {...formik.getFieldProps('lastName')}
        />
      </Flex>

      {error && (
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      )}

      <Flex gap="20px">
        <Button colorScheme="yellow" type="submit" isLoading={isLoading}>
          Register
        </Button>
        <Button variant="ghost" as={Link} to="/login">
          Login
        </Button>
      </Flex>
    </Stack>
  );
}
export default RegisterForm;
