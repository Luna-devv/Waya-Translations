module.exports = {
    disclaimer: 'Ju duhet të zgjidhni një opsion për të aplikuar këtë cilësim',
    choice: {
        remove: {
            question: 'Nga ku dëshironi të hiqni {prn} si përemër të preferuar?',
            button: {
                global: 'Hiqeni gjithkund',
                guild: 'Hiqeni në këtë server'
            }
        },
        add: {
            question: 'Ku dëshironi të vendosni {prn} si përemrin tuaj të preferuar?',
            button: {
                global: 'Gjithkund',
                guild: 'Vendosur në Server'
            }
        }
    },
    success: {
        removed: {
            global: 'U hoq me sukses {prn} si përemër i preferuar globalisht.',
            guild: 'U hoq me sukses {prn} si përemër i preferuar në këtë Server.'
        },
        added: {
            global: 'U shtua me sukses {prn} si përemër i preferuar globalisht.',
            guild: 'U shtua me sukses {prn} si përemër i preferuar në këtë Server.'
        }
    },
    error: {
        tooSlow: 'Ishe shumë i ngadalshëm, provo sërish!',
        fail: 'Ruajtja e cilësimeve tuaja dështoi, provoni përsëri!'
    }
};