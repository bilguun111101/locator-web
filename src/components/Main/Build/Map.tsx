import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useRef, useState } from 'react';
import useGetUsers from "../../../firebase/getUsers";
import { Marker, Map as MapContainer } from 'maplibre-gl';

export const Map = () => {
    const { active } = useGetUsers();
    const mapContainer = useRef<any>(null);
    const map = useRef<any>(null);
    const [lng] = useState(106.917709);
    const [lat] = useState(47.918765);
    const [zoom] = useState<number>(14);
    const [API_KEY] = useState<string>('bvBPNvWwqOMlgE9YWumL');
    useEffect(() => {
        if(map.current) return;
        map.current = new MapContainer({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
            center: [lng, lat],
            zoom
        })
    }, [])
    useEffect(() => {
      if(active === undefined) return;
      active?.forEach((el) => {
        new Marker().setLngLat([el.position?.longitude, el.position?.latitude]).addTo(map.current);
      })
    }, [active])
  return (
    <div className='w-full h-full relative'>
        <div ref={mapContainer} className="absolute w-full h-full" />
    </div>
  )
}
