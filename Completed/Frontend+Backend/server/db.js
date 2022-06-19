const Pool= require('pg').Pool;

const pool=new Pool({
    user: 'postgres',
    password: '1825',
    host: 'localhost',
    database: 'tbs_assignment',
    port: 5432
});

module.exports=pool;