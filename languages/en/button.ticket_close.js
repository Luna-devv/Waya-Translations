module.exports = {
    request: {
        ureStaff: 'You are staff, you can just use {command}.',
    },
    noData: 'Could not find guild in the Database!',
    confirm: {
        text: 'Are you sure that you want to delete {channel} forever?',
        configReason: 'For `reason`, please enable logging in `/config` => __Ticketing__!',
        required: 'A close reason is requried!',
        button: {
            close: 'Close Ticket',
            closeReason: 'Close Ticket with Reason'
        }
    },
    form: {
        formTitle: `Close {channel}`,
        reason: 'Reason'
    }
};
