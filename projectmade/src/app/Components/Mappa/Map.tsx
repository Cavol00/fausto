import dynamic from 'next/dynamic'
import { useMemo } from 'react'

export default function MyPage() {
    const Map = useMemo(() => dynamic(
      () => import('@/app/Components/Mappa/Mappa'),
      { 
        loading: () => <p>A map is loading</p>,
        ssr: false
      }
    ), [])
  
    return <div>
      <Map />
    </div>
  }