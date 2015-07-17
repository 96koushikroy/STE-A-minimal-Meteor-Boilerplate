/**
 * You will write all your methods here. These will be executed on the server.
 * Some snippets are included below.
 */

Meteor.methods({

    /*Code Snippet for sending email using emails package included in the boilerplate*/

    /*

    sendEmail: function (to, subject, text) {
     check([to, subject, text], [String]);

     // Let other method calls from the same client start running,
     // without waiting for the email sending to complete.
     this.unblock();

     Email.send({
     to: to,
     from: 'andromarketters@gmail.com',
     subject: subject,
     text: text
     });

     }*/
    /*

    Now on the client you can use
    Meteor.call('sendemail','abc@abc.com','test email','testemailbody') to send an email

    */

    /*************************************/
/* Code snippet for remote API Calls using http package included in the boilerplate */

    /*'getdata': function () {
        res = HTTP.call("GET","API-URL");
        var resu=res.content;
        var resul = JSON.parse(resu);
        return resul;
    }*/

    /*

     Now on the client you can use
     Meteor.call('getdata',function(err,data){
     if(!err)
     {console.log(data);}
     }); to send an email

     */

});