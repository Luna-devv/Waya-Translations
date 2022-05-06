module.exports = {
    confirm: {
        description: 'Вы уверены, что хотите __сбросить__ информацию о **{type}** участника **{user}**?',
        button: {
            delete: 'Я уверен, удалить',
            abord: 'Не важно'
        }
    },
    delete: {
        invalidUser: 'Участника нет в базе данных!',
        bulkInvalidUser: 'Ни одного участника нет в базе данных!',
        reset: '**{type}** участника **{user}** сброшено!',
        bulkReset: '**{type}** участника **{user}** в процессе удаления!'
    },
    aborted: 'Отменено удаление информации о **{type}** **{user}**!'
};
