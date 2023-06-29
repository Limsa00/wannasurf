import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { TrajectCard } from '../components/TrajectCard/TrajectCard';

// image en mock
jest.mock('../images/passenger.png', () => '../mocks/passenger.png');
jest.mock('../images/driver.png', () => '../mocks/driver.png');
jest.mock('../images/img_mon_espace.jpg', () => '../mocks/img_mon_espace.jpg');

// Mock the dateformat library
jest.mock('dateformat', () => ({
  default: (date) => date.toString(), // Mock the dateformat function to return the input date as a string
}));

// Mock the axios library
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })), // Mock the axios get method
}));

describe('TrajectCard', () => {
  const mockProps = {
    journey_id: 1,
    date: '2023-06-23',
    driver_id: 123,
    driver_firstname: 'John',
    driver_lastname: 'Doe',
    city: 'Departure City',
    address: 'Departure Address',
    surfspot: 'Destination Surfspot',
    start_city: 'Start City',
    passenger_id: 456,
    time: '12:00 PM',
    price: 10,
    places_offered: 3,
    places_booked: 2,
    places_remaining: 1,
  };

  test('affiche les détails du trajet', () => {
    render(
      <Router>
        <TrajectCard {...mockProps} />
      </Router>
    );

    const dateElement = screen.getByText('23 - 06 - 2023');
    const driverElement = screen.getByText('John Doe');
    const departureElement = screen.getByText('Departure City Start City');
    const destinationElement = screen.getByText('Destination Surfspot');
    const timeElement = screen.getByText('heure de depart: 12:00 PM');
    const priceElement = screen.getByText('Prix: 10 €');

    expect(dateElement).toBeInTheDocument();
    expect(driverElement).toBeInTheDocument();
    expect(departureElement).toBeInTheDocument();
    expect(destinationElement).toBeInTheDocument();
    expect(timeElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
  });
});
