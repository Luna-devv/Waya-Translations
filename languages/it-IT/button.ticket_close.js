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
        title: 'Ticket {id} in {server} Chiuso',
        you: 'Tu',
        none: 'nessuno',
        data: {
            opened: 'Creato da {user} il {date}',
            claimed: 'Gestito da {user} e risolto in {time}',
            closed: 'Chiuso da {user} al {date}',
            members: 'Elenco dei membri: {list}'
        },
        footer: 'Fornito da {domain}'
    }
};