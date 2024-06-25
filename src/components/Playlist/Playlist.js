import TrackList from '../TrackList/TrackList';
import './Playlist.css';

const Playlist = ({
  playlistTrack,
  onNameChange,
  onRemove,
  onSave,
  playlistName,
}) => {
  const handleNameChange = (e) => {
    onNameChange(e.target.value);
  };

  return (
    <div className='playlist'>
      <input
        placeholder='New Playlist'
        onChange={handleNameChange}
        defaultValue={playlistName}
      />
      <TrackList tracks={playlistTrack} onRemove={onRemove} isRemoval={true} />
      <button className='playlist-save' onClick={onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};
export default Playlist;
