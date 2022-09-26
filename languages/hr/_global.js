module.exports = {
    dms: 'Ova komanda ne može biti korištena unutar privatnih poruka.',
    disabled: 'Vi nemate pravo koristiti komande.',
    mention: 'Hej {user}, upotrijebi **{emote} SlashCommands** da me postaviš.\nKoristite {command} za više informacija.',
    error: 'Dogodila se greška prilikom izvršavanja komande.\nPridružite se pomoćnom serveru i prijavite ovaj problem\ns ID-om {issue}!',
    premium: {
        required: 'potrebna pretplata',
        embeds: {
            title: 'Žao nam je, ali potrebna je pretplata',
            title2: 'Nažalost, dosegnuto je ograničenje broja pretplata',
            description: 'Kako bismo mogli pružiti stabilnog bota i novac ne raste na drveću, moramo zaključati nebitne značajke iza pretplate.'
        },
        button: {
            subscribe: 'Pretplatite se',
            support: 'Obratite se podršci'
        }
    },
    button: { add: 'Dodaj {name}' },
    permissions: {
        user: {
            guild: 'Ne možete pokrenuti ovu radnju jer vam nedostaju dopuštenja {perms}.',
            channel: 'Ne možete pokrenuti ovu radnju jer vam nedostaju dopuštenja {perms} u ovom kanalu.',
            roles: {
                user: {
                    text: 'Ne možete izvršiti ovu radnju jer je najviša uloga tog korisnika viša od vaše.',
                    user: 'Korisnik: {u.role} @ index {u.index}',
                    you: 'Vi: {y.role} @ index {y.index}'
                },
                role: {
                    text: 'Ne možete izvršiti ovu radnju jer je vaša najviša uloga niža od uloge kojom želite upravljati.',
                    user: 'Uloga: {u.role} @ index {u.index}',
                    you: 'Vi: {y.role} @ index {y.index}'
                }
            }
        },
        me: {
            guild: 'Ne mogu pokrenuti ovu radnju jer mi nedostaju dopuštenja {perms}.',
            channel: 'Ne mogu pokrenuti ovu radnju jer mi nedostaju {perms} dopuštenja u ovom kanalu.',
            roles: {
                user: {
                    text: 'Ne mogu izvršiti ovu radnju jer je najviša uloga tog korisnika viša od moje.',
                    user: 'Korisnik: {u.role} @ index {u.index}',
                    bot: 'Ja: {b.role} @ index {b.index}'
                },
                role: {
                    text: 'Ne mogu izvršiti ovu radnju jer je moja najviša uloga viša od uloge upravljanja.',
                    user: 'Uloga: {u.role} @ index {u.index}',
                    bot: 'Ja: {b.role} @ index {b.index}'
                }
            }
        }
    }
};