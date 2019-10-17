Steps to Setup Typescript with node/Express

1) Install typescript on your machine.
	sudo npm install -g typescript    (-g flag is used to install typescript globally on you machine)
	
2) create a project folder assume node-typescript

3) create a typescript config file in the folder using 

	tsc --init
	
the above file created will be used to configure compile file configuration

4) Create package.json file in the root directory 

	npm init -y  (y flag is used to generate with default setting)
	
	
5) install express js 
	sudo npm install express --save
	
6) Install dev dependencies

	sudo npm i -D typescript ts-node nodemon @types/node @types/express

7) Running server npm run dev start etc