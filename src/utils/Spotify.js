import axios from 'axios';

const clientId = '50698e7c658045b590cf84e12cd7f198';
const redirectUri = 'http://localhost:3000';
let accessToken;

const Spotify = {
  getAccessToken() {
    if (localStorage.getItem('accessToken')) {
      return localStorage.getItem('accessToken');
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => (accessToken = ''), expiresIn * 1000);
      window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
      localStorage.setItem('accessToken', accessToken);
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },

  mapTrack(tracks) {
    return tracks.map((track) => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri,
    }));
  },

  async search(term) {
    const accessToken = Spotify.getAccessToken();
    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/search?type=track&q=${term}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (!response.data.tracks) {
        return [];
      }
      return this.mapTrack(response.data.tracks.items);
    } catch (error) {
      console.error('Error fetching data', error);
      return [];
    }
  },

  async savePlaylist(name, trackURIs) {
    if (!name || trackURIs.length === 0) {
      return;
    }
    const accessToken = Spotify.getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    try {
      const userResponse = await axios.get('https://api.spotify.com/v1/me', {
        headers: headers,
      });
      const userId = userResponse.data.id;
      const playlistResponse = await axios.post(
        `https://api.spotify.com/v1/users/${userId}/playlists`,
        { name: name },
        { headers: headers }
      );
      const playlistId = playlistResponse.data.id;
      await axios.post(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        { uris: trackURIs },
        { headers: headers }
      );
    } catch (error) {
      console.error('Error creating playlist');
    }
  },
};

export default Spotify;
