/**
 * Model to store a Comment
 */
App.Comment = DS.Model.extend({
    postId: DS.attr('number'),
    message: DS.attr('string')
});