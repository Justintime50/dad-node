# CHANGELOG

## v5.0.0 (2024-07-16)

- Drops support for Node < 16
- Adds support for Node 20, 22
- Bumps dependencies

## v4.2.0 (2022-02-05)

- Adds French addresses
- Bumps dev dependencies

## v4.1.0 (2021-08-02)

- Swaps the manually downloaded DAD data to a git submodule for easier management moving forward
- Reworks the entire `data-router` from a switch/case statement to an object literal for easier management. Refactored the order of logic and changed all variable names for easier readability
- Tags will not automatically be capatilized when passed as parameters to assist in capitilization input errors
- Bumps dependencies

## v4.0.0 (2021-07-12)

- Separates DAD address data into a separate repo (<https://github.com/justintime50/dad>), removes tooling and references to data and focuses instead on implementing a way to retrieve that data via Node
- Removed the `addresses` key as inherently each list is a set of addresses already
- Bumped dependencies, additional small tweaks

## v3.1.0 (2021-05-26)

- Drops support for Node 10 and pins Node 12 as the minimum version
- Bumps dependencies
- Tests against Node 16

## v3.0.0 (2021-01-31)

- Adds CLI implementation so you can retrieve addresses right on the command line
- Adds support for ISO country codes, now you can retrieve the 2 and 3 letter country codes for each country
- Adds Mexico addresses
- Switches Travis CI for GitHub Actions
- Various small tweaks and improvements

## v2.6.0 (2020-11-25)

- Shifted logic around, renamed files and lists, updated documentation, consolidated all US data into a single folder
- Added Idaho to US_ID and Arizona to US_AZ
- Completely re-wrote the `create-slim-json` utility. It now requires much less manual work, accepts more configuration options, and runs much faster while being more reliable

## v2.5.0 (2020-10-21)

- Overhauled testing framework
  - Introduced `chai` for better `assert` and `expect`
  - Went from ~50 tests to ~1700 tests by iterating each record
  - Added tests to ensure the data structure of each record was uniform by asserting keys were the same across every record - corrected a few records with bad keys

## v2.4.0 (2020-10-21)

- Added `China - Honk Kong` addresses

## v2.3.2 (2020-08-15)

- Switched coverage reporting commands and packages (switched `istanbul` to `nyc`)

## v2.3.1 (2020-08-15)

- Added more unit tests (100% coverage!)
- Errors are now properly thrown instead of printing

## v2.3.0 (2020-08-14)

- Added unit tests
- Added coveralls test coverage
- Added automated publishing workflow via Travis/tags

## v2.2.1 (2020-05-01)

- Fixed UK reference in data-router

## v2.2.0 (2020-04-30)

- Bug fixes
- Reference adjustments for GB -> UK addresses
- Updated docs to match changes and clarified state/area locations

## v2.1.1 (2020-04-03)

- Changed if/else statements for switch/case statements to better handle the large variable set
- Fixed address references introduced in v2.1.0
- Added better error handling surrounding invalid tags being passed

## v2.1.0 (2020-04-02)

- Added us-northeast, us-midwest, and us-south addresses
- Added Germany addresses
- Added Spain addresses

## v2.0.1 (2020-04-01)

- Corrected a few lingering zip codes that were integers instead of strings
- Corrected Australia country on each record
- Corrected README
- Replaced each GB address with a real one including valid zips
- Added 4 more China addresses to match the size of the other smaller lists

## v2.0.0 (2020-03-31)

- Added country to each address
- Validated addresses and corrected inaccurate items
- Made all entries strings to keep records uniform (breaking change)
- Changed all country codes to allow for tag reuse among international addresses - eg: CA = California, CA = Canada (breaking change)
- Added Australia, Canada, China, and Europian addresses

## v1.0.2 (2020-03-30)

- Bug fixes and docs updates
- Added Travis CI testing

## v1.0.0 (2020-03-30)

- Initial release
- Pull a random UT address from a list of 100
