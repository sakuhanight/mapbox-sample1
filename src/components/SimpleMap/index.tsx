'use client';
import mapboxgl, {Style} from 'mapbox-gl';
import MapboxLanguage from '@mapbox/mapbox-gl-language';
import 'mapbox-gl/dist/mapbox-gl.css';
import {useEffect, useRef, useState} from "react";
import styles from './index.module.css';
import mapStyle from './mapstyle.json';

export default function SimpleMap() {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ?? '';
    const mapContainer = useRef(null);
    const [map, setMap] = useState(null);

    useEffect(() => {
        const initializeMap = ({ setMap, mapContainer }: { setMap: any, mapContainer: any }) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                // style: 'mapbox://styles/mapbox/streets-v11',
                style: mapStyle as Style,
                center: [139.767125, 35.681236],
                zoom: 12,
            });

            // map.addControl(new MapboxLanguage({
            //     defaultLanguage: 'ja',
            // }));
            map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
            map.addControl(new mapboxgl.ScaleControl() );


            map.on('load', () => {
                setMap(map);
                map.resize();
            });
        };

        if (!map) initializeMap({setMap, mapContainer})
    }, [map]);

    return (
        <div ref={mapContainer} className={styles.map} />
    );
}