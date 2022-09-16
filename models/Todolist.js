module.exports = (sequelize,DataTypes)=>{
    const todolist = sequelize.define('Todolist',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:true
          },
          title:{
            type:DataTypes.STRING,
            allowNull:false
          },
          body:{
            type:DataTypes.STRING,
          },
          createdAt:{
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },{
        tableName:'todo_list'
    })
    return todolist
}