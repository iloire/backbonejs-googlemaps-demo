
/**
 * Company List View
 * The DOM element for a list of company items.
 */

var CompanyListView = Backbone.View.extend({

    el:  $("#companies_holder"),

    initialize: function(options) {
      this.map = options.map;
      this.model.on('add', this.added_company, this);

      // initialize position
      this.$el.css({display: 'none', right:'20px', top: '120px'}, 2000);
      this.$el.fadeIn('500');

      this.list_container = $('#companies_list_holder ul', this.$el);

      this.render();
    },

    //----------------------------------
    // Events and event handlers

    events: {
      'click #btn_pop_new_company': 'popup_new_company',
      'click #btn_delete_all_companies' : 'delete_all_companies'
    },

    // event handler for "new company" action
    popup_new_company: function() {
      if (Companies.length>15){
        alert('limited to 15!');
        return;
      }
      var company = dummy_data_generator.get_dummy_company();
      this.model.add_new(company);
    },

    // event handler for "delete all companies" action
    delete_all_companies: function() {
      Companies.remove_all();
    },

    // END Events and event handlers
    //----------------------------------

    added_company : function(company){
      var marker_view = new CompanyMarkerView({ model: company, map: this.map });
      var item_view = new CompanyListItemView({ model: company, marker_view : marker_view });
      $(this.list_container).append(item_view.render().el);
    },

    render: function() {
      this.model.each (this.added_company, this);
    }
});