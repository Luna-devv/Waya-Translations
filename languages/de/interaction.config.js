module.exports = {
    validate: 'Validiere daten...',
    notAllowed: 'Du kannst dieses Menü nicht benutzten.',
    global: {
        none: 'Keinen',
        useButtons: 'Editiere eine Option mit einen Button unten!',
        developer: {
            bypass: 'Dir fehlen die `MANAGE_GUILD` permissions um auf dieses Menü zu zugreifen\nWillst du dennoch fortfahren?',
            choice: {
                access: 'Ja, will ich',
                abord: 'Nein danke'
            },
            notice: 'aufpassen - Developer Privilegien..'
        },
        permissions: 'Fehlend: {perms}',
        await: {
            channel: 'Erwähne einen Channel oder sende die Id in den Chat.\nSchreibe `none` um den Channel zu entfernen.',
            category: 'Erwähne eine Katigorie oder sende die Id in den Chat.\nSchreibe `none` um die Katigorie zu entfernen.',
            role: 'Erwähne eine Rolle oder sende die Id in den Chat.\nSchreibe `none` um die Rolle zu entfernen.',
            message: 'Sende eine Nachricht die als {what} benutzt werden soll.',
            emote: 'Sende ein Emote welches als {what} benutzt werden soll.',
        },
        success: {
            set: '{what} wurde erfolgreich geändert zu **{data}**',
            removed: '{what} wurde erfolgreich entfernt.',
            fail: '{what} exestiert nicht in diesem Server..',
            lengthFail: '{what} ist länger als {max} Buchstaben! ({length} Buchstaben, {relative} zu viel)',
            otherLengthFail: '{what} ist kürzer als {max} Buchstaben! ({length} Buchstaben, {relative} zu wenig)',
            numberFail: '{what} ist keine Zahl zwischen {a} und {b}!',
            roleFail: 'Diese Rolle wird von entweder Discord selber oder einen Bot verwaltet!.'
        },
        type: {
            text: 'Text Channel',
            category: 'Katigorie',
            role: 'Rolle'
        },
        state: {
            enabled: 'Aktive',
            disabled: 'Inaktive',
        },
        option: {
            required: 'Erforderlich',
            optional: 'Optional'
        },
        button: {
            back: 'Zurück',
            disable: 'Deaktivieren',
            enable: 'Aktivieren',
            channel: {
                set: 'Setze Channel',
                edit: 'Channel Bearbeiten'
            },
            category: {
                set: 'Setze Katigorie',
                edit: 'Katigorie Bearbeiten'
            },
            role: {
                set: 'Setze Rolle',
                edit: 'Rolle Bearbeiten'
            },
            mode: {
                analyst: 'Analyst',
                cozy: 'Cozy'
            },
            dupaw: {    // This is a name, can't be translated
                enable: 'dupaw Aktivieren',
                disable: 'Disable Deaktivieren'
            }
        }
    }
};