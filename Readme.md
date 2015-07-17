STE, A Minimal Boilerplate for Meteor Framework!
-----------------------------------------------------------
----------
Install
------

To create your project simply clone this repository:

    git clone url.git

-----


Traits
-------

 - Easy to understand File Structure.
 
 - Ready to use code snippets.
 
 - All the packages that are needed to start a basic Meteor app.
 
 - Beginner Friendly.


----------
Table of Contents
-------


----------

Included Packages

 1. meteor-platform---Meteor Core API --- [Documentation](http://docs.meteor.com/#/full/)
 2. iron:router --- [Documentation](https://github.com/iron-meteor/iron-router)
 3. accounts-password --- [Documentation](http://blog.benmcmahen.com/post/41741539120/building-a-customized-accounts-ui-for-meteor)
 4. aldeed:collection2 --- [Documentation](https://github.com/aldeed/meteor-collection2/)
 5. email --- [Documentation](http://docs.meteor.com/#/full/email)
 6. http --- [Documentation](http://docs.meteor.com/#/full/http)
 7. chrismbeckett:toastr --- [Documentation](https://github.com/chrismbeckett/meteor-toastr/)
 8. twbs:bootstrap --- [Documentation](https://github.com/twbs/bootstrap/)
 9. mizzao:bootboxjs --- [Documentation](https://github.com/TimHeckel/meteor-bootboxjs/)

---
File Structure

This boilerplate consists of the following structure:

.
├── client
│   ├── client-startup
│   │   └── startup.js
│   ├── layout.html
│   ├── roles-login-not-required
│   │   └── homepage
│   │       ├── hello.html
│   │       └── homepage.js
│   └── roles-login-required
├── global
│   └── collections
│       └── collections.js
├── private
├── public
│   ├── design
│   │   ├── css
│   │   │   └── stbp.css
│   │   └── js
│   └── images
├── routes
│   └── routes.js
└── server
    ├── methods.js
    ├── publications.js
    └── startup.js

To know more about Meteors file structure. Please have a look at the link: http://docs.meteor.com/#/basic/filestructure 
