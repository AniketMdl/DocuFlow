const express = require("express");
const upload = require("../middleware/upload");
const Document = require("../models/Document");

const router = express.Router();

router.post(
    "/upload",
    upload.single("file"),
    async (req, res) => {
        try {
            if (!req.file) {
                return res.status(400).json({
                    message: "No file uploaded",
                });
            }

            const doc =
                await Document.create({
                    originalName:
                        req.file.originalname,

                    filename:
                        req.file.filename,

                    path:
                        `uploads/docs/${req.file.filename}`,

                    mimeType:
                        req.file.mimetype,

                    size:
                        req.file.size,
                });

            res.status(201).json({
                message:
                    "File uploaded successfully",

                document: doc,
            });
        } catch (error) {
            console.error(error);

            res.status(500).json({
                message:
                    "Upload failed",
            });
        }
    }
);

module.exports = router;