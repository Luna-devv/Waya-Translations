module.exports = {
    request: { ureStaff: 'Vi ste osoblje, možete samo koristiti {command}.' },
    noData: 'Ne mogu pronaći server u bazi podataka!',
    confirm: {
        text: 'Jeste li sigurni da želite zauvijek izbrisati {channel}?',
        configReason: 'Za `razlog`, molimo omogućite prijavu u `/config` => __Ulaznice__!',
        required: 'Potreban je razlog za zatvaranje!',
        button: {
            close: 'Zatvori ulaznicu',
            closeReason: 'Zatvorite ulaznicu s razlogom'
        }
    },
    form: {
        formTitle: `Zatvori {channel}`,
        reason: 'Razlog'
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