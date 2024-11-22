import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter, useSearchParams } from "react-router-dom";
import { PlaylistsPage } from "../PlaylistsPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useSearchParams: jest.fn(),
}));

describe("UsersPage", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("тест, проверяющий вызов метода setSearchParam из react-router-dom при вводе жанра и названия", () => {
    const setSearchParams: () => void = jest.fn();
    (useSearchParams as jest.Mock).mockReturnValue([
      new URLSearchParams(),
      setSearchParams,
    ]);

    render(<PlaylistsPage />, { wrapper: BrowserRouter });

    fireEvent.input(screen.getByTestId("playlist-name-input"), {
      target: { value: "easy" },
    });

    expect(setSearchParams).toHaveBeenCalledWith({
      searchGenre: "",
      searchName: "easy",
    });

    fireEvent.input(screen.getByTestId("playlist-genre-input"), {
      target: { value: "rock" },
    });

    expect(setSearchParams).toHaveBeenCalledWith({
      searchGenre: "rock",
      searchName: "",
    });
  });

//   it("тест, проверяющий вызов метода setSearchParam из react-router-dom при вводе жанра и названия одновременно", () => {
//     const setSearchParams: () => void = jest.fn();
//     (useSearchParams as jest.Mock).mockReturnValue([
//       new URLSearchParams(),
//       setSearchParams,
//     ]);

//     render(<PlaylistsPage />, { wrapper: BrowserRouter });

//     fireEvent.input(screen.getByTestId("playlist-name-input"), {
//       target: { value: "easy" },
//     });

//     fireEvent.input(screen.getByTestId("playlist-genre-input"), {
//       target: { value: "rock" },
//     });

//     expect(setSearchParams).toHaveBeenCalledWith({
//       searchGenre: "rock",
//       searchName: "easy",
//     });
//   });
});
