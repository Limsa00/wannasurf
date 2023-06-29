import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BackToHome from '../components/BackArrow/BackToHome';

describe('BackToHome', () => {
  test('affiche le lien vers la page d\'accueil', () => {
    render(
      <Router>
        <BackToHome />
      </Router>
    );
    
    const linkElement = screen.getByRole('link', { name: /retour à l'accueil/i });
    
    expect(linkElement).toBeTruthy();
    expect(linkElement.getAttribute('href')).toBe('/');
  });
});