module.exports = {
    lengthFail: 'Emri i etiketës nuk mund të jetë më i gjatë se {max} karaktere!',
    alreadyExists: 'Një etiketë me këtë emër ekziston tashmë!',
    tagsLimit: 'Ju keni arritur kufirin e Serverit prej **{count}/{max} etiketash**!',
    regexFail: 'Vleresimi i emrit të etiketës dështoi për përdorimin e SlashCommands!\nVini re se karakteret speciale nuk lejohen.',
    alreadyExistsDefault: 'Një komandë e paracaktuar me këtë emër ekziston tashmë!',
    invalidTag: 'Një etiketë me këtë emër nuk ekziston!',
    info: {
        title: {
            created: 'Krijuar',
            author: 'Autori',
            usesWeek: 'Përdoret një javë',
            uses: 'Përdorimet',
            last: 'Përdorimi i fundit',
            name: 'Emri i etiketës',
            slash: 'Slash Comand',
            channels: 'Kanalet',
            tags: 'Etiketat',
            totalUses: 'Përdorimet totale',
            totalTags: 'Gjithsej Etiketa',
            totalChannels: 'Totali i kanaleve'
        },
        description: {
            usesWeek: '{number}/jv',
            // wk: week;; example: 43/wk
            slash: {
                true: 'aktive',
                false: 'joaktiv'
            },
            channelUses: '{number} ;[përdor, përdorimet]'
        },
        noData: 'nuk ka të dhëna'
    },
    overview: {
        title: 'Konfigurimi i etiketës',
        message: 'Mesazh',
        embed: 'Embed',
        placeholder: 'Vendmbajtësit e përdorshëm',
        button: {
            exit: 'Ruaj & Dil',
            permission: 'Zgjidhni një leje që i nevojitet përdoruesit',
            color: {
                enabled: 'Zgjidhni një ngjyrë për Embed',
                disabled: 'Përdorni Embeds dhe zgjidhni një ngjyrë'
            },
            group: {
                ticket: {
                    disable: 'Çaktivizo etiketën e biletave',
                    enable: 'Aktivizo etiketën e biletave'
                }
            },
            aliases: 'Menaxho pseudonimet e emrave',
            permissions: {
                Administrator: 'Administrator/i',
                ManageChannels: 'Menaxho kanalet',
                ManageGuild: 'Menaxho Serverin',
                ManageMessages: 'Menaxho Mesazhet',
                ManageNicknames: 'Menaxho pseudonimet',
                ManageRoles: 'Menaxho rolet',
                ManageWebhooks: 'Menaxho Webhooks',
                ManageEmojisAndStickers: 'Menaxho emoji dhe ngjitëse',
                ManageEvents: 'Menaxho Ngjarjet',
                ManageThreads: 'Menaxho temat',
                none: 'Asnjë'
            }
        }
    },
    form: {
        formName: '{name} etiketë',
        message: { content: 'Përmbajtja' },
        embed: {
            title: 'Titulli',
            description: 'Përshkrim',
            thumbnail: 'Miniatura',
            image: 'Imazhi',
            footer: 'Pjesa fundore'
        },
        aliases: { name: 'Pseudonimet e emrave ({max} max)' }
    },
    success: {
        message: 'Etiketa {name} u shtua me sukses.',
        command: 'Provojeni me {command}'
    },
    list: {
        title: {
            text: 'Teksti ;[Komanda/i, Komandat]',
            slash: 'Slash ;[Komanda/i, Komandat]'
        },
        none: 'pa etiketa',
        disabled: '{amount} ;[etiketa është, etiketat janë] të fshehura për shkak të mungesës së lejeve',
        // ;[singular, plural]
        amount: '{amount} etiketa • Përdorni me {command}'
    },
    deleted: 'Etiketa **{name}** u fshi me sukses.'
};