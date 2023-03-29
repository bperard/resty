import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.scss';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

const App = () => {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({
    method: '',
    url: '',
    body: ''
  });

  useEffect(() => {
    const callApi = async () => {
      let response = '';

      try {
        response = await axios({
          method: requestParams.method,
          url: requestParams.url,
          body: requestParams.method === ('post' || 'put') ? requestParams.body : null
        });
      } catch (error) {
        setData({
          error: error.message
        });
      }

      if (requestParams.url && response.data) {
        setData(response.data);
      }
    }

    callApi();
  }, [requestParams.method, requestParams.url]);



  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      {requestParams.body && <div>Body: {requestParams.body}</div>}
      <Form
        requestParams={requestParams}
        setRequestParams={setRequestParams}
      />
      <Results data={data} />
      <Footer />
    </>
  );
}

export default App;