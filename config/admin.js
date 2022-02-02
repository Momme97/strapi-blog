module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c46a45047b2fa5b44c4392e0071c3091'),
  },
});
