import { Link } from "react-router-dom";

const Newscard = ({ aNews }) => {
  const { title, image_url, details, _id } = aNews;
  return (
    <div className="card  bg-base-100 shadow-xl mb-16 border-b-2">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        {
            details.length > 150 ?
            <p>{details.slice(0,150)} <Link to={`/news/${_id}`} className="text-green-400 font-bold" >Read More ....</Link> </p>
            : <p>{details}</p>
        }
        
      </div>
    </div>
  );
};

export default Newscard;
