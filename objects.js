var playlist = { Slowdive :  'Alison',
  "My Bloody Valentine" : 'Sometimes' };

function updatePlaylist (playlist, artist, song)
{
  var newList = Object.assign( {}, playlist, { [artist] : song} );
  return newList;
}

function removeFromPlaylist(playlistObj, artist) {
  delete playlistObj.artist;
  return playlistObj;
}
