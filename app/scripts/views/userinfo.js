import $ from 'jquery';
import Backbone from 'backbone';


let $container = new $('.container');

export default Backbone.View.extend({
    tagName: 'div',
    className: 'userinfo',
    template() {
        return `
          <img src="''" alt="" />
          <h3></h3>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
              `;
    },
    render() {
        $container.empty();
        this.$el.append(this.template());
    },
    events: {

    },
    // handleHoot(e) {
    //     e.preventDefault();
    //     this.collections.create();
    //
    //     console.log('hi');

        // instead of hoot directly, use this.collection.create()
        // hoot.usermain(feedtext);
    // }
});
