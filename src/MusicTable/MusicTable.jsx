import React from "react";


const MusicTable = (props) => {

    return (
        <div>
            <h3>Check out our music!</h3>
            <table>
                <tbody>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                    </tr>
                    {props.songs.map((song)=>(
                    <tr key={song.id}>
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{song.album}</td>
                        <td>{song.release_date}</td>
                        <td>{song.genre}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>

      );
}
 
export default MusicTable;