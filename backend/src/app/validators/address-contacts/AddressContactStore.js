import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      lastname: Yup.string().required(),
      phone: Yup.string()
        .required()
        .max(13),
      email: Yup.string()
        .email()
        .required(),
      address: Yup.string().required(),
      number: Yup.string().required(),
      neighborhood: Yup.string(),
      city: Yup.string(),
      country: Yup.string(),
      state: Yup.string(),
      zipcode: Yup.string()
        .required()
        .max(8),
    });
    await schema.validate(req.body, { abortEarly: false });
    return next();
  } catch (error) {
    return res
      .status(400)
      .json({ error: 'error de validação de dados', messages: error.inner });
  }
};
