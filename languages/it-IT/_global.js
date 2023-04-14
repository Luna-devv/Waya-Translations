module.exports = {
    dms: 'Questo commando non può essere effettuato in messaggi privati.',
    disabled: 'Sei stato bloccato dall Sistema di Waya.',
    mention: 'Ciao {user}, usa **{emote} i SlashCommands** per configurarmi!\nUsa {command} per più informazioni.',
    error: 'Si è verificato un errore durante l\'esecuzione di questo comando.\nUnisciti al server di supporto e segnala questo problema\ncon l\'id {issue}!',
    premium: {
        required: 'abbonamento richiesto',
        embeds: {
            title: 'Ci dispiace, ma ti server un abbonamento',
            title2: 'Siamo spiacenti ma è stato raggiunto il limite di iscrizioni',
            description: 'Per poter fornire un bot stabile e il denaro che non cresce sugli alberi, dobbiamo bloccare le funzionalità non essenziali dietro un abbonamento.'
        },
        button: {
            subscribe: 'Abbonati',
            support: 'Contatta il supporto'
        }
    },
    button: {
        add: 'Aggiungi {name}',
        support: 'Assistenza'
    },
    permissions: {
        user: {
            guild: 'Non puoi eseguire questa azione poiché ti mancano le autorizzazioni {perms}.',
            channel: 'Non puoi eseguire questa azione poiché ti mancano le autorizzazioni {perms} in questo canale.',
            roles: {
                user: {
                    text: 'Non puoi eseguire questa azione poiché il ruolo più alto di quell\'utente è superiore al tuo.',
                    user: 'Utente: {u.role} @ indice {u.index}',
                    you: 'Tu: {y.role} @ indice {y.index}'
                },
                role: {
                    text: 'Non puoi eseguire questa azione poiché il tuo ruolo più alto è inferiore al ruolo da gestire.',
                    user: 'Ruolo: {u.role} @ indice {u.index}',
                    you: 'Tu: {y.role} @ indice {y.index}'
                }
            }
        },
        me: {
            guild: 'Non riesco a eseguire questa azione poiché mi mancano le autorizzazioni {perms}.',
            channel: 'Non riesco a eseguire questa azione poiché mi mancano le autorizzazioni {perms} in questo canale.',
            roles: {
                user: {
                    text: 'Non posso eseguire questa azione poiché il ruolo più alto di quell\'utente è superiore al mio.',
                    user: 'Utente: {u.role} @ indice {u.index}',
                    bot: 'Io: {b.role} @ indice {b.index}'
                },
                role: {
                    text: 'Non posso eseguire questa azione poiché il mio ruolo più alto è superiore al ruolo da gestire.',
                    user: 'Ruolo: {u.role} @ indice {u.index}',
                    bot: 'Io: {b.role} @ indice {b.index}'
                }
            }
        }
    },
    ad: {
        vote: 'Supportaci!',
        help: 'Hai bisogno di aiuto?',
        notifyMe: 'Ottieni i ping sociali!'
    }
};