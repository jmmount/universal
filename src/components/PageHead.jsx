const PageHead = ({title, body}) => {
    return (
        <div className="container">
            <div className="col-12 p-2">
            <h1>{title}</h1>
            <p>{body}</p>
            </div>
        </div>
    );
}

export default PageHead;