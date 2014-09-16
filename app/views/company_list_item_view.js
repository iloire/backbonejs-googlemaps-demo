
/**
 * Company List Item View
 * The DOM element for an item in a list of company items.
 */

var CompanyListItemView = Backbone.View.extend({

  initialize: function(options) {
    this.marker_view = options.marker_view; //retain instance of google marker
    this.model.on('remove', this.remove, this); //subscribe to remove events on model
    this.render();
  },

  //----------------------------------
  // Events and event handlers

  events: {
    'mouseover a': 'show_company_info',
    'mouseout a': 'hide_company_info',
    'click button': 'ask_delete_company',
    'click a.delete': 'delete_company',
    'click a.detail': 'show_company_detail'
  },

  show_company_detail : function() {
    App.show_content();
  },

  // show marker bubble
  show_company_info : function() {
    this.marker_view.show_company_info.call(this.marker_view.marker);
  },

  // hide marker bubble
  hide_company_info : function() {
    this.marker_view.hide_company_info.call(this.marker_view.marker);
  },

  // clicked on "delete". show confirm button.
  ask_delete_company : function() {
    $('button', this.$el).hide();
    $('a.delete', this.$el).fadeIn();
  },

  delete_company : function() {
    this.model.clear();
  },

  // END Events and event handlers
  //----------------------------------

  render: function() {
    this.$el.html('<li><a class="detail" href="#" company_id="' + this.model.get('company_id') + '">' + this.model.get('name') + '</a> <button class="close">×</button> <a href="#" style="display:none" class="close delete">confirm</a></li>');
    return this;
  },

  remove: function() {
    this.$el.html('');
  }
});