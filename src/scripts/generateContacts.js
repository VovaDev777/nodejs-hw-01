import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from 'node:fs/promises';

const generateContacts = async (number) => {
  const contacts = Array(number)
    .fill(0)
    .map(() => createFakeContact());
  await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
};

generateContacts(10);
