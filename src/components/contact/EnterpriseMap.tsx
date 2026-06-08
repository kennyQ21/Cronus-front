"use client";

import React from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

const BENGALURU_OFFICE = {
  coords: [77.6412, 12.8914], // Longitude, Latitude for Bengaluru HQ
  name: "Bengaluru Office"
};

export default function EnterpriseMap() {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  
  // Minimal dark map without heavy road clutter.
  const mapStyle = mapboxToken 
    ? "mapbox://styles/mapbox/dark-v11" 
    : "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";

  return (
    <div className="w-full h-full min-h-[300px] relative bg-[#020617] rounded-lg overflow-hidden border border-white/10 group">
      
      {/* Overlay to ensure map doesn't capture scroll unless interacted with */}
      <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_100px_rgba(2,6,23,0.9)]" />

      <Map
        initialViewState={{
          longitude: BENGALURU_OFFICE.coords[0],
          latitude: BENGALURU_OFFICE.coords[1],
          zoom: 13,
          pitch: 45,
          bearing: -17.6
        }}
        mapStyle={mapStyle}
        style={{ width: '100%', height: '100%' }}
        interactive={true}
        {...(mapboxToken ? { mapboxAccessToken: mapboxToken } : {})}
      >
        <NavigationControl position="bottom-right" showCompass={false} />

        {/* Render Office Marker */}
        <Marker 
          longitude={BENGALURU_OFFICE.coords[0]} 
          latitude={BENGALURU_OFFICE.coords[1]}
          anchor="center"
        >
          <div className="relative flex items-center justify-center w-8 h-8 group-marker cursor-pointer">
            <div className="absolute w-6 h-6 bg-[#00D4FF] rounded-full animate-ping opacity-60" />
            <div className="absolute w-2 h-2 rounded-full shadow-[0_0_10px_currentColor] bg-[#00D4FF] text-[#00D4FF]" />
            
            {/* Persistent Tooltip */}
            <div className="absolute -top-8 whitespace-nowrap bg-[#020617]/90 border border-white/10 px-3 py-1.5 rounded text-[10px] font-mono tracking-widest text-white shadow-xl flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
              {BENGALURU_OFFICE.name}
            </div>
          </div>
        </Marker>
      </Map>
    </div>
  );
}
