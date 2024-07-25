import React, { useEffect, useState, useRef, useCallback } from "react";
// import * as d3 from "d3-fetch";
import maplibregl from "maplibre-gl";
import 'maplibre-gl/dist/maplibre-gl.css';
import 'maplibre-gl-opacity/dist/maplibre-gl-opacity.css';
import OpacityControl from 'maplibre-gl-opacity';
import "./MapComponent.css";


const MapComponent = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    const loadData = async () => {
      // load CSVs
      
      
    }
    loadData()
  }, []);


  useEffect(() => {
    // if (!data) return; // Wait for the data to load
    
    if (map.current) return; // initialize map only once
      
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://tiles.stadiamaps.com/styles/stamen_toner.json', 
      projection: 'mercator',
      center: [-87.7, 41.8], // starting position
      zoom: 12 // starting zoom
    });
    

    map.current.on('load', () => {

      map.current.addSource('old-map-tiles', {
                'type': 'raster',
                'tiles': [
                    './image-tiles/{z}/{x}/{y}.png'
                ],
                'tileSize': 256,
                'attribution':
                    '',
                'bounds': [-87.895888955,41.61042315, -87.4369885,42.05737563],
                'minzoom': 5,
                'maxzoom': 20
      }).addLayer({
          'id': 'old-map',
          'type': 'raster',
          'source': 'old-map-tiles',
          'minzoom': 5,
          'maxzoom': 22
      });

      // OpacityControl
      let Opacity = new OpacityControl({
        // baseLayers: mapBaseLayer,
        overLayers: {
          'old-map': '1926 Map',
      },
        opacityControl: true,
      });
      map.current.addControl(Opacity, 'top-right');

    })
    

    return () => {
      map.current.remove();
    };

  }, []);


  return (
      <div id="map"
        ref={mapContainer}
        style={{
          width: "100%",
          height: "100vh",
        }} />
  );
};

export default MapComponent;