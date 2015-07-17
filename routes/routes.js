/**
 * You can write all your codes for the iron:router package here altogether for all routes
 * or create separate route files for each route.
 */

Router.route('homepage', {
    'path':'/',
    'action':function(){
        this.render('hello');
    }
});

/* An example route with Subscriptions. */

/*

 Router.route('r_name', {
 'path':'/sample_path',
 'action':function(){
 this.render('hello');
 },
 waitOn:function(){
 Meteor.subscribe('pub_name');
 }
 });

*/