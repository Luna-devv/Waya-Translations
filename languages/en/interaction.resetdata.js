module.exports = {
    confirm: {
        description: 'Are you sure that you want to __reset__ the **{type}** data from **{user}**?',
        button: {
            delete: 'I\'m sure, delete',
            abord: 'Nevermind'
        }
    },
    delete: {
        invalidUser: 'User does not exit in the Data Base!',
        bulkInvalidUser: 'No users exit in the Data Base!',
        reset: 'The **{type}** from **{user}** has been reset!',
        bulkReset: '**{type}** from **{user}** is in process of getting deleted!'
    },
    aborted: 'Abored **{user}**\'s **{type}** deletion!'
};