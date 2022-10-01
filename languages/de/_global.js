module.exports = {
    dms: 'Dieser Command kann nicht in privaten Nachrichten ausgeführt werden.',
    disabled: 'Du wurdest vom Bot gesperrt.',
    mention: 'Hey {user}, benutze **{emote} SlashCommands** um mich aufzusetzen!\nNutze {command} für weitere Informationen.',
    error: 'Beim Ausführen des Commands ist ein Fehler aufgetreten\nBitte joine den Support Server und melde diesen Fehler\nmit der Id {issue}!',
    premium: {
        required: 'abo erforderlich',
        embeds: {
            title: 'Entschuldigung, aber Enterprise ist erforderlich',
            title2: 'Sorry but the Subscriptions limit was reached',
            description: 'Damit wir einen stabilen Bot zur Verfügung stellen können und Geld nicht auf Bäumen wächst, müssen wir nicht wesentliche Funktionen hinter einem Abonnement sperren.'
        },
        button: {
            subscribe: 'Subscribe',
            support: 'Support kontaktieren'
        }
    },
    button: { add: '{name} Einladen' },
    permissions: {
        user: {
            guild: 'Du kannst diese Aktion nicht ausführen, da dir die {perms} Berechtigungen fehlen.',
            channel: 'Du kannst diese Aktion nicht ausführen, da dir die {perms} Berechtigungen in diesem Kanal fehlen.',
            roles: {
                user: {
                    text: 'Du kannst diese Aktion nicht ausführen, da die höchste Rolle von diesem User höher als deine ist.',
                    user: 'User: {u.role} @ index {u.index}',
                    you: 'Du: {y.role} @ index {y.index}'
                },
                role: {
                    text: 'Du kannst diese Aktion nicht ausführen da deine höchste Rolle unter der zu bearbeitenden Rolle ist.',
                    user: 'Rolle: {u.role} @ index {u.index}',
                    you: 'Du: {y.role} @ index {y.index}'
                }
            }
        },
        me: {
            guild: 'Ich kann diese Aktion nicht ausführen, da mir die {perms} Berechtigungen fehlen.',
            channel: 'Ich kann diese Aktion nicht ausführen, da mir die {perms} Berechtigungen in diesem Kanal fehlen.',
            roles: {
                user: {
                    text: 'Ich kann diese Aktion nicht ausführen, da die höchste Rolle von dem User höher als meine ist.',
                    user: 'User: {u.role} @ index {u.index}',
                    bot: 'Ich: {b.role} @ index {b.index}'
                },
                role: {
                    text: 'Ich kann diese Aktion nicht ausführen, da meine höchste Rolle unter der zu bearbeitenden Rolle ist.',
                    user: 'Rolle: {u.role} @ index {u.index}',
                    bot: 'Ich: {b.role} @ index {b.index}'
                }
            }
        }
    }
};