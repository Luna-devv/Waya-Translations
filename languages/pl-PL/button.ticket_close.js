module.exports = {
    request: { ureStaff: 'Jesteś administratorem, możesz użyć {command}.' },
    noData: 'Nie udało się znaleźć tego serwera w bazie danych!',
    confirm: {
        text: 'Czy na pewno chcesz usunąć {channel} na zawsze?',
        configReason: 'Z `powodu`, proszę włączyć logowanie w `/config` => __System zgłoszeń__!',
        required: 'Powód zamknięcia jest wymagany!',
        button: {
            close: 'Zamknij zgłoszenie',
            closeReason: 'Zamknij zgłoszenie z powodem'
        }
    },
    form: {
        formTitle: `Zamknij {channel}`,
        reason: 'Powód'
    },
    closeDm: {
        title: 'Zgłoszenie {id} w {server} zostało zamknięte',
        you: 'Ty',
        none: 'nikogo',
        data: {
            opened: 'Otwarte przez {user} o {date}',
            claimed: 'Obsługiwane przez {user} i rozwiązane w {time}',
            closed: 'Zamknięte przez {user} o {date}',
            members: 'Użytkownicy: {list}'
        },
        footer: 'Zasilane przez {domain}'
    }
};