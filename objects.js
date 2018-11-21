var playlist = { Pink :  'SongByPink',
  "Loggins and Messina" : 'Long Tailed Cat' };

function updatePlaylist (playlist, artist, song)
{
    playlist
  return Object.assign( {}, playlist, { [artist] : song} )
}

function removeFromPlaylist(playlistObj, artist) {
  delete playlistObj.artist;
  return playlistObj;
}
