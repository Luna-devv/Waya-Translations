module.exports = {
    choice: {
        remove: {
            question: 'From where do you want to remove {prn} as prefered pronoun?',
            button: {
                global: 'Remove everywhere',
                guild: 'Remove in guild'
            }
        },
        add: {
            question: 'Where to you want to set {prn} as your prefered pronoun?',
            button: {
                global: 'Set everywhere',
                guild: 'Set in guild'
            }
        }
    },
    success: {
        removed: {
            global: 'Successfully removed {prn} as prefered pronoun globally.',
            guild: 'Successfully removed {prn} as prefered pronoun in this guild.'
        },
        added: {
            global: 'Successfully added {prn} as prefered pronoun globally.',
            guild: 'Successfully added {prn} as prefered pronoun in this guild.'
        }
    },
    error: {
        tooSlow: 'You were too slow, please try again!',
        fail: 'Failed to save your settings, please try again!'
    }
};