# OakGateway
A very simple RESTful server for publishing messages to OakTest

Steps to even stand a chance of making this work...

* Install the Node.js runtime from https://nodejs.org/en/
* Add Node support to Intellij
  * Preferences/plugins - 'Install Jetbrains plugin...' and search for Node
  * Probably restart Intellij at this point
  * Now Preferences/Languages & Frameworks/Node.js and NPM
  * I had to do some setup here that I can't remember. Sorry. Think you might need to point it at the local location of Node.
* Download OakGateway and open it in Intellij
* On the command line, go to the top level dir of OakGateway and run 'npm install' - this will hopefully install all the dependencies for the project (as they're intentionally not in source control)

After all this, you might stand a chance of running it...

When you run it, you'll need to specify two environment variables:
* AUTH_NAME
* AUTH_PASSWORD

These define the username and password for Basic Auth - it's not great but better than nothing.
You can specify these in Intellij in Run/Edit Configurations. Use the '...' button next to the Environment Variables field to make life easy.
