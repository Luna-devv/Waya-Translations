module.exports = {
    disclaimer: 'Morate odabrati opciju za primjenu ove postavke',
    choice: {
        remove: {
            question: 'Odakle želite ukloniti {prn} kao željenu zamjenicu?',
            button: {
                global: 'Uklonite posvuda',
                guild: 'Ukloni u serveru'
            }
        },
        add: {
            question: 'Gdje želite postaviti {prn} kao svoju željenu zamjenicu?',
            button: {
                global: 'Postavite posvuda',
                guild: 'Postavite u serveru'
            }
        }
    },
    success: {
        removed: {
            global: 'Uspješno je uklonjena {prn} kao preferirana zamjenica na globalnoj razini.',
            guild: 'Uspješno je uklonjena {prn} kao preferirana zamjenica u ovom serveru.'
        },
        added: {
            global: 'Uspješno je postavljena {prn} kao preferirana zamjenica na globalnoj razini.',
            guild: 'Uspješno je postavljena {prn} kao preferirana zamjenica u ovom serveru.'
        }
    },
    error: {
        tooSlow: 'Bili ste prespori, pokušajte ponovo!',
        fail: 'Spremanje vaših postavki nije uspjelo, pokušajte ponovno!'
    }
};