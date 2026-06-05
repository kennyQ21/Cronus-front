"use client";

import React, { useMemo } from 'react';
import Map, { Marker, Source, Layer, NavigationControl } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

const LOCATIONS = {
  HQ: { id: 'hq', name: 'Bengaluru Node (HQ)', coords: [77.6412, 12.8914], primary: true },
  APAC: { id: 'apac', name: 'APAC Presence', coords: [103.8198, 1.3521], primary: false },
  EU: { id: 'eu', name: 'Europe Coverage', coords: [-0.1276, 51.5072], primary: false },
  NA: { id: 'na', name: 'North America', coords: [-74.0060, 40.7128], primary: false },
};

export default function EnterpriseMap() {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  
  // Minimal dark map without heavy road clutter.
  const mapStyle = mapboxToken 
    ? "mapbox://styles/mapbox/dark-v11" 
    : "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";

  // Create simple straight lines connecting HQ to other nodes
  const routeData = useMemo(() => {
    const features = [LOCATIONS.APAC, LOCATIONS.EU, LOCATIONS.NA].map(loc => ({
      type: 'Feature' as const,
      properties: {},
      geometry: {
        type: 'LineString' as const,
        coordinates: [LOCATIONS.HQ.coords, loc.coords]
      }
    }));
    
    return {
      type: 'FeatureCollection' as const,
      features
    };
  }, []);

  return (
    <div className="w-full h-full min-h-[350px] relative bg-[#020617] rounded-lg overflow-hidden border border-white/10 group">
      
      {/* Overlay to ensure map doesn't capture scroll unless interacted with */}
      <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_100px_rgba(2,6,23,0.9)]" />

      <Map
        initialViewState={{
          longitude: 20, // Center between Europe, Asia, NA
          latitude: 30,
          zoom: 1.2,
          pitch: 30,
          bearing: 0
        }}
        mapStyle={mapStyle}
        style={{ width: '100%', height: '100%' }}
        interactive={true}
        {...(mapboxToken ? { mapboxAccessToken: mapboxToken } : {})}
      >
        <NavigationControl position="bottom-right" showCompass={false} />

        {/* Routes Layer */}
        <Source type="geojson" data={routeData}>
          <Layer 
            id="routes" 
            type="line" 
            paint={{
              'line-color': '#00D4FF',
              'line-width': 1.5,
              'line-opacity': 0.3,
              'line-dasharray': [2, 4]
            }} 
          />
        </Source>
        
        {/* Render Markers */}
        {Object.values(LOCATIONS).map(loc => (
          <Marker 
            key={loc.id}
            longitude={loc.coords[0]} 
            latitude={loc.coords[1]}
            anchor="center"
          >
            <div className="relative flex items-center justify-center w-8 h-8 group-marker cursor-pointer">
              {loc.primary && (
                <div className="absolute w-6 h-6 bg-[#00D4FF] rounded-full animate-ping opacity-60" />
              )}
              <div className={`absolute w-2 h-2 rounded-full shadow-[0_0_10px_currentColor] ${loc.primary ? 'bg-[#00D4FF] text-[#00D4FF]' : 'bg-[#10B981] text-[#10B981]'}`} />
              
              {/* Tooltip on hover */}
              <div className="absolute bottom-4 opacity-0 transition-opacity duration-300 pointer-events-none whitespace-nowrap bg-[#020617]/90 border border-white/10 px-2 py-1 rounded text-[9px] font-mono uppercase tracking-widest text-white shadow-xl">
                {loc.name}
              </div>
            </div>
          </Marker>
        ))}
      </Map>
      
      {/* Brand Overlay */}
      <div className="absolute top-4 left-4 z-20 pointer-events-none">
        <h3 className="font-mono text-[#00D4FF] text-[10px] tracking-widest uppercase mb-1">Global Operations</h3>
        <p className="font-mono text-[#A0A0B8] text-[9px] uppercase tracking-widest">Enterprise Delivery Network</p>
      </div>

    </div>
  );
}
