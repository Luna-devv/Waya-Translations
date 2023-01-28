module.exports = {
    disclaimer: 'Devi scegliere un\'opzione per applicare questa impostazione',
    choice: {
        remove: {
            question: 'Da dove vuoi rimuovere {prn} come pronome preferito?',
            button: {
                global: 'Rimuovi ovonque',
                guild: 'Rimuovi nel\' Server'
            }
        },
        add: {
            question: 'Dove vuoi impostare {prn} come tuo pronome preferito?',
            button: {
                global: 'Imposta dappertutto',
                guild: 'Imposta nel\'Server'
            }
        }
    },
    success: {
        removed: {
            global: 'Hai rimosso con successo {prn} come pronome preferito a livello globale.',
            guild: 'Hai rimosso con successo {prn} come pronome preferito in questo Server.'
        },
        added: {
            global: 'Successfully added {prn} as prefered pronoun globally.',
            guild: 'Successfully added {prn} as prefered pronoun in this guild.'
        }
    },
    error: {
        tooSlow: 'You were too slow, please try again!',
        fail: 'Failed to save your settings, please try again!'
    }
};