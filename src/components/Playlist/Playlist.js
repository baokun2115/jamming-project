import TrackList from '../TrackList/TrackList';
import './Playlist.css';

const Playlist = ({ playlistTrack, onNameChange }) => {
  const handleNameChange = (e) => {
    onNameChange(e.target.value);
  };

  return (
    <div className='playlist'>
      <input placeholder='New Playlist' onChange={handleNameChange} />
      <TrackList tracks={playlistTrack} />
      <button className='playlist-save'>SAVE TO SPOTIFY</button>
    </div>
  );
};
export default Playlist;
