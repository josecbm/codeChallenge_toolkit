import { render, screen } from '@testing-library/react';
import App from './App';
import axios from 'axios';


describe('Pruebas code challenge toolbox', () => {
  test('render Toolkit text', () => {
    render(<App />);
    const linkElement = screen.getByText(/Toolkit/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('should reply data', () => { 
    const setUserMock = jest.fn();
   })


})
