module.exports = {
    request: { ureStaff: 'Ju jeni staf, thjesht mund të përdorni {command}.' },
    noData: 'Nuk mund të gjeja Serverin në bazën e të dhënave!',
    confirm: {
        text: 'Jeni i sigurt se doni të fshini {channel} përgjithmonë?',
        configReason: 'Për \'arsye\', ju lutemi aktivizoni hyrjen në `/config` => __Ticketing__!',
        required: 'Kërkohet një arsye për të mbyllur këtë Ticket!',
        button: {
            close: 'Mbylle Ticketen',
            closeReason: 'Mbylle Ticketen me arsye'
        }
    },
    form: {
        formTitle: `Mbyll {channel}`,
        reason: 'Arsyeja'
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