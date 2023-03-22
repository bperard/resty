import './Results.scss';

const Results = (props) => {
  return (
    <section>
      <pre data-testid="response-display">{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
    </section>
  );
}

export default Results;