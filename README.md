isMobile-node
=============

Stupid simple mobile detection script for node.js and express

Installation
=============

This package is registered with npm. Simply use

    npm install ismobile

or include it in your package.json

    "dependencies": {
        "express": "3.0.x",
        "jade": "*",
        "ismobile": "*",
    },

Usage
=============

This small script allows you to control what gets sent to mobile and desktop in the templating layer. Its middleware and needs to be included in your app.configuration like so

    app.configure(function(){
    	// your setup

    	require('isMobile')(app);  // this must be BEFORE
    	app.use(app.router);       // app.router!

    	// continuing your setup
    });

Now you can use if blocks in your templates (jade shown here) using the two key variable `isMobile` and `isDesktop` :

    html
        head
            title detection basic

            if isDesktop
                //- include desktop css here
            else
                //- include mobile css here

        body
            if isMobile
                h1 Its Mobile!
            else
                h1 Its Desktop!

Thats it! Like it says, stupid simple. Here is the one thing to be aware of, this script treats tablet computers as desktops. If you want to serve the mobile version of your site to an iPad, this script is not for you (atleast not this version); also you should be ashamed for annoying me as an iPad user.

