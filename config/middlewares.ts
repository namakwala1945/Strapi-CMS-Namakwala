export default 
[ 
'strapi::logger', 
'strapi::errors', 
//'strapi::security',
// ⭐ Fix iframe issue (PDF not showing)
  {
    name: 'strapi::security',
    config: {
      frameguard: false,  // ✔ Disable X-Frame-Options
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "frame-ancestors": ["*"],  // ✔ Allow embedding from any domain
        },
      },
    },
  },
 
'strapi::cors', 
'strapi::poweredBy', 
'strapi::query', 
'strapi::body', 
'strapi::session', 
'strapi::favicon', 
'strapi::public', 
];
