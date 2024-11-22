import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter, MemoryRouter, Route, Routes, useSearchParams } from "react-router-dom";
import { UsersPage } from "../UsersPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useSearchParams: jest.fn(),
}));

describe("UsersPage", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("тест, проверяющий вызов метода setSearchParam из react-router-dom при вводе имени пользователя", async () => {
    const setSearchParams: () => void = jest.fn();
    (useSearchParams as jest.Mock).mockReturnValue([
      new URLSearchParams(),
      setSearchParams,
    ]);

    render(
        <UsersPage />, {wrapper: BrowserRouter}
    );

    await fireEvent.input(screen.getByTestId("user-input"), {
      target: { value: "Gojo" },
    });
    expect(setSearchParams).toHaveBeenCalledWith({ searchName: "gojo" });
  });
});
