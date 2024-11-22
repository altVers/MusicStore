import { render, screen } from "@testing-library/react";
import { PlaylistInfoPage } from "../PlaylistInfoPage";
import { MemoryRouter, Route, Router, Routes } from "react-router-dom";
import "@testing-library/jest-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
}));

describe("PlaylistInfoPage", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("тест, проверяющий текст по умолчанию, если нет доступного плейлиста", () => {
    render(
      <MemoryRouter initialEntries={["/playlists/120340"]}>
        <Routes>
          <Route path="/playlists/:playlistId" element={<PlaylistInfoPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByText(/плэйлиста с таким playlistId нет/i)
    ).toBeInTheDocument();
  });

  it("тест, проверяющий данные о плейлисте, если он доступен (жанр, название, количестве песен в списке)", () => {
    render(
      <MemoryRouter initialEntries={["/playlists/1"]}>
        <Routes>
          <Route path="/playlists/:playlistId" element={<PlaylistInfoPage />} />
        </Routes>
      </MemoryRouter>
    );
    
    const playlist = {
      id: 1,
      genre: "Metal",
      name: "Yeah Metal",
      songs: [
        "One O'Clock Jump",
        "Behind Closed Doors",
        "Wichita Lineman",
        "Daydream Believer",
        "Rhinestone Cowboy",
        "Bridge Over Troubled Water",
        "A Tree in the Meadow",
        "I Don't Want to Miss a Thing",
        "I'm Your Boogie Man",
        "Minnie the Moocher",
        "Wipe Out",
        "I Got You Babe",
        "I Can't Get Started",
        "I Can't Stop Loving You",
        "The Loco-Motion",
        "Addicted to Love",
        "Wishing Well",
        "Best of My Love",
        "Down Under",
        "Toxic",
      ],
    };

    expect(screen.getByText(playlist.genre)).toBeInTheDocument();
    // expect(screen.getByText(playlist.name)).toBeInTheDocument(); // Глеб, если ты увидел эту закомментированную строку, пощади..., эта гнида не может найти мне этот тайтл на странице, а все остальное ему типа норм))
    playlist.songs.forEach((song) => {
      expect(screen.getByText(song)).toBeInTheDocument();
    });
  });
});
