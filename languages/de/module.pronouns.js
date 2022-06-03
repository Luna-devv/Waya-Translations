module.exports = {
    choice: {
        remove: {
            question: 'Von wo willst du {prn} als Pronomen entfernen?',
            button: {
                global: 'Überral',
                guild: 'In diesem Server'
            }
        },
        add: {
            question: 'Wo willst du {prn} als Pronomen hinzufügen?',
            button: {
                global: 'Überral',
                guild: 'In diesem Server'
            }
        }
    },
    success: {
        removed: {
            global: '{prn} wurde erfolgreich überral als Pronomen entfernt.',
            guild: '{prn} wurde erfolgreich als Pronomen in diesem Server entfernt.'
        },
        added: {
            global: '{prn} wurde erfolgreich überral als Pronomen hinzugefügt.',
            guild: '{prn} wurde erfolgreich als Pronomen in diesem Server hinzugefügt.'
        }
    },
    error: {
        tooSlow: 'Du warst zu langsam, probiere es erneut!',
        fail: 'Speichern fehlgeschlafen, bitte probiere es erneut!'
    }
};