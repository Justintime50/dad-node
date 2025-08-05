#!/usr/bin/env node
import { promises as fs } from 'fs';
import path, { join } from 'path';
import { fileURLToPath } from 'url';

import { variables } from './lib/dataRouter.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Pull an entire list of addresses
export async function list(data) {
  const filePath = join(__dirname, variables(data));
  const fileContent = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

// Pull a single random address from a list
export async function random(data) {
  const filePath = join(__dirname, variables(data));
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const addressList = JSON.parse(fileContent);
  const address = addressList[Math.floor(Math.random() * addressList.length)];
  return address;
}

// Get a list of all ISO country codes
export async function isoCountryCodes() {
  const fileContent = await fs.readFile('./dad/src/other/country-codes.min.json', 'utf-8');
  return JSON.parse(fileContent);
}
