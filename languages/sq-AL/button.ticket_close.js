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
        title: 'Ticketa {id} në {server} u mbyll',
        you: 'Ti',
        none: 'asnje',
        data: {
            opened: 'Krijuar nga {user} ne {date}',
            claimed: 'Trajtuar nga {user} dhe zgjidhur në {time}',
            closed: 'Mbyllur nga {user} në {date}',
            members: 'Anëtarët: {list}'
        },
        footer: 'Mundësuar nga {domain}'
    }
};