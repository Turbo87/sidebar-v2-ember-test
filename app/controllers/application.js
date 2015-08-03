import Ember from 'ember';

export default Ember.Controller.extend({
  isIndexActive: Ember.computed.equal('currentPath', 'index')
});
