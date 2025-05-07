mapboxgl.accessToken = 'pk.eyJ1IjoibHprb3VvIiwiYSI6ImNtMHF6aG04bjAzaDYyanB1MXRqajZzd2gifQ.gc9TIEDHnKq3iKvTwA7sRw';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/lzkouo/cm72o2z5l009x01s35b82gznc',
    zoom: 3,
    center: [-95, 37],
    maxZoom: 10,
    minZoom: 2,
    maxBounds: [[-180, 15], [-30, 75]]
});


map.on('load', () => {
    // 添加县级数据源和图层
    map.addSource('county-data', {
      type: 'geojson',
      data: 'data/county2.geojson'
    });

    map.addSource('state-data', {
      type: 'geojson',
      data: 'data/state2.geojson'
    });
  
    map.addLayer({
      id: 'county-layer',
      type: 'fill',
      source: 'county-data',
      paint: {
        // 使用插值对中位数收入着色，缺失值为灰色
        'fill-color': [
          'interpolate',
          ['linear'],
          ['coalesce', ['to-number', ['get', 'MedianIncome']], -1],
             -1, '#fee5d9',      // null or missing values → gray
          50000, '#fee5d9',
          60000, '#fcae91',
          70000, '#fb6a4a',
          80000, '#de2d26',
          90000, '#a50f15'
        ],
        // 设置透明度：缺失值更透明
        'fill-opacity': [
          'case',
          ['==', ['get', 'MedianIncome'], null], 0.5,  // transparent for nulls
          0.7
        ],
        'fill-outline-color': '#ffffff'
      },
      minzoom: 6,
      maxzoom: 11
    });

    map.addLayer({
      id: 'state-layer',
      type: 'fill',
      source: 'state-data',
      paint: {
        // 使用插值对中位数收入着色，缺失值为灰色
        'fill-color': [
          'interpolate',
          ['linear'],
          ['coalesce', ['to-number', ['get', 'MedianIncome']], -1],
             -1, '#fee5d9',      // null or missing values → gray
          50000, '#fee5d9',
          60000, '#fcae91',
          70000, '#fb6a4a',
          80000, '#de2d26',
          90000, '#a50f15'
        ],
        // 设置透明度：缺失值更透明
        'fill-opacity': [
          'case',
          ['==', ['get', 'MedianIncome'], null], 0.5,  // transparent for nulls
          0.7
        ],
        'fill-outline-color': '#ffffff'
      },
      minzoom: 2,
      maxzoom: 6
    });


  });