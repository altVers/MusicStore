import { Link, useParams } from "react-router-dom";
import { PLAYLISTS } from "../../data";

export function PlaylistInfoPage() {
  const { playlistId } = useParams();
  const playlist = PLAYLISTS[Number(playlistId)];

  if (!playlist) {
    return (
      <div className="playlist">
        <h2>PlaylistInfoPage</h2>

        <div className="playlist__error">
          <p>плэйлиста с таким playlistId нет</p>
        </div>
      </div>
    );
  }

  return (
    <div className="playlist">
      <h2>PlaylistInfoPage</h2>

      <div className="playlist__info">
        <p>
          Жанр:{" "}
          <Link to={`/playlists/?searchPlaylistGenre=${playlist.genre}`}>
            {playlist.genre}
          </Link>
        </p>
        <p>Навзание: {playlist.name}</p>
        <hr />
        <ul>
          {playlist.songs.map((song, index) => {
            return <li key={index}>{song}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
