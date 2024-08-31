const QuoteCard = ({ quoteText, author, source }) => {
  return (
    <div className="card" style={{ textAlign: 'left'}}>
      <div className="card-header">Quote</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{quoteText}</p>
          <footer className="blockquote-footer">
            {author} <cite title="Source Title">{source}</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default QuoteCard;
