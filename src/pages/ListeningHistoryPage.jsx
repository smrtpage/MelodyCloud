function ListeningHistoryPage() {
  return <div>ListeningHistoryPage</div>;
}
export default ListeningHistoryPage;

// import React, { useState, useEffect } from 'react';

// const ListeningHistoryPage = () => {
//   const [lastSong, setLastSong] = useState('');

//   useEffect(() => {
//     const fetchListeningHistoryPage = async () => {
//       const response = await fetch('API_ENDPOINT_HERE');
//       const data = await response.json();
//       const lastSongListened = data[data.length - 1];
//       setLastSong(lastSongListened);
//     };

//     fetchListeningHistoryPage();
//   }, []);

//   return (
//     <div>
//       <h2>Last Song Listened:</h2>
//       <p>{lastSong}</p>
//     </div>
//   );
// };
