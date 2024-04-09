import axios from 'axios';

export function registerService(data) {
  return axios.post('/auth/register', data);
}

export function loginService(data) {
  return axios.post('/auth/login', data);
}

export function verifyService() {
  return axios.post('/auth/verify');
}
