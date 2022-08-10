module.exports = {
    dms: 'Ova komanda ne može biti korištena unutar privatnih poruka.',
    disabled: 'Vi nemate pravo koristiti komande.',
    error: 'Dogodila se greška prilikom izvršavanja komande.\nPridružite se pomoćnom serveru i prijavite ovaj problem\ns ID-om {issue}!',
    premium: 'premium required',
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