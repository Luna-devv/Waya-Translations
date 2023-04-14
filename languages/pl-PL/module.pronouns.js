module.exports = {
    disclaimer: 'Musisz wybrać jakąś opcję, aby zastosować to ustawienie',
    choice: {
        remove: {
            question: 'Skąd chcesz usunąć {prn} jako preferowany zaimek?',
            button: {
                global: 'Usuń wszędzie',
                guild: 'Usuń w gildii'
            }
        },
        add: {
            question: 'Gdzie chcesz ustawić {prn} jako preferowany zaimek?',
            button: {
                global: 'Ustaw wszędzie',
                guild: 'Ustaw w gildii'
            }
        }
    },
    success: {
        removed: {
            global: 'Pomyślnie usunięto {prn} zgodnie z preferowanymi zaimkami globalnymi.',
            guild: 'Pomyślnie usunięto {prn} jako preferowane zaimki na tym serwerze.'
        },
        added: {
            global: 'Pomyślnie dodano {prn} jako preferowane zaimki globalne.',
            guild: 'Pomyślnie dodano {prn} jako preferowane zaimki na tym serwerze.'
        }
    },
    error: {
        tooSlow: 'Byłeś(aś) zbyt wolny(a), spróbuj ponownie!',
        fail: 'Nie udało się zapisać ustawień, spróbuj ponownie!'
    }
};