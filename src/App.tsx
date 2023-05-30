import { useEffect, useState } from "react";
import "./App.css";
import { Beer } from "./types/BeerTypes";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import BeerList from "./views/BeerList";
import BeerView from "./views/BeerView";
import SearchBar from "./components/SearchBar";
import Paginator from "./components/Paginator";

function App() {
  const [data, setData] = useState<Beer[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchTerm) {
      setLoading(true);
      fetch(`https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=20
`)
        .then((res) => res.json())
        .then(
          (result) => {
            setLoading(false);
            setData(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setLoading(true);
            setError(error);
          }
        );
    }
  }, [pageNumber, searchTerm]);

  useEffect(() => {
    if (searchTerm.length > 3) {
      setLoading(true);
      fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}
`)
        .then((res) => res.json())
        .then(
          (result) => {
            setLoading(false);
            setData(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setLoading(true);
            setError(error);
          }
        );
    }
  }, [searchTerm]);

  return (
    <BrowserRouter>
      <div className="flex-col w-screen justify-center p-5">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
                <BeerList key={pageNumber} beers={data} isLoading={loading} />
                {!searchTerm && (
                  <Paginator
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                  />
                )}
              </>
            }
          ></Route>
          <Route path="/beer/:beerId" element={<BeerView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
