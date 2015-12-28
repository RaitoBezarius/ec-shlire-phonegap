var LandingView = Backbone.View.extend({
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
      console.log(myOptions);

      this.$el.html(this.template({options: myOptions.toJSON()}));  
    },
});