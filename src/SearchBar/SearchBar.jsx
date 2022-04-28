import React, {useState} from "react";
import './SearchBar.css'


const SearchBar = (props) => {
    const [search, setSearch] = useState('')

    function findSong(event){
        event.preventDefault();
        let response = props.songs.filter((el) => {
            if (el.title.toLowerCase().includes(search.toLowerCase())) {return true
            }
            else if (el.artist.toLowerCase().includes(search.toLowerCase())) {return true
            }
            else if (el.album.toLowerCase().includes(search.toLowerCase())) {return true
            }
            else if (el.release_date.toLowerCase().includes(search.toLowerCase())) {return true
            }
            else if (el.genre.toLowerCase().includes(search.toLowerCase())) {return true
            }
        });
        props.setSongs(response)
            }
     
    return (
        <form onSubmit={findSong} className='search-box'>
            <div>
                <input className='input' placeholder="What are you looking for?" type="text" 
                value={search} 
                onChange={(event) =>setSearch(event.target.value)} />
                <button  type="submit" className="search-button">Search</button>
            </div>
        </form>
      );

} 
export default SearchBar;