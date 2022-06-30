module.exports = {
    error: {
        tooShort: 'Vrijeme ne može biti kraće od **1 sekunde**..',
        tooLong: 'Vrijeme ne može biti duže od **24 dana**..',
        cantFindId: 'Ne mogu pronaći aktivne podsjetnike s ID-om `{id}`'
    },
    reminder: 'Hej {user}, evo vašeg podsjetnika.',
    remindSet: {
        created: 'Podsjetit ću te za **{vrijeme}**!',
        id: 'ID'
    },
    remindView: {
        created: 'Napravljen',
        remindsIn: 'Podsjeća',
        message: 'Poruka',
        button: {
            delete: 'Izbrisati',
            invite: 'Pozovi {user}'
        },
        reminderCount: 'Imate {count} podsjetnika',
        createFirst: 'Prvo upotrijebite `/remind create` za stvaranje podsjetnika!'
    },
    remindDelete: { deleted: 'Izbrisala sam vaš podsjetnik s ID-om `{id}`' }
};