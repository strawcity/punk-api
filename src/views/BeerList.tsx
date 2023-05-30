import BeerListCard from "../components/BeerListCard";
import { Beer } from "../types/BeerTypes";

interface BeerListProps {
  beers: Beer[];
  isLoading: boolean;
}

const BeerList = ({ beers, isLoading }: BeerListProps) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {!isLoading &&
        beers.map((beer) => <BeerListCard key={beer.id} beer={beer} />)}
    </div>
  );
};

export default BeerList;
