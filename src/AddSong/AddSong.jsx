import React, {useState} from "react";
import axios from "axios";


const AddSong = (props) => {
    const[title, setTitle] = useState('');
    const[artist, setArtist] = useState('');
    const[album, setAlbum] = useState('');
    const[releaseDate, setReleaseDate] = useState('');
    const[genre, setGenre] = useState('');


    async function createSong(newsong){
        let response = await axios.post('http://127.0.0.1:8000/music/', newSong)
        if(response.status === 201){
            await getAllSongs();
        }}
    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            "title": "Weight of the World",
            "artist": "Red Weather",
            "album": "Empty Places",
            "release_date": "2020-06-20",
            "genre": "Alternative",
            };
            props.createSong(newSong)
        }
    
    return (  
        <form onSubmit={handleSubmit}>
            <h4>Add a song to the mix!</h4>
            <div>
                <label>Title</label>
                <input type="text"  value={title} onChange={(event) => setTitle(event.target.value)}/>
            </div>
            <div>
                <label>Artist</label>
                <input type="text"  value={artist} onChange={(event) => setArtist(event.target.value)}/>
            </div>
            <div>
                <label>Album</label>
                <input type="text"  value={album} onChange={(event) => setAlbum(event.target.value)}/>
            </div>
            <div>
                <label>Release Date</label>
                <input type="text"  value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)}/>
            </div>
            <div>
                <label>Genre</label>
                <input type="text"  value={genre} onChange={(event) => setGenre(event.target.value)}/>
            </div>
            <button type='submit' >Add Song</button>


        </form>
    );
}
 
export default AddSong;