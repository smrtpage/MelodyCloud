import axios from 'axios';

export function getUserService(userId) {
  return axios.get(`/users/${userId}`);
}
