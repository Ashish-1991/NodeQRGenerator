'use strict';
const qr = require('qr-image');
const fs = require('fs');

let datatoencode = process.argv[2] || null;
let outimage = process.argv[3] || null;

if(datatoencode !== null  && outimage !==null)
{
	qr.image(datatoencode,{
		type:'png',
		size:100
	}).pipe(fs.createWriteStream(outimage));

	console.log("QR code generated");
}
else
{
	console.log("Erro while generating QR code")
}