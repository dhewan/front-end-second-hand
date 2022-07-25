import { Button } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";

function floatingButton() {
	return (
		<Button href="/produck/add" className="ms-auto pe-4 radius-secondary floating-button bg-color-primary border-0">
			<FiPlus className="mx-2 mb-1" />
			Jual
		</Button>
	);
}

export default floatingButton;