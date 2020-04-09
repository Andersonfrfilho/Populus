import Mail from '../../lib/Mail';

class ConfirmationMail {
  get Key() {
    return 'ConfirmationMail';
  }

  async handle({ data }) {
    const { name, email } = data;

    await Mail.sendMail({
      to: `${name} <${email}>`,
      subject: 'Cadastro de Usuário',
      template: 'confirmation',
      context: {
        user: `${name}`,
        company: 'populus',
      },
    });
  }
}
export default new ConfirmationMail();
