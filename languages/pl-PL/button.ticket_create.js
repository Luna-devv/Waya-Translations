module.exports = {
    noData: 'Nie udało się znaleźć serwera w bazie danych!',
    noCategory: 'Kategoria zgłoszeń została usunięta. Powiadom administratora serwera.',
    created: 'Twoje zgłoszenie {channel} zostało utworzone!',
    form: {
        formTitle: 'Powód otwarcia zgłoszenia',
        field: 'Dlaczego chcesz otworzyć zgłoszenie?',
        placeholder: 'Potrzebuję pomocy z tym..'
    },
    commands: { closerequest: 'Utwórz żądanie zamknięcia' },
    max: {
        category: 'Nie możesz utworzyć zgłoszenia w tej chwili, ponieważ ten serwer osiągnął [maksymalny limit kanału dla kategorii]({docs}) {num}. Powiedz administratorom serwera, aby ustawili kanał kategorii na {string}, aby rozwiązać ten problem!\n\nMasz jakiekolwiek pytania? {support}',
        guild: 'Nie możesz utworzyć zgłoszenia w tej chwili, ponieważ ten serwer osiągnął maksymalny limit kanału {num}. Powiedz administratorom serwera, aby usunęli kilka kanałów, aby rozwiązać ten problem!\n\nMasz pytania? {support}'
    }
};