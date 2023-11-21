const base64 = require('base64-js');

if (process.argv.length !== 3) {
    console.error('Erro: Nao foi informado um valor base64 válido')
    process.exit(1);
}

const base64String = process.argv[2];

try {
    const decodedData = base64.toByteArray(base64String);
    const decodedString = Buffer.from(decodedData).toString('utf-8');
    console.log('String decodada:', decodedString);
} catch (error) {
    console.error('Erro ao decodar string base64:', error.message);
}