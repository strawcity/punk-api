import { useNavigate } from "react-router-dom";
import { Beer } from "../types/BeerTypes";

interface BeerListCardProps {
  beer: Beer;
}

const BeerListCard = ({ beer }: BeerListCardProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col items-center justify-end flex-1 p-6 bg-slate-100 rounded-xl"
      style={{ minWidth: "185px" }}
      onClick={() => navigate(`/beer/${beer.id}`)}
    >
      <img className="w-16" src={beer.image_url} />
      <div>
        <h5 className="font-bold text-lg text-center my-4">{beer.name}</h5>
        <p className="text-center mb-2">{beer.tagline}</p>
        <p className="text-center">{beer.abv}%</p>
      </div>
    </div>
  );
};

export default BeerListCard;
