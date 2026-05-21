export type TransactionStatus =
  | 'partially_signed'
  | 'executed'
  | 'processing'
  | 'created'
  | 'error';

export type Currency = 'KZT' | 'RUB' | 'USD';

export interface Transaction {
  id: string;
  date: string;
  number: string;
  name: string;
  counterparty: string;
  bin_iin: string | null;
  amount: number;
  currency: Currency;
  status: TransactionStatus;
}

const COUNTERPARTY = 'Непубличное акционерное общество «Государственная корпорация»';

export const MOCK_TRANSACTIONS: Transaction[] = [
  // 7 February 2024
  { id: '1',  date: '2024-02-07', number: '23',        name: 'Заявление на входящий перевод',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 6000000.24,  currency: 'KZT', status: 'partially_signed' },
  { id: '2',  date: '2024-02-07', number: '055',       name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 200000.4,    currency: 'KZT', status: 'executed'          },
  { id: '3',  date: '2024-02-07', number: '003434542', name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: null,           amount: 10000,       currency: 'KZT', status: 'partially_signed' },
  { id: '4',  date: '2024-02-07', number: '343',       name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 324000,      currency: 'KZT', status: 'processing'        },
  { id: '5',  date: '2024-02-07', number: '45421',     name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 210000,      currency: 'KZT', status: 'executed'          },
  { id: '6',  date: '2024-02-07', number: '54212121',  name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 510000,      currency: 'RUB', status: 'created'           },
  { id: '7',  date: '2024-02-07', number: '12',        name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 248234324,   currency: 'KZT', status: 'error'             },
  { id: '8',  date: '2024-02-07', number: '432',       name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 3233,        currency: 'USD', status: 'created'           },
  { id: '9',  date: '2024-02-07', number: '41241',     name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: null,           amount: 10000,       currency: 'KZT', status: 'created'           },
  { id: '10', date: '2024-02-07', number: '4242',      name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 10000,       currency: 'KZT', status: 'created'           },

  // 6 February 2024
  { id: '11', date: '2024-02-06', number: '78',        name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 45000,       currency: 'KZT', status: 'executed'          },
  { id: '12', date: '2024-02-06', number: '001982731', name: 'Заявление на входящий перевод',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 1500000,     currency: 'KZT', status: 'partially_signed' },
  { id: '13', date: '2024-02-06', number: '991',       name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: null,           amount: 7500,        currency: 'USD', status: 'created'           },
  { id: '14', date: '2024-02-06', number: '2201',      name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 88000,       currency: 'KZT', status: 'processing'        },
  { id: '15', date: '2024-02-06', number: '003918200', name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 320000,      currency: 'RUB', status: 'executed'          },
  { id: '16', date: '2024-02-06', number: '37',        name: 'Заявление на входящий перевод',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 9000000,     currency: 'KZT', status: 'error'             },
  { id: '17', date: '2024-02-06', number: '5512',      name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: null,           amount: 150000,      currency: 'KZT', status: 'created'           },
  { id: '18', date: '2024-02-06', number: '108',       name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 22000,       currency: 'KZT', status: 'created'           },

  // 5 February 2024
  { id: '19', date: '2024-02-05', number: '67812300',  name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 475000,      currency: 'KZT', status: 'executed'          },
  { id: '20', date: '2024-02-05', number: '501',       name: 'Заявление на входящий перевод',   counterparty: COUNTERPARTY, bin_iin: null,           amount: 12500,       currency: 'USD', status: 'created'           },
  { id: '21', date: '2024-02-05', number: '8841',      name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 56000,       currency: 'KZT', status: 'partially_signed' },
  { id: '22', date: '2024-02-05', number: '002341100', name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 3300000,     currency: 'KZT', status: 'processing'        },
  { id: '23', date: '2024-02-05', number: '714',       name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 195000,      currency: 'RUB', status: 'created'           },
  { id: '24', date: '2024-02-05', number: '93',        name: 'Заявление на входящий перевод',   counterparty: COUNTERPARTY, bin_iin: null,           amount: 8000,        currency: 'KZT', status: 'error'             },
  { id: '25', date: '2024-02-05', number: '44',        name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 780000,      currency: 'KZT', status: 'executed'          },

  // 4 February 2024
  { id: '26', date: '2024-02-04', number: '99100244',  name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 14000,       currency: 'KZT', status: 'created'           },
  { id: '27', date: '2024-02-04', number: '1820',      name: 'Заявление на входящий перевод',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 520000,      currency: 'KZT', status: 'executed'          },
  { id: '28', date: '2024-02-04', number: '005',       name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: null,           amount: 4200,        currency: 'USD', status: 'partially_signed' },
  { id: '29', date: '2024-02-04', number: '73421',     name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 67000,       currency: 'KZT', status: 'created'           },
  { id: '30', date: '2024-02-04', number: '003891002', name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 112000,      currency: 'KZT', status: 'processing'        },
  { id: '31', date: '2024-02-04', number: '261',       name: 'Заявление на входящий перевод',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 1800000,     currency: 'RUB', status: 'created'           },

  // 1 February 2024
  { id: '32', date: '2024-02-01', number: '14',        name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 35000,       currency: 'KZT', status: 'executed'          },
  { id: '33', date: '2024-02-01', number: '002819400', name: 'Заявление на входящий перевод',   counterparty: COUNTERPARTY, bin_iin: null,           amount: 410000,      currency: 'KZT', status: 'created'           },
  { id: '34', date: '2024-02-01', number: '3311',      name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 9900,        currency: 'USD', status: 'error'             },
  { id: '35', date: '2024-02-01', number: '66',        name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 245000,      currency: 'KZT', status: 'partially_signed' },
  { id: '36', date: '2024-02-01', number: '58812',     name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 670000,      currency: 'KZT', status: 'created'           },
  { id: '37', date: '2024-02-01', number: '001293847', name: 'Заявление на входящий перевод',   counterparty: COUNTERPARTY, bin_iin: null,           amount: 5600000,     currency: 'KZT', status: 'executed'          },

  // 31 January 2024
  { id: '38', date: '2024-01-31', number: '892',       name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 18000,       currency: 'KZT', status: 'created'           },
  { id: '39', date: '2024-01-31', number: '00341291',  name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 390000,      currency: 'RUB', status: 'executed'          },
  { id: '40', date: '2024-01-31', number: '1004',      name: 'Заявление на входящий перевод',   counterparty: COUNTERPARTY, bin_iin: null,           amount: 6750,        currency: 'USD', status: 'created'           },
  { id: '41', date: '2024-01-31', number: '77',        name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 55000,       currency: 'KZT', status: 'processing'        },
  { id: '42', date: '2024-01-31', number: '29321',     name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 128000,      currency: 'KZT', status: 'created'           },

  // 28 January 2024
  { id: '43', date: '2024-01-28', number: '003',       name: 'Заявление на входящий перевод',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 2100000,     currency: 'KZT', status: 'executed'          },
  { id: '44', date: '2024-01-28', number: '006712894', name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: null,           amount: 48000,       currency: 'KZT', status: 'partially_signed' },
  { id: '45', date: '2024-01-28', number: '188',       name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 850000,      currency: 'KZT', status: 'created'           },
  { id: '46', date: '2024-01-28', number: '7734',      name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 11400,       currency: 'USD', status: 'error'             },
  { id: '47', date: '2024-01-28', number: '51',        name: 'Заявление на входящий перевод',   counterparty: COUNTERPARTY, bin_iin: null,           amount: 3700000,     currency: 'KZT', status: 'created'           },

  // 25 January 2024
  { id: '48', date: '2024-01-25', number: '009283711', name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 440000,      currency: 'KZT', status: 'executed'          },
  { id: '49', date: '2024-01-25', number: '2841',      name: 'Заявление на входящий перевод',   counterparty: COUNTERPARTY, bin_iin: '030104002322', amount: 25000,       currency: 'RUB', status: 'created'           },
  { id: '50', date: '2024-01-25', number: '630',       name: 'Валютный перевод внутри банка',   counterparty: COUNTERPARTY, bin_iin: null,           amount: 91000,       currency: 'KZT', status: 'processing'        },
];
