import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      address: Yup.string().required(),
      number: Yup.string().required(),
      neighborhood: Yup.string(),
      city: Yup.string(),
      country: Yup.string(),
      state: Yup.string(),
      zipcode: Yup.string(),
    });
    await schema.validate(req.body, { abortEarly: false });
    return next();
  } catch (error) {
    return res
      .status(400)
      .json({ error: 'error de validação de dados', messages: error.inner });
  }
};
