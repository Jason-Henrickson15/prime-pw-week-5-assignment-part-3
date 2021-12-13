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
console.log(collection[0]);


function showCollection(arrayItem){
  object = collection[arrayItem];
  console.log(object)
  title = object.song;
  artist = object.artist;
  year  = object.year;
  console.log(`${title} by ${artist}, published in ${year}`)
}

showCollection(0)
