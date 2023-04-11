module.exports = {
    request: { ureStaff: 'Vous êtes staff, vous pouvez juste utiliser {command}.' },
    noData: 'Impossible de trouver ce serveur dans la base de données !',
    confirm: {
        text: 'Êtes-vous sûr(e) de vouloir supprimer {channel} définitivement ?',
        configReason: 'Pour `reason`, veuillez activer la journalisation dans `/config` => __Tickets__ !',
        required: 'Un raison pour la fermeture est requise !',
        button: {
            close: 'Fermer le Ticket',
            closeReason: 'Fermer le Ticket avec une Raison'
        }
    },
    form: {
        formTitle: `Fermer {channel}`,
        reason: 'Raison'
    },
    closeDm: {
        title: 'Ticket {id} dans {server} fermé',
        you: 'Vous',
        none: 'aucun',
        data: {
            opened: 'Ouvert par {user} le {date}',
            claimed: 'Géré par {user} and résolu en {time}',
            closed: 'Fermé par {user} le {date}',
            members: 'Membres : {list}'
        },
        footer: 'Propulsé par {domain}'
    }
};