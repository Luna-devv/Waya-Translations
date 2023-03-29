module.exports = {
    request: { ureStaff: 'Sei uno staff, puoi usare {command}.' },
    noData: 'Impossibile trovare la gilda nel database!',
    confirm: {
        text: 'Sei sicuro di voler\' eliminare {channel} per sempre?',
        configReason: 'Per `motivo`, per favore abilita il login `/config` => __Ticketing__!',
        required: 'È necessario un motivo per la chiusura!',
        button: {
            close: 'Chiudi Ticket',
            closeReason: 'Chiudi Ticket con motivo'
        }
    },
    form: {
        formTitle: `Chiudi {channel}`,
        reason: 'Motivo'
    },
    closeDm: {
        title: 'Ticket {id} in {server} Closed',
        you: 'You',
        none: 'none',
        data: {
            opened: 'Opened by {user} at {date}',
            claimed: 'Handled by {user} and solved in {time}',
            closed: 'Closed by {user} at {date}',
            members: 'Members: {list}'
        },
        footer: 'Powered by {domain}'
    }
};