module.exports = {
    disclaimer: 'You have to choose an option to apply this setting',
    choice: {
        remove: {
            question: 'Von wo willst du {prn} als Pronomen entfernen?',
            button: {
                global: 'Überall',
                guild: 'Von diesem Server'
            }
        },
        add: {
            question: 'Wo willst du {prn} als Pronomen hinzufügen?',
            button: {
                global: 'Überall',
                guild: 'In diesem Server'
            }
        }
    },
    success: {
        removed: {
            global: '{prn} wurde überall erfolgreich als Pronomen entfernt.',
            guild: '{prn} wurde erfolgreich als Pronomen in diesem Server entfernt.'
        },
        added: {
            global: '{prn} wurde überall erfolgreich als Pronomen hinzugefügt.',
            guild: '{prn} wurde erfolgreich als Pronomen in diesem Server hinzugefügt.'
        }
    },
    error: {
        tooSlow: 'Du warst zu langsam, probiere es noch einmal!',
        fail: 'Speichern fehlgeschlagen, bitte probiere es noch einmal!'
    }
};