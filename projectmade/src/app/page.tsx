import Nav from './Components/Nav/BarNav';
import dynamic from 'next/dynamic';
import Calendario from './Components/Calendario/Calendario';

const DynamicHome = dynamic(() => import('./Components/Home/Home'), {ssr:false});

export default function Home() {
  return (
    <main>
      <Nav />
      <DynamicHome />
    </main>
  );
}
