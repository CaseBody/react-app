import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ApiFetch from "./helpers/ApiFetch";
import CreatePostModal from "./CreatePostModal";

function App() {
	const [posts, setPosts] = useState([]);
	const [createModalOpen, setCreateModalOpen] = useState(false);

	useEffect(() => {
		ApiFetch("posts")
			.then((r) => r.json())
			.then((d) => setPosts(d));
	}, []);

	return (
		<>
			<div className="header">
				<h1>Vinyl Forum</h1>
			</div>
			<div className="buttonContainer">
				<button onClick={() => setCreateModalOpen((v) => !v)}>Create post</button>
			</div>
			<div className="postContainer">
				{posts.map((p) => (
					<div className="post">
						<h3>{p.title}</h3>
						<p>{p.description}</p>
					</div>
				))}
			</div>
			<CreatePostModal isOpen={createModalOpen} />
		</>
	);
}

export default App;
