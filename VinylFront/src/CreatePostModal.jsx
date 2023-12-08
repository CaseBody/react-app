import { useState } from "react";
import ApiFetch from "./helpers/ApiFetch";

const CreatePostModal = ({ isOpen, setIsOpen }) => {
	const [postName, setPostName] = useState("");
	const [postTitle, setPostTitle] = useState("");
	const [postDescription, setPostDescription] = useState("");

	const submit = () => {
		ApiFetch("posts", {
			method: "POST", // *GET, POST, PUT, DELETE, etc.
			mode: "cors", // no-cors, *cors, same-origin
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title: postTitle,
				posterName: postName,
				description: postDescription,
			}), // body data type must match "Content-Type" header
		}).then(() => window.location.reload(false));
	};

	return isOpen ? (
		<div className="postModal">
			<h1>Create post</h1>
			<p>Username</p>
			<input value={postName} onChange={(v) => setPostName(v.target.value)}></input>
			<p>Title</p>
			<input value={postTitle} onChange={(v) => setPostTitle(v.target.value)}></input>
			<p>Description</p>
			<input value={postDescription} onChange={(v) => setPostDescription(v.target.value)}></input>
			<button onClick={submit}>Post</button>
		</div>
	) : (
		<></>
	);
};

export default CreatePostModal;
