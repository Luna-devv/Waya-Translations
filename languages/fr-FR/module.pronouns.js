module.exports = {
    disclaimer: 'Vous devez choisir une option pour utiliser ce paramètre',
    choice: {
        remove: {
            question: 'Où voulez-vous retirer {prn} de vos pronoms préférés ?',
            button: {
                global: 'Partout',
                guild: 'Dans ce serveur'
            }
        },
        add: {
            question: 'Où voulez-vous définir {prn} comme votre pronom préféré ?',
            button: {
                global: 'Partout',
                guild: 'Dans ce serveur'
            }
        }
    },
    success: {
        removed: {
            global: 'Le pronom {prn} a bien été retiré de vos pronoms préférés partout.',
            guild: 'Le pronom {prn} a bien été retiré de vos pronoms préférés dans ce serveur.'
        },
        added: {
            global: 'Le pronom {prn} a bien été ajouté à vos pronoms préférés partout.',
            guild: 'Le pronom {prn} a bien été ajouté à vos pronoms préférés dans ce serveur.'
        }
    },
    error: {
        tooSlow: 'Vous avez été trop lent, veuillez recommencer !',
        fail: 'Échec de l\'enregistrement de vos paramètres, veuillez réessayer !'
    }
};