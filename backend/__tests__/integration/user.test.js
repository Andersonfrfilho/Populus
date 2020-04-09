import request from 'supertest';
import app from '../../src/app';
import truncate from '../util/truncate';
import { userFactory, contactFactory, addressFactory } from '../factory';

describe('User', () => {
  beforeEach(async () => truncate());
  it('1.    - User can be registered.', async () => {
    const attributes = await userFactory.attrs('User');
    const newUser = {
      ...attributes,
      confirmPassword: attributes.password,
    };
    const { body: responseUser } = await request(app)
      .post('/users')
      .send(newUser);
    expect(responseUser).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        email: expect.any(String),
        phone: expect.any(String),
      })
    );
  }, 30000);
  it('1.1   - User cannot be registered without valid fields.', async () => {
    const { status: responseUser } = await request(app)
      .post('/users')
      .send();
    expect(responseUser).toEqual(400);
  });
  it('1.2.1 - User cannot be registered without a specific valid field (name).', async () => {
    const attributes = await userFactory.attrs('User');
    const newUser = {
      ...attributes,
      name: null,
      confirmPassword: attributes.password,
    };
    const responseUser = await request(app)
      .post('/users')
      .send(newUser);
    expect(responseUser.status).toEqual(400);
  }, 30000);
  it('1.2.2 - User cannot be registered without a specific valid field (e-mail).', async () => {
    const attributes = await userFactory.attrs('User');
    const newUser = {
      ...attributes,
      email: null,
      confirmPassword: attributes.password,
    };
    const responseUser = await request(app)
      .post('/users')
      .send(newUser);
    expect(responseUser.status).toEqual(400);
  }, 30000);
  it('1.2.3 - User cannot be registered without a specific valid field (phone).', async () => {
    const attributes = await userFactory.attrs('User');
    const newUser = {
      ...attributes,
      phone: null,
      confirmPassword: attributes.password,
    };
    const responseUser = await request(app)
      .post('/users')
      .send(newUser);
    expect(responseUser.status).toEqual(400);
  }, 30000);
  it('1.2.4 - User cannot be registered without a specific valid field (password).', async () => {
    const attributes = await userFactory.attrs('User');
    const newUser = {
      ...attributes,
      password: null,
      confirmPassword: attributes.password,
    };
    const responseUser = await request(app)
      .post('/users')
      .send(newUser);
    expect(responseUser.status).toEqual(400);
  }, 30000);
  it('1.2.5 - User cannot be registered without a specific valid field (confirm-password).', async () => {
    const attributes = await userFactory.attrs('User');
    const newUser = {
      ...attributes,
      confirmPassword: null,
    };
    const responseUser = await request(app)
      .post('/users')
      .send(newUser);
    expect(responseUser.status).toEqual(400);
  }, 30000);
  it('1.3   - User cannot be registered with an existing email.', async () => {
    const attributes = await userFactory.attrs('User');
    const newUser = {
      ...attributes,
      confirmPassword: attributes.password,
    };
    const { body: responseUser } = await request(app)
      .post('/users')
      .send(newUser);
    expect(responseUser).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        email: expect.any(String),
        phone: expect.any(String),
      })
    );
    const { status: responseUserTwo } = await request(app)
      .post('/users')
      .send(newUser);
    expect(responseUserTwo).toEqual(400);
  }, 30000);
  it('1.4   - User cannot be registered with an existing phone.', async () => {
    const attributes = await userFactory.attrs('User');
    const newUser = {
      ...attributes,
      confirmPassword: attributes.password,
    };
    const { body: responseUser } = await request(app)
      .post('/users')
      .send(newUser);
    expect(responseUser).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        email: expect.any(String),
        phone: expect.any(String),
      })
    );
    const attributesTwo = await userFactory.attrs('User');
    const newUserTwo = {
      ...attributesTwo,
      confirmPassword: attributesTwo.password,
      phone: attributes.phone,
    };
    const { status: responseUserTwo } = await request(app)
      .post('/users')
      .send(newUserTwo);
    expect(responseUserTwo).toEqual(400);
  }, 30000);

  it('2.    - User can list their own contacts.', async () => {
    const attributesUser = await userFactory.attrs('User');
    const newUser = {
      ...attributesUser,
      confirmPassword: attributesUser.password,
    };
    const { body: responseUser } = await request(app)
      .post('/users')
      .send(newUser);
    expect(responseUser).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        email: expect.any(String),
        phone: expect.any(String),
      })
    );
    const {
      body: { token: tokenUser },
    } = await request(app)
      .post('/sessions')
      .send({
        email: attributesUser.email,
        password: attributesUser.password,
      });
    expect(tokenUser).toEqual(expect.any(String));
    const attributesContact = await contactFactory.attrs('Contact');
    const { body: responseContact } = await request(app)
      .post('/users/content/contacts')
      .send(attributesContact)
      .set('Authorization', `bearer ${tokenUser}`);
    expect(responseContact).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        lastname: expect.any(String),
        phone: expect.any(String),
        email: expect.any(String),
      })
    );
    const attributesAddress = await contactFactory.attrs('Address');
    const newAddress = {
      ...attributesAddress,
      contact_id: responseContact.id,
    };
    const { body: responseAddress } = await request(app)
      .post('/users/content/contacts/content/address')
      .send(newAddress)
      .set('Authorization', `bearer ${tokenUser}`);
    expect(responseAddress).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        address: expect.any(String),
        number: expect.any(String),
        neighborhood: expect.any(String),
        city: expect.any(String),
        country: expect.any(String),
        state: expect.any(String),
        zipcode: expect.any(String),
      })
    );
    const { body: responseUserShow } = await request(app)
      .get('/user')
      .set('Authorization', `bearer ${tokenUser}`);
    expect(responseUserShow).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        email: expect.any(String),
        phone: expect.any(String),
        contacts: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            lastname: expect.any(String),
            phone: expect.any(String),
            email: expect.any(String),
            address: expect.objectContaining([
              expect.objectContaining({
                address: expect.any(String),
                number: expect.any(String),
                neighborhood: expect.any(String),
                city: expect.any(String),
                country: expect.any(String),
                state: expect.any(String),
                zipcode: expect.any(String),
              }),
            ]),
          }),
        ]),
      })
    );
  }, 30000);
});
