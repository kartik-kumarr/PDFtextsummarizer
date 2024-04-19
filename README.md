# PDF text summarizer
A fully functional app to summarize PDFs and comapre the output from two LLMs LLamba2 and Microsofts's Phi. 
---
## Requirements

For development, you will need React, Node.js and Ollama as main packages.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v20.1.0

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Installing the required packages using a single command for the project

      $ npm install

---

## Install Ollama
Follow the instructions given in the [github page](https://github.com/ollama/ollama) as per your system. Then install both LLamba2 and Phi2 using following commands:
      $ ollama run llamba2
      $ ollama run phi

## Running the project
Go inside the main folder and then run

    $ nodemon src/server/main.js

## Opening in browser
Just type the below URL in your browser to run:

    $ http://localhost:8080/


