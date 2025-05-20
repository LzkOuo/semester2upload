mapboxgl.accessToken = 'pk.eyJ1IjoibHprb3VvIiwiYSI6ImNtMHF6aG04bjAzaDYyanB1MXRqajZzd2gifQ.gc9TIEDHnKq3iKvTwA7sRw';
const map33 = new mapboxgl.Map({
    container: 'map33',
    style: 'mapbox://styles/lzkouo/cm72o2z5l009x01s35b82gznc',
    zoom: 8,
    center: [-73.8507792, 40.7413511],
    maxZoom: 15,
    minZoom: 12,
    maxBounds: [[-74.45, 40.45], [-73.55, 41]]
});


map33.on('load', () => {
  // 添加 GeoJSON 数据源
  map33.addSource('polluted-zone-33', {
    type: 'geojson',
    data: 'data_set/burden_points.geojson'
  });

  map33.addLayer({
    id: 'polluted-zone-layer-33',
    type: 'heatmap',
    source: 'polluted-zone-33',
    paint: {
      'heatmap-weight': [
        'interpolate',
        ['linear'],
        ['get', 'Burden_Score'],
        30, 0,
        60, 1
      ],
      'heatmap-intensity': 1.6,
      'heatmap-radius': 70,
      'heatmap-opacity': 0.9,
      'heatmap-color': [
        'interpolate',
        ['linear'],
        ['heatmap-density'],
        0, 'rgba(255,255,204,0)',
        0.2, 'rgb(255,237,160)',
        0.4, 'rgb(254,178,76)',
        0.6, 'rgb(253,141,60)',
        0.8, 'rgb(240,59,32)',
        1, 'rgb(189,0,38)'
      ]
    }
  });
});
