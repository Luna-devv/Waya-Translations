module.exports = {
    confirm: {
        description: 'Czy na pewno chcesz __zresetować__ **{type}** danych od **{user}**?',
        button: {
            delete: 'Jestem pewien, usuń',
            abord: 'Nieważne'
        }
    },
    delete: {
        invalidUser: 'Użytkownik nie istnieje w bazie danych!',
        bulkInvalidUser: 'Brak użytkowników w bazie danych!',
        reset: '**{type}** z **{user}** został zresetowany!',
        bulkReset: '**{type}** z **{user}** jest w trakcie usuwania!'
    },
    aborted: 'Przerwano usuwanie **{user} {type}**!'
};