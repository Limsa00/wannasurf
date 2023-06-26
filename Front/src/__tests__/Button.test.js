import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/UI/Button';

describe('Button', () => {
    test('affiche le bouton avec le texte fourni', () => {
        const buttonText = 'Cliquez ici';
        render(<Button>{buttonText}</Button>);
    
        const buttonElement = screen.getByText(buttonText);
    
        expect(buttonElement).toBeInTheDocument();
    });

    test('appelle la fonction de rappel lors du clic', () => {
        const onClickMock = jest.fn();
        render(<Button onClick={onClickMock}>Cliquez ici</Button>);
    
        const buttonElement = screen.getByText('Cliquez ici');
    
        fireEvent.click(buttonElement);
    
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});
