import Image from "next/image";
import Header from "../components/pokemon/Header";
import PokeData from "../components/pokemon/PokeData";

export default function Home() {
  return (
    <>
      <Header />
      <PokeData />
    </>
  );
}
