import $ from 'jquery';
import Backbone from 'backbone';

export default Backbone.Model.extend({
      urlRoot: 'https://api.backendless.com/v1/hoots',
      idAttribute: 'objectId',
      
});
