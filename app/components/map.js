import Component from '@glimmer/component';
import Mapboxgl from 'mapbox-gl';
import MapboxDraw from "@mapbox/mapbox-gl-draw";

export default class MapComponent extends Component {
  initilizeMap() {
    const map = new Mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [0, 0],
      zoom: 19
    });
    const Draw = new MapboxDraw();
    map.addControl(Draw);
  }
}
