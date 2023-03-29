module.exports = {
    request: { ureStaff: 'Vous êtes staff, vous pouvez juste utiliser {command}.' },
    noData: 'Impossible de trouver ce serveur dans la base de données !',
    confirm: {
        text: 'Are you sure that you want to delete {channel} forever?',
        configReason: 'For `reason`, please enable logging in `/config` => __Ticketing__!',
        required: 'Un raison pour la fermeture est requise !',
        button: {
            close: 'Fermer le Ticket',
            closeReason: 'Close Ticket with Reason'
        }
    },
    form: {
        formTitle: `Fermer {channel}`,
        reason: 'Raison'
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