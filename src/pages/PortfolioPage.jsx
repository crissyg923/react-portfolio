

export default function PortfolioPage(props) {
    return (
        <div>
            <ul>
                {props.data.map((data) => (
                    <>
                   <li key=
                   {data.id}>{data.title} </li> 
                   <img src={data.image} width="300" height="200"/>
                   </>
                ))}
            </ul>
        </div>
    );
}