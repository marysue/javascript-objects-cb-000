var playlist = { "John Morrison" :  "Long Tailed Cat", 
                  "Maroon 5" : "SomeSongByMaroon5",
                   "Beatles" : "Love me do"};

function updatePlaylist (playlist, artist, song)
{
    playlist 
  return Object.assign( {}, playlist, { [artist] : song} )
}

function removeFromPlaylist(playlistObj, artist) {
  delete playlistObj.artist;
  return playlistObj;
}