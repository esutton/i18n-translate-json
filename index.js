#!/usr/bin/env node

// See: https://medium.freecodecamp.org/writing-command-line-applications-in-nodejs-2cf8327eee2

'use strict';

const program = require('commander');

program
.version('0.0.1')
.command('i18n-translate-qt <googleTranslateApiKey> <workingFolder> <inputLanguage> <outputLanguageList>','\nUse Google Translate on Qt Linguist TS files')
.action(function (googleTranslateApiKey, workingFolder, inputLanguage, outputLanguageList) {
  console.log('googleTranslateApiKey:', googleTranslateApiKey);
  console.log('workingFolder:', workingFolder);
  console.log('inputLanguage:', inputLanguage);
  if (outputLanguageList) {
    console.log('outputLanguageList:', outputLanguageList);
    const languageList = outputLanguageList.split(',');
    for(let i = 0; i < languageList.length; i += 1) {
      console.log(`language[${i}] = `, languageList[i]);
    }
  }  
}); 

program.parse(process.argv);


console.log('dbg: program.args.length:', program.args.length);

// if program was called with no arguments, show help.
if (program.args.length < 4) program.help();

console.log('you ordered a pizza with:');

