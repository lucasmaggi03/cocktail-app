import DrinkCard from "../components/DrinkCard";
import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";

export default function FavoritesPage() {
  const favorites = useAppStore((state) => state.favorites);
  const hasFavorties = useMemo(()=> favorites.length, [favorites])

  return (
    <>
      <h1 className="text-6xl font-extrabold">Favoritos</h1>

      {hasFavorties ? (<div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
        {favorites.map(drink => (
          <DrinkCard
          key={drink.idDrink}
          drink={drink}
          />
        ))}
      </div>) : <p className="text-center my-10 text-2xl">Los favoritos se mostrarán aquí</p>}
    </>
  );
}
