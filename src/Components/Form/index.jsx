import { useState } from 'react';
import './Form.scss';

const Form = (props) => {
  const [method, setMethod] = useState('GET');

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method: method,
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    props.handleApiCall(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <select onChange={(e) => {
            setMethod({
              method: e.target.value
            })
          }}>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </label>
      </form>
    </>
  );
}

export default Form;