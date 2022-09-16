'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('todo_list', { 
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:true
      },
      title:{
        type:Sequelize.STRING,
        allowNull:false
      },
      body:{
        type:Sequelize.STRING,
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull: false
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
    }
     });

  },

  async down (queryInterface, Sequelize) {

      await queryInterface.dropTable('todo_list');

  }
};
