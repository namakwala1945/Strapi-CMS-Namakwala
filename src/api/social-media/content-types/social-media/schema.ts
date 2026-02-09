// src/api/social-media/content-types/social-media/schema.ts
export default {
  kind: 'collectionType',
  collectionName: 'social_medias',
  info: {
    singularName: 'social-media',
    pluralName: 'social-medias',
    displayName: 'Social Media',
  },
  options: {
    draftAndPublish: true,
  },
  pluginOptions: {},
  attributes: {
    SocialLink: {
      type: 'component',
      repeatable: true,
      component: 'social-link.social-link',
    },
  },
};
