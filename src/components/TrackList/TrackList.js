import Track from '../Track/Track';
import './TrackList.css';

const TrackList = ({ tracks }) => {
  return (
    <>
      <h2>Results</h2>
      <div className='track-list'>
        {tracks.map((track) => (
          <Track key={track.id} track={track} />
        ))}
      </div>
    </>
  );
};
export default TrackList;
