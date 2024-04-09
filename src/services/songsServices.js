import axios from 'axios';

export function getAllSongsService(params) {
  return axios.get('/audios', {
    params,
  });
}

export function getSongDetailsService(songId) {
  return axios.get(`/audios/${songId}`);
}

export function likeSongService(songId) {
  return axios.post(`/audios/${songId}/like`);
}
