const QRCode = require('qrcode')
const fs = require('fs')

const generateQRCode = async (text, path) => {
    const buffer = await QRCode.toBuffer(text)
    fs.writeFileSync(path, buffer)
}

generateQRCode('https://fastuptime.com', 'fastuptime.png').then(() => {
    console.log('QR Code Olusturuldu')
}).catch((err) => {
    console.log(err)
})