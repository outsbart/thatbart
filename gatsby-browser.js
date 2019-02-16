'use strict';

require('./src/assets/scss/init.scss');

exports.onClientEntry = () => {};
exports.onInitialClientRender = () => {
  window.particleground(document.querySelector('body'), {
    dotColor: '#16a085',
    lineColor: '#16a085'
  });
};
