mapboxgl.accessToken = 'pk.eyJ1IjoibHprb3VvIiwiYSI6ImNtMHF6aG04bjAzaDYyanB1MXRqajZzd2gifQ.gc9TIEDHnKq3iKvTwA7sRw';
const map22 = new mapboxgl.Map({
    container: 'map22',
    style: 'mapbox://styles/lzkouo/cm72o2z5l009x01s35b82gznc',
    zoom: 8,
    center: [-73.8507792, 40.7413511],
    maxZoom: 15,
    minZoom: 12,
    maxBounds: [[-74.45, 40.45], [-73.55, 41]]
});


map22.on('load', () => {
  // 添加 GeoJSON 数据源
  map22.addSource('polluted-zone-22', {
    type: 'geojson',
    data: 'data_set/polluted_area.geojson'
  });

  map22.addLayer({
    id: 'polluted-zone-layer-22',
    type: 'fill',
    source: 'polluted-zone-22',
    paint: {
      'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'Burden_Score_Percentile'],
        0, '#fff7bc',
        0.25, '#fec44f',
        0.5, '#fc9272',
        0.75, '#de2d26',
        1, '#a50f15'
      ],
      'fill-opacity': 0.8,
      'fill-outline-color': '#f9f9f9'
    }
  });
});

