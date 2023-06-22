import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BackToHome from '../components/BackArrow/BackToHome';

test('renders BackToHome component and navigates to home', () => {
  render(<BackToHome />);
  
  // Vérifie que le composant est rendu correctement
  const homeLink = screen.getByText(/Retour/i);
  expect(homeLink).toBeInTheDocument();

  // Effectue un clic sur le lien
  userEvent.click(homeLink);

  // Vérifie que la navigation vers la page d'accueil est effectuée
  expect(window.location.pathname).toBe('/');
});
