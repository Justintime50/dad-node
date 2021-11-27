#!/usr/bin/env node
import * as dad from './index.js'

// If dad-tool is utilized via CLI, return a random address from a list
// Usage: dad-tool US_UT
!async function () {
  const address_list = process.argv.slice(2)
  const address = dad.random(address_list[0])
  console.log(address)
}()
