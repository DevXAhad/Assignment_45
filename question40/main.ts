// Question 40: Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artistName: string, albumTitle: string, numOfTracks?: number){
    const musicAlbum: {artistName: string, albumTitle: string, numOfTracks?:number} = {
        artistName: artistName,
        albumTitle: albumTitle,
    }
    if (numOfTracks != undefined){
        musicAlbum.numOfTracks = numOfTracks;
    }
    return musicAlbum;
}

const album1 = make_album('Atif Aslam', 'Baarishein');
console.log(album1);
const album2 = make_album('DJ Snake', 'Magenta');
console.log(album2);
const album3 = make_album('Akon', 'Right Now', 3);
console.log(album3);