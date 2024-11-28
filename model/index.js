const { FOREIGNKEYS } = require('sequelize/lib/query-types');
const dbconfig=require('../config/dbconfig.js');

const {Sequelize,DataTypes}=require('sequelize')

const sequelize=new Sequelize(
    dbconfig.db,
    dbconfig.User,
    dbconfig.password,{
        host:dbconfig.HOST,
        dialect:dbconfig.dialect,
        operatorAlias:false,


        pool:{
            max:dbconfig.pool.max,
            min:dbconfig.pool.min,
            acquire:dbconfig.pool.acquire,
            idle:dbconfig.pool.idle,

        }
    }
)

sequelize.authenticate()
.then(()=>{
    console.log('connected')
})
.catch(err=>{
    console.log('Error'+err)
})

const db={}

db.Sequelize=Sequelize
db.sequelize=sequelize

db.product=require('./productModel.js')(sequelize,DataTypes)
db.reviews=require('./reviewmodel.js')(sequelize,DataTypes)

db.sequelize.sync({force: false})
.then(()=>{
    console.log('yes resycn')
})

//1 to many relation
db.product.hasMany(db.reviews,{
    FOREIGNKEYS:'product_id',
    as:'review'
})

db.reviews.belongsTo(db.product,{
    FOREIGNKEYS:'product_id',
    as:'product'
})

module.exports = db


