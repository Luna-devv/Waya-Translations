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
                            label: 'Etykieta: {label}'
                        },
                        button: {
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
            }
        },
        button: {
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
                        name: 'Anti Link reply'
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
            emoji: 'Change Emoji',
            color: 'Change Color',
            count: 'Change Count',
            nsfw: {
                disable: 'Disable NSFW',
                enable: 'Enable NSFW'
            },
            bots: {
                disable: 'Disable Bots',
                enable: 'Enable Bots'
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
                button: { timeout: 'Change the timeout duration' }
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