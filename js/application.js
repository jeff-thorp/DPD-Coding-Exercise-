/**
 * Created by jthorp.
 */

// Create a new instance of Ember.Application, and make available as a variable named App
window.App = Ember.Application.create();

App.ApplicationAdapter = DS.RESTAdapter.extend({
    //host: 'http://jsonplaceholder.typicode.com'
    host: 'http://localhost:3000'
});