import axios from 'axios';

export function getUserService(userId) {
  return axios.get(`/users/${userId}`);
}

export function followService(userId) {
  return axios.post(`/users/${userId}/follow`);
}
