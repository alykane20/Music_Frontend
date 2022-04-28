import React from "react";
import './MusicTable.css'



const MusicTable = (props) => {

    return (
        <div>
            <h3>Check out our music!</h3>
            <table className="table">
                <tbody>
                    <tr className="table-header">
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                    </tr>
                    {props.songs.map((song)=>(
                    <tr className="row" key={song.id}>
                        <td className="row">{song.title}</td>
                        <td className="row">{song.artist}</td>
                        <td className="row">{song.album}</td>
                        <td className="row">{song.release_date}</td>
                        <td className="row">{song.genre}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>

      );
}
 
export default MusicTable;