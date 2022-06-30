module.exports = {
    confirm: {
        description: 'Вы уверены, что хотите __сбросить__ информацию о **{type}** участника **{user}**?',
        button: {
            delete: 'I\'m sure, delete',
            abord: 'Неважно'
        }
    },
    delete: {
        invalidUser: 'User does not exist in the Database!',
        bulkInvalidUser: 'No users exist in the Database!',
        reset: 'The **{type}** from **{user}** has been reset!',
        bulkReset: '**{type}** from **{user}** is in process of getting deleted!'
    },
    aborted: 'Aborted **{user}**\'s **{type}** deletion!'
};