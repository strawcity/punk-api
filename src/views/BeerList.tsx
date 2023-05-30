import BeerListCard from "../components/BeerListCard";
import { Beer } from "../types/BeerTypes";

interface BeerListProps {
  beers: Beer[];
  isLoading: boolean;
}

const BeerList = ({ beers, isLoading }: BeerListProps) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  gap-4 max-w-3xl m-auto">
        {!isLoading &&
          beers.map((beer) => <BeerListCard key={beer.id} beer={beer} />)}
      </div>
    </div>
  );
};

export default BeerList;
