# OS-Dashboard
# Dashboard created to Operational System class at UTFPR - Curitiba.
# This homework objective is observe system processes, CPU and RAM Memory.

Operational System:
    Ubuntu 22.04.2
    
Dependencies:
    NodeJS
    
Versions: # You can try run with another versions, but I don't grant that it'll work.
    node v18.5.0
    npm v8.12.1

Technologies:
    ReactJS # to frontEnd
    Express # to restAPI

# You need to run frontEnd and restAPI.

Running restAPI:
    cd restAPI
    npm install
    node index.js
   
Running frontEnd:
    cd frontEnd
    npm install
    npm run dev
    
# restAPI listen to port 3000.
# Fell free to change it in the code.
# # If you change the port in the restAPI, you'll also need to change inside the frontEnt, in the App.jsx file.

# frontEnd uses port 5173 to run.
# Access localhost:5173.
# The terminal will show you the url.
