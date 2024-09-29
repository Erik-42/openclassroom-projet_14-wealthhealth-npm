import React from "react";
import PropTypes from "prop-types";
import close from "../assets/close.svg";
import { IMG, ModalContent, ModalDiv } from "../styles/modaleerik42Style";
import UseKeyPress from "../useKeyPress";
import "./modaleerik42.scss";

export default function ModaleErik42({
	showModale = false,
	closeModale = () => {},
	parameter = {},
	message = "employé créé avec succés !",
}) {
	// Utiliser la touche "Escape" pour fermer la modale
	UseKeyPress("Escape", closeModale);

	// Si `showModale` est faux, on ne rend rien
	if (!showModale) return null;

	return (
		<ModalDiv data-testid='modal' style={parameter} onClick={closeModale}>
			<ModalContent onClick={(e) => e.stopPropagation()}>
				<span style={{ color: "darkRed" }}>{message}</span>
				<IMG src={close} alt='close' onClick={closeModale} />
			</ModalContent>
		</ModalDiv>
	);
}

// Validation des types des props
ModaleErik42.propTypes = {
	showModale: PropTypes.bool,
	closeModale: PropTypes.func,
	parameter: PropTypes.object,
	message: PropTypes.string,
};
