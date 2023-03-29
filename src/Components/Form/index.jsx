import { useState } from 'react';

import './Form.scss';

const Form = ({ requestParams, setRequestParams }) => {
  const [method, setMethod] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    setRequestParams({
      ...requestParams,
      method,
      url: e.target.url.value
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span data-testid="input-label" >URL: </span>
          <input
            name='url'
            type='text'
          />
          <button data-testid="button" type="submit">GO!</button>
        </label>
        <label
          className="methods"
          onClick={(e) => {
            setMethod(e.target.id);
          }}
        >
          <span id="GET" className={method === 'GET' ? 'chosenMethod' : null}>GET</span>
          <span id="POST" className={method === 'POST' ? 'chosenMethod' : null}>POST</span>
          <span id="PUT" className={method === 'PUT' ? 'chosenMethod' : null}>PUT</span>
          <span id="DELETE" className={method === 'DELETE' ? 'chosenMethod' : null}>DELETE</span>
        </label>
        <label>
          <textarea
            name="body"
            placeholder="Enter Request Body"
            value={requestParams.body}
            onChange={(e) => {
              setRequestParams({
                ...requestParams,
                body: e.target.value
              })
            }}
          >
          </textarea>
        </label>
      </form>
    </>
  );
}

export default Form;