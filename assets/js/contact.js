console.log('contact');
$(document).ready(function () {
    $('.submit').click(function (event) {
        event.preventDefault();
        console.log('clicked');

        // const name = $('#name').val();
        // const email = $('#email').val();
        // const message = $('#message').val();
        // const statusElm = $('.status');
        // statusElm.empty();

        // if (email.length > 5 && email.includes('@') && email.includes('.')) {
        //     console.log('hello');
        //     statusElm.append('<div>Email is valid</div>');
        // } else {
        //     event.preventDefault();
        //     statusElm.append('<div>Email is not valid</div>');
        // }

        // if (name.length > 2) {
        //     statusElm.append('<div>Name is valid</div>');
        // } else {
        //     event.preventDefault();
        //     statusElm.append('<div>Name is not valid</div>');
        // }

        // if (message.length > 2) {
        //     statusElm.append('<div>Message is valid</div>');
        // } else {
        //     event.preventDefault();
        //     statusElm.append('<div>Message is not valid</div>');
        // }
    });
});
