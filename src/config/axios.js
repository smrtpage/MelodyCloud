import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

axios.interceptors.response.use((res) => res.data);

axios.interceptors.request.use((res) => {
  const token = getToken();
  if (!token) {
    return res;
  }

  res.headers.Authorization = `Bearer ${token}`;
  return res;
});

export function getToken() {
  return localStorage.getItem('auth_token');
}

export function setToken(token) {
  localStorage.setItem('auth_token', token);
}

export function removeToken(token) {
  localStorage.removeItem('auth_token', token);
}
