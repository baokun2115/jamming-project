const Track = ({ track }) => {
  return (
    <div className='track'>
      <div className='track-information'>
        <h4>{track.name}</h4>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
    </div>
  );
};
export default Track;
