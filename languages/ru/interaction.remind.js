module.exports = {
    error: {
        tooShort: 'Время не может быть меньше **1 секунды**..',
        tooLong: 'Время не может быть больше **24 дней**..',
        cantFindId: 'Я не могу найти активные напоминания с ID `{id}`'
    },
    reminder: 'Хей, {user}, вот твоё напоминание',
    remindSet: {
        created: 'Я напомню Вам в **{time}**!',
        id: 'ID'
    },
    remindView: {
        created: 'Создано',
        remindsIn: 'Напоминания',
        message: 'Сообщение',
        button: {
            delete: 'Удалить',
            invite: 'Пригласить {user}'
        },
        reminderCount: 'У Вас {count} напоминаний',
        createFirst: 'Используйте сначала `/remind create`для создания напоминания!'
    },
    remindDelete: { deleted: 'Я удалила Ваше напоминание с ID `{id}`' }
};