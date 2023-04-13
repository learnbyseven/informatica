//BEGIN:
import chalk from 'chalk';
import express from 'express';
import os from 'os';
const v2 = express();
const server_Hostname = os.hostname();

//LISTENERS
v2.listen(80);

//EXPRESS 
v2.use((req, res, next) => {
    console.log('Req executed from Source IP', req.ip);
    next();
})

//FOR V1 ON PORT 80
v2.get('/',(req, res, next) => {
   res.send(chalk.green(' Informatica Version-2.0\n','Deployment: GREEN\n','HOST:',server_Hostname,'\n'))
});
v2.set ('json spaces', 2);
v2.get('/healthz', (req, res) => {
    res.json({'health': 'OK',})
});
//END
