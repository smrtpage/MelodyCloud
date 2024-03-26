import { Stack, Heading, Flex, Image } from '@chakra-ui/react';
import LoginForm from '../../components/auth/LoginForm';
import LoginImg from '../../assets/LoginImg.png';

function LoginPage() {
  return (
    <Stack
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Heading fontSize="45px">Login</Heading>

      <Flex
        marginTop="50px"
        gap="20px"
        alignItems="center"
        justifyContent="center"
        border="1px solid #777878"
        borderRadius="20px"
      >
        <Image
          borderLeftRadius="20px"
          width="850px"
          height="530px"
          src={LoginImg}
        ></Image>
        <LoginForm />
      </Flex>
    </Stack>
  );
}
export default LoginPage;
