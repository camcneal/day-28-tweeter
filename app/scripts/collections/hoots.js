import $ from 'jquery';
import Backbone from 'backbone';
import hoot from '../model/hoot';


const Hoots = Backbone.Collection.extend({
      url: 'https://api.backendless.com/v1/data/hoots',
      Model: hoot,
parse (data) {
  return data.data;
}

});

let hoots = new Hoots();
export default hoots;
