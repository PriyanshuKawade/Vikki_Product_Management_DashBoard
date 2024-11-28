module.exports={
    HOST:'localhost',
    User:'root',
    password:'root',
    db:'node_api_db',
    dialect:'mysql',

    pool:{
        max: 5, min:0,acquire:30000,
        idle:10000
    }
}