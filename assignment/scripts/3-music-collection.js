console.log('***** Music Collection *****')
let collection = [];

function addToCollection(songTitle,songArtist,songYearPublished){
  const songInfo = {
    song: songTitle,
    artist: songArtist,
    year: songYearPublished
  }
  collection.push(songInfo);
}

addToCollection("songTitle","songArtist","someYear");
addToCollection("anotherSong","anotherArtist","anotherYear")
console.log(collection[0]);


function showCollection(array){
    for (obj of array){
    title = obj.song;
    artist = obj.artist;
    year  = obj.year;
    console.log(`${title} by ${artist}, published in ${year}`)
  }
}

showCollection(collection);


function findByArtist(artist){
  artistSongs = [];
  for (item of collection){
    if (item.artist==artist){
      artistSongs.push(item);
    }
  }
  console.log(artistSongs);
}

addToCollection("differentSong","songArtist","differentYear");
findByArtist("songArtist");
findByArtist("artistNotInCollection");
