window.HomeView = Backbone.View.extend({
  template: JST["templates/landing_page.hbs"],
    initialize: function(){
      this.render();
    },
    render: function(){
      var apple = new Option({ name: "Apple", id: "apple", image_url: "http://www.tapgamers.com/wp-content/uploads/2011/12/apple-250x250.jpg"});
      var banana = new Option({ name: "Banana", id: "banana", image_url: "http://thefruiterer.com.au/wp-content/uploads/2013/05/Banana-ripe-250x250.jpg"});
      var durian = new Option({ name: "Durian", id: "durian", image_url: "http://3.imimg.com/data3/NW/AY/MY-9798726/durian-fruit-250x250.jpg"});
      var orange = new Option({ name: "Orange", id: "orange", image_url: "http://2.imimg.com/data2/AQ/RA/MY-5878576/orange-250x250.jpg"});
      var pear = new Option({ name: "Pear", id: "pear", image_url: "http://3.imimg.com/data3/NV/LA/MY-9833507/pear-fruit-250x250.jpg"});
      var peach = new Option({ name: "Peach", id: "peach", image_url: "http://img2.everychina.com/img/1b/bc/2ce0607f7e4756adb95cb769e89b-250x250c1-5d9d/frozen_peach_fresh_frozen_fruit_ad_fd_fruit.jpg"});

      var myOptions = new Options([apple, banana, durian, orange, pear, peach]);

      $(this.el).html(this.template({options: myOptions.toJSON()}));
      return this;
    },
    events: {
      "click .image": "doSearch"
    },
    doSearch: function( e ){
      // Button clicked, you can access the element that was clicked with event.currentTarget
      clicked_label = $(e.currentTarget).attr('id');

      // Storing clicked option to session.
      var label_session = localStorage['label'];
      localStorage['label'] = clicked_label;
      
      var result_view = new ResultView({clicked_label: clicked_label });
    }
});;
window.ResultView = Backbone.View.extend({
	template: JST["templates/option_details.hbs"],
  	initialize: function(options){
      this.render(options);
    },
    render: function(options){
		clicked_label = localStorage['label'];
		var variables = { search_label: clicked_label };
        $(this.el).html(this.template(variables));
        return this;
    }
});