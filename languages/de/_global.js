module.exports = {
    disabled: 'Du wurdest vom Bot gespeert.',
    button: {
        add: '{name} Einladen',
    },
    permissions: {
        user: {
            guild: 'Du kannst diese Aktion nicht ausführen da du die {perms} permissions fehlen.',
            channel: 'Du kannst diese Aktion nicht ausführen da du die {perms} permissions in diesem Channel fehlen.',
            Rolles: {
                user: {
                    text: 'Du kannst diese Aktion nicht ausführen da die höchste Rolle von dem User höher als deine ist.',
                    user: 'User: {u.Rolle} @ index {u.index}',
                    you: 'Du: {y.Rolle} @ index {y.index}'
                },
                Rolle: {
                    text: 'Du kannst diese Aktion nicht ausführen da deine höchste Rolle unter der zu bearbeiteten Rolle ist.',
                    user: 'Rolle: {u.Rolle} @ index {u.index}',
                    you: 'Du: {y.Rolle} @ index {y.index}'
                }
            }
        },
        me: {
            guild: 'Ich kann diese Aktion nicht ausführen da mir die {perms} permissions fehlen.',
            channel: 'Ich kann diese Aktion nicht ausführen da mir die {perms} permissions in diesem channel fehlen.',
            Rolles: {
                user: {
                    text: 'Ich kann diese Aktion nicht ausführen da die höschte Rolle von dem User höher als meine ist.',
                    user: 'User: {u.Rolle} @ index {u.index}',
                    bot: 'Ich: {b.Rolle} @ index {b.index}'
                },
                Rolle: {
                    text: 'Ich kann diese Aktion nicht ausführen da meine höchste Rolle unter der zu bearbeiteten Rolle ist.',
                    user: 'Rolle: {u.Rolle} @ index {u.index}',
                    bot: 'Me: {b.Rolle} @ index {b.index}'
                }
            }
        }
    }
};