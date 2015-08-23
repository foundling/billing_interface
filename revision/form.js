var form = {
  init: function() {
    this.cacheDom();
    this.bindEvents();
    this.render();
  },
  cacheDom: function() {
    //target elements in here;
  },
  bindEvents: function() {
    this.$el.on('click', this.METHOD.bind(this));
    // context for click is the dom element, so we bind it w/ this val 
  },
  render: function() {
    
  }
}
