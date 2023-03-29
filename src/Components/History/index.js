import { useState } from 'react';

const History = ({ historyArray }) => {
  return (
    <section>
      {historyArray.length > 0 ? historyArray.map(historyArrayEntry => (<>
        <h2>
          Click on an entry to toggle response data
        </h2>
        <Entry entry={historyArrayEntry} />
      </>
      )) : null}
    </section>
  );
}

const Entry = (props) => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <label onClick={() => {
      setIsShowing(!isShowing);
    }}>
      <h3>{props.entry.url}</h3>
      <p>{props.entry.method}</p>
      <p>{props.entry.body}</p>
      {isShowing && <p>
        {props.entry.data}
      </p>}
    </label>
  );
}

export default History;