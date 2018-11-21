var playlist = { Slowdive :  'Alison',
  "My Bloody Valentine" : 'Sometimes' };

function updatePlaylist (playlist, artist, song)
{
    playlist
  return Object.assign( {}, playlist, { [artist] : song} )
}

function removeFromPlaylist(playlistObj, artist) {
  delete playlistObj.artist;
  return playlistObj;
}
