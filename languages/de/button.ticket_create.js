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
        category: 'You cannot create a Ticket at this time as this server reached [the max channel limit per category]({docs}) of {num}. Please tell the server admins to set the category channel to {string} to resolve this issue!\n\nHaving questions? {support}',
        guild: 'You cannot create a Ticket at this time as this server reached the max channel limit of {num}. Please tell the server admins to delete a few channels to resovle this issue!\n\nHaving questions? {support}'
    }
};