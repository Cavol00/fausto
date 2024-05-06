import Nav from "./Components/Nav/BarNav";
import Hom from "./Components/Home/Home";
import Calendario from "./Components/Calendario/Calendario";
import Mappa from "./Components/Mappa/Mappa";
import { fetchAPI, fetchAPICalendar } from "./action";
import FiltroMappa from "./Components/Mappa/FiltroMappa";
export default async function Home() {
  const data = await fetchAPI();
  const calendarData = await fetchAPICalendar();
  return (

    <main>
      <Nav />
      <Hom  />
    </main>
  );
}
