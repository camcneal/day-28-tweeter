import $ from 'jquery';
import Backbone from 'backbone';
import Login from './views/login';
import Signup from './views/signup';
import config from './config';
import Nav from './views/nav';
import Usermain from './views/usermain';
import Userinfo from './views/userinfo';
import session from './model/session';
import collections from './collections/hoots';


//make an instance of the collection for the app to use

$(document).ajaxSend((evt, xhr, opts) => {
    console.log(config.appId);

    // xhr is the raw ajax request, and we can modify it to make changes, like this example that sets headers:
    xhr.setRequestHeader('application-id', config.appId);
    xhr.setRequestHeader('secret-key', config.secret);
    xhr.setRequestHeader('application-type', 'REST');
    if (window.localStorage.getItem('user-token')) {
      console.log('loggedin');
    	xhr.setRequestHeader('user-token', window.localStorage.getItem('user-token'));
    }
});

let $container = $('.container');
const Router = Backbone.Router.extend({
    routes: {
        '': 'home',
        'login': 'login',
        'signup': 'signup',
        'userpage': 'userpage'
    },
    home() {
        if (localStorage.getItem('user-token')) {
            let nav = new Nav();
            // make sure to pass the collection into usermain
            let usermain = new Usermain();
            let userinfo = new Userinfo();
            nav.render();
            usermain.render();
            userinfo.render();
            $container.append(nav.$el);
            $container.append(usermain.$el);
            $container.append(userinfo.$el);

            //redirect to user hompage
        } else {
            this.navigate('login', {
                trigger: true
            });
            this.navigate('signup', {
                trigger: true
            });

        }
    },
    login() {
        if (session.get('user-token')) {
            this.navigate('login', {
                trigger: true
            });
        } else {
            $container.empty();
            let login = new Login();
            login.render();
            $container.append(login.$el);
        }
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
