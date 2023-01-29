module.exports = {
    request: { ureStaff: 'Vous êtes staff, vous pouvez juste utiliser {command}.' },
    noData: 'Could not find guild in the Database!',
    confirm: {
        text: 'Are you sure that you want to delete {channel} forever?',
        configReason: 'For `reason`, please enable logging in `/config` => __Ticketing__!',
        required: 'A close reason is required!',
        button: {
            close: 'Fermer le Ticket',
            closeReason: 'Close Ticket with Reason'
        }
    },
    form: {
        formTitle: `Close {channel}`,
        reason: 'Raison'
    }
};