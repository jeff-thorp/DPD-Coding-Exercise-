/**
 * Model to store a User
 */
App.User = DS.Model.extend({
    name: DS.attr('string'),
    username: DS.attr('string'),
    email: DS.attr('string')
});