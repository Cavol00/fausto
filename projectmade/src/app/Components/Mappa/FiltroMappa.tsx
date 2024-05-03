"use client";
import { useEffect, useState } from "react";
import Mappa from "./Mappa";
import { gridLayer } from "leaflet";

export default function FiltroMappa({ data }: any) {
  const [filteredData, setFilteredData] = useState(data);

  const [consumazione, setConsumazione] = useState(true);
  const [convitto, setConvitto] = useState(true);
  const [transporto, setTransporto] = useState(true);

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

  // useEffect(() => {
  //   let filteredData = data.filter((school: any) => {
  //     if (consumazione && school.attributes.consumazione) {
  //       return true;
  //     }
  //     if (convitto && school.attributes.convitto) {
  //       return true;
  //     }
  //     if (transporto && school.attributes.transporto) {
  //       return true;
  //     }
  //     return false;
  //   });
  //   setFilteredData(filteredData);
  // }, [consumazione, convitto, transporto]);
 
  return (
    <div style={{ display: "grid", gridTemplateColumns: "20% 80%" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <input type="checkbox" onChange={handleConsumazione} />
          <label>consumazione</label>
        </div>
        <div>
          <input type="checkbox" onChange={handleConvitto} />
          <label>convitto</label>
        </div>
        <div>
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
