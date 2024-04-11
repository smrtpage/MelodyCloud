import { Stack } from '@chakra-ui/react';

function TrendingPage() {
  return <Stack></Stack>;
}
export default TrendingPage;

function storeLastListenedMusic(music) {
  localStorage.setItem('lastListenedMusic', music);
}


function getLastListenedMusic() {
  return localStorage.getItem('lastListenedMusic');
}


const lastListenedMusic = getLastListenedMusic();
if (lastListenedMusic) {
  console.log(`Last listened music: ${lastListenedMusic}`);
} else {
  console.log('No music listened recently.');
}

const newMusic = 'Song Title - Artist';
storeLastListenedMusic(newMusic);
console.log('Updated last listened music.');