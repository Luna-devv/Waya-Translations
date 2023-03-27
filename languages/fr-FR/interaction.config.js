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
        developer: {
            bypass: 'Vous n\'avez pas `MANAGE_GUILD` pour accéder à cette interface..\nVoulez-vous tout de même continuer ?',
            choice: {
                access: 'Je suis sûr(e), oui',
                abord: 'Laissez tomber'
            },
            notice: 'attention - Privilèges développeurs activés..'
        },
        permissions: 'Manquant : {perms}',
        placeholders: 'Placeholders',
        await: {
            channel: 'Mentionnez un salon ou entrez l\'ID d\'un salon dans le chat\nTapez {string} pour supprimer le salon.',
            category: 'Mentionnez une catégorie ou envoyez l\'ID d\'une catégorie dans le chat.\nTapez {string} pour supprimer la catégorie.',
            role: 'Mentionnez un rôle ou envoyez l\'ID d\'un rôle dans le chat.\nTapez {string} pour supprimer le rôle.',
            message: 'Envoyez le message qui sera utilisé en tant que {what}.',
            emote: 'Envoyez l\'émoji qui sera utilisé en tant que {what}.',
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
            roleFail: 'Ce rôle n\'est modifiable que par Discord ou est lié à un bot.'
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
            required: 'Required',
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
            premium: {
                text: 'Entreprise Niveau {tier}',
                buy: 'S\'abonner à Entreprise'
            }
        },
        button: {
            logging: 'Historique',
            tickets: 'Tickets',
            moderation: 'Modération',
            starboard: 'Starboard',
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
                    mode: 'Mode : {mode}'
                },
                button: {
                    snipe: {
                        enable: 'Enable Snipe',
                        disable: 'Disable Snipe'
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
                    embedXcard: 'Un carton dans un embed remplacera votre image d\'embed personnalisée'
                },
                button: {
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
                    wave: 'Wave Button'
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
                            }
                        },
                        page: {
                            background: {
                                title: 'Arrière-plan',
                                name: 'Arrière-plan du carton',
                                description: 'Le lien doit être un **lien direct vers votre image**, il doit également être de la forme {scheme}.\nIl est recommandé d\'utiliser un ratio de {ratio} et une résolution minimale de {resolution}.'
                            }
                        }
                    },
                    dm: { title: 'Message Privé' },
                    wavebtn: {
                        title: 'Wave to say hi',
                        option: { send: 'Send: {type}' },
                        button: {
                            type: {
                                title: 'Select a response type',
                                option: {
                                    '0': 'Random Sticker',
                                    '1': 'Custom Message'
                                }
                            }
                        },
                        warnings: { channelMissmatch: 'Channel of the webhook is different than the greet message.' }
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
            }
        },
        button: {
            forceReason: {
                enable: 'Force Reason',
                disable: 'Raison facultative'
            },
            logging: {
                edit: 'Définir le salon d\'historique',
                set: 'Modifier le salon d\'historique'
            },
            transcript: {
                disable: 'Disable Transcripts',
                enable: 'Save Transcripts'
            },
            openReason: {
                disable: 'Disable Open Reason',
                enable: 'Enable Open Reason'
            },
            leaveAutoclose: {
                disable: 'Disable Leave Autoclose',
                enable: 'Enable Leave Autoclose'
            },
            embeds: 'Change Embeds',
            naming: {
                title: 'Set a naming type',
                current: 'Current',
                option: {
                    username: 'Nom d\'utilisateur',
                    userid: 'User Id',
                    random: 'Id aléatoire'
                }
            }
        },
        page: {
            category: {
                title: 'Catégorie',
                name: 'Tickets Category'
            },
            role: {
                title: 'Staff Role',
                name: 'Ticket Staff role'
            },
            descriptions: {
                title: 'Texts',
                name: 'Ticket descriptions',
                button: {
                    texts: 'Preview Ticket',
                    topic: 'Change Topic',
                    title: 'Change title text',
                    unclaimed: 'Change Unclaimed Embed',
                    claimed: 'Change Claimed Embed'
                },
                page: {
                    title: {
                        title: 'Titre',
                        name: 'Ticket embed title'
                    },
                    unclaimed: {
                        title: 'Unclaimed',
                        name: 'Unclaimed Ticket description'
                    },
                    claimed: {
                        title: 'Claimed',
                        name: 'Claimed Ticket description'
                    },
                    topic: {
                        title: 'Sujet',
                        name: 'Sujet du ticket'
                    }
                }
            },
            logging: {
                title: 'Logging',
                name: 'Ticket Logging'
            }
        }
    },
    moderation: {
        title: 'Configure Moderation',
        option: {
            role: 'Bypass Role: {role}',
            logging: 'Logging: {channel}'
        },
        button: {
            filter: 'Blacklist',
            antiScam: 'Anti-Arnaques',
            antiLink: 'Anti-Lien',
            antiSpam: 'Anti-Spam',
            bypassRole: {
                edit: 'Edit bypass Role',
                set: 'Set bypass Role'
            },
            logging: {
                edit: 'Edit logging Channel',
                set: 'Set logging Channel'
            }
        },
        page: {
            role: {
                title: 'Bypass Role',
                name: 'Bypass role'
            },
            logging: {
                title: 'Logging',
                name: 'Moderation logs'
            },
            filter: {
                title: 'Filtre',
                name: 'Filtre de modération',
                option: {
                    message: 'Message : {message}',
                    actions: 'Actions : {types}',
                    actionType: {
                        reply: 'reply',
                        delete: 'delete',
                        timeout: 'timeout'
                    },
                    total: 'Total: **{amount} words**',
                    timeout: 'Timeout: {time}'
                },
                button: {
                    deleteAll: 'Clear word list',
                    editWords: 'Edit word list',
                    message: 'Edit Message',
                    timeout: 'Timeout Duration',
                    actions: {
                        title: 'Manage an action',
                        selected: 'Selected',
                        option: {
                            reply: 'Reply',
                            delete: 'Delete',
                            timeout: 'Timeout'
                        }
                    },
                    export: 'Show word list'
                },
                page: {
                    delete: {
                        title: 'Clear Word List',
                        description: 'Are you sure that you want to clear out all blacklisted words?',
                        page: {
                            confirm: {
                                title: 'Confirmed',
                                description: 'Successfully cleared out all blacklisted words! You can now dismiss this message.'
                            },
                            abord: {
                                title: 'Annulé',
                                description: 'No actions have been taken! You can now dismiss this message.'
                            }
                        }
                    },
                    words: {
                        title: 'Mots',
                        name: 'Blacklisted word',
                        awaitMessage: 'Send one or multiple words that should get blacklisted.\nPlease **only use** characters from `A-Z`\nSplit words with `, ` to bulk add words.',
                        bulkAdded: 'Successfully bulk added {amout} new words to the blacklist.',
                        added: 'Successfully added "`{word}`" as new blacklisted word.',
                        removed: 'Successfully removed "`{word}`" as blacklisted word.'
                    },
                    message: {
                        title: 'Message',
                        name: 'Blacklisted word reply'
                    },
                    timeout: {
                        title: 'Timeout Duration',
                        name: 'Timeout duration',
                        description: 'The user will be set on Timeout for this duration!\nInput must be less than 18 days.\nExample: `7d 4h 8m 3s`'
                    }
                }
            },
            antiScam: {
                title: 'Anti Scam',
                name: 'Moderation Anti Scam',
                option: {
                    message: 'Message: {message}',
                    actions: 'Actions: {types}',
                    actionType: {
                        reply: 'reply',
                        delete: 'delete',
                        timeout: 'timeout'
                    },
                    timeout: 'Timeout: {time}'
                },
                button: {
                    message: 'Edit Message',
                    timeout: 'Timeout Duration',
                    actions: {
                        title: 'Manage an action',
                        selected: 'Selected',
                        option: {
                            reply: 'Reply',
                            delete: 'Delete',
                            timeout: 'Timeout'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Message',
                        name: 'Anit Scam reply'
                    },
                    timeout: {
                        title: 'Timeout Duration',
                        name: 'Timeout duration',
                        description: 'The user will be set on Timeout for this duration!\nInput must be less than 18 days.\nExample: `7d 4h 8m 3s`'
                    }
                }
            },
            antiLink: {
                title: 'Anti Link',
                name: 'Moderation Anti Link',
                option: {
                    message: 'Message: {message}',
                    actions: 'Actions: {types}',
                    actionType: {
                        reply: 'reply',
                        delete: 'delete',
                        timeout: 'timeout'
                    },
                    timeout: 'Timeout: {time}'
                },
                button: {
                    media: {
                        disable: 'Disallow Media',
                        enable: 'Allow Media'
                    },
                    message: 'Éditer le message',
                    timeout: 'Timeout Duration',
                    actions: {
                        title: 'Manage an action',
                        selected: 'Sélectionné',
                        option: {
                            reply: 'Reply',
                            delete: 'Delete',
                            timeout: 'Timeout'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Message',
                        name: 'Anit Link reply'
                    },
                    timeout: {
                        title: 'Timeout Duration',
                        name: 'Timeout duration',
                        description: 'The user will be set on Timeout for this duration!\nInput must be less than 18 days.\nExample: `7d 4h 8m 3s`'
                    }
                }
            },
            antiSpam: {
                title: 'Anti Spam',
                name: 'Moderation Anti Spam',
                option: {
                    message: 'Message: {message}',
                    actions: 'Actions: {types}',
                    threshold: 'Threshold: **{threshold}msgs/5s**',
                    actionType: {
                        reply: 'reply',
                        timeout: 'timeout',
                        purge: 'purge'
                    },
                    timeout: 'Timeout: {time}'
                },
                button: {
                    threshold: 'Edit Threshold',
                    message: 'Edit Message',
                    timeout: 'Timeout Duration',
                    actions: {
                        title: 'Manage an action',
                        selected: 'Selected',
                        option: {
                            reply: 'Reply',
                            timeout: 'Timeout',
                            purge: 'Purge'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Message',
                        name: 'Anti Spam reply'
                    },
                    timeout: {
                        title: 'Timeout Duration',
                        name: 'Timeout duration',
                        description: 'The user will be set on Timeout for this duration!\nInput must be less than 18 days.\nExample: `7d 4h 8m 3s`'
                    },
                    threshold: {
                        title: 'Threshold',
                        name: 'spam Threshold',
                        description: 'I will consider it as spam, when this amount gets reached within 5 seconds!\nInput must be between 1 and 99.'
                    }
                }
            }
        }
    },
    starboard: {
        title: 'Configure Starboard',
        button: {
            emoji: 'Changer l\'émoji',
            color: 'Changer la couleur',
            count: 'Change Count',
            nsfw: {
                disable: 'Désactiver NSFW',
                enable: 'Activer NSFW'
            },
            bots: {
                disable: 'Désactiver les Bots',
                enable: 'Activer les Bots'
            },
            selfReact: {
                disable: 'Disable Self Reaction',
                enable: 'Enable Self Reaction'
            },
            reply: {
                disable: 'Hide Replied to',
                enable: 'Show Replied to'
            },
            edits: {
                disable: 'Disalow Edits',
                enable: 'Allow Edits'
            },
            logging: {
                disable: 'Disable Logging',
                enable: 'Enable Logging'
            },
            blacklist: {
                set: 'Set Blacklisted Role',
                change: 'Edit Blacklisted Role'
            },
            blacklistedChannels: 'Edit Blacklisted Channels',
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
                name: 'Starboard Color',
                description: 'Paste a Hex color into the chat you want to use.\nGet a Hex color code from [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!',
                invalid: 'The color code is not a valid Hex color.\nGet a Hex color code from [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!'
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
    misc: {
        title: 'Configure Miscellaneous',
        button: {
            embedMessages: 'Embed Messages',
            levelRoles: 'Level Roles',
            leaderboards: 'Leaderboards'
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
                    roles_upsell: 'Subscribe to get {count}+',
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
                button: { blacklistedChannels: 'Edit Blacklisted Channels' }
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