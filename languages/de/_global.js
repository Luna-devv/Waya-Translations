module.exports = {
    disabled: 'Du wurdest vom Bot gesperrt.',
    button: {
        add: '{name} Einladen',
    },
    permissions: {
        user: {
            guild: 'Du kannst diese Aktion nicht ausführen, da dir die {perms} Berechtigungen fehlen.',
            channel: 'Du kannst diese Aktion nicht ausführen, da dir die {perms} Berechtigungen in diesem Kanal fehlen.',
            roles: {
                user: {
                    text: 'Du kannst diese Aktion nicht ausführen, da die höchste Rolle von diesem User höher als deine ist.',
                    user: 'User: {u.Rolle} @ index {u.index}',
                    you: 'Du: {y.Rolle} @ index {y.index}'
                },
                role: {
                    text: 'Du kannst diese Aktion nicht ausführen da deine höchste Rolle unter der zu bearbeitenden Rolle ist.',
                    user: 'Rolle: {u.Rolle} @ index {u.index}',
                    you: 'Du: {y.Rolle} @ index {y.index}'
                }
            }
        },
        me: {
            guild: 'Ich kann diese Aktion nicht ausführen, da mir die {perms} Berechtigungen fehlen.',
            channel: 'Ich kann diese Aktion nicht ausführen, da mir die {perms} Berechtigungen in diesem Kanal fehlen.',
            roles: {
                user: {
                    text: 'Ich kann diese Aktion nicht ausführen, da die höchste Rolle von dem User höher als meine ist.',
                    user: 'User: {u.Rolle} @ index {u.index}',
                    bot: 'Ich: {b.Rolle} @ index {b.index}'
                },
                role: {
                    text: 'Ich kann diese Aktion nicht ausführen, da meine höchste Rolle unter der zu bearbeitenden Rolle ist.',
                    user: 'Rolle: {u.Rolle} @ index {u.index}',
                    bot: 'Ich: {b.Rolle} @ index {b.index}'
                }
            }
        }
    }
};
