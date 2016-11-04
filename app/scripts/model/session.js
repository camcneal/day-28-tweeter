import Backbone from 'backbone';
import $ from 'jquery';
import router from '../router';


const Session = Backbone.Model.extend({
  intialize() {
    if(window.localStorage.getItem('user-token')){
          this.set('user-token', window.localStorage.getItem('user-token'));
    }
  },
login(email, password) {
    $.ajax({
          type: 'POST',
          url: 'https://api.backendless.com/v1/users/login',
          contentType: 'application/json',
          data: JSON.stringify({login: email, password}),
    success: (response) => {
        this.set(response);
        window.localStorage.setItem('user-token', response['user-token']);


      }
  });
},
signup(fullname,username,email,password) {
  $.ajax({
    type: 'POST',
    url: 'https://api.backendless.com/v1/users/register',
    contentType: 'application/json',
    data: JSON.stringify({fullname,username,email,password}),
    success: (response) => {
      this.login(email,password);
    },
    error: (data) => {
      console.log(data);
    }
  });
},
logout(){
  $.ajax({
          url: 'https://api.backendless.com/v1/users/logout',
          success: () => {
            this.clear();
            window.localStorage.clear();
            router.navigate('login', {trigger: true});

          }
  });
}

});

let session = new Session();
export default session;
