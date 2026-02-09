export default {
  schema: {
    collectionName: 'files',
    info: {
      singularName: 'file',
      pluralName: 'files',
      displayName: 'File'
    },
    options: {
      draftAndPublish: false,
      timestamps: true
    },
    attributes: {
      name: { type: 'string', required: true },
      alternativeText: { type: 'string' },
      caption: { type: 'string' },
      width: { type: 'integer' },
      height: { type: 'integer' },
      formats: { type: 'json' },
      hash: { type: 'string', required: true },
      ext: { type: 'string' },
      mime: { type: 'string', required: true },
      size: { type: 'decimal', required: true },
      url: { type: 'string', required: true },
      previewUrl: { type: 'string' },
      provider: { type: 'string', required: true },
      provider_metadata: { type: 'json' },
      folderPath: { type: 'string', configurable: false }
    }
  }
};
