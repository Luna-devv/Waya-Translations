module.exports = {
    request: { ureStaff: 'You are staff, you can just use {command}.' },
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
    }
};