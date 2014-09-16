
/**
 * Company Model
 */

var Company = Backbone.Model.extend({

  initialize: function() {},

  localStorage: new Store("company-cachirulo"),

  clear: function() {
    this.destroy();
  }

});