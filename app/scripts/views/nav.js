import $ from 'jquery';
import Backbone from 'backbone';
import session from '../model/session';

let $container = $('.container');
export default Backbone.View.extend({
  tagName: 'nav',
  template() {
    return `
      <input id="homebtn" type="button"  value="Home">
      <input id="logoutbtn" type="button"  value="Logout">
            `;
  },
  render() {
    $container.empty();
    this.$el.append(this.template());
  },
  events: {
    'click #homebtn': 'handleHome',
    'click #logoutbtn': 'handleLogout'
  },
    handleLogout(e) {
      e.preventDefault();
      session.logout();
    }
});
