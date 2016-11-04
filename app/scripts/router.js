import $ from 'jquery';
import Backbone from 'backbone';
import Login from './views/login';
import Signup from './views/signup';
import config from './config';

$(document).ajaxSend((evt, xhr, opts) => {
console.log(config.appId);

	// xhr is the raw ajax request, and we can modify it to make changes, like this example that sets headers:
	xhr.setRequestHeader('application-id', config.appId);
	xhr.setRequestHeader('secret-key', config.secret);
	xhr.setRequestHeader('application-type', 'REST');
	// if (session.get('user-token')) {
	// 	xhr.setRequestHeader('user-token', session.get('user-token'));
	// }
});

let $container = $('.container');
const Router = Backbone.Router.extend({
          routes: {
            '': 'home',
            'login': 'login',
            'signup':'signup'
          },
          home() {
            // if (session.get('user-token')) {
            //   //redirect to user hompage
            // } else {
                    this.navigate('login', {trigger:true});
                    this.navigate('signup', {trigger:true});
            // }
    },
          login() {
                  // if(session.get('user-token')) {
                  //   this.navigate('login', {trigger: true})
                  // } else {
                  //   $container.empty();
                  //   let loginForm = new LoginForm ({
                  //     session: session,
                  //     name: '',
                  //     model:session
                  // });
                  let login = new Login();
                  login.render();
                  $container.append(login.$el);
                  // }
              },

          signup() {
//                 if (session.get('user-token')) {
//                         this.navigate('', {trigger: true})
//                 } else {
                    let signup = new Signup();
                        signup.render();
                        $container.append(signup.$el);
                // }
          },

});

export default new Router();
