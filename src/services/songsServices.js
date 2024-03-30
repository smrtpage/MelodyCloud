import axios from 'axios';

export function getAllSongsService(params) {
  return axios.get('/audios', {
    params,
  });
}
