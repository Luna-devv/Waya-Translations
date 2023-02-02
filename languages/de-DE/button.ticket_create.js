module.exports = {
    noData: 'Der Server kann nicht in der Datenbank gefunden werden!',
    noCategory: 'Die Ticketkategorie wurde gelöscht, bitte kontaktiere einen Server Administrator.',
    created: 'Dein Ticket, {channel}, wurde erstellt!',
    form: {
        formTitle: 'Ticket Öffnungsgrund',
        field: 'Warum willst du ein Ticket öffnen?',
        placeholder: 'Ich brauche Hilfe mit..'
    },
    commands: { closerequest: 'Erstelle eine Schließungsanfrage' },
    max: {
        category: 'Du kannst derzeit kein Ticket erstellen, da dieser Server [das maximale Kanallimit pro Kategorie]({docs}) von {num} erreicht hat. Bitte teile den Serveradministratoren mit, den Kategoriekanal auf {string} zu setzen, um dieses Problem zu lösen!\n\nHast noch Fragen? {support}',
        guild: 'Du kannst derzeit kein Ticket erstellen, da dieser Server das maximale Kanallimit von {num} erreicht hat. Bitte sage den Serveradministratoren, ein paar Kanäle zu löschen, um dieses Problem neu zu beheben!\n\nHast noch Fragen? {support}'
    }
};