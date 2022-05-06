module.exports = {
    error: {
        tooShort: 'Vrijeme ne može biti manje od **1 sekunde**..',
        tooLong: 'Vrijeme ne može biti duže od **24 dana**..',
        cantFindId: 'Nemogu naći aktivne podsjetnike sa id `{id}`'
    },
    reminder: 'Hej {user}, evo tvojeg podsjetnika',
    remindSet: {
        created: 'Podsjetit ću te za **{time}**!',
        id: 'Id'
    },
    remindView: {
        created: 'Napravljen',
        remindsIn: 'Podsjeća',
        message: 'Poruka',
        button: {
            delete: 'Izbriši',
            invite: 'Pozovi {user}'
        },
        reminderCount: 'Imaš {count} podsjetnika',
        createFirst: 'Koristi `/remind create` da prvo napraviš podsjetnik!'
    },
    remindDelete: {
        deleted: 'Izbrisala sam tvoj podsjetnik sa id `{id}`'
    }
};
