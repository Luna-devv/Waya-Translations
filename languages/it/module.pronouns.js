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
            global: 'Hai aggiunto con successo {prn} come pronome preferito a livello globale.',
            guild: 'Hai aggiunto con successo {prn} come pronome preferito in questo Server.'
        }
    },
    error: {
        tooSlow: 'Sei stato troppo lento, per favore riprova!',
        fail: 'Impossibile salvare le impostazioni, per favore riprova!'
    }
};