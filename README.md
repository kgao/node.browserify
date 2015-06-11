# node.browserify
Bundle up node server side js modules to client side js.


# Get Start

	$ npm install
	$ npm start


# Browserify Command (under root: node.browserify/)
	
1.Install browserify globally:

	$ sudo npm install -g browserify

2.Browserify your serverside(under node/) js to clientside (under bundle/), i.e:

	$ browserify node/main.js -o bundle/bundle.js
	
3.Drop a single <script> tag into your html and you are done! 
	
	<script src="bundle.js"></script>
	
