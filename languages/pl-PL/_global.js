module.exports = {
    dms: 'Ta komenda nie może być użyta w prywatnych wiadomościach.',
    disabled: 'Zostałeś wyłączony.',
    mention: 'Cześć {user}, użyj **{emote} Komend**, aby mnie skonfigurować!\nUżyj {command}, aby uzyskać więcej informacji.',
    error: 'Wystąpił błąd podczas wykonywania tej komendy.\nDołącz do naszego serwera i zgłoś ten problem\nz id {issue}!',
    premium: {
        required: 'wymagana subskrypcja',
        embeds: {
            title: 'Przepraszamy, ale wymagana jest subskrypcja',
            title2: 'Przepraszamy, ale limit subskrypcji został osiągnięty',
            description: 'Aby zapewnić stabilnego bota i że pieniądze nie rosną na drzewach, musimy zablokować nieistotne funkcje za subskrypcją.'
        },
        button: {
            subscribe: 'Subskrybuj',
            support: 'Uzyskaj Pomoc'
        }
    },
    button: {
        add: 'Dodaj {name}',
        support: 'Pomoc'
    },
    permissions: {
        user: {
            guild: 'Nie możesz uruchomić tej akcji, ponieważ brakuje Ci uprawnień {perms}.',
            channel: 'Nie możesz uruchomić tej akcji, ponieważ brakuje uprawnień {perms} na tym kanale.',
            roles: {
                user: {
                    text: 'Nie możesz wykonać tej akcji, ponieważ najwyższa rola tego użytkownika jest wyższa niż twój.',
                    user: 'Użytkownik: {u.role} @ indeks {u.index}',
                    you: 'Ty: {y.role} @ indeks {y.index}'
                },
                role: {
                    text: 'Nie możesz wykonać tej czynności, ponieważ Twoja najwyższa rola jest mniejsza niż rola do zarządzania.',
                    user: 'Rola: {u.role} @ indeks {u.index}',
                    you: 'Ty: {y.role} @ indeks {y.index}'
                }
            }
        },
        me: {
            guild: 'Nie mogę uruchomić tej akcji, ponieważ brakuje mi uprawnień {perms}.',
            channel: 'Nie mogę uruchomić tej akcji, ponieważ brakuje mi uprawnień {perms} na tym kanale.',
            roles: {
                user: {
                    text: 'Nie mogę wykonać tej czynności, ponieważ najwyższa rola tego użytkownika jest wyższa niż moja.',
                    user: 'Użytkownik: {u.role} @ indeks {u.index}',
                    bot: 'Ja: {b.role} @ indeks {b.index}'
                },
                role: {
                    text: 'Nie mogę wykonać tej czynności, ponieważ moja najwyższa rola jest wyższa niż rola do zarządzania.',
                    user: 'Rola: {u.role} @ indeks {u.index}',
                    bot: 'Ja: {b.role} @ indeks {b.index}'
                }
            }
        }
    },
    ad: {
        vote: 'Wesprzyj Nas!',
        help: 'Potrzebujesz pomocy?'
    }
};