import Track from '../Track/Track';
import './TrackList.css';

const TrackList = ({ tracks, onAdd }) => {
  return (
    <div className='tracks'>
      <div className='tracks-item'>
        {tracks.map((track) => (
          <Track key={track.id} track={track} onAdd={onAdd} />
        ))}
      </div>
    </div>
  );
};
export default TrackList;
