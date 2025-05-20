mapboxgl.accessToken = 'pk.eyJ1IjoibHprb3VvIiwiYSI6ImNtMHF6aG04bjAzaDYyanB1MXRqajZzd2gifQ.gc9TIEDHnKq3iKvTwA7sRw';
const map11 = new mapboxgl.Map({
    container: 'map11',
    style: 'mapbox://styles/lzkouo/cm72o2z5l009x01s35b82gznc',
    zoom: 8,
    center: [-73.8507792, 40.7413511],
    maxZoom: 15,
    minZoom: 12,
    maxBounds: [[-74.45, 40.45], [-73.55, 41]]
});


map11.on('load', () => {
  // 添加 GeoJSON 数据源
  map11.addSource('polluted-zone-11', {
    type: 'geojson',
    data: 'data_set/polluted_area.geojson'
  });

  map11.addLayer({
    id: 'polluted-zone-layer-11',
    type: 'fill',
    source: 'polluted-zone-11',
    paint: {
      'fill-color': [
        'case',
        ['!', ['has', 'Burden_Score']], '#ffffff',
        ['==', ['get', 'Burden_Score'], null], '#ffffff',
        [
          'interpolate',
          ['linear'],
          ['get', 'Burden_Score'],
          20, '#fff7bc',
          30, '#fec44f',
          40, '#fc9272',
          50, '#de2d26',
          60, '#a50f15'
        ]
      ],
      'fill-opacity': 0.8,
      'fill-outline-color': '#f9f9f9'
    }
  });
});
