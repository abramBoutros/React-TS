const EventComponent: React.FC = () => {
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event);
	};
	const onDragStart = (event: React.DragEvent<HTMLInputElement>) => {
		// console.log("HELP!!! I am being Dragged");
		console.log(event);
	};
	return (
		<div>
			<input type="text" onChange={onChange} />
			<div draggable onDragStart={onDragStart}>
				Drag me
			</div>
		</div>
	);
};

export default EventComponent;
