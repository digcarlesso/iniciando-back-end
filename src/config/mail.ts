interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'diogo_carlesso@yahoo.com.br',
      name: 'Diogo Bedin Carlesso',
    },
  },
} as IMailConfig;
