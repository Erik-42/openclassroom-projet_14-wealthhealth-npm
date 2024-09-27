import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import ModaleErik42i from "./index";
import ModaleErik42 from "./components/modaleErik42/modaleerik42";

// Fonction de setup pour éviter la répétition du rendu
const setup = (props) => render(<ModaleErik42 {...props} />);

describe("ModaleReact", () => {
	afterEach(() => {
		cleanup();
	});

	// Test du rendu sans props
	test("Le composant ModaleReact se rend correctement sans props", () => {
		setup({ showModale: true });
		const modaleElement = screen.getByTestId("modal");
		expect(modaleElement).toBeTruthy();
	});

	// Test de la prop greetee
	test("La prop greetee fonctionne correctement", () => {
		render(<ModaleErik42i greetee='Erik-42' />);
		const greeteeText = screen.getByText(/Erik-42/i);
		expect(greeteeText).toBeTruthy();
	});

	// Test avec les paramètres de la modale
	test("ModaleReact fonctionne avec les paramètres de la modale", () => {
		setup({
			id: "testModale",
			showModale: true,
			closeModale: () => {},
			parameter: { backgroundColor: "red" },
			message: "Message de test",
		});
		const modaleElement = screen.getByTestId("modal");
		const messageElement = screen.getByText(/Message de test/i);
		expect(modaleElement).toBeTruthy();
		expect(messageElement).toBeTruthy();
	});

	// Test supplémentaire pour les interactions ou comportements
	test("Ouverture de la modal et affichage du message", () => {
		setup({
			id: "testModale",
			showModale: true,
			closeModale: () => {},
			parameter: { backgroundColor: "red" },
			message: "Message de test",
		});
		const modaleElement = screen.getByTestId("modal");
		const messageElement = screen.getByText(/Message de test/i);
		expect(modaleElement).toBeTruthy();
		expect(messageElement).toBeTruthy();
	});
});
