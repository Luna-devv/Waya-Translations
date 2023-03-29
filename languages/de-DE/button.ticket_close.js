module.exports = {
    request: { ureStaff: 'Du bist ein Staff, Du kannst einfach {command} verwenden.' },
    noData: 'Der Server kann nicht in der Datenbank gefunden werden!',
    confirm: {
        text: 'Bist du dir sicher, dass du {channel} für immer löschen willst?',
        configReason: 'Um einen Schließungsgrund anzugeben, aktiviere bitte Logging in `/config` => __Tickets__!',
        required: 'Ein Schließungsgrund muss angegeben werden!',
        button: {
            close: 'Ticket schließen',
            closeReason: 'Ticket mit Grund schließen'
        }
    },
    form: {
        formTitle: `Schließe {channel}`,
        reason: 'Grund'
    },
    closeDm: {
        title: 'Ticket {id} in {server} geschlossen',
        you: 'Du',
        none: 'keinem',
        data: {
            opened: 'Geöffnet von {user} am {date}',
            claimed: 'Behandelt von {user} und gelöst in {time}',
            closed: 'Geschlossen von {user} am {date}',
            members: 'Mitglieder: {list}'
        },
        footer: 'Unterstützt von {domain}'
    }
};