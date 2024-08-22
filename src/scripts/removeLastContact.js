import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
    const db = await fs.readFile(PATH_DB, 'utf-8');
    
};

removeLastContact();
