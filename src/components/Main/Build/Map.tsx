import maplibregl from 'maplibre-gl';
import React, { useEffect, useRef, useState } from 'react';

export const Map = () => {
    const mapContainer = useRef<any>(null);
    const map = useRef<any>(null);
    // const [lng] = useState<number>(106.917661);
    // const [lat] = useState<number>(47.918729);
    const [lng] = useState(139.753);
    const [lat] = useState(35.6844);
    const [zoom] = useState<number>(14);
    const [API_KEY] = useState<string>('bvBPNvWwqOMlgE9YWumL');
    useEffect(() => {
        if(map.current) return;
        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
            center: [lng, lat],
            zoom
        })
        // new maplibregl.Marker({ color: "#000" }).setLngLat([106.908821, 47.918528]).addTo(map.current);
        new maplibregl.Marker({color: "#FF0000"}).setLngLat([139.7525,35.6846]).addTo(map.current);
    }, [])
  return (
    <div className='w-full h-full relative'>
        <div ref={mapContainer} className="absolute w-full h-full" />
    </div>
  )
}
