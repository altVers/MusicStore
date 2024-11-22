import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./app.css";
import { MainPage, UserInfoPage, UsersPage } from "./pages";
import { PlaylistsPage } from "./pages/PlaylistsPage/PlaylistsPage";
import { PlaylistInfoPage } from "./pages/PlaylistInfoPage/PlaylistInfoPage";

export function App() {
	return (
		<BrowserRouter>
			<div className="header">_</div>

			<div className="section">
				<nav className="navMenu">
					<Link to={"/"}>Главная</Link>
					<Link to={"/users"}>Пользователи</Link>
					<Link to={"/playlists"}>Плэйлисты</Link>
				</nav>

				<main className="content">
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/users" element={<UsersPage />} />
						<Route path="/users/:userId" element={<UserInfoPage />} />
						<Route path="/playlists/" element={<PlaylistsPage />} />
						<Route path="/playlists/:playlistId" element={<PlaylistInfoPage />} />
					</Routes>
				</main>
			</div>

			<div className="footer">
				<a href="https://github.com/altVers/">https://github.com/altVers/</a>
			</div>
		</BrowserRouter>
	);
}
