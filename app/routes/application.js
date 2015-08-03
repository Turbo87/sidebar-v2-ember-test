import Ember from 'ember';

export default Ember.Route.extend({
  activate() {
    // wait for the template to render
    Ember.run.later(this, this.setupMap, 0);
  },

  setupMap() {
    this.set('map', new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.MapQuest({layer: 'sat'})
        })
      ],
      view: new ol.View({
        center: ol.proj.transform([7, 51.2], 'EPSG:4326', 'EPSG:3857'),
        zoom: 4
      })
    }));
  }
});
