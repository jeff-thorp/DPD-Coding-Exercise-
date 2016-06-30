/**
 * Model to store a Post
 */
App.Post = DS.Model.extend({
    userId: DS.attr('number'),
    title: DS.attr('string'),
    message: DS.attr('string')
});