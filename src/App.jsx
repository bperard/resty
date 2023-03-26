import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { appReducer } from './appReducer';

import './App.scss';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import History from './Components/History';

const initialState = {
  history: [],
  data: null,
  method: '',
  url: '',
  body: '',
}

const App = () => {
  const [reqResHistory, dispatch] = useReducer(appReducer, initialState);
  // const [history, setHistory] = useState([]);
  // // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState(null);
  // const [requestParams, setRequestParams] = useState({
  //   method: '',
  //   url: '',
  //   body: ''
  // });

  const updateMethodAndUrl = ({method, url, body}) => {
    const action = {
      type: 'UPDATE_REQUEST',
      method,
      url,
      body
    };

    dispatch(reqResHistory, action);
  }

  useEffect(() => {
    const callApi = async () => {
      let response = '';

      try {
        response = await axios({
          method: reqResHistory.method,
          url: reqResHistory.url,
          body: reqResHistory.method === ('post' || 'put') ? reqResHistory.body : null
        });

      } catch (error) {
        const action = {
          type: 'UPDATE_ERROR',
          data: error.message
        };

        dispatch(reqResHistory, action);
      }

      if (reqResHistory.url && response.data) {
        const action = {
          type: 'UPDATE_DATA',
          data: response.data
        };

        dispatch(reqResHistory, action);
      }
    }

    callApi();
  }, [reqResHistory.method, reqResHistory.url]);

  return (
    <>
      <Header />
      <div>Request Method: {reqResHistory.method}</div>
      <div>URL: {reqResHistory.url}</div>
      {reqResHistory.body && <div>Body: {reqResHistory.body}</div>}
      <Form
        handleUpdateMethodAndUrl={updateMethodAndUrl}
      />
      <Results data={reqResHistory.data} />
      <History historyArray={reqResHistory.history} />
      <Footer />
    </>
  );
}

export default App;