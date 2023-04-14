module.exports = {
    dms: 'Kjo komandë nuk mund të përdoret brenda mesazheve private.',
    disabled: 'Ju keni qenë të paaftë.',
    mention: 'Hej {user}, përdor **{emote} SlashCommands** për të më konfiguruar!\nPërdorni {command} për më shumë informacion.',
    error: 'Ndodhi një gabim gjatë ekzekutimit të kësaj komande.\nJu lutemi bashkohuni me serverin e mbështetjes dhe raportoni këtë problem\nme Id-në {issue}!',
    premium: {
        required: 'kërkohet abonimi',
        embeds: {
            title: 'Na vjen keq, por kërkohet abonim',
            title2: 'Na vjen keq, por kufiri i abonimeve u arrit',
            description: 'Në mënyrë që të mund të ofrojmë një bot të qëndrueshëm dhe paratë të mos rriten në pemë, duhet të mbyllim veçori jo thelbësore pas një Abonimi.'
        },
        button: {
            subscribe: 'Abonohu',
            support: 'Kontaktoni mbështetjen'
        }
    },
    button: {
        add: 'Shto {name}',
        support: 'Mbështetja'
    },
    permissions: {
        user: {
            guild: 'Nuk mund ta ekzekutosh këtë veprim pasi të mungojnë lejet e {perms}.',
            channel: 'Nuk mund ta ekzekutosh këtë veprim pasi të mungojnë lejet e {perms} në këtë kanal.',
            roles: {
                user: {
                    text: 'Ju nuk mund ta kryeni këtë veprim pasi roli më i lartë i atij përdoruesi është më i lartë se i juaji.',
                    user: 'Përdoruesi: {u.role} @ indeks {u.index}',
                    you: 'Ju: {y.role} @ indeks {y.index}'
                },
                role: {
                    text: 'Ju nuk mund ta kryeni këtë veprim pasi roli juaj më i lartë është më i ulët se roli për të menaxhuar.',
                    user: 'Roli: {u.role} @ indeks {u.index}',
                    you: 'Ju: {y.role} @ indeks {y.index}'
                }
            }
        },
        me: {
            guild: 'Nuk mund ta ekzekutoj këtë veprim pasi më mungojnë lejet e {perms}.',
            channel: 'Nuk mund ta ekzekutoj këtë veprim pasi më mungojnë lejet e {perms} në këtë kanal.',
            roles: {
                user: {
                    text: 'Nuk mund ta kryej këtë veprim pasi roli më i lartë i atij përdoruesi është më i lartë se i imi.',
                    user: 'Përdoruesi: {u.role} @ indeks {u.index}',
                    bot: 'Unë: {b.role} @ indeks {b.index}'
                },
                role: {
                    text: 'Nuk mund ta kryej këtë veprim pasi roli im më i lartë është më i lartë se roli për të menaxhuar.',
                    user: 'Roli: {u.role} @ indeks {u.index}',
                    bot: 'Unë: {b.role} @ indeks {b.index}'
                }
            }
        }
    },
    ad: {
        vote: 'Na mbështetni!',
        help: 'Ke nevoje per ndihme?',
        notifyMe: 'Get social pings!'
    }
};