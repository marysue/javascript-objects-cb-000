var playlist = { Pink :  'SongByPink',
  "Loggins and Messina" : 'Long Tailed Cat' };

function updatePlaylist (playlist, artist, song)
{
  var newList = Object.assign( {}, playlist, { [artist] : song} );
  return newList;
}

function removeFromPlaylist(playlistObj, artist) {
  delete playlistObj.artist;
  return playlistObj;
}
