import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Beer } from "../types/BeerTypes";

const BeerView = () => {
  const { beerId } = useParams();
  const [beerData, setBeerData] = useState<Beer>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.punkapi.com/v2/beers?ids=${beerId}
  `)
      .then((res) => res.json())
      .then(
        (result) => {
          setLoading(false);
          setBeerData(result[0]);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setLoading(true);
          setError(error);
        }
      );
  }, []);

  return !loading && beerData ? (
    <div className="flex w-screen justify-center p-5">
      <div className="flex flex-col sm:flex-row gap-8">
        <img className="md:h-96 h-auto" src={beerData.image_url} />
        <div style={{ maxWidth: "350px" }}>
          <div className="flex justify-between align-bottom">
            <h1>{beerData.name}</h1>
            <p>{beerData.abv}%</p>
          </div>
          <p className="mb-3 italic">{beerData.tagline}</p>

          <p className="mb-6">{beerData.description}</p>

          {beerData.food_pairing.length > 0 && (
            <p>
              Goes great with:
              {beerData.food_pairing.map((food) => (
                <div>• {food}</div>
              ))}
            </p>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default BeerView;
