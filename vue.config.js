module.exports = {
  publicPath: process.env.VUE_APP_DEPLOY_MODE === 'prod'
    ? '/Vue_final/dist/'
    : '/',
};
