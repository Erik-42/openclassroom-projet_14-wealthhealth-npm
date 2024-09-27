import React from "react";
import PropTypes from "prop-types"; // Ajout de PropTypes pour la validation des props
import close from "../assets/close.svg";
import { IMG, ModalContent, ModalDiv } from "../styles/modaleerik42Style";
import UseKeyPress from "../useKeyPress";
import "./modaleerik42.scss";

export default function ModaleErik42({
	showModale,
	closeModale,
	parameter,
	message,
}) {
	// Utiliser la touche "Escape" pour fermer la modale
	UseKeyPress("Escape", closeModale);

	// Si `showModale` est faux, on ne rend rien
	if (!showModale) return null;

	return (
		<ModalDiv data-testid='modal' style={parameter} onClick={closeModale}>
			<ModalContent onClick={(e) => e.stopPropagation()}>
				{" "}
				{/* Empêche la fermeture en cliquant à l'intérieur */}
				<span style={{ color: "darkRed" }}>
					{message} Employé créé avec succès !
				</span>
				<IMG src={close} alt='close' onClick={closeModale} />
			</ModalContent>
		</ModalDiv>
	);
}

// Validation des types des props
ModaleErik42.propTypes = {
	showModale: PropTypes.bool.isRequired,
	closeModale: PropTypes.func.isRequired,
	parameter: PropTypes.object,
	message: PropTypes.string.isRequired,
};

// Valeurs par défaut pour les props
ModaleErik42.defaultProps = {
	parameter: {},
};
