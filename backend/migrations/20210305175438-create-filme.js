'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Filmes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      imagem: {
        type: Sequelize.STRING
      },
      sinopse: {
        type: Sequelize.STRING
      },
      duracao: {
        type: Sequelize.TIME
      },
      link: {
        type: Sequelize.STRING
      },
      trailer: {
        type: Sequelize.STRING
      },
      avaliacao: {
        type: Sequelize.FLOAT
      },
      anoDeLancamento: {
        type: Sequelize.INTEGER
      },
      categoria: {
        type: Sequelize.STRING
      },
      classificacao: {
        type: Sequelize.STRING
      },
 
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Filmes');
  }
};