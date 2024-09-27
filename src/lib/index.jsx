import React, { useState } from "react";
import ModaleErik42 from "./components/modaleErik42/modaleerik42";

export default function ModaleErik({ greetee }) {
	const [isShow, setIsShow] = useState(false);

	// Correction du nom de la fonction "toogleModal" en "toggleModal"
	const toggleModal = () => setIsShow(!isShow);

	return (
		<div>
			<div>Modale React, {greetee}</div>
			<ModaleErik42 showModale={isShow} closeModale={toggleModal} />
			<button onClick={toggleModal}>Afficher</button>
		</div>
	);
}
