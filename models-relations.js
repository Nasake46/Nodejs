const sequelize = require('./database')

const User = require('./models/User')
const Task = require('./models/Task')

// Relation User to Task
User.hasMany(Task)
Task.belongsTo(User)

sequelize.sync({alter: true})