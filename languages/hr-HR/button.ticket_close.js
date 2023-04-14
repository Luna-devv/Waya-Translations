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
        title: 'Ulaznica {id} na {server} zatvorena',
        you: 'Vi',
        none: 'prazno',
        data: {
            opened: 'Otvorio {user} {date}',
            claimed: 'Rukovao {user} i riješeno za {time}',
            closed: 'Zatvorio {user} {date}',
            members: 'Članovi: {list}'
        },
        footer: 'Pokreće {domain}'
    }
};