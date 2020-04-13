import Mail from '../../lib/Mail';

class RedefinePasswordMail {
  get key() {
    return 'RedefinePasswordMail';
  }

  async handle({ data }) {
    const { name, email, token } = data;

    await Mail.sendMail({
      to: `${name} <${email}>`,
      subject: 'Redefinição de senha',
      template: 'redefinePassword',
      context: {
        name: `${name}`,
        token: `${token}`,
      },
    });
  }
}
export default new RedefinePasswordMail();
