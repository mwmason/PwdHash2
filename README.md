# PwdHash2
Firefox Add-On PwdHash alternative, based on PwdHash and PwdHash-PoC, migrated to WebExtension and PBKDF2-SHA256 support

## Overview
This is an alteration to the [Stanford PwdHash](https://www.pwdhash.com/) tool, based on [PwdHash-PoC](https://github.com/llewelld/pwdhash-poc) 

Changes to the original Stanford PwdHash:
1. Fixed defunct original version, caused by changes in Firefox 66 keypress event handling
2. Highlight password field, if active
3. Option to change the hash algorithm from HMAC-MD5 to PBKDF2-SHA256.
4. Added the option to store a user-specified salt and iteration count.
5. Added the option to use legacy (Stanford PwdHash) mode by Shift-F2 or in the options

