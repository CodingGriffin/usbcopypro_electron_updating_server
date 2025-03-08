const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

// Download file by filename
router.get('/download/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, '../uploads', filename);

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'File not found' });
  }

  // Set headers
  res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
  res.setHeader('Content-Type', 'application/octet-stream');

  // Stream the file
  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
});

// Download file with custom name
router.get('/updates/window_update.json', (req, res) => {
  const filePath = path.join(__dirname, '../../uploads', "window_update.json");
  console.log(filePath)

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'File not found' });
  }

  res.download(filePath);
});

router.get('/updates/update_enctool.zip', (req, res) => {
  const filePath = path.join(__dirname, '../../uploads', "update_enctool.zip");
  console.log(filePath)

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'File not found' });
  }

  res.download(filePath);
});

router.get('/updates/update_viewer.zip', (req, res) => {
  const filePath = path.join(__dirname, '../../uploads', "update_viewer.zip");
  console.log(filePath)

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'File not found' });
  }

  res.download(filePath);
});

// Download file with custom name
router.get('/updates/mac_update.json', (req, res) => {
  const filePath = path.join(__dirname, '../../uploads', "window_update.json");
  console.log(filePath)

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'File not found' });
  }

  res.download(filePath);
});

router.get('/updates/mac_enctool.zip', (req, res) => {
  const filePath = path.join(__dirname, '../../uploads', "mac_enctool.zip");
  console.log(filePath)

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'File not found' });
  }

  res.download(filePath);
});

router.get('/updates/mac_viewer.zip', (req, res) => {
  const filePath = path.join(__dirname, '../../uploads', "mac_viewer.zip");
  console.log(filePath)

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'File not found' });
  }

  res.download(filePath);
});

module.exports = router;