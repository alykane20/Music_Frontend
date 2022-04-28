import React, {useState} from "react";
import axios from "axios";
import './AddSong.css'


const AddSong = (props) => {
    const[title, setTitle] = useState('');
    const[artist, setArtist] = useState('');
    const[album, setAlbum] = useState('');
    const[releaseDate, setReleaseDate] = useState('');
    const[genre, setGenre] = useState('');


    async function createSong(){
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: releaseDate,
            genre: genre,
            likes: 0,
            album_art: "coming soon!"
            };
        let response = await axios.post('http://127.0.0.1:8000/music/', newSong)
        if(response.status === 201){
            await props.getAllSongs();
        }}
    function handleSubmit(event) {
        event.preventDefault();
        createSong();
        
        }

    return (  
        <form className="form" onSubmit={handleSubmit}>
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
                <input type="text" placeholder="YYYY-MM-DD" value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)}/>
            </div>
            <div>
                <label>Genre</label>
                <input type="text"  value={genre} onChange={(event) => setGenre(event.target.value)}/>
            </div>
            <button type='submit'>Add Song</button>
        </form>
    );
}
 
export default AddSong;