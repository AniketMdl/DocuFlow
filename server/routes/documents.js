const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const { modifyPdfForSignature, createSignatureToken } = require('../controllers/documentController')

// POST /api/documents - upload PDF
router.post('/', upload.single('file'), async (req, res) => {
  try {
    // TODO: persist file to storage (S3/Supabase) and create DB record
    const file = req.file
    // create a document record with status 'Pending'
    const doc = { id: 'doc_' + Date.now(), filename: file.originalname, status: 'Pending' }
    res.json({ document: doc })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Upload failed' })
  }
})

// POST /api/documents/:id/sign - server-side modification (apply signature)
router.post('/:id/sign', express.json(), async (req, res) => {
  try {
    const { id } = req.params
    // Example controller call
    const out = await modifyPdfForSignature(id, req.body)
    res.json({ success: true, out })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Sign failed' })
  }
})

// GET /api/documents/:id/tokenized-link - create tokenized public signature link
router.post('/:id/tokenize', async (req, res) => {
  try {
    const { id } = req.params
    const token = createSignatureToken({ docId: id, expSeconds: 60 * 60 * 24 })
    // return a tokenized URL for public signing
    const url = `${process.env.PUBLIC_URL || 'http://localhost:3000'}/public/sign/${id}?t=${token}`
    res.json({ url })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Tokenize failed' })
  }
})

module.exports = router
