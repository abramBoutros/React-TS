import { useState } from "react";

const users = [
	{ name: "Abram", age: 25 },
	{ name: "Alex", age: 24 },
	{ name: "Mike", age: 26 },
];

const UserSearch: React.FC = () => {
	const [name, setName] = useState("");
	const [user, setUser] = useState<{ name: string; age: number } | undefined>();

	const findUser = () => {
		const foundUser = users.find((user) => user.name === name);
		setUser(foundUser);
	};

	return (
		<div>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={findUser}>Find User</button>
			<div>
				{user && user.name}
				<br />
				{user && user.age}
			</div>
		</div>
	);
};

export default UserSearch;
