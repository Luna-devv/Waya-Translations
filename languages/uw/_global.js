module.exports = {
    dms: 'Babe im so sowwy... this command cannyot be used inside of pwivate messages.',
    disabled: 'What did u do babe? U have been disabwed fwom using me :c',
    mention: 'Hey {user}, use **{emote} SlashCommands** to set me up!\nUse {command} for more informations.',
    error: 'oh nyoo babe~ i\'m so sowwy, but I\ncaused an ewwow whiwe wunnying this...\nwepowt this issue with id {issue}.. >~<',
    premium: 'pwemium wequiwed',
    button: { add: 'Add {name} nyw' },
    permissions: {
        user: {
            guild: 'sowwy baby, u cannyot wun this action cuz u\'we missing the {perms} pewmissions.. >~<',
            channel: 'sowwy baby, u cannyot wun this action cuz u\'we missing the {perms} pewmissions in this channyew. >~<',
            roles: {
                user: {
                    text: 'sowwy baby, u cannyot pewfowm this action cuz the highest wowe of that usew is highew than urs. >~<',
                    user: 'Usew: {u.role} @ index {u.index}',
                    you: 'U: {y.role} @ index {y.index}'
                },
                role: {
                    text: 'sowwy baby, u cannyot pewfowm this action cuz ur highest wowe is wowew than the wowe to manyage. >~<',
                    user: 'Wowe: {u.role} @ index {u.index}',
                    you: 'U: {y.role} @ index {y.index}'
                }
            }
        },
        me: {
            guild: 'I cannyot wun this action since I\'m missing the {perms} pewmissions. >~<',
            channel: 'uh babe~ I cannyot wun this action cuz I\'m missing the {perms} pewmissions in this channyew. >~<',
            roles: {
                user: {
                    text: 'uh babe~ I cannyot pewfowm this action cuz the highest wowe of that usew is highew than minye. >~<',
                    user: 'Usew: {u.role} @ index {u.index}',
                    bot: 'Me: {b.role} @ index {b.index}'
                },
                role: {
                    text: 'uh babe~ I cannyot pewfowm this action cuz my highest wowe is highew than the wowe to manyage. >~<',
                    user: 'Wowe: {u.role} @ index {u.index}',
                    bot: 'Me: {b.role} @ index {b.index}'
                }
            }
        }
    }
};