import { ChangeEvent, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { PLAYLISTS } from "../../data";
import "./PlaylistsPage.css";

export function PlaylistsPage() {
  const [searchParam, setSearchParam] = useSearchParams();   // здесь храним квери параметры 
  const searchName = searchParam.get("searchName") || ""
  const searchGenre = searchParam.get("searchGenre") || ""

  const handleSearchName = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchParam({searchName: event.target.value.toLowerCase(), searchGenre})
  };

  const handleSearchGenre = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchParam({searchGenre: event.target.value.toLowerCase(), searchName})
  };

  const filteredPlaylists = PLAYLISTS.filter(                 // фильтруем массив по стейтам
    ({ name, genre }) =>
      name.toLowerCase().includes(searchName.toLowerCase()) &&
      genre !== "Non Music" &&
      genre.toLowerCase().includes(searchGenre.toLowerCase())
  );

  return (
    <div className="playlistsPage">
      <h2>PlaylistsPage</h2>

      <div className="playlists">
        <label>
          введите название плейлиста{" "}
          <input type="text" value={searchName} onChange={handleSearchName} data-testid="playlist-name-input"/>
        </label>
        <label>
          введите жанр плейлиста{" "}
          <input type="text" value={searchGenre} onChange={handleSearchGenre} data-testid="playlist-genre-input"/>
        </label>

        {filteredPlaylists.map(({ name, id }) => (
          <Link className="playlists__item" to={`/playlists/${id}`} key={id}>
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}
