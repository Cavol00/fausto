"use client";
import { useEffect, useState } from "react";
import Mappa from "./Mappa";
import "./map.css";

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
    <div style={{ display: "grid", gridTemplateColumns: "20% 77%" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "25% 75%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="/cappellaNero.svg" alt="" />
          <label style={{ fontSize: "25px" }}>Scuole</label>

        <img src="/Letto.svg" alt="" style={{}} />
        <div className="center">
          <input
            type="checkbox"
            onChange={handleConsumazione}
            checked={consumazione}
          />
          <label style={{ fontSize: "25px" }}>Mensa</label>
        </div>
        <img src="/Letto.svg" alt="" style={{}} />
        <div className="center">
          <input type="checkbox" onChange={handleConvitto} checked={convitto} />
          <label style={{ fontSize: "25px" }}>convitto</label>
        </div>

        <img src="/Treni.svg" alt="" />
        <div className="center">
          <input
            type="checkbox"
            onChange={handleTransporto}
            checked={transporto}
          />
          <label style={{ fontSize: "25px" }}>transporto</label>
        </div>
      </div>
      <div>
        <Mappa data={filteredData} />
      </div>
    </div>
  );
}
