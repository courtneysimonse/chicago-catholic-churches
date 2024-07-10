import React, { useEffect, useState, useRef, useCallback } from "react";
// import * as d3 from "d3-fetch";
import maplibregl from "maplibre-gl";

import "./MapComponent.css";


const MapComponent = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const colors = [
    "#0f9b4a",
    "#fecc08",
    "#f69938",
    "#f3663a"
  ];


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
      projection: 'albers'
    });
    

    map.current.on('load', () => {

      
  

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