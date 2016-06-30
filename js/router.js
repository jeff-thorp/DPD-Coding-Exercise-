/**
 *   Setup routes for:
 *       Users
 *       Posts
 *       Comments
 *
 *   Ember has kindly created under the hood a default controller and store for each route created
 *   all that is left is that we bind the data we need to each routes model function.
 *      
 *   Ember will then inject data, using Handlebars, into the same named template in index.js and 
 *   output the result into the {{outlet}} tag, which is where we can interact with the content and 
 *   trigger the transition between the routes.
 */

App.Router.map(function() {
    this.resource('users', {
        path: '/'
    }, function() {});

    this.resource('posts', {
        path: 'user/:id/posts'
    });

    this.resource('comments', {
        path: 'user/:userId/post/:id/comments'
    });
});

// Use the Users route to pre-load the list of Users
App.UsersRoute = Ember.Route.extend({
    model: function() {
        var store = this.get('store');
        return store.find('user');
    }
});

// Use the Posts route to load a list of Posts for a specified User
App.PostsRoute = Ember.Route.extend({
    model: function(params) {
        var store = this.get('store');
        return store.find('post', {
            userId: params.id
        });
    }
});

// Use the Comments route to load a list of Comments for a specified Post
App.CommentsRoute = Ember.Route.extend({
    model: function(params) {
        console.log(params);
        return this.store.find('comment', {
            postId: params.id
        });
    }
});