/*
    Do NOT edit things like {} since these are placeholders,
    \n are new lines
*/
module.exports = {
    validate: 'Validation des données...',
    notAllowed: 'Vous ne pouvez pas utiliser ce menu.',
    prefix: {
        name: 'Préfixe',
        set: 'Le préfixe pour ce serveur a bien été changé en {prefix} !',
        noSpace: 'Veuillez ne pas entrer d\'espace dans le préfixe ! Vous ne pouvez en ajouter qu\'à la fin.',
        disclaimer: 'Ceci ne s\'applique PAS aux commandes "/" (Slash)'
    },
    global: {
        // will be the same everywhere
        none: 'aucun',
        useButtons: 'Sélectionnez l\'option que vous souhaitez modifier avec les boutons ci-dessous.',
        upsell: 'Abonnez-vous pour obtenir {count} de plus',
        permissions: 'Manquant : {perms}',
        placeholders: 'Variables',
        await: {
            channel: 'Mentionnez un salon ou entrez l\'ID d\'un salon dans le chat\nTapez {string} pour supprimer le salon.',
            category: 'Mentionnez une catégorie ou envoyez l\'ID d\'une catégorie dans le chat.\nTapez {string} pour supprimer la catégorie.',
            role: 'Mentionnez un rôle ou envoyez l\'ID d\'un rôle dans le chat.\nTapez {string} pour supprimer le rôle.',
            message: 'Envoyez le message qui sera utilisé en tant que {what}.',
            emote: 'Send an Emoji which should be used as {what}.\nType {string} to remove the emotes.',
            color: 'Envoyez un code couleur hexadécimal à utiliser pour {what}. Obtenez un code valide avec {url}.',
            patient: 'Activer ceci peut prendre quelques secondes, veuillez patienter..'
        },
        success: {
            set: '{what} a bien été défini à **{data}**.',
            add: '{what} a bien été ajouté à **{data}**.',
            setCodeblock: '{what} a bien été défini à {data}',
            removed: '{what} a bien été supprimé.',
            remove: '{what} a bien été supprimé de **{data}**.',
            fail: '{what} n\'existe pas dans ce serveur..',
            lengthFail: 'Ce {what} est plus long que {max} caractères ! ({length} caractères, {relative} caractères de trop)',
            otherLengthFail: 'Ce {what} est plus court que {min} caractères ! ({length} caractères, {relative} caractères manquants)',
            numberFail: 'Ce {what} n\'est pas un nombre compris entre {a} et {b} !',
            roleFail: 'Ce rôle n\'est modifiable que par Discord ou est lié à un bot.',
            colorFail: 'Le code couleur hexadécimal envoyé est invalide. Obtenez-en un valide avec {url}.',
            emoteFail: 'Vous avez envoyé un émoji invalide. Seuls les émojis personnalisés de Discord et les émojis par défaut sont pris en charge.'
        },
        webedit: {
            button: 'Editeur d\'embed',
            title: 'Éditer le message en ligne',
            description: 'Allez sur [ce site]({url}) pour modifier le message et l\'embed.',
            open: 'Ouvrir l\'éditeur en ligne'
        },
        type: {
            text: 'Salon textuel',
            category: 'Catégorie du salon',
            role: 'Rôle',
            emoji: 'Émoji'
        },
        state: {
            enabled: 'Activé',
            disabled: 'Désactivé'
        },
        option: {
            required: 'Requis',
            optional: 'Optionnel'
        },
        button: {
            back: 'Précédent',
            disable: 'Désactiver',
            enable: 'Activer',
            channel: {
                set: 'Définir le salon',
                edit: 'Modifier le salon'
            },
            category: {
                set: 'Définir la catégorie',
                edit: 'Modifier la catégorie'
            },
            role: {
                set: 'Définir le rôle',
                edit: 'Modifier le rôle'
            },
            mode: {
                analyst: 'Analyste',
                cozy: 'Confort'
            },
            modeChange: {
                analyst: 'Définir sur Analyste',
                cozy: 'Définir sur Confort'
            },
            dupaw: {
                // This is a name, cannot be translated
                enable: 'Activer dupaw',
                disable: 'Désactiver dupaw'
            }
        }
    },
    main: {
        title: 'Configurer {name}',
        option: {
            logging: 'Messages, Joins, Captcha, Welcoming',
            fun: 'Starboard, Counting',
            premium: {
                text: 'Entreprise Niveau {tier}',
                buy: 'S\'abonner à Entreprise'
            }
        },
        button: {
            logging: 'Historique',
            fun: 'Fun',
            tickets: 'Tickets',
            moderation: 'Modération',
            misc: 'Autres',
            followNews: 'Suivre les nouveautés',
            staff: 'Gérer le serveur',
            exit: 'Quitter',
            help: 'Support'
        }
    },
    logging: {
        title: 'Configurer l\'historique',
        button: {
            messages: 'Messages',
            joins: 'Arrivées',
            welcomer: 'Accueil',
            byer: 'Au revoir'
        },
        page: {
            messages: {
                title: 'Messages',
                name: 'Historique des messages',
                option: {
                    channel: 'Salon : {channel}',
                    mode: 'Mode : {mode}',
                    snipetimeout: 'Snipe: {time}'
                },
                button: {
                    snipe: {
                        enable: 'Activer Snipe',
                        disable: 'Désactiver Snipe',
                        timeout: 'change snipe clear duration per message'
                    }
                },
                page: {
                    channel: {
                        title: 'Salon',
                        name: 'Salon d\'historique des messages'
                    }
                }
            },
            joins: {
                title: 'Arrivées',
                name: 'Historique des arrivées',
                option: {
                    channel: 'Salon : {channel}',
                    mode: 'Mode : {mode}',
                    filter: 'Filtre : {state}',
                    captcha: 'CAPTCHA : {state}'
                },
                button: {
                    filter: 'Filtre',
                    captcha: 'Vérification CAPTCHA'
                },
                page: {
                    channel: {
                        title: 'Salon',
                        name: 'Rejoindre l\'historique'
                    },
                    filter: {
                        title: 'Filtre',
                        option: {
                            trigger: 'Limite d\'âge : **{trigger} jours**',
                            punishment: 'Sanction : **{type}**',
                            punishmentType: {
                                ban: 'Bannir',
                                kick: 'Expulser',
                                timeout: 'Exclure',
                                role: 'Assigner le rôle {role}',
                                none: 'aucun'
                            }
                        },
                        button: {
                            dmNotification: {
                                disable: 'Désactiver les notifications en MP',
                                enable: 'Activer les notifications en MP'
                            },
                            trigger: {
                                set: 'Définir un âge limite',
                                edit: 'Modifier l\'âge limite'
                            },
                            punishment: {
                                title: 'Définir une sanction',
                                current: 'Actuellement',
                                option: {
                                    ban: 'Bannir un utilisateur',
                                    kick: 'Expulser un utilisateur',
                                    timeout: 'Exclure un utilisateur',
                                    role: 'Assigner un rôle'
                                }
                            }
                        },
                        page: {
                            trigger: {
                                title: 'Limite',
                                name: 'âge requis',
                                description: 'Si un compte est plus jeune que cette limite, il sera puni !\nVous pouvez entrer un âge entre 0 et 28 jours.'
                            },
                            role: {
                                title: 'Rôle',
                                name: 'rôle sanction'
                            }
                        }
                    },
                    captcha: {
                        title: 'CAPTCHA',
                        name: 'CAPTCHA',
                        option: {
                            verifiedrole: 'Rôle vérifié : {role}',
                            unverifiedrole: 'Rôle non vérifié : {role}',
                            channel: 'Historique : {channel}',
                            color: 'Couleur : {color}'
                        },
                        disclaimer: 'Continuez avec {command}',
                        button: {
                            verifiedrole: {
                                set: 'Définir le rôle vérifié',
                                edit: 'Modifier le rôle vérifié'
                            },
                            unverifiedrole: {
                                set: 'Définir le rôle non vérifié',
                                edit: 'Modifier le rôle non vérifié'
                            },
                            type: {
                                title: 'Définir un type de CAPTCHA',
                                selected: 'Sélectionné'
                            },
                            color: 'Changer la couleur de la page'
                        },
                        page: {
                            verifiedrole: {
                                title: 'Rôle vérifié',
                                name: 'Rôle vérifié CAPTCHA'
                            },
                            unverifiedrole: {
                                title: 'Rôle non vérifié',
                                name: 'Rôle non vérifié CAPTCHA'
                            },
                            logging: {
                                title: 'Historique',
                                name: 'Salon d\'historique du CAPTCHA'
                            },
                            role: {
                                title: 'Rôle',
                                name: 'rôle CAPTCHA échoué'
                            },
                            color: {
                                title: 'Couleur de la page',
                                name: 'Couleur de la page',
                                description: 'Entrez une couleur en hexadécimal dans le chat.\nIl est recommandé d\'utiliser une couleur proche du noir avec une très forte saturation.\nNotez que la couleur sur la page de vérification apparaîtra toujours plus clair.\nObtenez une couleur en hexadécimal avec [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/) !',
                                invalid: 'Cette couleur n\'est pas une couleur hexadécimale valide.\nObtenez une couleur en hexadécimal avec [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/) !'
                            }
                        }
                    }
                }
            },
            welcomer: {
                title: 'Accueil',
                name: 'Accueil',
                option: {
                    channel: 'Salon : {channel}',
                    role: 'Rôles : {role}',
                    message: {
                        message: 'Message : {message}',
                        command: 'Message : utilisez `{command}`'
                    },
                    afterleaveMessage: {
                        message: 'AD Message : {message}',
                        // AL: After Leave - just use the first letters of your language :)
                        command: 'AD Message : utilisez `{command}`'
                    },
                    pings: 'Pings : {channels}',
                    autodelete: 'Suppression automatique : **{time}**',
                    autodelete_never: 'jamais'
                },
                warnings: {
                    afterleaveXautodelete: 'Il n\'est pas recommandé d\'utiliser **Suppression Automatique** et **Supprimer Après Départ** simultanément',
                    embedXcard: 'Un carton dans un embed remplacera votre image d\'embed personnalisée',
                    channelMissmatch: 'Channel of the wave webhook is different than the greet message'
                },
                button: {
                    nextpage: 'Page suivante ({cur}/{total})',
                    message: 'Modifier le Message',
                    imgcard: 'Éditer le Carton',
                    pings: 'Modifier les Salons Pings',
                    autodelete: 'Configurer Suppression Automatique',
                    assignRolesAfterRejoin: {
                        enable: 'Réassigner les rôles après être revenu',
                        disable: 'Ne pas réassigner les rôles après être revenu'
                    },
                    afterleave: {
                        title: 'Que doit devenir ce message si la personne quitte ?',
                        selected: 'Sélectionné',
                        option: {
                            nothing: 'Rien',
                            edit: 'Modifier quand elle quitte',
                            delete: 'Supprimer quand elle quitte'
                        }
                    },
                    dm: 'Message en MP',
                    afterleave_webedit: 'Éditeur d\'Embed Après Départ',
                    wave: 'Bouton Salutation',
                    reactions: 'Réactions'
                },
                page: {
                    channel: {
                        title: 'Salon',
                        name: 'Salon de bienvenue'
                    },
                    message: {
                        title: 'Message',
                        name: 'Message de bienvenue'
                    },
                    role: {
                        title: 'Rôle',
                        name: 'Rôle de bienvenue'
                    },
                    autodelete: {
                        title: 'Suppression Automatique',
                        name: 'Suppression Automatique',
                        description: 'Le message d\'accueil sera supprimé après cette durée.\nIl est recommandé de définir un temps court (quelques secondes).\nExemple : `1m 3s`'
                    },
                    dm: { button: { disable: 'Désactiver le message en MP' } },
                    reactions: {
                        title: 'Réactions',
                        option: {
                            welcomer: 'Réactions au Message de Bienvenue : {emotes}',
                            firstmessage: 'Réaction au Premier Message : {emotes}'
                        },
                        button: {
                            welcomer: 'Message de bienvenue',
                            firstmessage: 'Premier Message d\'un Membre'
                        },
                        page: {
                            welcomer: {
                                title: 'Bienvenue',
                                name: 'réaction automatique de bienvenue'
                            },
                            firstmessage: {
                                title: 'Premier Message',
                                name: 'réaction automatique'
                            }
                        }
                    },
                    imgcard: {
                        title: 'Carton',
                        option: { background: 'Arrière-plan : {url}' },
                        button: {
                            background: {
                                set: 'Définir un arrière-plan personnalisé',
                                edit: 'Modifier l\'arrière-plan personnalisé'
                            },
                            deleteBackground: 'Supprimer l\'arrière-plan',
                            inEmbed: {
                                enable: 'Afficher l\'image dans un embed',
                                disable: 'Ne pas afficher l\'image dans un embed'
                            },
                            color: 'Text Color'
                        },
                        page: {
                            background: {
                                title: 'Arrière-plan',
                                name: 'Arrière-plan du carton',
                                description: 'Le lien doit être un **lien direct vers votre image**, il doit également être de la forme {scheme}.\nIl est recommandé d\'utiliser un ratio de {ratio} et une résolution minimale de {resolution}.'
                            },
                            text: {
                                title: 'Text',
                                page: {
                                    color: {
                                        title: 'Color',
                                        name: 'text color'
                                    }
                                }
                            }
                        }
                    },
                    dm: { title: 'Message Privé' },
                    wavebtn: {
                        title: 'Saluer pour dire bonjour',
                        option: {
                            send: 'Envoyer : {type}',
                            emoji: 'Emote: {emote}',
                            label: 'Label : {label}'
                        },
                        button: {
                            emoji: 'Change Button Emote',
                            label: 'Changer le Texte du Bouton',
                            ping: {
                                enable: 'Activer Ping',
                                disable: 'Désactiver Ping'
                            },
                            type: {
                                title: 'Sélectionner le type de réponse',
                                option: {
                                    '0': 'Autocollant aléatoire',
                                    '1': 'Message Personnalisé'
                                }
                            },
                            color: {
                                title: 'Sélectionnez une couleur pour le bouton',
                                option: {
                                    blurple: 'Bleuet',
                                    // You may leave that
                                    grey: 'Gris',
                                    green: 'Vert',
                                    red: 'Rouge'
                                }
                            }
                        },
                        page: {
                            emoji: {
                                title: 'Emote',
                                name: 'Button Emote'
                            },
                            label: {
                                title: 'Label',
                                name: 'Texte du bouton'
                            }
                        }
                    }
                }
            },
            byer: {
                title: 'Départ',
                name: 'Départ',
                option: {
                    channel: 'Salon : {channel}',
                    message: {
                        message: 'Message : {message}',
                        command: 'Message : utiliser `{command}`'
                    },
                    autodelete: 'Suppression automatique : **{time}**',
                    autodelete_never: 'jamais'
                },
                button: {
                    message: 'Modifier le message',
                    autodelete: 'Configurer la suppression automatique'
                },
                page: {
                    channel: {
                        title: 'Salon',
                        name: 'Salon des départs'
                    },
                    message: {
                        title: 'Message',
                        name: 'Message de départ'
                    },
                    autodelete: {
                        title: 'Suppression Automatique',
                        name: 'Suppression Automatique',
                        description: 'Le message de départ sera supprimé après cette durée.\nIl est recommandé de définir un temps court (quelques secondes).\nExemple : `1m 3s`'
                    }
                }
            }
        }
    },
    tickets: {
        title: 'Configurer les tickets',
        option: {
            channel: 'Catégorie : {channel}',
            staff: 'Staff : {role}',
            logging: 'Historique : {channel}',
            forceReason: 'Raison : {state}',
            naming: 'Nommage : {type}',
            namingType: {
                username: 'Nom d\'utilisateur',
                userid: 'ID de l\'utilisateur',
                random: 'Aléatoire'
            },
            position: 'Position: {type}',
            positionType: {
                top: 'At the top',
                bottom: 'On the bottom'
            }
        },
        button: {
            channelPosition: {
                top: 'Position: To top',
                bottom: 'Position: To bottom'
            },
            forceReason: {
                enable: 'Raison obligatoire',
                disable: 'Raison facultative'
            },
            logging: {
                set: 'Définir le salon des journaux',
                edit: 'Modifier le salon des journaux'
            },
            transcript: {
                disable: 'Désactiver les transcriptions',
                enable: 'Enregistrer les transcriptions'
            },
            openReason: {
                disable: 'Désactiver la raison d\'ouverture',
                enable: 'Activer la raison d\'ouverture'
            },
            leaveAutoclose: {
                disable: 'Désactiver la fermeture automatique',
                enable: 'Activer la fermeture automatique'
            },
            embeds: 'Modifier les Embeds',
            naming: {
                title: 'Définir un nommage',
                current: 'Actuellement',
                option: {
                    username: 'Nom d\'utilisateur',
                    userid: 'Id de l\'utilisateur',
                    random: 'Id aléatoire'
                }
            }
        },
        page: {
            category: {
                title: 'Catégorie',
                name: 'Catégorie des Tickets'
            },
            role: {
                title: 'Rôle Staff',
                name: 'Rôle Staff Ticket'
            },
            descriptions: {
                title: 'Textes',
                name: 'Descriptions des tickets',
                button: {
                    texts: 'Aperçu du ticket',
                    topic: 'Changer le Sujet',
                    unclaimed: 'Modifier Embed non Réclamé',
                    claimed: 'Modifier Embed Réclamé'
                },
                page: {
                    unclaimed: {
                        title: 'Non réclamé',
                        name: 'Description du ticket non réclamé'
                    },
                    claimed: {
                        title: 'Réclamé',
                        name: 'Description du ticket réclamé'
                    },
                    topic: {
                        title: 'Sujet',
                        name: 'Sujet du ticket'
                    }
                }
            },
            logging: {
                title: 'Journalisation',
                name: 'Journaux des tickets'
            }
        }
    },
    moderation: {
        title: 'Configurer la Modération',
        option: {
            role: 'Rôle exclu : {role}',
            logging: 'Journaux : {channel}'
        },
        button: {
            filter: 'Liste noire',
            antiScam: 'Anti-Arnaques',
            antiLink: 'Anti-Lien',
            antiSpam: 'Anti-Spam',
            bypassRole: {
                edit: 'Éditer le rôle exclu',
                set: 'Définir le rôle exclu'
            },
            logging: {
                edit: 'Modifier le salon des journaux',
                set: 'Définir le salon des journaux'
            }
        },
        page: {
            role: {
                title: 'Rôle Exclu',
                name: 'Rôle exclu'
            },
            logging: {
                title: 'Journalisation',
                name: 'Journaux de modération'
            },
            filter: {
                title: 'Filtre',
                name: 'Filtre de modération',
                option: {
                    message: 'Message : {message}',
                    total: 'Total : **{amount} mots**',
                    timeout: 'Exclusion : {time}'
                },
                button: {
                    deleteAll: 'Effacer la liste de mots',
                    editWords: 'Modifier la liste de mots',
                    message: 'Modifier le Message',
                    timeout: 'Durée d\'exclusion',
                    export: 'Afficher la liste de mots'
                },
                page: {
                    delete: {
                        title: 'Effacer la liste de mots',
                        description: 'Êtes-vous sûr de vouloir effacer tous les mots de la liste noire ?',
                        page: {
                            confirm: {
                                title: 'Confirmé',
                                description: 'Tous les mots de la liste noire ont bien étés effacés ! Vous pouvez maintenant fermer ce message.'
                            },
                            abord: {
                                title: 'Annulé',
                                description: 'L\'action a été annulée ! Vous pouvez maintenant fermer ce message.'
                            }
                        }
                    },
                    words: {
                        title: 'Mots',
                        name: 'Mots sur liste noire',
                        awaitMessage: 'Send one or multiple words that should get blacklisted.\nSplit words with `, ` to bulk add/remobe words.\nPrefix the message with `-` to remove words.',
                        bulkAdded: '{amout} nouveaux mots ont été ajoutés à la liste noire.',
                        added: '"`{word}`" a bien été ajouté à la liste noire.',
                        removed: '"`{word}`" a été enlevé de la liste noire.'
                    },
                    message: {
                        title: 'Message',
                        name: 'Réponse liste noire'
                    },
                    timeout: {
                        title: 'Durée d\'exclusion',
                        name: 'Durée d\'exclusion',
                        description: 'Cet utilisateur sera exclu pour cette durée !\nCette durée doit être inférieure à 18 jours.\nExemple : `7d 4h 8m 3s`'
                    }
                }
            },
            antiScam: {
                title: 'Anti-Arnaques',
                name: 'Modération Anti-Arnaques',
                option: {
                    message: 'Message : {message}',
                    actions: 'Actions : {types}',
                    actionType: {
                        reply: 'répondre',
                        delete: 'supprimer',
                        timeout: 'exclure'
                    },
                    timeout: 'Exclusion : {time}'
                },
                button: {
                    message: 'Modifier le Message',
                    timeout: 'Durée d\'exclusion',
                    actions: {
                        title: 'Gérer une action',
                        selected: 'Sélectionné',
                        option: {
                            reply: 'Répondre',
                            delete: 'Supprimer',
                            timeout: 'Exclure'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Message',
                        name: 'Réponse Anti-Arnaques'
                    },
                    timeout: {
                        title: 'Durée d\'exclusion',
                        name: 'Durée d\'exclusion',
                        description: 'Cet utilisateur sera exclu pour cette durée !\nCette durée doit être inférieure à 18 jours.\nExemple : `7d 4h 8m 3s`'
                    }
                }
            },
            antiLink: {
                title: 'Anti-Lien',
                name: 'Modération Anti-Lien',
                option: {
                    message: 'Message : {message}',
                    actions: 'Actions : {types}',
                    actionType: {
                        reply: 'répondre',
                        delete: 'supprimer',
                        timeout: 'exclure'
                    },
                    timeout: 'Exclusion : {time}'
                },
                button: {
                    media: {
                        disable: 'Interdire Médias',
                        enable: 'Autoriser Médias'
                    },
                    message: 'Éditer le message',
                    timeout: 'Temps d\'exclusion',
                    actions: {
                        title: 'Gérer une action',
                        selected: 'Sélectionné',
                        option: {
                            reply: 'Répondre',
                            delete: 'Supprimer',
                            timeout: 'Exclure'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Message',
                        name: 'Réponse Anti-Lien'
                    },
                    timeout: {
                        title: 'Temps d\'exclusion',
                        name: 'Temps d\'exclusion',
                        description: 'Cet utilisateur sera exclu pour cette durée !\nCette durée doit être inférieure à 18 jours.\nExemple : `7d 4h 8m 3s`'
                    }
                }
            },
            antiSpam: {
                title: 'Anti-Spam',
                name: 'Modération Anti-Spam',
                option: {
                    message: 'Message : {message}',
                    actions: 'Actions : {types}',
                    threshold: 'Seuil : **{threshold} msgs/5s**',
                    actionType: {
                        reply: 'répondre',
                        timeout: 'exclure',
                        purge: 'nettoyer'
                    },
                    timeout: 'Exclusion : {time}'
                },
                button: {
                    threshold: 'Modifier le Seuil',
                    message: 'Modifier le Message',
                    timeout: 'Temps d\'exclusion',
                    actions: {
                        title: 'Gérer une action',
                        selected: 'Sélectionné',
                        option: {
                            reply: 'Répondre',
                            timeout: 'Exclure',
                            purge: 'Nettoyer'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Message',
                        name: 'Réponse Anti-Spam'
                    },
                    timeout: {
                        title: 'Temps d\'exclusion',
                        name: 'Temps d\'exclusion',
                        description: 'Cet utilisateur sera exclu pour cette durée !\nCette durée doit être inférieure à 18 jours.\nExemple : `7d 4h 8m 3s`'
                    },
                    threshold: {
                        title: 'Seuil',
                        name: 'limite de spam',
                        description: 'Je considérerai comme spam ce nombre de messages envoyé en 5 secondes !\nLa valeur doit être comprise entre 1 et 99.'
                    }
                }
            }
        }
    },
    fun: {
        title: 'Configure Fun',
        button: {
            starboard: 'Starboard',
            counting: 'Counting'
        }
    },
    starboard: {
        title: 'Configurer le Starboard',
        button: {
            emoji: 'Changer l\'émoji',
            color: 'Changer la couleur',
            count: 'Changer Nombre',
            nsfw: {
                disable: 'Désactiver NSFW',
                enable: 'Activer NSFW'
            },
            bots: {
                disable: 'Désactiver les Bots',
                enable: 'Activer les Bots'
            },
            selfReact: {
                disable: 'Désactiver Auto Réaction',
                enable: 'Activer Auto Réaction'
            },
            reply: {
                disable: 'Cacher Réponse à',
                enable: 'Afficher Réponse à'
            },
            edits: {
                disable: 'Interdire la Modification',
                enable: 'Autoriser la Modification'
            },
            logging: {
                disable: 'Désactiver la journalisation',
                enable: 'Activer la journalisation'
            },
            blacklist: {
                set: 'Définir le rôle liste noire',
                change: 'Modifier le rôle liste noire'
            },
            blacklistedChannels: 'Modifier les salons sur liste noire',
            delete: {
                disable: 'Disable Delete <{reactions} Reactions',
                enable: 'Enable Delete <{reactions} Reactions'
            },
            display: {
                title: 'Set a display style',
                selected: 'Selected',
                option: {
                    tag: 'Tag',
                    username: 'Username',
                    nickname: 'Nickname',
                    guildProfile: 'Guild Profile'
                }
            }
        },
        option: {
            channel: 'Channel: {channel}',
            color: 'Color: {color}',
            emoji: 'Emoji: {emoji}',
            count: 'Count: {count}',
            blacklistedRole: 'Blacklisted: {role}',
            display: 'Display: {profileType}',
            profileType: {
                tag: 'Tag',
                username: 'Username',
                nickname: 'Nickname',
                guildProfile: 'Guild Profile'
            }
        },
        page: {
            channel: {
                title: 'Channel',
                name: 'Starboard Channel'
            },
            emoji: {
                title: 'Emoji',
                name: 'Starboard Emoji'
            },
            color: {
                title: 'Color',
                name: 'Starboard Color'
            },
            count: {
                title: 'Count',
                name: 'requierd Count',
                description: 'Send a number to set the minimum {emote} reaction count requirement.'
            },
            blacklistedRole: {
                title: 'Blacklist Role',
                name: 'blacklisted Role'
            },
            blacklistedChannels: {
                title: 'Blacklist Channels',
                name: 'Blacklist Channel list',
                description: 'Mention a Channel/Category or paste the Channel ID into the chat.\nPrefix the message with `+` to add or `-` to remove Channels.\nYou can send multiple Channels seperated with a space.\nType `none` to remove all Channels.',
                missingPrefix: 'The message must be prefixed with `+` to add or `-` to remove Channels.'
            }
        }
    },
    counting: {
        title: 'Configure Counting',
        option: {
            channel: 'Channel: {channel}',
            emojis: 'Emojis: {emojis}'
        },
        button: {
            reset: {
                enable: 'Reset on fail',
                disable: 'Don\'t reset on fail'
            },
            customSuccessEmote: 'Correct Emote',
            customFailEmote: 'Error Emote'
        },
        page: {
            channel: {
                title: 'Channel',
                name: 'Starboard Channel'
            },
            successEmoji: {
                title: 'Correct Emoji',
                name: 'success emoji'
            },
            failEmoji: {
                title: 'Wrong Emoji',
                name: 'fail emoji'
            }
        }
    },
    misc: {
        title: 'Configure Miscellaneous',
        button: {
            embedMessages: 'Embed Messages',
            levelRoles: 'Level Roles',
            leaderboards: 'Leaderboards',
            stickymessages: 'Stickymessages'
        },
        page: {
            embedMessages: {
                title: 'Embed Messages',
                description: '**What\'s This?**\nIf a message link is being send, {name} will reply with the content of that message!',
                button: {
                    allowOtherGuilds: {
                        enable: 'Allow other Guilds to Embed Messages from here',
                        disable: 'Disalow other Guilds to Embed Messages from here'
                    },
                    color: 'Choose a Color for the Embed',
                    display: {
                        title: 'Choose a Author display style',
                        selected: 'Selected',
                        option: {
                            message: 'Message Content',
                            author: 'Author Field',
                            footer: 'Footer Field'
                        }
                    }
                }
            },
            levelRoles: {
                title: 'Level Roles',
                option: {
                    roles: 'Roles: **{count}/{max}**',
                    channel: 'Channel: {channel}',
                    channel_none: 'message channel',
                    message: 'Message: {message}'
                },
                button: {
                    message: 'Edit Message',
                    addrole: 'Add Level',
                    select: {
                        title: 'Chose a Level Role you want to edit',
                        editing: 'Editing',
                        option: {
                            name: '{messages} messages',
                            description: 'Role: {role}'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Message',
                        name: 'Level Up reply'
                    },
                    channel: {
                        title: 'Channel',
                        name: 'Level Up Channel'
                    },
                    addRole: {
                        title: 'New Level Role',
                        limit: 'You have reached the guild limit of **{count}/{max} level roles**!',
                        alreadExists: 'A reward role for **{messages} messages** already has been set with the **{role} role**.',
                        success: 'Successfully added this Level Role. Each user who reaches **{messages} messages** will recieve the **{role} role** now!',
                        page: {
                            messageCount: {
                                title: 'Message Count',
                                name: 'required Message Count',
                                description: 'Send a number, that the user will required to have as in message count to get the selected role.'
                            },
                            role: {
                                title: 'Role',
                                name: 'present Role'
                            }
                        }
                    },
                    editRole: {
                        title: 'Edit Level Role',
                        option: {
                            role: 'Role: {role}',
                            messages: 'Messages: {messages}'
                        },
                        button: {
                            messages: 'Change Message Count',
                            role: 'Change Role',
                            delete: 'Delete'
                        }
                    }
                }
            },
            leaderboards: {
                title: 'Leaderboards',
                option: { blacklisted: 'Blacklisted: {channels}' },
                button: {
                    blacklistedChannels: 'Edit Blacklisted Channels',
                    reset: {
                        disable: 'Don\'t Reset Member Data on Leave',
                        enable: 'Reset Member Data on Leave'
                    },
                    roles: 'Reward Roles'
                },
                page: {
                    roles: {
                        title: 'Top Roles',
                        option: {
                            messages: 'Message Roles: {roles}',
                            voiceminutes: 'Voice Roles: {roles}'
                        },
                        warnings: {
                            order: 'Please select the #1st role first, then #2nd and then #3rd',
                            permsOrder: 'Please check that all roles are bellow the {bot} role'
                        },
                        button: {
                            messages: 'Top 3 messange roles',
                            voiceminutes: 'Top 3 voice minutes roles'
                        }
                    }
                }
            },
            stickymessages: {
                title: 'Stickymessages',
                button: {
                    timeout: 'Change the timeout duration',
                    typing: {
                        enable: 'Enable Typing',
                        disable: 'Disable Typing'
                    }
                }
            }
        }
    },
    followNews: {
        title: 'Follow News Updates',
        name: 'Follow News'
    },
    staff: {
        title: 'Manage {name}',
        option: { premium: 'Enterprise: {tier}' },
        button: {
            premium: 'Change premium Tier',
            data: 'Export Data'
        },
        page: {
            data: {
                title: 'Data Export',
                message: 'The data from {name} is displayed below.',
                error: 'Cannot send message :/'
            },
            premium: {
                title: 'Configure Enterprise',
                option: { tier: 'Current Tier: {tier}' },
                button: { tier: 'Tier {tier}' }
            }
        }
    },
    exit: { title: 'Saved settings and exited config menu.' }
};