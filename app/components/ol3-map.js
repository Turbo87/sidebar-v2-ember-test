import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this.set('map', new ol.Map({
      target: this.get('elementId'),
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
