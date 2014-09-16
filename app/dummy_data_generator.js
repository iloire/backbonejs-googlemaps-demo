
var dummy_data_generator = {

  'reset' : function() {
    Companies.remove_all();
  },

  'get_dummy_company': function() {
    var rnd_id = (new Date).getTime();
    var company = {
      company_id : rnd_id,
      name : Faker.Company.companyName(),
      address: Faker.Address.streetAddress(),
      pos: {lat: 41 + Math.random(), lon: -1.3 + Math.random()}
    };

    company.descr = '<div>'+
    '<div>'+
    '</div>'+
    '<h2>' + company.name + ' <small>' + company.address +  '</small></h2>'+
    '<div>'+
    '<img style="width:200px;height:200px;float:left;margin:5px 10px 5px 0px" src="http://lorempixel.com/200/200/" />' +
    '<p>' + Faker.Lorem.paragraph() + '</p>' +
    '<p>' + Faker.Lorem.paragraph() + '</p>' +
    '<p>' + Faker.Lorem.paragraph() + '</p>' +
    '</div>'+
    '</div>';

    return company;
  },

  'repopulate' : function() {
    Companies.remove_all();
    for (var i = 0, l = 10; i < l ;  i++) {
      Companies.add_new(this.get_dummy_company());
    }
  }
};

dummy_data_generator.repopulate();
