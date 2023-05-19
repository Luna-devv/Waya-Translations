/*
    Do NOT edit things like {} since these are placeholders,
    \n are new lines
*/
module.exports = {
    validate: 'Sprawdź poprawność danych...',
    notAllowed: 'Nie możesz użyć tego menu.',
    prefix: {
        name: 'Prefiks',
        set: 'Pomyślnie zaktualizowano prefiks gildii na {prefix}!',
        noSpace: 'Pamiętaj, że nie możesz używać spacji wewnątrz prefiksu! Jest to dozwolone tylko na końcu.',
        disclaimer: 'To NIE dotyczy "/" (Slash)-komend'
    },
    global: {
        // will be the same everywhere
        none: 'brak',
        useButtons: 'Wybierz opcję, którą chcesz edytować za pomocą przycisków poniżej.',
        developer: {
            bypass: 'Nie masz permisji `MANAGE_GUILD`, aby uzyskać dostęp do tego panelu.\nCzy nadal chcesz kontynuować?',
            choice: {
                access: 'Jestem pewien, tak',
                abord: 'Nieważne'
            },
            notice: 'uwaga - przywileje deweloperskie wyegzekwowane..'
        },
        upsell: 'Subskrybuj, aby uzyskać jeszcze {count}',
        permissions: 'Brakuje: {perms}',
        placeholders: 'Tekst zastępczy',
        await: {
            channel: 'Wspomnij kanał lub wklej ID kanału do czatu.\nWpisz {string}, aby usunąć kanał.',
            category: 'Wspomnij kategorię lub wklej ID kategorii do czatu.\nWpisz {string}, aby usunąć kategorię.',
            role: 'Wspomnij rolę lub wklej ID roli do czatu.\nWpisz {string}, aby usunąć rolę.',
            message: 'Wyślij wiadomość, która powinna być używana jako {what}.',
            emote: 'Wyślij emotikony, które powinny być używane jako {what}.\nWpisz {string}, aby usunąć emotikony.',
            color: 'Wyślij kod koloru szesnastkowego (hex), który powinien być użyty dla {what}. Uzyskaj prawidłowy kod na {url}.',
            patient: 'Włączenie tego może potrwać kilka sekund, proszę czekać..'
        },
        success: {
            set: 'Pomyślnie ustawiono {what} na **{data}**.',
            add: 'Pomyślnie dodano {what} do **{data}**.',
            setCodeblock: 'Pomyślnie ustawiono {what} na {data}',
            removed: 'Pomyślnie usunięto {what}.',
            remove: 'Pomyślnie usunięto {what} z **{data}**.',
            fail: 'Ten {what} nie istnieje w tej gildii..',
            lengthFail: '{what} jest dłuższy niż {max} znaków! ({length} znaków, {relative} za dużo)',
            otherLengthFail: '{what} jest krótszy niż {min} znaków! ({length} znaków, {relative} za mniej)',
            numberFail: '{what} nie jest liczbą pomiędzy {a} i {b}!',
            roleFail: 'Ta rola jest zarządzana tylko przez Discorda lub należy do użytkownika bota.',
            colorFail: 'Nie podano prawidłowego kodu koloru szesnastkowego (hex). Zdobądź poprawny kog hex {url}.',
            emoteFail: 'Nie wysłałeś żadnych prawidłowych emotikonów. Obsługiwane są tylko niestandardowe i domyślne emotikony discorda.'
        },
        webedit: {
            button: 'Edytor Osadzenia',
            title: 'Edycja wiadomości na stronie',
            description: 'Otwórz [ta strona internetowa]({url}), aby rozpocząć edycję wiadomości i osadzenia.',
            open: 'Otwórz stronę internetową'
        },
        type: {
            text: 'Kanał tekstowy',
            category: 'Kanał kategorii',
            role: 'Rola',
            emoji: 'Emotka'
        },
        state: {
            enabled: 'Włączone',
            disabled: 'Wyłączone'
        },
        option: {
            required: 'Wymagane',
            optional: 'Opcjonalnie'
        },
        button: {
            back: 'Powrót',
            disable: 'Wyłącz',
            enable: 'Włącz',
            channel: {
                set: 'Ustaw Kanał',
                edit: 'Edytuj Kanał'
            },
            category: {
                set: 'Ustaw Kategorię',
                edit: 'Edytuj Kategorię'
            },
            role: {
                set: 'Ustaw Rolę',
                edit: 'Edytuj Rolę'
            },
            mode: {
                analyst: 'Analityczny',
                cozy: 'Spokojny'
            },
            modeChange: {
                analyst: 'Przełącz na Analyticzny',
                cozy: 'Przełącz na Spokojny'
            },
            dupaw: {
                // This is a name, cannot be translated
                enable: 'Włącz dupaw',
                disable: 'Wyłącz dupaw'
            }
        }
    },
    main: {
        title: 'Konfiguruj {name}',
        option: {
            premium: {
                text: 'Poziom Enterprise {tier}',
                buy: 'Kup Enterprise'
            }
        },
        button: {
            logging: 'Logowanie',
            tickets: 'Zgłoszenia',
            moderation: 'Moderacja',
            starboard: 'Starboard',
            misc: 'Różne',
            followNews: 'Obserwuj aktualności',
            staff: 'Zarządzaj Gildią',
            exit: 'Wyjdź',
            help: 'Pomoc'
        }
    },
    logging: {
        title: 'Skonfiguruj logowanie',
        button: {
            messages: 'Wiadomości',
            joins: 'Dołączenia',
            welcomer: 'Witanie',
            byer: 'Żegnanie'
        },
        page: {
            messages: {
                title: 'Wiadomości',
                name: 'Logowanie wiadomości',
                option: {
                    channel: 'Kanał: {channel}',
                    mode: 'Tryb: {mode}',
                    snipetimeout: 'Snipe: {time}'
                },
                button: {
                    snipe: {
                        enable: 'Włącz Snipe',
                        disable: 'Wyłącz Snipe',
                        timeout: 'zmień czas czyszczenia snipe na wiadomość'
                    }
                },
                page: {
                    channel: {
                        title: 'Kanał',
                        name: 'Kanał Logowania wiadomości'
                    }
                }
            },
            joins: {
                title: 'Dołączenia',
                name: 'Logowanie Dołączeń',
                option: {
                    channel: 'Kanał: {channel}',
                    mode: 'Tryb: {mode}',
                    filter: 'Filtr: {state}',
                    captcha: 'CAPTCHA: {state}'
                },
                button: {
                    filter: 'Filtr',
                    captcha: 'Weryfikacja CAPTCHA'
                },
                page: {
                    channel: {
                        title: 'Kanał',
                        name: 'Logowanie Dołączeń'
                    },
                    filter: {
                        title: 'Filtr',
                        option: {
                            trigger: 'Wyzwalacz Wieku: **{trigger} dni**',
                            punishment: 'Kara: **{type}**',
                            punishmentType: {
                                ban: 'Zbanuj',
                                kick: 'Wyrzuć',
                                timeout: 'Timeout',
                                role: 'Przypisz rolę {role}',
                                none: 'brak'
                            }
                        },
                        button: {
                            dmNotification: {
                                disable: 'Wyłącz powiadomienia DM',
                                enable: 'Włącz powiadomienia DM'
                            },
                            trigger: {
                                set: 'Ustaw wyzwalacz Wieku',
                                edit: 'Edytuj Wyzwalacz Wieku'
                            },
                            punishment: {
                                title: 'Ustaw karę',
                                current: 'Bieżący',
                                option: {
                                    ban: 'Zbanuj Użytkownika',
                                    kick: 'Wyrzuć Użytkownika',
                                    timeout: 'Ztimeout\'uj Użytkownika',
                                    role: 'Przypisz Rolę'
                                }
                            }
                        },
                        page: {
                            trigger: {
                                title: 'Wyzwalacz',
                                name: 'wymagania wiekowe',
                                description: 'Jeśli konto jest młodsze niż ten wiek, użytkownik zostanie ukarany!\nWejście musi wynosić od 0 do 28 dni.'
                            },
                            role: {
                                title: 'Rola',
                                name: 'rola karania'
                            }
                        }
                    },
                    captcha: {
                        title: 'CAPTCHA',
                        name: 'CAPTCHA',
                        option: {
                            verifiedrole: 'Zweryfikowana rola: {role}',
                            unverifiedrole: 'Niezweryfikowana rola: {role}',
                            channel: 'Logowanie: {channel}',
                            color: 'Kolor: {color}'
                        },
                        disclaimer: 'Kontynuuj z {command}',
                        button: {
                            verifiedrole: {
                                set: 'Ustaw zweryfikowaną rolę',
                                edit: 'Edytuj zweryfikowaną rolę'
                            },
                            unverifiedrole: {
                                set: 'Ustaw niezweryfikowaną rolę',
                                edit: 'Edytuj niezweryfikowaną rolę'
                            },
                            type: {
                                title: 'Ustaw typ CAPTCHA',
                                selected: 'Wybrane'
                            },
                            color: 'Zmień kolor strony'
                        },
                        page: {
                            verifiedrole: {
                                title: 'Zweryfikowana rola',
                                name: 'Zweryfikowana rola CAPTCHA'
                            },
                            unverifiedrole: {
                                title: 'Niezweryfikowana rola',
                                name: 'Zweryfikowana rola CAPTCHA'
                            },
                            logging: {
                                title: 'Logowanie',
                                name: 'Kanał logowania CAPTCHA'
                            },
                            role: {
                                title: 'Rola',
                                name: 'błędna rola CAPTCHA'
                            },
                            color: {
                                title: 'Kolor Strony',
                                name: 'Kolor Strony',
                                description: 'Wklej kolor szesnastkowy do czatu, którego chcesz użyć.\nZalecamy użycie koloru blisko czarnego z bardzo wysokim nasyceniem.\nZauważ, że kolor Paszportu zawsze będzie jaśniejszy.\nPobierz kod koloru Hex z [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!',
                                invalid: 'Kod koloru nie jest prawidłowym kolorem szesnastkowym.\nPobierz kod koloru szesnastkowego z [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!'
                            }
                        }
                    }
                }
            },
            welcomer: {
                title: 'Witanie',
                name: 'Witanie',
                option: {
                    channel: 'Kanał: {channel}',
                    role: 'Role: {role}',
                    message: {
                        message: 'Wiadomość: {message}',
                        command: 'Wiadomość: użyj `{command}`'
                    },
                    afterleaveMessage: {
                        message: 'Wiadomość PW: {message}',
                        // AL: After Leave - just use the first letters of your language :)
                        command: 'Wiadomość PW: użyj `{command}`'
                    },
                    pings: 'Wzaimki: {channels}',
                    autodelete: 'Auto usuwanie: **{time}**',
                    autodelete_never: 'nigdy'
                },
                warnings: {
                    afterleaveXautodelete: 'Nie zalecamy równoczesnego używania **Automatycznego Usuwania** i **Usunięcie Po Wyjściu**',
                    embedXcard: 'W osadzonej karcie nadpisuje niestandardowy osadzony obraz',
                    channelMissmatch: 'Kanał fali webhooka jest inny niż wiadomość powitalna'
                },
                button: {
                    nextpage: 'Następna Strona ({cur}/{total})',
                    message: 'Edytuj Wiadomość',
                    imgcard: 'Edytuj Kartę',
                    pings: 'Edytuj Kanały Ping',
                    autodelete: 'Ustaw Automatyczne Usuwanie',
                    assignRolesAfterRejoin: {
                        enable: 'Przypisz Role Po Ponownym Dołączeniu',
                        disable: 'Wyłącz Przypisywanie Ról Po Ponownym Dołączeniu'
                    },
                    afterleave: {
                        title: 'Co powinno się wydarzyć z wiadomością, jeśli członek wyjdzie?',
                        selected: 'Wybrane',
                        option: {
                            nothing: 'Nic',
                            edit: 'Edytuj po opuszczeniu',
                            delete: 'Usuń po opuszczeniu'
                        }
                    },
                    dm: 'Wiadomość DM',
                    afterleave_webedit: 'Po opuszczeniu edytora osadzenia',
                    wave: 'Przycisk Fali',
                    reactions: 'Reakcje'
                },
                page: {
                    channel: {
                        title: 'Kanał',
                        name: 'Kanał Powitalny'
                    },
                    message: {
                        title: 'Wiadomość',
                        name: 'Wiadomość powitalna'
                    },
                    role: {
                        title: 'Rola',
                        name: 'Rola powitania'
                    },
                    autodelete: {
                        title: 'Automatyczne Usuwanie',
                        name: 'Automatyczne Usuwanie',
                        description: 'Wiadomość powitalna zostanie usunięta po tym czasie.\nZalecamy zachowanie tego czasu na krótko (tylko na kilka sekund).\nPrzykład: `1m 3s`'
                    },
                    dm: { button: { disable: 'Wyłącz wiadomość DM' } },
                    reactions: {
                        title: 'Reakcje',
                        option: {
                            welcomer: 'Powitalne Reakcje Wiadomości: {emotes}',
                            firstmessage: 'Reakcje na pierwszą wiadomość: {emotes}'
                        },
                        button: {
                            welcomer: 'Wiadomość Powitalna',
                            firstmessage: 'Pierwsza Wiadomość Użytkownika'
                        },
                        page: {
                            welcomer: {
                                title: 'Powitanie',
                                name: 'automatyczna reakcja powitania'
                            },
                            firstmessage: {
                                title: 'Pierwsza Wiadomość',
                                name: 'automatyczna reakcja'
                            }
                        }
                    },
                    imgcard: {
                        title: 'Karta',
                        option: { background: 'Tło: {url}' },
                        button: {
                            background: {
                                set: 'Ustaw Niestandardowe Tło',
                                edit: 'Edytuj Niestandardowe Tło'
                            },
                            deleteBackground: 'Usuń Tło',
                            inEmbed: {
                                enable: 'Pokaż Obraz w Osadzaniu',
                                disable: 'Nie Pokazuj Obrazu w Osadzeniu'
                            }
                        },
                        page: {
                            background: {
                                title: 'Tło',
                                name: 'Tło Karty',
                                description: 'Link musi być **bezpośrednim adresem URL obrazu**, musi być również linkiem typu {scheme}.\nZalecamy stosunek {ratio} do minimalnej rozdzielczości {resolution}.'
                            }
                        }
                    },
                    dm: { title: 'Prywatna Wiadomość' },
                    wavebtn: {
                        title: 'Pomachaj, aby powiedzieć hej',
                        option: {
                            send: 'Wyślij: {type}',
                            emoji: 'Emotka: {emote}',
                            label: 'Etykieta: {label}'
                        },
                        button: {
                            emoji: 'Zmień Tekst Przycisku',
                            label: 'Zmień Tekst Przycisku',
                            ping: {
                                enable: 'Włącz Ping',
                                disable: 'Wyłącz Ping'
                            },
                            type: {
                                title: 'Wybierz typ odpowiedzi',
                                option: {
                                    '0': 'Losowa Naklejka',
                                    '1': 'Niestandardowa Wiadomość'
                                }
                            },
                            color: {
                                title: 'Wybierz Kolor Przycisku',
                                option: {
                                    blurple: 'Blurple',
                                    // You may leave that
                                    grey: 'Szary',
                                    green: 'Zielony',
                                    red: 'Czerwony'
                                }
                            }
                        },
                        page: {
                            emoji: {
                                title: 'Emotka',
                                name: 'Emotka przycisku'
                            },
                            label: {
                                title: 'Etykieta',
                                name: 'Tekst Przycisku'
                            }
                        }
                    }
                }
            },
            byer: {
                title: 'Żegnanie',
                name: 'Żegnanie',
                option: {
                    channel: 'Kanał: {channel}',
                    message: {
                        message: 'Wiadomość: {message}',
                        command: 'Wiadomość: użyj `{command}`'
                    },
                    autodelete: 'Automatyczne usuwanie: **{time}**',
                    autodelete_never: 'nigdy'
                },
                button: {
                    message: 'Edytuj Wiadomość',
                    autodelete: 'Ustaw Automatyczne Usuwanie'
                },
                page: {
                    channel: {
                        title: 'Kanał',
                        name: 'Kanał Pożegnań'
                    },
                    message: {
                        title: 'Wiadomość',
                        name: 'Wiadomość Pożegnania'
                    },
                    autodelete: {
                        title: 'Automatyczne Usuwanie',
                        name: 'Automatyczne Usuwanie',
                        description: 'Wiadomość pożegnalna zostanie usunięta po tym czasie.\nZalecamy zachowanie tego czasu na krótko (tylko na kilka sekund).\nPrzykład: `1m 3s`'
                    }
                }
            }
        }
    },
    tickets: {
        title: 'Skonfiguruj zgłoszenia',
        option: {
            channel: 'Kategoria: {channel}',
            staff: 'Personel: {role}',
            logging: 'Logowanie: {channel}',
            forceReason: 'Powód: {state}',
            naming: 'Nazewnictwo: {type}',
            namingType: {
                username: 'Nazwa użytkownika',
                userid: 'ID użytkownika',
                random: 'Losowe'
            },
            position: 'Pozycja: {type}',
            positionType: {
                top: 'Na górze',
                bottom: 'Na dole'
            }
        },
        button: {
            channelPosition: {
                top: 'Pozycja: Do góry',
                bottom: 'Position: To bottom'
            },
            forceReason: {
                enable: 'Wymuś Powód',
                disable: 'Powód Opcjonalny'
            },
            logging: {
                set: 'Ustaw Kanał Logowania',
                edit: 'Zmień Kanał Logowania'
            },
            transcript: {
                disable: 'Wyłącz Transkrypcje',
                enable: 'Włącz Transkrypcje'
            },
            openReason: {
                disable: 'Wyłącz Powód Otwarcia',
                enable: 'Włącz Powód Otwarcia'
            },
            leaveAutoclose: {
                disable: 'Wyłącz Automatyczne Zamykanie Wyjścia',
                enable: 'Włącz Automatyczne Zamykanie Wyjścia'
            },
            embeds: 'Zmień Osadzenie',
            naming: {
                title: 'Ustaw typ nazewnictwa',
                current: 'Bieżący',
                option: {
                    username: 'Nazwa użytkownika',
                    userid: 'ID użytkownika',
                    random: 'Losowe ID'
                }
            }
        },
        page: {
            category: {
                title: 'Kategoria',
                name: 'Kategoria Zgłoszeń'
            },
            role: {
                title: 'Rola Personelu',
                name: 'Rola Personelu Zgłoszeń'
            },
            descriptions: {
                title: 'Tekst',
                name: 'Opisy Zgłoszeń',
                button: {
                    texts: 'Podgląd Zgłoszenia',
                    topic: 'Zmień Temat',
                    unclaimed: 'Zmień Nieodebraną Osadzenie',
                    claimed: 'Zmień Odebrane Osadzenie'
                },
                page: {
                    unclaimed: {
                        title: 'Nieodebrane',
                        name: 'Opis Nieodebranego Zgłoszenia'
                    },
                    claimed: {
                        title: 'Odebrano',
                        name: 'Opis Odebranego Zgłoszenia'
                    },
                    topic: {
                        title: 'Temat',
                        name: 'Temat Zgłoszeń'
                    }
                }
            },
            logging: {
                title: 'Logowanie',
                name: 'Logowanie Zgłoszeń'
            }
        }
    },
    moderation: {
        title: 'Skonfiguruj Moderację',
        option: {
            role: 'Obejście Roli: {role}',
            logging: 'Logowanie: {channel}'
        },
        button: {
            filter: 'Czarna lista',
            antiScam: 'Anty-Scam',
            antiLink: 'Anty-link',
            antiSpam: 'Anty-spam',
            bypassRole: {
                edit: 'Edytuj Rolę Obejścia',
                set: 'Ustaw Rolę Obejścia'
            },
            logging: {
                edit: 'Edytuj Kanał Logowania',
                set: 'Ustaw Kanał Logowania'
            }
        },
        page: {
            role: {
                title: 'Rola Ominięcia',
                name: 'Rola ominięcia'
            },
            logging: {
                title: 'Logowanie',
                name: 'Logi Moderacji'
            },
            filter: {
                title: 'Filtr',
                name: 'Filtry Moderacji',
                option: {
                    message: 'Wiadomość: {message}',
                    actions: 'Akcje: {types}',
                    actionType: {
                        reply: 'odpowiedź',
                        delete: 'usuń',
                        timeout: 'timeout'
                    },
                    total: 'Razem: **{amount} słów**',
                    timeout: 'Timeout: {time}'
                },
                button: {
                    deleteAll: 'Wyczyść listę słów',
                    editWords: 'Edytuj listę słów',
                    message: 'Edytuj Wiadomość',
                    timeout: 'Czas Trwania Timeout\'u ',
                    actions: {
                        title: 'Zarządzaj akcją',
                        selected: 'Wybrane',
                        option: {
                            reply: 'Odpowiedź',
                            delete: 'Usuń',
                            timeout: 'Timeout'
                        }
                    },
                    export: 'Pokaż listę słów'
                },
                page: {
                    delete: {
                        title: 'Wyczyść listę słów',
                        description: 'Czy na pewno chcesz wyczyścić wszystkie słowa na czarnej liście?',
                        page: {
                            confirm: {
                                title: 'Potwierdzone',
                                description: 'Pomyślnie wyczyszczono wszystkie słowa na czarnej liście! Możesz teraz odrzucić tę wiadomość.'
                            },
                            abord: {
                                title: 'Anulowane',
                                description: 'Nie podjęto żadnych działań! Teraz możesz odrzucić tę wiadomość.'
                            }
                        }
                    },
                    words: {
                        title: 'Słowa',
                        name: 'Zakazane słowa',
                        awaitMessage: 'Wyślij jedno lub wiele słów, które powinny być umieszczone na czarnej liście.\nProszę **używaj tylko** znaków `od A do Z`\nPodziel słowa z `, `, aby dodać słowa.',
                        bulkAdded: 'Pomyślnie dodano {amout} nowych słów do czarnej listy.',
                        added: 'Pomyślnie dodano "`{word}`" jako nowe słowo do czarnej listy.',
                        removed: 'Pomyślnie usunięto "`{word}`" jako słowo z czarnej listy.'
                    },
                    message: {
                        title: 'Wiadomość',
                        name: 'Odpowiedź na słowo na czarnej liście'
                    },
                    timeout: {
                        title: 'Czas Trwania Timeout\'u ',
                        name: 'Czas Trwania Timeout\'u ',
                        description: 'Użytkownik zostanie ustawiony na Timeout na ten czas!\nCzas musi być krótszy niż 18 dni.\nPrzykład: `7d 4h 8m 3s`'
                    }
                }
            },
            antiScam: {
                title: 'Anty-Scam',
                name: 'Moderacja Anti Scam',
                option: {
                    message: 'Wiadomość: {message}',
                    actions: 'Akcje: {types}',
                    actionType: {
                        reply: 'odpowiedz',
                        delete: 'usuń',
                        timeout: 'timeout'
                    },
                    timeout: 'Timeout: {time}'
                },
                button: {
                    message: 'Edytuj Wiadomość',
                    timeout: 'Czas Trwania Timeout\'u ',
                    actions: {
                        title: 'Zarządzaj akcją',
                        selected: 'Wybrane',
                        option: {
                            reply: 'Odpowiedz',
                            delete: 'Usuń',
                            timeout: 'Timeout'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Wiadomość',
                        name: 'Odpowiedź Anit Scam'
                    },
                    timeout: {
                        title: 'Czas Trwania Timeout\'u ',
                        name: 'Czas Trwania Timeout\'u ',
                        description: 'Użytkownik zostanie ustawiony na Timeout na ten czas!\nCzas musi być krótszy niż 18 dni.\nPrzykład: `7d 4h 8m 3s`'
                    }
                }
            },
            antiLink: {
                title: 'Anty-link',
                name: 'Moderacja Anti Link',
                option: {
                    message: 'Wiadomość: {message}',
                    actions: 'Akcje: {types}',
                    actionType: {
                        reply: 'odpowiedz',
                        delete: 'usuń',
                        timeout: 'timeout'
                    },
                    timeout: 'Timeout: {time}'
                },
                button: {
                    media: {
                        disable: 'Zablokuj multimedia',
                        enable: 'Zezwalaj na media'
                    },
                    message: 'Edytuj Wiadomość',
                    timeout: 'Czas Trwania Timeout\'u ',
                    actions: {
                        title: 'Zarządzaj akcją',
                        selected: 'Wybrane',
                        option: {
                            reply: 'Odpowiedz',
                            delete: 'Usuń',
                            timeout: 'Timeout'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Wiadomość',
                        name: 'Odpowiedź Anti Link'
                    },
                    timeout: {
                        title: 'Czas Trwania Timeout\'u ',
                        name: 'Czas Trwania Timeout\'u ',
                        description: 'Użytkownik zostanie ustawiony na Timeout na ten czas!\nCzas musi być krótszy niż 18 dni.\nPrzykład: `7d 4h 8m 3s`'
                    }
                }
            },
            antiSpam: {
                title: 'Anty-spam',
                name: 'Moderacja Anti Spam',
                option: {
                    message: 'Wiadomość: {message}',
                    actions: 'Akcje: {types}',
                    threshold: 'Próg: **{threshold}wiad/5s**',
                    actionType: {
                        reply: 'odpowiedz',
                        timeout: 'timeout',
                        purge: 'oczyść'
                    },
                    timeout: 'Timeout: {time}'
                },
                button: {
                    threshold: 'Edytuj próg',
                    message: 'Edytuj Wiadomość',
                    timeout: 'Czas Trwania Timeout\'u ',
                    actions: {
                        title: 'Zarządzaj akcją',
                        selected: 'Wybrane',
                        option: {
                            reply: 'Odpowiedz',
                            timeout: 'Timeout',
                            purge: 'Oczyść'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Wiadomość',
                        name: 'Odpowiedź Anti Spam'
                    },
                    timeout: {
                        title: 'Czas Trwania Timeout\'u ',
                        name: 'Czas Trwania Timeout\'u ',
                        description: 'Użytkownik zostanie ustawiony na Timeout na ten czas!\nCzas musi być krótszy niż 18 dni.\nPrzykład: `7d 4h 8m 3s`'
                    },
                    threshold: {
                        title: 'Próg',
                        name: 'Próg spamu',
                        description: 'Będę uważała to za spam, kiedy ta ilość zostanie osiągnięta w ciągu 5 sekund!\nWejście musi wynosić od 1 do 99.'
                    }
                }
            }
        }
    },
    starboard: {
        title: 'Skonfiguruj Starboard',
        button: {
            emoji: 'Zmień emoji',
            color: 'Zmień Kolor',
            count: 'Zmień liczbę',
            nsfw: {
                disable: 'Wyłącz NSFW',
                enable: 'Włącz NSFW'
            },
            bots: {
                disable: 'Wyłącz boty',
                enable: 'Włącz boty'
            },
            selfReact: {
                disable: 'Wyłącz własną reakcję',
                enable: 'Włącz własną reakcję'
            },
            reply: {
                disable: 'Ukryj odpowiedzi',
                enable: 'Pokaż odpowiedzi'
            },
            edits: {
                disable: 'Nie zezwalaj na edycje',
                enable: 'Zezwalaj na edycje'
            },
            logging: {
                disable: 'Wyłącz logowanie',
                enable: 'Włącz logowanie'
            },
            blacklist: {
                set: 'Ustaw rolę czarnej listy',
                change: 'Edytuj rolę czarnej listy'
            },
            blacklistedChannels: 'Edytuj kanały czarnej listy',
            delete: {
                disable: 'Wyłącz usuwanie <{reactions} reakcji',
                enable: 'Włącz usuwanie<{reactions} reakcji'
            },
            display: {
                title: 'Ustaw styl wyświetlania',
                selected: 'Wybrane',
                option: {
                    tag: 'Tag',
                    username: 'Nazwa użytkownika',
                    nickname: 'Nick',
                    guildProfile: 'Profil gildii'
                }
            }
        },
        option: {
            channel: 'Kanał: {channel}',
            color: 'Kolor: {color}',
            emoji: 'Emoji: {emoji}',
            count: 'Ilość: {count}',
            blacklistedRole: 'Czarna lista: {role}',
            display: 'Wyświetlanie: {profileType}',
            profileType: {
                tag: 'Tag',
                username: 'Nazwa użytkownika',
                nickname: 'Nick',
                guildProfile: 'Profil gildii'
            }
        },
        page: {
            channel: {
                title: 'Kanał',
                name: 'Kanał Starboard\'u'
            },
            emoji: {
                title: 'Emoji',
                name: 'Emoji Starboard\'u'
            },
            color: {
                title: 'Kolor',
                name: 'Kolor Starboard\'u'
            },
            count: {
                title: 'Ilość',
                name: 'Wymagana ilość',
                description: 'Wyślij liczbę, aby ustawić wymóg minimalnej liczby reakcji {emote}.'
            },
            blacklistedRole: {
                title: 'Rola czarnej listy',
                name: 'Rola czarnej listy'
            },
            blacklistedChannels: {
                title: 'Kanały czarnej listy',
                name: 'Lista kanałów czarnej listy',
                description: 'Wspomnij kanał/Kategorię lub wklej ID kanału do czatu.\nZprefiksuj wiadomość z `+`, aby dodać lub `-` aby usunąć kanały.\nMożesz wysłać wiele kanałów oddzielonych spacją.\nWpisz `none` aby usunąć wszystkie kanały.',
                missingPrefix: 'Wiadomość musi być zprefiksowana `+`, aby dodać lub `-` aby usunąć kanały.'
            }
        }
    },
    misc: {
        title: 'Skonfiguruj różne',
        button: {
            embedMessages: 'Osadzone wiadomości',
            levelRoles: 'Poziomy ról',
            leaderboards: 'Tablice wyników',
            stickymessages: 'Lepkie wiadomości '
        },
        page: {
            embedMessages: {
                title: 'Osadzone wiadomości',
                description: '**Co to jest?**\nJeśli wysyłany jest link do wiadomości, {name} odpowie treścią tej wiadomości!',
                button: {
                    allowOtherGuilds: {
                        enable: 'Zezwalaj innym Gildiom na osadzenie wiadomości stąd',
                        disable: 'Nie zezwalaj innym Gildiom na osadzenie wiadomości stąd'
                    },
                    color: 'Wybierz kolor osadzenia',
                    display: {
                        title: 'Wybierz styl wyświetlania autora',
                        selected: 'Wybrane',
                        option: {
                            message: 'Zawartość wiadomości',
                            author: 'Pole autora',
                            footer: 'Pole stopki'
                        }
                    }
                }
            },
            levelRoles: {
                title: 'Poziomy ról',
                option: {
                    roles: 'Role: **{count}/{max}**',
                    channel: 'Kanał: {channel}',
                    channel_none: 'kanał wiadomości',
                    message: 'Wiadomość: {message}'
                },
                button: {
                    message: 'Edytuj Wiadomość',
                    addrole: 'Dodaj Poziom',
                    select: {
                        title: 'Wybierz rolę poziomu, którą chcesz edytować',
                        editing: 'Edycja',
                        option: {
                            name: '{messages} wiadomości',
                            description: 'Rola: {role}'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Wiadomość',
                        name: 'Odpowiedź poziomu w górę'
                    },
                    channel: {
                        title: 'Kanał',
                        name: 'Kanał poziomu w górę'
                    },
                    addRole: {
                        title: 'Nowa rola poziomu',
                        limit: 'Osiągnąłeś limit gildii **{count}/{max} ról poziomu**!',
                        alreadExists: 'Rola nagrody dla **{messages} wiadomości** została już ustawiona na rolę **{role}**.',
                        success: 'Pomyślnie dodano tę rolę Poziomu. Każdy użytkownik, który osiągnie **{messages} wiadomości** otrzyma teraz **rolę {role}**!',
                        page: {
                            messageCount: {
                                title: 'Liczba wiadomości',
                                name: 'wymagana liczba wiadomości',
                                description: 'Wyślij numer, który użytkownik będzie musiał mieć tak jak w liczniku wiadomości, aby uzyskać wybraną rolę.'
                            },
                            role: {
                                title: 'Rola',
                                name: 'obecna rola'
                            }
                        }
                    },
                    editRole: {
                        title: 'Edytuj rolę poziomu',
                        option: {
                            role: 'Rola: {role}',
                            messages: 'Wiadomości: {messages}'
                        },
                        button: {
                            messages: 'Zmień liczbę wiadomości',
                            role: 'Zmień rolę',
                            delete: 'Usuń'
                        }
                    }
                }
            },
            leaderboards: {
                title: 'Tablice wyników',
                option: { blacklisted: 'Czarna lista: {channels}' },
                button: {
                    blacklistedChannels: 'Edytuj kanały czarnej listy',
                    reset: {
                        disable: 'Nie resetuj danych użytkownika po wyjściu',
                        enable: 'Zresetuj dane użytkownika po wyjściu'
                    },
                    roles: 'Nagroda ról'
                },
                page: {
                    roles: {
                        title: 'Najlepsze role',
                        option: {
                            messages: 'Role wiadomości: {roles}',
                            voiceminutes: 'Rola głosu: {roles}'
                        },
                        warnings: {
                            order: 'Proszę najpierw wybrać #1 role, potem #2. a następnie #3',
                            permsOrder: 'Sprawdź, czy wszystkie role są poniżej roli {bot}'
                        },
                        button: {
                            messages: 'Top 3 role wiadomości',
                            voiceminutes: 'Top 3 role czatu głosowego'
                        }
                    }
                }
            },
            stickymessages: {
                title: 'Lepkie wiadomości ',
                button: {
                    timeout: 'Zmień czas trwania timeout\'u',
                    typing: {
                        enable: 'Enable Typing',
                        disable: 'Disable Typing'
                    }
                }
            }
        }
    },
    followNews: {
        title: 'Śledź aktualizacje',
        name: 'Śledź nowości'
    },
    staff: {
        title: 'Zarządzaj {name}',
        option: { premium: 'Enterprise: {tier}' },
        button: {
            premium: 'Zmień poziom premium',
            data: 'Eksportuj dane'
        },
        page: {
            data: {
                title: 'Eksport danych',
                message: 'Dane z {name} są wyświetlane poniżej.',
                error: 'Nie można wysłać wiadomości :/'
            },
            premium: {
                title: 'Konfiguruj Enterprise',
                option: { tier: 'Aktualny poziom: {tier}' },
                button: { tier: 'Poziom {tier}' }
            }
        }
    },
    exit: { title: 'Zapisano ustawienia i zamknięto menu.' }
};