/**
 * You will write here the codes that will execute as soon as your server starts up.
 */
Meteor.startup(function () {
    /* If you are using login and registration using accounts-base package initialize using the code below*/
    /*
     if(!Meteor.users.find().count()) {
     var options = {
     username: 'Your Username',
     password: 'Your Password',
     email: 'Your Email'
     };
     }
     */

    /* If you are using the mail package you will be needing the initialization snipped below. */

    /*
     smtp = {
     username: 'email',   // eg: server@gentlenode.com
     password: 'pass',   // eg: 3eeP1gtizk5eziohfervU
     server:   'smtp server',  // eg: mail.gandi.net
     port: 25
     };

     process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;


     Accounts.emailTemplates.siteName = "Website name";
     Accounts.emailTemplates.from = "Administrator <admin email>";
     Accounts.emailTemplates.resetPassword.subject = function () {
     return "Password Reset Request email subject";
     };
    */

});