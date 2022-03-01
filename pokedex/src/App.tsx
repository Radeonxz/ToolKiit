import { useState, useMemo } from "react";
import { useObservableState } from "observable-hooks";

import { PokesProvider, poke$, selected$, deck$ } from "./store";

import "./App.css";

const Deck = () => {
  const deck = useObservableState(deck$, []);
  return (
    <div>
      <h4>Deck</h4>
      <div>
        {deck.map((p) => (
          <div key={p.id} style={{ display: "flex" }}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
              alt={p.name}
            />
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>{p.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Search = () => {
  const [search, setSearch] = useState("");
  const pokes = useObservableState(poke$, []);

  const filteredPokes = useMemo(() => {
    return pokes.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [pokes, search]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {filteredPokes.map((p) => (
          <div key={p.name}>
            <input
              type="checkbox"
              checked={p.selected}
              onChange={() => {
                if (selected$.value.includes(p.id)) {
                  selected$.next(selected$.value.filter((id) => id !== p.id));
                } else {
                  selected$.next([...selected$.value, p.id]);
                }
              }}
            />
            <strong>{p.name}</strong> - {p.power}
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <PokesProvider>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <Search />
        <Deck />
      </div>
    </PokesProvider>
  );
}

export default App;
