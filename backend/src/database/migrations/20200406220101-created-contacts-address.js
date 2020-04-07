module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'contacts-address',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        fk_contacts_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: { model: 'contacts', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          unique: 'unique_tag',
        },
        fk_address_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: { model: 'address', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          unique: 'unique_tag',
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      },
      {
        uniqueKeys: {
          unique_tag: {
            customIndex: true,
            fields: ['fk_contacts_id', 'fk_address_id'],
          },
        },
      }
    );
  },

  down: queryInterface => {
    return queryInterface.dropTable('contacts-address');
  },
};
