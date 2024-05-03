"use client";
import { useEffect, useState } from "react";
import Mappa from "./Mappa";

export default function FiltroMappa({ data }: any) {
  const [filteredData, setFilteredData] = useState(data);
 

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const handleCheckboxChange1 = (event:any) => {
    setIsChecked1(event.target.checked);
  };
  const handleCheckboxChange2 = (event:any) => {
    setIsChecked2(event.target.checked);
  };
  const handleCheckboxChange3 = (event:any) => {
    setIsChecked3(event.target.checked);
  };
  return (
 <div>
      {/* Checkbox 1 */}
      <input
        type="checkbox"
        checked={isChecked1}
        onChange={handleCheckboxChange1}
      />
      <label>Checkbox 1</label>
      <br />

      {/* Checkbox 2 */}
      <input
        type="checkbox"
        checked={isChecked2}
        onChange={handleCheckboxChange2}
      />
      <label>Checkbox 2</label>
      <br />

      {/* Checkbox 3 */}
      <input
        type="checkbox"
        checked={isChecked3}
        onChange={handleCheckboxChange3}
      />
      <label>Checkbox 3</label>
      <Mappa data={filteredData} />
    </div>
  );
}
