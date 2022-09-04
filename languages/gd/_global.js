module.exports = {
    dms: 'Das nix gehen in DMs.',
    disabled: 'Haha! Du nix dürfen Bot nutzen!',
    mention: 'Hey {user}, use **{emote} SlashCommands** to set me up!\nUse {command} for more informations.',
    error: 'Huppala! Da is was put.\nJoin ma den Support Server und sag denen die Fehler ID {issue}',
    premium: 'nix für Geringverdiener',
    button: { add: 'hohl dir {name} ok?' },
    permissions: {
        user: {
            guild: 'Keine {perms} rechte!',
            channel: 'Keine {perms} rechte in dem Kanal!',
            roles: {
                user: {
                    text: 'Ist nicht! Die Person ist besser als du!',
                    user: 'User: {u.role} @ index {u.index}',
                    you: 'You: {y.role} @ index {y.index}'
                },
                role: {
                    text: 'Deine Rolle ist unter der rolle die du managen willst kek.',
                    user: 'Role: {u.role} @ index {u.index}',
                    you: 'You: {y.role} @ index {y.index}'
                }
            }
        },
        me: {
            guild: 'Geht nicht weil ich kann das nicht. Mir fehlt {perms}.',
            channel: 'Ich kann das nd weil mir fehlt {perms} in diesem Kanal.',
            roles: {
                user: {
                    text: 'Öh ja... Problem... Meine Rolle is zu weit unten..',
                    user: 'User: {u.role} @ index {u.index}',
                    bot: 'Me: {b.role} @ index {b.index}'
                },
                role: {
                    text: 'Ich nix können weil meine Rolle weiter unten als die die ich will',
                    user: 'Role: {u.role} @ index {u.index}',
                    bot: 'Me: {b.role} @ index {b.index}'
                }
            }
        }
    }
};