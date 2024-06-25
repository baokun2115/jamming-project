import Track from '../Track/Track';
import './TrackList.css';

const TrackList = ({ tracks, onAdd, onRemove, isRemoval }) => {
  return (
    <div className='tracks'>
      <div className='tracks-item'>
        {tracks.map((track) => (
          <Track
            key={track.id}
            track={track}
            onAdd={onAdd}
            onRemove={onRemove}
            isRemoval={isRemoval}
          />
        ))}
      </div>
    </div>
  );
};
export default TrackList;
