//BEGIN:
import chalk from 'chalk';
import express from 'express';
import os from 'os';
const v1 = express();
const server_Hostname = os.hostname();

//LISTENERS
v1.listen(80);

//EXPRESS 
v1.use((req, res, next) => {
    console.log('Req executed from Source IP', req.ip);
    next();
})

//FOR V1 ON PORT 80
v1.get('/',(req, res, next) => {
   res.send(chalk.blue(' Informatica Version-1.0\n','Deployment: BLUE\n','HOST:',server_Hostname,'\n'))
});
v1.set ('json spaces', 2);
v1.get('/healthz', (req, res) => {
    res.json({'health': 'OK',})
});
//END
