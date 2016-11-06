import $ from 'jquery';
import Backbone from 'backbone';
import session from '../model/session';

let $container = $('.container');
export default Backbone.View.extend({
    tagName: 'form',
    className: 'signup',
    template() {
        return `
                <input id="fullname" type="text" placeholder="Full Name" value="">
                <input id="username" type="text" placeholder="UserName" value="">
                <input id="email" type="email" placeholder="Email Address" value="">
                <input id="password" type="password" placeholder="Password" value="">
                <input id="submit" type="submit" value="Sign Up" >
                Already have an account? <a href="#login">Login Here</a>
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
      const fullname = this.$('#fullname').val();
      const username = this.$('#username').val();
      // console.log(email,password);
      session.signup(fullname,username,email,password);
    }
  });
