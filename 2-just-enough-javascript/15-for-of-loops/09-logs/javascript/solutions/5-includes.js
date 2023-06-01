'use strict';

const allowed = 'arvjstcpi';

let jumble = '3j\n _a__v!,aASs woon c023r\n\t&i pPPPPPPPPPt!!?';

for (const character of allowed) {
  if (jumble.indexOf(character)) {
    console.log(character);
  }
}
