import './Form.scss';

const Form = ({ requestParams, setRequestParams, handleApiCall }) => {

  const handleSubmit = e => {
    e.preventDefault();

    handleApiCall(requestParams);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span data-testid="input-label" >URL: </span>
          <input
            name='url'
            type='text'
            value={requestParams.url}
            onChange={(e) => {
              setRequestParams({
                ...requestParams,
                url: e.target.value
              })
            }}
          />
          <button data-testid="button" type="submit">GO!</button>
        </label>
        <label
          className="methods"
          onClick={(e) => {
            setRequestParams({
              ...requestParams,
              method: e.target.id
            });
          }}
        >
          <span id="GET" className={requestParams.method === 'GET' ? 'chosenMethod' : null}>GET</span>
          <span id="POST" className={requestParams.method === 'POST' ? 'chosenMethod' : null}>POST</span>
          <span id="PUT" className={requestParams.method === 'PUT' ? 'chosenMethod' : null}>PUT</span>
          <span id="DELETE" className={requestParams.method === 'DELETE' ? 'chosenMethod' : null}>DELETE</span>
        </label>
      </form>
    </>
  );
}

export default Form;