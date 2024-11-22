import { render, screen } from "@testing-library/react";
import { UserInfoPage } from "../UserInfoPage";
import { MemoryRouter, Route, Router, Routes } from "react-router-dom";
import "@testing-library/jest-dom";
import { PLAYLISTS } from "../../../data";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
}));

describe("UserInfoPage", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("тест, проверяющий текст по умолчанию, если нет пользователя", () => {
    render(
      <MemoryRouter initialEntries={["/users/13445123"]}>
        <Routes>
          <Route path="/users/:userId" element={<UserInfoPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByText(/пользователя таким userId нет/i)
    ).toBeInTheDocument();
  });

  it("тест, проверяющий данные о пользователе, если он существует (email, имя, ссылка на плейлист)", () => {
    render(
      <MemoryRouter initialEntries={["/users/1"]}>
        <Routes>
          <Route path="/users/:userId" element={<UserInfoPage />} />
        </Routes>
      </MemoryRouter>
    );
    
    const user = {
		id: 1,
		email: "Kirsten26@yahoo.com",
		fullName: "Cecelia Senger",
		jobTitle: "Lead Factors Planner",
		avatar:
			"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/494.jpg",
		bio: "Maxime ratione repellendus voluptas esse ut dolores sapiente consequuntur exercitationem. Officiis quo autem qui laborum adipisci. Nulla odio inventore dolores accusantium culpa occaecati aperiam dolor. Reiciendis omnis unde dolores. Magnam molestiae consectetur officia unde cumque maxime. Soluta expedita expedita corporis saepe asperiores non consequatur.",
		playlist: PLAYLISTS[1],
	};

    expect(screen.getByText(user.email)).toBeInTheDocument();
    expect(screen.getByText(user.fullName)).toBeInTheDocument();
    expect(screen.getByText("Yeah Metal")).toBeInTheDocument();
  });
});
