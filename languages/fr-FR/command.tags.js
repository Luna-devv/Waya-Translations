module.exports = {
    title: {
        text: 'Texte ;[Commande, Commandes]',
        slash: 'Slash ;[Commande, Commandes]'
    },
    none: 'aucun tag',
    disabled: '{amount} ;[tag est masqué, tags sont masqués] en raison d\'un manque de permissions',
    // ;[singular, plural]
    amount: '{amount} tags • Utilisez-les avec {command}',
    errors: {
        overLimit: 'Vous avez atteint la limite de **{count}/{max} tags** !\n\nNotez que ce tag dépasse cette limite et est désactivé jusqu\'à ce que vous augmentiez ladite limite.',
        invalidTag: 'Aucun Tag portant ce nom n\'existe !',
        ticketUse: 'Ce Tag est uniquement disponible dans les tickets utilisant {user}.'
    }
};