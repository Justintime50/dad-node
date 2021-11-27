#!/usr/bin/env node
import path from 'path'
import { readFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import * as dataRouter from './lib/dataRouter.js'

// Pull an entire list of addresses
export function list(addressTag) {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)

  const addressesFile = path.join(__dirname, dataRouter.variables(addressTag))
  const addressesList = JSON.parse(await readFile(new URL(addressesFile, import.meta.url)))

  return addressesList
}

// Pull a single random address from a list
export function random(addressTag) {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)

  const addressesFile = path.join(__dirname, dataRouter.variables(addressTag))
  const addressesList = JSON.parse(await readFile(new URL(addressesFile, import.meta.url)))
  const address = addressesList[Math.floor(Math.random() * addressesList.length)]

  return address
}

// Get a list of all ISO country codes
export function isoCountryCodes() {
  const isoData = fs.readFileSync('./dad/src/other/country-codes.min.json')

  return isoData
}
