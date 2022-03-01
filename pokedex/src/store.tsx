import { createContext } from "react";
import { BehaviorSubject, map, combineLatestWith } from "rxjs";

export interface Poke {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
  power?: number;
  selected?: boolean;
}

const pokes$ = new BehaviorSubject<Poke[]>([]);

const pokesRanked$ = pokes$.pipe(
  map((poke) =>
    poke.map((p) => ({
      ...p,
      power:
        p.hp +
        p.attack +
        p.defense +
        p.special_attack +
        p.special_defense +
        p.speed
    }))
  )
);

export const selected$ = new BehaviorSubject<number[]>([]);

export const poke$ = pokesRanked$.pipe(
  combineLatestWith(selected$),
  map(([poke, selected]) =>
    poke.map((p) => ({
      ...p,
      selected: selected.includes(p.id)
    }))
  )
);

export const deck$ = poke$.pipe(map((poke) => poke.filter((p) => p.selected)));

fetch("/pokedata.json")
  .then((res) => res.json())
  .then((data) => pokes$.next(data));

const PokeContext = createContext({
  pokes$,
  selected$,
  deck$
});

export const PokesProvider: React.FunctionComponent = ({ children }) => (
  <PokeContext.Provider
    value={{
      pokes$,
      selected$,
      deck$
    }}
  >
    {children}
  </PokeContext.Provider>
);
