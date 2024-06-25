import './Track.css';

const Track = ({ track, onAdd, onRemove, isRemoval }) => {
  const addTrack = () => {
    onAdd(track);
  };

  const removeTrack = () => {
    onRemove(track);
  };

  const renderAction = () => {
    return (
      <>
        {!isRemoval && (
          <button className='track-action' onClick={addTrack}>
            +
          </button>
        )}
        {isRemoval && (
          <button className='track-action' onClick={removeTrack}>
            -
          </button>
        )}
      </>
    );
  };
  return (
    <div className='track'>
      <div className='track-information'>
        <h4>{track.name}</h4>
        <p className='track-artist'>
          {track.artist} | {track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
};
export default Track;
