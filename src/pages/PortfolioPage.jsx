

export default function PortfolioPage(props) {
    return (
        <div className="container portfolio">
            <div className="row">
          {props.data.map((data) => (
         <>
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={data.image} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</>
))}
</div>
        </div>
    );
}