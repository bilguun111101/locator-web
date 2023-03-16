import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useRef, useState } from 'react';
import useGetUsers from "../../../firebase/getUsers";
import { Marker, Map as MapContainer } from 'maplibre-gl';


// type geojsonType = {
//   type: string,
//   features: {
//     type: string,
//     properties: {
//       message: string,
//       iconSize: number[],
//     },
//     geometry: {
//       type: string,
//       coordinates: [number, number],
//     }
//   }[]
// }

// const geojson: geojsonType = {
//   'type': 'FeatureCollection',
//   'features': [
//     {
//       'type': 'Feature',
//       'properties': {
//         'message': 'Foo',
//         'iconSize': [60, 60]
//       },
//       'geometry': {
//         'type': 'Point',
//         'coordinates': [-66.324462890625, -16.024695711685304]
//       }
//     },
//     {
//       'type': 'Feature',
//       'properties': {
//       'message': 'Bar',
//       'iconSize': [50, 50]
//       },
//         'geometry': {
//         'type': 'Point',
//         'coordinates': [-61.2158203125, -15.97189158092897]
//       }
//     },
//     {
//       'type': 'Feature',
//       'properties': {
//       'message': 'Baz',
//       'iconSize': [40, 40]
//       },
//         'geometry': {
//         'type': 'Point',
//         'coordinates': [-63.29223632812499, -18.28151823530889]
//       }
//     }
//   ]
// };

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
        // geojson.features.forEach((marker) => {
          // new Marker().setLngLat(marker.geometry.coordinates).addTo(map.current);
        // });
        // data?.map((el, idx) => {
          // const position = [el.]
          // return new Marker().setLngLat().addTo(map.current);
        // })
    }, [])
    useEffect(() => {
      if(!active) return;
      active?.map(el => {
        // if()
        // new Marker().setLngLat([el.position?.latitude!, el.position.longitude!]).addTo(map.current);
      })
    }, [active])
  return (
    <div className='w-full h-full relative'>
        <div ref={mapContainer} className="absolute w-full h-full" />
    </div>
  )
}
