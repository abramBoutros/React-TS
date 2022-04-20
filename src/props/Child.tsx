interface ChildProps {
	color: string;
	onClick: () => void;
}

// 1st approach not the best as it does not tell ts that this is a react component
export const Child = ({ color, onClick }: ChildProps) => {
	return (
		<div>
			{color}

			<button onClick={onClick}>Click me</button>
		</div>
	);
};

// 2nd approach better than the 1st as it tells ts that this is a react Function component
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
	return (
		<div>
			{color}
			<button onClick={onClick}>Click me</button>
		</div>
	);
};
