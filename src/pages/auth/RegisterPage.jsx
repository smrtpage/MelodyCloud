import { Stack, Heading, Flex, Image } from '@chakra-ui/react';
import RegisterForm from '../../components/auth/RegisterForm';
import LoginImg from '../../assets/LoginImg.png';

function RegisterPage() {
  return (
    <Stack
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Heading fontSize="45px">Register</Heading>
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
        <RegisterForm />
      </Flex>
    </Stack>
  );
}
export default RegisterPage;
