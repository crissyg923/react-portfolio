

export default function PortfolioPage(props) {
    return (
        <div className="container portfolio">
            <div className="row portfolioitems">
          {props.data.map((data) => (
         <>
        <div className="card singleitem" style={{width: '18rem'}}>
            <img className="card-img-top" src={data.image} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">{data.description}</p>
    <a href={data.link}><button className="resumebutton innerbutton">Go somewhere</button></a>
  </div>
</div>
</>
))}
</div>
        </div>
    );
}