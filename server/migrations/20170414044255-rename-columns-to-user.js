'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.renameColumn('Users', 'first_name', 'firstName');
    queryInterface.renameColumn('Users', 'last_name', 'lastName');
    queryInterface.renameColumn('Users', 'security_question', 'securityQuestion');
    queryInterface.renameColumn('Users', 'security_answer', 'securityAnswer');
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Users', 'first_name', 'firstName');
    queryInterface.removeColumn('Users', 'last_name', 'lastName');
    queryInterface.removeColumn('Users', 'security_question', 'securityQuestion');
    queryInterface.removeColumn('Users', 'security_answer', 'securityAnswer');
  }
};
