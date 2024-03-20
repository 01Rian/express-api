module.exports = {
  port: 3000,
  jwtSecret: '!!secret!!',
  jwtExpirationInSeconds: 3600,
  roles: {
    USER: 'user',
    ADMIN: 'admin'
  },
  productPriceUnits: {
    DOLLAR: 'dollar',
    EURO: 'euro'
  }
}