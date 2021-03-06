const init = function () {
  return {
    httpPort: process.env.HTTP_PORT || 5000,
    socketPort: process.env.SOCKET_PORT || 5050,
    mongoDBUrl: process.env.MONGO_DB_URI,
    dbUrl: process.env.MONGO_DB_URI,
    sessionSecret: process.env.SESSION_SECRET || 'very-secret',
    saltRounds: 3,
    facebook: {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: '/auth/facebook/callback',
      profileFields: ['id', 'displayName', 'photos'],
    },
    twitter: {
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: '/auth/twitter/callback',
      profileFields: ['id', 'displayName', 'photos'],
    },
    redis: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      password: process.env.REDIS_PASSWORD,
    },
  };
};

export default init();
