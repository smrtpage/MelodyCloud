import axios from 'axios';

export function createSongService(data) {
  return axios.post('/audios', data);
}
