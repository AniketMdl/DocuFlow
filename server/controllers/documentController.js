const { PDFDocument, rgb, StandardFonts } = require('pdf-lib')
const fs = require('fs')
const path = require('path')

// Example: modify PDF and add a text stamp or placeholder for signature
async function modifyPdfForSignature(docId, { signatureText = 'Signed by DocuFlow' } = {}){
  // In a real app load from storage (S3 or local)
  const samplePath = path.join(__dirname, '../../client/assets/sample.pdf')
  if (!fs.existsSync(samplePath)) throw new Error('sample.pdf not found')
  const existingPdfBytes = fs.readFileSync(samplePath)
  const pdfDoc = await PDFDocument.load(existingPdfBytes)
  const pages = pdfDoc.getPages()
  const firstPage = pages[0]
  const { width, height } = firstPage.getSize()
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
  firstPage.drawText(signatureText, {
    x: 50,
    y: 50,
    size: 12,
    font,
    color: rgb(0, 0, 0)
  })
  const pdfBytes = await pdfDoc.save()
  // Write to a temporary path and return the location (in real app upload to storage)
  const outPath = path.join(__dirname, '../../uploads', `${docId}-signed.pdf`)
  fs.writeFileSync(outPath, pdfBytes)
  return { outPath }
}

// Create a simple token for public signing (in production sign properly)
const jwt = require('jsonwebtoken')
function createSignatureToken({ docId, expSeconds = 60 * 60 } = {}){
  const secret = process.env.SIGN_TOKEN_SECRET || 'sign-secret'
  return jwt.sign({ docId }, secret, { expiresIn: expSeconds })
}

module.exports = { modifyPdfForSignature, createSignatureToken }
