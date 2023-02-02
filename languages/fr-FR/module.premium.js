module.exports = {
    end: {
        title: 'Fin de votre abonnement',
        description: 'Hey {user}, nous venons de recevoir votre annulation d\'abonnement.\nNous sommes tristes de vous voir partir, mais nous espérons que vous avez apprécié ! {emote}',
        notes: {
            title: 'Quelques détails :',
            support: 'Si vous avez besoin d\'aide, [contactez le support]({support})',
            reSubscribe: 'Si vous voulez vous réabonner, rendez-vous sur {url}'
        }
    },
    new: {
        title: 'Nouvel abonnement Entreprise',
        description: 'Hey {user}, nous venons de recevoir votre paiement. {emote}\nNous sommes heureux de vous avoir à nos côtés, et nous espérons que vous apprécierez utiliser le bot avec vos nouveaux avantages !',
        notes: {
            title: 'Quelques détails :',
            setGuild: 'Pour appliquer votre abonnement à un serveur, veuillez utiliser {command}',
            getGuild: 'Si vous avez besoin d\'aide avec [la récupération de l\'ID de votre serveur]({article})',
            cooldown: 'N\'oubliez pas que vous ne pouvez changer de serveur que tous les {days} jours !',
            support: 'Si vous avez besoin d\'aide, [contactez le support]({support})'
        }
    }
};