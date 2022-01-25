import React from "react";

export default function Homepage(props) {
  const Head = (props) => {
    return (
      <div className="col-3 my-3">
          <div className="card" style={{ width: "18rem" }}>
        <img src={props.head.urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h6 className="card-title">{props.head.title}</h6>
          {/* <p className="card-text">{props.head.description}</p> */}
          <a href={props.head.url} className="btn btn-outline-success">
            More
          </a>
        </div>
      </div>
      </div>
    );
  };

  const headLines = props.news?.map((head, i) => {
    return <Head head={head} key={i} />;
  });

  return (
    <>
      <div>
        <div className="container flex-fill my-4 flex-wrap d-flex justify-content-center">{headLines}</div>
      </div>
    </>
  );
}

