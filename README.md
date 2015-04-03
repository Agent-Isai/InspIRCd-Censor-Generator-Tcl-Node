# InspIRCd-Censor-Generator
InspIRCd-Censor-Generator is a censor.conf generator for InspIRCd coded in tcl and executable by tclsh

# What does this software do?
This software formats any given list into the proper list for InspIRCd's censor.conf. The software will accept any webpage or file containing words and format them. If you supply it with badword it will format badword into <badword text="badword" replace="<censored>">. This can be useful for large lists of bad words to add. You could also set this up to a crontab to verify you are blocking the newest of swear words that the cool teens these days use.

# Where are some places that I can find these badword lists?
- http://www.bannedwordlist.com/lists/swearWords.txt
- https://code.google.com/p/badwordslist/downloads/detail?name=badwords.txt
- I'm sure there is more, but we have Google for that

# Installtion
Just download InspIRCd-Censor-Generator.tcl and place it in a directory.

# System Requirements
- Tcl 8.5
- Tclsh

# Usage
- Open InspIRCd-Censor-Generator.tcl and edit the configuration
- Run "tclsh InspIRCd-Censor-Generator.tcl" and make sure that is the output you are looking for
- Run "tclsh InspIRCd-Censor-Generator.tcl > censor.conf" where censor.conf is the output file
