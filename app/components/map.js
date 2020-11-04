import Component from '@glimmer/component';
import Mapboxgl from 'mapbox-gl';
import MapboxDraw from '@mapbox/mapbox-gl-draw';

export default class MapComponent extends Component {
  initilizeMap() {
    Mapboxgl.accessToken = '';  // Put your accessToken here
    const map = new Mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [12, 50],
      zoom: 5
    });
    const Draw = new MapboxDraw();
    map.addControl(Draw);
  }
}
