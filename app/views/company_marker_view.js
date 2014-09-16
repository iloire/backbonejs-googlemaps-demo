
/**
 * Company Marker View
 * The DOM element for a company marker.
 */

var CompanyMarkerView = Backbone.View.extend({

    tagName:  "li",

    initialize: function(options) {

      var self = this;

      self.model = options.model;
      self.model.on('remove', self.remove, self);

      self.map = options.map;

      var pos = self.model.get('pos');

      self.marker = new google.maps.Marker({
          map: self.map,
          position: new google.maps.LatLng(pos.lat, pos.lon),
          animation: google.maps.Animation.DROP,
          icon : 'img/buildings_32x32.png',
          title: self.model.name,
          descr : self.model.get('descr'),
          id : self.model.get('company_id')
      });

      self.marker.infowindow = new google.maps.InfoWindow({
        content: self.marker.descr
      });

      google.maps.event.addListener(self.marker, 'mouseover', self.show_company_info);
      google.maps.event.addListener(self.marker, 'mouseout', self.hide_company_info);
      google.maps.event.addListener(self.marker, 'click', self.show_company_detail);
    },

    //---------------------------------------
    // Event handlers for marker events

    show_company_detail : function() {
      this.infowindow.close();
      App.show_content();
    },

    hide_company_info : function() {
      this.setIcon('img/buildings_32x32.png');
      this.infowindow.close();
    },

    show_company_info : function() {
      this.setIcon('img/buildings_32x32_selected.png');
      this.infowindow.open(this.map, this);
    },

    // END Events and event handlers
    //----------------------------------

    render: function() { },

    remove : function() {
      this.marker.setMap(null);
      this.marker = null;
    }
});
