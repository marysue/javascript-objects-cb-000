var playlist = { Slowdive :  'Alison',
  "My Bloody Valentine" : 'Sometimes' };

function updatePlaylist (playlist, artist, song)
{
  return Object.assign( playlist, playlist, { [artist] : song} );
}

function removeFromPlaylist(playlistObj, artist) {
  delete playlistObj[artist];
  return playlistObj;
}
