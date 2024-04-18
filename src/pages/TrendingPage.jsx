import { Stack, Heading, Text, Button, Flex, Spinner } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/authSelectors';
import { getAllSongsService } from '../services/songsServices';
import { useEffect, useState } from 'react';
import TrendingSongsList from '../components/TrendingSongsList';
import { useRef } from 'react';

function TrendingPage() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayAudio = (audioUrl) => {
    const audioEl = audioRef.current;
    if (currentAudio === audioUrl) {
      if (isPlaying) {
        audioEl.pause();
      } else {
        audioEl.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      setCurrentAudio(audioUrl);
      setIsPlaying(true);
      setTimeout(() => audioEl.play(), 100);
    }
  };

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    }
  }, [isPlaying]);

  useEffect(() => {
    setIsLoading(true);
    getAllSongsService()
      .then((data) => setSongs(data.items))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Stack>
      <Navbar onSearch={() => navigate('/discovery')} />

      {!user && (
        <Stack
          padding="30px 0"
          borderRadius="20px"
          backgroundColor="#D6D10F"
          rowGap="20px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Heading color="#000" fontSize="40px" fontWeight="500">
            Authorize On Melody Cloud
          </Heading>
          <Text color="#000" width="500px" fontSize="20px" fontWeight="400">
            If you are not authorized on Melody Cloud, you would not receive a
            fresh info about some cool music. So, why not to register and always
            stay tuned!
          </Text>
          <Flex marginTop="20px" gap="20px">
            <Button
              padding="27px 5px"
              width="120px"
              backgroundColor="#fff"
              color="#000"
              border="none"
              borderRadius="40px"
              _hover={{ transform: 'translateY(5px)' }}
              fontWeight="600"
              fontSize="18px"
              as={Link}
              to="/register"
            >
              Register
            </Button>
            <Button
              padding="27px 5px"
              width="120px"
              borderRadius="40px"
              _hover={{ transform: 'translateY(5px)' }}
              variant="outline"
              color="#000"
              border="solid 1px #000"
              fontWeight="600"
              fontSize="18px"
              as={Link}
              to="/login"
            >
              Login
            </Button>
          </Flex>
        </Stack>
      )}

      <Stack margin="30px 50px">
        <Heading fontSize="30px" fontWeight="600">
          Recently Played
        </Heading>
        <Flex
          marginTop="30px"
          alignItems="center"
          justifyContent="center"
          gap="40px"
        >
          <Stack>
            <Stack
              width="200px"
              height="200px"
              borderRadius="20px"
              backgroundColor="#ccc"
            />
            <Stack margin="5px 10px" rowGap="0">
              <Text fontSize="18px" fontWeight="600">
                Without Me
              </Text>
              <Text fontSize="18px" color="#ccc" fontWeight="400">
                Eminem
              </Text>
            </Stack>
          </Stack>
          <Stack>
            <Stack
              width="200px"
              height="200px"
              borderRadius="20px"
              backgroundColor="#ccc"
            />
            <Stack margin="5px 10px" rowGap="0">
              <Text fontSize="18px" fontWeight="600">
                Without Me
              </Text>
              <Text fontSize="18px" color="#ccc" fontWeight="400">
                Eminem
              </Text>
            </Stack>
          </Stack>
          <Stack>
            <Stack
              width="200px"
              height="200px"
              borderRadius="20px"
              backgroundColor="#ccc"
            />
            <Stack margin="5px 10px" rowGap="0">
              <Text fontSize="18px" fontWeight="600">
                Without Me
              </Text>
              <Text fontSize="18px" color="#ccc" fontWeight="400">
                Eminem
              </Text>
            </Stack>
          </Stack>
          <Stack>
            <Stack
              width="200px"
              height="200px"
              borderRadius="20px"
              backgroundColor="#ccc"
            />
            <Stack margin="5px 10px" rowGap="0">
              <Text fontSize="18px" fontWeight="600">
                Without Me
              </Text>
              <Text fontSize="18px" color="#ccc" fontWeight="400">
                Eminem
              </Text>
            </Stack>
          </Stack>
          <Stack>
            <Stack
              width="200px"
              height="200px"
              borderRadius="20px"
              backgroundColor="#ccc"
            />
            <Stack margin="5px 10px" rowGap="0">
              <Text fontSize="18px" fontWeight="600">
                Without Me
              </Text>
              <Text fontSize="17px" color="#ccc" fontWeight="400">
                Eminem
              </Text>
            </Stack>
          </Stack>
        </Flex>
      </Stack>

      {isLoading ? (
        <Spinner marginTop="200px" width="200px" height="200px" />
      ) : (
        <TrendingSongsList
          songs={songs}
          onPlayAudio={handlePlayAudio}
          currentAudio={currentAudio}
          isPlaying={isPlaying}
        />
      )}

      <audio
        ref={audioRef}
        src={currentAudio}
        onEnded={() => setIsPlaying(false)}
        onLoadedMetadata={() => {
          if (isPlaying) audioRef.current.play();
        }}
      >
        Your browser does not support the audio element.
      </audio>
    </Stack>
  );
}
export default TrendingPage;

// function storeLastListenedMusic(music) {
//   localStorage.setItem('lastListenedMusic', music);
// }

// function getLastListenedMusic() {
//   return localStorage.getItem('lastListenedMusic');
// }

// const lastListenedMusic = getLastListenedMusic();
// if (lastListenedMusic) {
//   console.log(`Last listened music: ${lastListenedMusic}`);
// } else {
//   console.log('No music listened recently.');
// }

// const newMusic = 'Song Title - Artist';
// storeLastListenedMusic(newMusic);
// console.log('Updated last listened music.');
