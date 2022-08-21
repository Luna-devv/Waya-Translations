module.exports = {
    dms: 'This command cannyot be used inside of pwivate messages.',
    disabled: 'U have been disabwed.',
    error: 'An ewwow occuwwed whiwe executing this command.\nPwease join the suppowt sewvew and wepowt this issue\nwith the id {issue}!',
    premium: 'pwemium wequiwed',
    button: { add: 'Add {name}' },
    permissions: {
        user: {
            guild: 'U cannyot wun this action since u\'we missing the {perms} pewmissions.',
            channel: 'U cannyot wun this action since u\'we missing the {perms} pewmissions in this channyew.',
            roles: {
                user: {
                    text: 'U cannyot pewfowm this action since the highest wowe of that usew is highew than urs.',
                    user: 'Usew: {u.role} @ index {u.index}',
                    you: 'U: {y.role} @ index {y.index}'
                },
                role: {
                    text: 'U cannyot pewfowm this action since ur highest wowe is wowew than the wowe to manyage.',
                    user: 'Wowe: {u.role} @ index {u.index}',
                    you: 'You: {y.role} @ index {y.index}'
                }
            }
        },
        me: {
            guild: 'I cannot run this action since I\'m missing the {perms} permissions.',
            channel: 'I cannot run this action since I\'m missing the {perms} permissions in this channel.',
            roles: {
                user: {
                    text: 'I cannot perform this action since the highest role of that user is higher than mine.',
                    user: 'User: {u.role} @ index {u.index}',
                    bot: 'Me: {b.role} @ index {b.index}'
                },
                role: {
                    text: 'I cannot perform this action since my highest role is higher than the role to manage.',
                    user: 'Role: {u.role} @ index {u.index}',
                    bot: 'Me: {b.role} @ index {b.index}'
                }
            }
        }
    }
};