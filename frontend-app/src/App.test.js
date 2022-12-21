import { render, screen } from '@testing-library/react';
import App from './App';
import axios from 'axios';
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';
configure({ adapter: new Adapter() });

describe('Pruebas code challenge toolbox', () => {
  const initialState = {
    dataToolkit: {
      items: [{
        "file": "test2.csv",
        "lines": [
          {
            "text": "grKWS",
            "number": "",
            "hex": ""
          },
          {
            "text": "YQimNFrP",
            "number": "1254632548",
            "hex": "7496d22f9b2b65cd02b136fa1948b608"
          }
        ]
      }
      ]
    }
  };
  const mockStore = configureStore();
  let store;
  // let wrapper = shallow(
  //   <Provider store={store}>
  //     <App />
  //   </Provider>
  // )


  // beforeEach(() => {
  //   wrapper = shallow(
  //     <Provider store={store}>
  //       <App />
  //     </Provider>
  //   )
  // })
  // test('view <App /> success', () => {
  //   expect(wrapper).toMatchSnapshot()
  // })
  test('render Toolkit text', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const linkElement = screen.getByText(/Toolkit Challenge/i);
    expect(linkElement).toBeInTheDocument();
  });




})
