module.exports = {
    error: {
        tooShort: 'The time cannot be less than **1 second**..',
        tooLong: 'The time cannot be more than **24 days**..',
        cantFindId: 'I cannot find any active reminders with the ID `{id}`'
    },
    reminder: 'Hey {user}, here\'s your reminder.',
    remindSet: {
        created: 'I will remind you in **{time}**!',
        id: 'Id'
    },
    remindView: {
        created: 'Created',
        remindsIn: 'Reminds',
        message: 'Message',
        button: {
            delete: 'Delete',
            invite: 'Invite {user}'
        },
        reminderCount: 'You have {count} reminders',
        createFirst: 'Use `/remind create` fist to create a reminder!'
    },
    remindDelete: { deleted: 'Я удалила Ваше напоминание с ID `{id}`' }
};