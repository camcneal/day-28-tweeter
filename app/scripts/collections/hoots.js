import $ from 'jquery';
import Backbone from 'backbone';
import hoot from '../model/hoot';


export default Backbone.Collection.extend({
      url: 'https://api.backendless.com/v1/hoots',
      Model: hoot,


});
