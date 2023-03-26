const appReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_REQUEST':
      return { ...state, method: action.method, url: action.url, body: action.body };
    case 'UPDATE_DATA':
      const reqResEntry = {
        methdod: state.method,
        url: state.url,
        body: state.body,
        data: action.data,
      };

      return { ...state, data: action.data, history: [...state.history, reqResEntry] };
    case 'UPDATE_ERROR':
      return { ...state, data: action.data };
    default:
      return state;
  }
}

module.exports = { appReducer };