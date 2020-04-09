import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string(),
      lastname: Yup.string(),
      phone: Yup.string().max(13),
      email: Yup.string().email(),
    });
    await schema.validate(req.body, { abortEarly: false });
    return next();
  } catch (error) {
    return res
      .status(400)
      .json({ error: 'error de validação de dados', messages: error.inner });
  }
};
