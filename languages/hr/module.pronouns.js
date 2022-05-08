module.exports = {
    choice: {
        remove: {
            question: 'Gdje želite ukloniti {prn} kao svoju zamjenicu?',
            button: {
                global: 'Makni svuda',
                guild: 'Makni u serveru'
            }
        },
        add: {
            question: 'Gdje želite postaviti {prn} kao svoju zamjenicu?',
            button: {
                global: 'Postavi svuda',
                guild: 'Postavi u serveru'
            }
        }
    },
    success: {
        removed: {
            global: 'Uspješno uklonjen/a {prn} kao globalna zamjenica.',
            guild: 'Uspješno uklonjen/a {prn} kao zamjenica u serveru..'
        },
        added: {
            global: 'Uspješno postavljen/a {prn} kao globalna zamjenica.',
            guild: 'Uspješno postavljen/a {prn} kao zamjenica u serveru.'
        }
    },
    error: {
        tooSlow: 'Prespori ste, pokušajte opet!',
        fail: 'Neuspješno spremanje podataka, pokušajte opet!'
    }
};