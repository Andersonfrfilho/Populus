import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      newPassword: Yup.string()
        .min(6)
        .required(),
      confirmNewPassword: Yup.string()
        .min(6)
        .when('newPassword', (newPassword, field) =>
          newPassword ? field.required() : field
        ),
    });
    await schema.validate(req.body, { abortEarly: false });
    return next();
  } catch (error) {
    return res
      .status(400)
      .json({ error: 'error de validação de dados', messages: error.inner });
  }
};
