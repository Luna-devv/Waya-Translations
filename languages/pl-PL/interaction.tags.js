module.exports = {
    lengthFail: 'Nazwa tagu nie może być dłuższa niż {max} znaków!',
    alreadyExists: 'Tag o tej nazwie już istnieje!',
    tagsLimit: 'Osiągnąłeś limit gildii **{count}/{max} tagów**!',
    regexFail: 'Weryfikacja nazwy tagu nie powiodła się dla używania komend!\nZnaki specjalne są niedozwolone.',
    alreadyExistsDefault: 'Domyślna komenda o tej nazwie już istnieje!',
    invalidTag: 'Tag o tej nazwie nie istnieje!',
    info: {
        title: {
            created: 'Utworzono',
            author: 'Autor',
            usesWeek: 'Używa w tygodniu',
            uses: 'Użyć',
            last: 'Ostatnio używane',
            name: 'Nazwa Tagu',
            slash: 'Komenda',
            channels: 'Kanały',
            tags: 'Tagi',
            totalUses: 'Całkowite użycia',
            totalTags: 'Wszystkie tagi',
            totalChannels: 'Wszystkie kanały'
        },
        description: {
            usesWeek: '{number}/tydz',
            // wk: week;; example: 43/wk
            slash: {
                true: 'aktywny',
                false: 'nieaktywny(a)'
            },
            channelUses: '{number} ;[użycie, użyć]'
        },
        noData: 'brak danych'
    },
    overview: {
        title: 'Konfiguracja Tagu',
        message: 'Wiadomość',
        embed: 'Osadzona Treść',
        placeholder: 'Przydatne Symbole Zastępcze',
        button: {
            exit: 'Zapisz i wyjdź',
            permission: 'Wybierz uprawnienie potrzebne dla użytkownika',
            color: {
                enabled: 'Wybierz kolor dla osadzenia',
                disabled: 'Użyj osadzeń i wybierz kolor'
            },
            group: {
                ticket: {
                    disable: 'Wyłącz tag zgłoszenia',
                    enable: 'Włącz tag zgłoszenia'
                }
            },
            aliases: 'Zarządzaj aliasami nazw',
            permissions: {
                Administrator: 'Administrator',
                ManageChannels: 'Zarządzanie Kanałami',
                ManageGuild: 'Zarządzanie Serwerem',
                ManageMessages: 'Zarządzanie Wiadomościami',
                ManageNicknames: 'Zarządzanie Nickami',
                ManageRoles: 'Zarządzanie Rolami',
                ManageWebhooks: 'Zarządzanie Webhookami',
                ManageEmojisAndStickers: 'Zarządzenie Emotikonami i Naklejkami',
                ManageEvents: 'Zarządzaj Wydarzeniami',
                ManageThreads: 'Zarządzaj Wątkami',
                none: 'Brak'
            }
        }
    },
    form: {
        formName: '{name} tag',
        message: { content: 'Zawartość' },
        embed: {
            title: 'Tytuł',
            description: 'Opis',
            thumbnail: 'Miniaturka',
            image: 'Obrazek',
            footer: 'Stopka'
        },
        aliases: { name: 'Nazwa aliasów ({max} maks.)' }
    },
    success: {
        message: 'Pomyślnie dodano tag {name}.',
        command: 'Wypróbuj z {command}'
    },
    list: {
        title: {
            text: 'Tekst ;[Komenda, Komendy]',
            slash: 'Ukośnik ;[Komenda, Komendy]'
        },
        none: 'brak tagów',
        disabled: '{amount} ;[tag jest ukryty, tagi są ukryte] z powodu braku uprawnień',
        // ;[singular, plural]
        amount: '{amount} tagów • Używaj z {command}'
    },
    deleted: 'Pomyślnie usunięto tag **{name}**.'
};