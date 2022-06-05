module.exports = {
    confirm: {
        description: 'Are you sure that you want to __reset__ the **{type}** data from **{user}**?',
        button: {
            delete: 'I\'m sure, delete',
            abord: 'Nevermind'
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
