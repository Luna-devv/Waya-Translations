module.exports = {
    messages: 'Poruke',
    name: 'Ime',
    id: 'ID',
    created: 'Napravljen',
    joined: 'Prudružen',
    invited: 'Pozvan od',
    none: 'prazno',
    pronouns: {
        title: 'Zamjenice',
        none: 'Nema postavljenih zamjenica'
    },
    button: {
        avatar: 'URL Avatara',
        banner: 'URL Banera'
    },
    actions: {
        notAllowed: 'Ne možete koristiti ovaj izbornik.',
        invalidTime: 'Trajanje ne može biti kraće od sekunde!',
        otherInvalidTime: 'Trajanje ne može biti duže od 28 dana!',
        placeholder: 'Odaberite radnju',
        option: {
            ban: 'Ban-uj korisnika',
            kick: 'Kick-uj korisnika',
            timeout: 'Timeout-uj korisnika',
            role: 'Dodijelite ulogu'
        },
        form: {
            reason: 'Razlog',
            note: 'Napomena moderatora',
            duration: 'Trajanje'
        },
        success: {
            ban: '{user} je uspješno banovan iz {guild}.',
            kick: '{user} je uspješno kickovan iz {guild}.',
            timeout: '{user} je uspješno timeoutan u {guild}.'
        }
    }
};