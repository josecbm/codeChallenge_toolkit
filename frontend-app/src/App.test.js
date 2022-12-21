import { render as rtlRender, screen } from '@testing-library/react';
import App from './App';
import axios from 'axios';
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux'
import store from './utils/store';
configure({ adapter: new Adapter() });

const render = component => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>
)
describe('Pruebas code challenge toolbox', () => {
  let wrapper = shallow( <App /> )


  beforeEach( () =>  {
    wrapper = shallow( <App /> )
  })
  test('view <App /> success', () => {
    expect( wrapper ).toMatchSnapshot()
  })
  test('render Toolkit text', () => {
    render(<App />);
    const linkElement = screen.getByText(/Toolkit/i);
    expect(linkElement).toBeInTheDocument();
  });




})
