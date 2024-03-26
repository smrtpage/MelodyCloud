import {
  Stack,
  Flex,
  Alert,
  AlertIcon,
  Button,
  useToast,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import InputField from '../InputField';
import { loginService } from '../../services/authServices';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/authActions';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(4)
    .max(12, 'Username can be maximum 12 symbols!')
    .required('Username field is required!'),
  password: yup.string().min(6).max(20).required('Password Field is required!'),
});

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: (results) => {
      setIsLoading(true);
      setError(null);

      loginService(results)
        .then((data) => {
          dispatch(loginAction(data));
          navigate('/');
          toast({
            title: 'Succesfully Logined!',
            status: 'success',
          });
        })
        .catch((err) => setError(err.response.data.message))
        .finally(() => setIsLoading(false));
    },
  });
  return (
    <Stack
      as="form"
      height="100%"
      width="400px"
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

      {error && (
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      )}

      <Flex gap="20px">
        <Button colorScheme="yellow" type="submit" isLoading={isLoading}>
          Login
        </Button>
        <Button variant="ghost" as={Link} to="/register">
          Register
        </Button>
      </Flex>
    </Stack>
  );
}
export default LoginForm;
