import $ from 'jquery';
import Backbone from 'backbone';
// import hoot from '../model/hoot';
import hoots from '../collections/hoots';
import session from '../model/session';

let $container = new $('.container');
// let collections = new Collections();
export default Backbone.View.extend({
  initialize (){
    console.log(session);
    hoots.fetch();
  },
    tagName: 'div',
    className: 'usermain',
    template() {
        return `
              <form>
                <textarea id="feedtext" rows="8" cols="40"></textarea>
                <input id="listbtn" type="submit" value="Hoot">
              </form>
              <ul class="hoots"></ul>
              `;
    },
    makeLis() {
    let hootPosts =  hoots.map( (hoot,i,arr)=> {
      let deleteButton = '';
      let editButton = '';
      if(window.localStorage.getItem('username') === hoot.get('user') ){
        console.log(hoot);
        deleteButton = '<button id="delete">Delete</button>';
        editButton = '<button id="edit">edit</button>';
      }
        return `
                <li id="${hoot.get('objectId')}">
                  <p>${hoot.get('text')}</p>
                  <span>${hoot.get('user')}</span>
                  <span>${hoot.get('time')}</span>
                  ${deleteButton}
                  ${editButton}
                  </li>
        `;
      });
      $('.hoots').empty().append(hootPosts);
    },
    render() {
        $container.empty();
        this.$el.append(this.template());
        hoots.on('update' , this.makeLis);
    },
    events: {
        'submit form': 'handleHoot',
        'click #delete': 'handleDelete',
        'click #edit': 'handelEdit'
    },
    handleDelete(e) {
      let deleteHoot = hoots.get(e.target.parentElement.id);
      console.log(hoots);
      // deleteHoot.destroy({
      //   success: (response) => {
      //     this.makeLis();
      //   }
      // });
    },
    handleHoot(e) {
        e.preventDefault();
        hoots.create({
          text: $('#feedtext').val(),
          time: new Date(),
          user: window.localStorage.getItem('username')

        },
      {success: (response) => {
        console.log(response);
        hoots.fetch({
          success: () => {this.makeLis();}
        });
      }
      });

        // session.fetch();
        console.log(session);

        // instead of hoot directly, use this.collection.create()
        // hoot.usermain(feedtext);
    }
});
