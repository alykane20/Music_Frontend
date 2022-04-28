import React, {useState} from "react";
import axios from "axios";


const SearchBar = (props) => {
    const [search, setSearch] = useState('')

    function findSong(event){
        event.preventDefault();
        let response = props.songs.filter((el) => {
            if (el.title.includes(search)) {return true
            }
            else if (el.artist.includes(search)) {return true
            }
            else if (el.album.includes(search)) {return true
            }
            else if (el.release_date.includes(search)) {return true
            }
            else if (el.genre.includes(search)) {return true
            }
        });
        props.setSongs(response)
            }
     
    return (
        <form onSubmit={findSong}>
            <div>
                <input type="text" 
                value={search} 
                onChange={(event) =>setSearch(event.target.value)} />
                <button type="submit">Search</button>
            </div>
        </form>
      );

} 
export default SearchBar;