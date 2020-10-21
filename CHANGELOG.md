# CHANGELOG

## v2.5.0 (2020-10-21)

* Overhauled testing framework
  * Introduced `chai` for better `assert` and `expect`
  * Went from ~50 tests to ~1700 tests by iterating each record
  * Added tests to ensure the data structure of each record was uniform by asserting keys were the same across every record - corrected a few records with bad keys

## v2.4.0 (2020-10-21)

* Added `China - Honk Kong` addresses

## v2.3.2 (2020-08-15)

* Switched coverage reporting commands and packages (switched `istanbul` to `nyc`)

## v2.3.1 (2020-08-15)

* Added more unit tests (100% coverage!)
* Errors are now properly thrown instead of printing

## v2.3.0 (2020-08-14)

* Added unit tests
* Added coveralls test coverage
* Added automated publishing workflow via Travis/tags

## v2.2.1 (2020-05-01)

* Fixed UK reference in data-router

## v2.2.0 (2020-04-30)

* Bug fixes
* Reference adjustments for GB -> UK addresses
* Updated docs to match changes and clarified state/area locations

## v2.1.1 (2020-04-03)

* Changed if/else statements for switch/case statements to better handle the large variable set
* Fixed address references introduced in v2.1.0
* Added better error handling surrounding invalid tags being passed

## v2.1.0 (2020-04-02)

* Added us-northeast, us-midwest, and us-south addresses
* Added Germany addresses
* Added Spain addresses

## v2.0.1 (2020-04-01)

* Corrected a few lingering zip codes that were integers instead of strings
* Corrected Australia country on each record
* Corrected README
* Replaced each GB address with a real one including valid zips
* Added 4 more China addresses to match the size of the other smaller lists

## v2.0.0 (2020-03-31)

* Added country to each address
* Validated addresses and corrected inaccurate items
* Made all entries strings to keep records uniform (breaking change)
* Changed all country codes to allow for tag reuse among international addresses - eg: CA = California, CA = Canada (breaking change)
* Added Australia, Canada, China, and Europian addresses

## v1.0.2 (2020-03-30)

* Bug fixes and docs updates
* Added Travis CI testing

## v1.0.0 (2020-03-30)

* Initial release
* Pull a random UT address from a list of 100
