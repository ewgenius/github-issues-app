how to start
```
npm install
gulp jade # compile html
```
then
```
ACCESS_TOKEN=<github_token> node index.js # run api server
gulp serve # run webpack dev server - open localhost:8080
```
or
```
gulp webpack # bundle all
ACCESS_TOKEN=<github_token> node index.js # run api server - open localhost:3000
```
