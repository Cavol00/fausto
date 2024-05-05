"use client";
import { useEffect, useState } from "react";
import Mappa from "./Mappa";

export default function FiltroMappa({ data }: any) {
  const [filteredData, setFilteredData] = useState(data);

  const [consumazione, setConsumazione] = useState(false);
  const [convitto, setConvitto] = useState(false);
  const [transporto, setTransporto] = useState(false);

  const handleConsumazione = () => {
    setConsumazione(!consumazione);
    console.log(consumazione);
  };
  const handleConvitto = () => {
    setConvitto(!convitto);
    console.log(convitto);
  };
  const handleTransporto = () => {
    setTransporto(!transporto);
    +console.log(transporto);
  };

  useEffect(() => {
    let filteredData = data.filter((school: any) => {
      if (
        school.attributes.istituteType == "Liceo" ||
        school.attributes.istituteType == "Tecnico" ||
        school.attributes.istituteType == "Professionale"
      ) {
        return true;
      }
      if (school.attributes.istituteType == "Convitto" && convitto) {
        return true;
      }
      if (school.attributes.istituteType == "Mensa" && consumazione) {
        return true;
      }
      if (school.attributes.istituteType == "Trasporti" && transporto) {
        return true;
      }
      return false;
    });
    setFilteredData(filteredData);
  }, [consumazione, convitto, transporto]);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "20% 80%" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <img src="/PalleNelCulo.svg" alt="" />
          <input type="checkbox" onChange={handleConsumazione} />
          <label>consumazione</label>
        </div>
        <div>
          <img src="/Letto.svg" alt="" />
          <input type="checkbox" onChange={handleConvitto} />
          <label>convitto</label>
        </div>
        <div>
          <img src="/Treni.svg" alt="" />
          <input type="checkbox" onChange={handleTransporto} />
          <label>transporto</label>
        </div>
      </div>
      <div>
        <Mappa data={filteredData} />
      </div>
    </div>
  );
}
