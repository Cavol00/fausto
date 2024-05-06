function getUniqueSchoolTypes(calendarData) {
    const schoolTypes = new Set(calendarData.map(event => event.attributes.schoolType));
    return [...schoolTypes];
}

calendarData = Array(24) [

    {
  
      id: 2,
  
      attributes: {
  
        beginAt: '2024-11-18T13:30:00.000Z',
  
        endAt: '2024-11-18T16:30:00.000Z',
  
        title: 'Scuola aperta',
  
        description: 'Presentazione indirizzi, visita alla scuola\n' +
  
          'in presenza p/o Liceo Rosmini',
  
        createdAt: '2024-05-06T07:51:52.019Z',
  
        updatedAt: '2024-05-06T08:37:24.203Z',
  
        publishedAt: '2024-05-06T07:52:10.690Z',
  
        allDay: false,
  
        schoolType: 'Rosmini'
  
      }
  
    },
  
    {
  
      id: 3,
  
      attributes: {
  
        beginAt: '2024-12-01T19:00:00.000Z',
  
        endAt: '2024-12-01T21:00:00.000Z',
  
        title: 'Serata orientamento',
  
        description: 'Per studenti e genitori\nin presenza p/o Liceo Rosmini',
  
        createdAt: '2024-05-06T08:04:01.876Z',
  
        updatedAt: '2024-05-06T08:36:03.991Z',
  
        publishedAt: '2024-05-06T08:04:04.588Z',
  
        allDay: false,
  
        schoolType: 'Rosmini'
  
      }
  
    },
  
    {
  
      id: 4,
  
      attributes: {
  
        beginAt: '2024-12-16T13:30:00.000Z',
  
        endAt: '2024-12-16T16:30:00.000Z',
  
        title: 'Scuola aperta',
  
        description: 'Presentazione indirizzi, visita alla scuola\n' +
  
          'in presenza p/o Liceo Rosmini',
  
        createdAt: '2024-05-06T08:10:36.844Z',
  
        updatedAt: '2024-05-06T08:37:15.982Z',
  
        publishedAt: '2024-05-06T08:11:30.884Z',
  
        allDay: false,
  
        schoolType: 'Rosmini'
  
      }
  
    },
  
    {
  
      id: 5,
  
      attributes: {
  
        beginAt: '2025-01-13T11:30:00.000Z',
  
        endAt: '2025-01-13T16:30:00.000Z',
  
        title: 'Scuola aperta',
  
        description: 'Presentazione indirizzi, visita alla scuola\n' +
  
          'in presenza p/o Liceo Rosmini',
  
        createdAt: '2024-05-06T08:13:00.451Z',
  
        updatedAt: '2024-05-06T08:37:02.588Z',
  
        publishedAt: '2024-05-06T08:13:03.653Z',
  
        allDay: false,
  
        schoolType: 'Rosmini'
  
      }
  
    },
  
    {
  
      id: 6,
  
      attributes: {
  
        beginAt: '2024-10-27T17:00:00.000Z',
  
        endAt: '2024-10-27T19:00:00.000Z',
  
        title: 'Scuola aperta',
  
        description: 'Presentazione della scuola agli studenti e alle loro\n' +
  
          'famiglie, in presenza al Liceo Filzi. Prenotazioni sul\n' +
  
          'sito della scuola sezione Orientamento.',
  
        createdAt: '2024-05-06T08:14:33.231Z',
  
        updatedAt: '2024-05-06T08:36:48.714Z',
  
        publishedAt: '2024-05-06T08:14:36.002Z',
  
        allDay: false,
  
        schoolType: 'Filzi'
  
      }
  
    },
  
    {
  
      id: 7,
  
      attributes: {
  
        beginAt: '2024-11-09T13:30:00.000Z',
  
        endAt: '2024-11-09T15:30:00.000Z',
  
        title: 'Pomeriggio al Filzi',
  
        description: 'Attività e laboratori inerenti le materie di indirizzo\n' +
  
          '\n' +
  
          'rivolta agli studenti, in presenza al Liceo Filzi. Preno-\n' +
  
          'tazioni sul sito della scuola sezione Orientamento',
  
        createdAt: '2024-05-06T08:16:23.777Z',
  
        updatedAt: '2024-05-06T08:37:43.259Z',
  
        publishedAt: '2024-05-06T08:16:26.878Z',
  
        allDay: false,
  
        schoolType: 'Filzi'
  
      }
  
    },
  
    {
  
      id: 8,
  
      attributes: {
  
        beginAt: '2024-12-02T08:00:00.000Z',
  
        endAt: '2024-12-02T11:00:00.000Z',
  
        title: 'Mattinata al Filzi',
  
        description: 'Attività e laboratori inerenti le materie di indirizzo\n' +
  
          '\n' +
  
          'rivolta agli studenti, in presenza al Liceo Filzi. Pre-\n' +
  
          'notazioni sul sito della scuola sezione Orientamento',
  
        createdAt: '2024-05-06T08:19:33.543Z',
  
        updatedAt: '2024-05-06T09:03:55.102Z',
  
        publishedAt: '2024-05-06T08:19:36.224Z',
  
        allDay: false,
  
        schoolType: 'Filzi'
  
      }
  
    },
  
    {
  
      id: 9,
  
      attributes: {
  
        beginAt: '2024-12-12T17:00:00.000Z',
  
        endAt: '2024-12-12T19:00:00.000Z',
  
        title: 'Scuola aperta',
  
        description: 'Presentazione della scuola agli studenti e alle loro\n' +
  
          'famiglie, in presenza al Liceo Filzi. Prenotazioni sul\n' +
  
          'sito della scuola sezione Orientamento.',
  
        createdAt: '2024-05-06T08:20:32.098Z',
  
        updatedAt: '2024-05-06T08:36:38.901Z',
  
        publishedAt: '2024-05-06T08:20:34.669Z',
  
        allDay: false,
  
        schoolType: 'Filzi'
  
      }
  
    },
  
    {
  
      id: 10,
  
      attributes: {
  
        beginAt: '2025-01-13T08:00:00.000Z',
  
        endAt: '2025-01-13T11:00:00.000Z',
  
        title: 'Mattinata al Filzi',
  
        description: 'Attività e laboratori inerenti le materie di indirizzo\n' +
  
          '\n' +
  
          'rivolta agli studenti, in presenza al Liceo Filzi. Preno-\n' +
  
          'tazioni sul sito della scuola sezione Orientamento',
  
        createdAt: '2024-05-06T08:26:15.879Z',
  
        updatedAt: '2024-05-06T08:37:50.069Z',
  
        publishedAt: '2024-05-06T08:26:18.841Z',
  
        allDay: false,
  
        schoolType: 'Filzi'
  
      }
  
    },
  
    {
  
      id: 11,
  
      attributes: {
  
        beginAt: '2024-11-25T09:00:00.000Z',
  
        endAt: '2024-11-25T11:30:00.000Z',
  
        title: 'Scuola aperta',
  
        description: 'In presenza, con prenotazione sul sito della scuola\n' +
  
          'nella sezione Futuro studente. Compilare il Modulo\n' +
  
          'Google https://forms.gle/BGS1XEDq9TFbF7uA7',
  
        createdAt: '2024-05-06T08:29:43.082Z',
  
        updatedAt: '2024-05-06T08:36:24.958Z',
  
        publishedAt: '2024-05-06T08:31:23.359Z',
  
        allDay: false,
  
        schoolType: 'Don Milani'
  
      }
  
    },
  
    {
  
      id: 12,
  
      attributes: {
  
        beginAt: '2024-12-06T17:00:00.000Z',
  
        endAt: '2024-12-06T19:00:00.000Z',
  
        title: 'Scuola Aperta',
  
        description: 'In presenza, con prenotazione sul sito della scuola\n' +
  
          'nella sezione Futuro studente. Compilare il Modulo\n' +
  
          'Google https://forms.gle/BGS1XEDq9TFbF7uA7',
  
        createdAt: '2024-05-06T08:31:09.786Z',
  
        updatedAt: '2024-05-06T08:37:35.938Z',
  
        publishedAt: '2024-05-06T08:31:13.938Z',
  
        allDay: false,
  
        schoolType: 'Don Milani'
  
      }
  
    },
  
    {
  
      id: 13,
  
      attributes: {
  
        beginAt: '2024-12-16T09:00:00.000Z',
  
        endAt: '2024-12-16T11:30:00.000Z',
  
        title: 'Scuola aperta',
  
        description: 'In presenza, con prenotazione sul sito della scuola\n' +
  
          'nella sezione Futuro studente. Compilare il Modulo\n' +
  
          'Google https://forms.gle/BGS1XEDq9TFbF7uA7',
  
        createdAt: '2024-05-06T08:33:13.701Z',
  
        updatedAt: '2024-05-06T08:36:16.010Z',
  
        publishedAt: '2024-05-06T08:33:16.551Z',
  
        allDay: false,
  
        schoolType: 'Don Milani'
  
      }
  
    },
  
    {
  
      id: 14,
  
      attributes: {
  
        beginAt: '2024-11-24T17:00:00.000Z',
  
        endAt: '2024-11-24T19:00:00.000Z',
  
        title: 'Open day',
  
        description: 'È gradita la prenotazione con le modalità presenti\n' +
  
          'sul sito della scuola www.marconirovereto.it',
  
        createdAt: '2024-05-06T08:39:34.546Z',
  
        updatedAt: '2024-05-06T08:39:37.459Z',
  
        publishedAt: '2024-05-06T08:39:37.458Z',
  
        allDay: false,
  
        schoolType: 'Marconi'
  
      }
  
    },
  
    {
  
      id: 15,
  
      attributes: {
  
        beginAt: '2024-12-02T14:00:00.000Z',
  
        endAt: '2024-12-02T16:00:00.000Z',
  
        title: 'Open day',
  
        description: 'È gradita la prenotazione con le modalità presenti\n' +
  
          'sul sito della scuola www.marconirovereto.it',
  
        createdAt: '2024-05-06T08:40:43.086Z',
  
        updatedAt: '2024-05-06T08:40:49.725Z',
  
        publishedAt: '2024-05-06T08:40:49.722Z',
  
        allDay: false,
  
        schoolType: 'Marconi'
  
      }
  
    },
  
    {
  
      id: 16,
  
      attributes: {
  
        beginAt: '2024-11-11T08:00:00.000Z',
  
        endAt: '2024-11-11T10:00:00.000Z',
  
        title: 'Open day',
  
        description: 'Presentazione dell’offerta formativa e degli\n' +
  
          'indirizzi di studio. Visita della scuola con\n' +
  
          'postazioni informative.',
  
        createdAt: '2024-05-06T08:42:41.466Z',
  
        updatedAt: '2024-05-06T08:42:44.464Z',
  
        publishedAt: '2024-05-06T08:42:44.462Z',
  
        allDay: false,
  
        schoolType: 'Fontana'
  
      }
  
    },
  
    {
  
      id: 17,
  
      attributes: {
  
        beginAt: '2024-11-20T18:00:00.000Z',
  
        endAt: '2024-11-20T20:00:00.000Z',
  
        title: 'Open day',
  
        description: 'Presentazione dell’offerta formativa e degli\n' +
  
          'indirizzi di studio. Visita della scuola con\n' +
  
          'postazioni informative.',
  
        createdAt: '2024-05-06T08:43:26.820Z',
  
        updatedAt: '2024-05-06T08:43:37.238Z',
  
        publishedAt: '2024-05-06T08:43:37.237Z',
  
        allDay: false,
  
        schoolType: 'Fontana'
  
      }
  
    },
  
    {
  
      id: 18,
  
      attributes: {
  
        beginAt: '2024-12-02T09:30:00.000Z',
  
        endAt: '2024-12-02T11:30:00.000Z',
  
        title: 'Open day',
  
        description: 'Appuntamento presso la sede del BIENNIO in via\n' +
  
          'Balista, 1. Presentazione dell’offerta formativa e visita\n' +
  
          'alla scuola.',
  
        createdAt: '2024-05-06T08:44:22.204Z',
  
        updatedAt: '2024-05-06T08:44:33.689Z',
  
        publishedAt: '2024-05-06T08:44:33.688Z',
  
        allDay: false,
  
        schoolType: 'Depero'
  
      }
  
    },
  
    {
  
      id: 19,
  
      attributes: {
  
        beginAt: '2024-12-15T17:00:00.000Z',
  
        endAt: '2024-12-15T19:00:00.000Z',
  
        title: 'Open Day',
  
        description: 'Appuntamento presso la sede del BIENNIO in via\n' +
  
          'Balista, 1. Presentazione dell’offerta formativa e visita\n' +
  
          'alla scuola.',
  
        createdAt: '2024-05-06T08:45:25.962Z',
  
        updatedAt: '2024-05-06T08:45:28.649Z',
  
        publishedAt: '2024-05-06T08:45:28.647Z',
  
        allDay: false,
  
        schoolType: 'Depero'
  
      }
  
    },
  
    {
  
      id: 20,
  
      attributes: {
  
        beginAt: '2024-12-02T13:00:00.000Z',
  
        endAt: '2024-12-02T15:00:00.000Z',
  
        title: 'Open day',
  
        description: 'In presenza. Presentazione dell’offerta formativa.\n' +
  
          'Visita della scuola.',
  
        createdAt: '2024-05-06T08:46:36.999Z',
  
        updatedAt: '2024-05-06T09:04:49.325Z',
  
        publishedAt: '2024-05-06T08:46:41.247Z',
  
        allDay: false,
  
        schoolType: 'Barelli'
  
      }
  
    },
  
    {
  
      id: 21,
  
      attributes: {
  
        beginAt: '2025-01-19T23:00:00.000Z',
  
        endAt: '2025-01-20T15:00:00.000Z',
  
        title: 'Open day',
  
        description: 'In presenza Presentazione dell’offerta formativa.\n' +
  
          'Visita della scuola.',
  
        createdAt: '2024-05-06T08:48:11.375Z',
  
        updatedAt: '2024-05-06T08:48:16.455Z',
  
        publishedAt: '2024-05-06T08:48:16.454Z',
  
        allDay: false,
  
        schoolType: 'Barelli'
  
      }
  
    },
  
    {
  
      id: 22,
  
      attributes: {
  
        beginAt: '2024-11-25T13:00:00.000Z',
  
        endAt: '2024-11-24T23:00:00.000Z',
  
        title: 'Scuola aperta',
  
        description: 'Presentazione indirizzi, visita alla scuola\nIn presenza',
  
        createdAt: '2024-05-06T08:51:20.681Z',
  
        updatedAt: '2024-05-06T08:51:23.413Z',
  
        publishedAt: '2024-05-06T08:51:23.412Z',
  
        allDay: false,
  
        schoolType: 'Arcivescovile'
  
      }
  
    },
  
    {
  
      id: 23,
  
      attributes: {
  
        beginAt: '2024-10-14T12:30:00.000Z',
  
        endAt: '2024-10-14T15:30:00.000Z',
  
        title: 'Open Day',
  
        description: 'Presentazione indirizzi, visita alla scuola',
  
        createdAt: '2024-05-06T08:53:32.324Z',
  
        updatedAt: '2024-05-06T08:53:34.939Z',
  
        publishedAt: '2024-05-06T08:53:34.938Z',
  
        allDay: false,
  
        schoolType: 'Veronesi'
  
      }
  
    },
  
    {
  
      id: 24,
  
      attributes: {
  
        beginAt: '2024-10-20T13:00:00.000Z',
  
        endAt: '2024-10-19T22:00:00.000Z',
  
        title: 'Open day',
  
        description: 'Presso lo STEAM Campus, via Madonna del Monte 6',
  
        createdAt: '2024-05-06T08:58:07.771Z',
  
        updatedAt: '2024-05-06T08:58:49.942Z',
  
        publishedAt: '2024-05-06T08:58:49.940Z',
  
        allDay: false,
  
        schoolType: 'Steam'
  
      }
  
    },
  
    {
  
      id: 26,
  
      attributes: {
  
        beginAt: '2024-12-02T08:30:00.000Z',
  
        endAt: '2024-12-02T11:30:00.000Z',
  
        title: 'Open Day',
  
        description: 'Open day e laboratori esperienziali ',
  
        createdAt: '2024-05-06T09:01:46.987Z',
  
        updatedAt: '2024-05-06T09:01:49.907Z',
  
        publishedAt: '2024-05-06T09:01:49.905Z',
  
        allDay: false,
  
        schoolType: 'Terziario'
  
      }
  
    }
  
  ];

// Utilizzo della funzione
const uniqueSchoolTypes = getUniqueSchoolTypes(calendarData);
console.log(uniqueSchoolTypes);

