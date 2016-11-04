import $ from 'jquery';
import Backbone from 'backbone';
import session from '../model/session';

let $container = $('.container');
export default Backbone.View.extend({
    tagName: 'form',
    className: 'login',
    template() {
        return `

                  <input id="email" type="text" placeholder="Email Address" value="">
                  <input id="password" type="text" placeholder="Password" value="">
                  <input id="submit" type="submit" value="Log in" >
                  Dont have an account? <a href="#signup">Sign Up Here</a>

              `;
    },
    render() {
      $container.empty();
        this.$el.append(this.template());
    },
    events: {
      'submit': 'handleSubmit'
    },
    handleSubmit(e) {
      e.preventDefault();
      const email = this.$('#email').val();
      const password = this.$('#password').val();
      // console.log(email,password);
      session.login(email, password);
    }
});
