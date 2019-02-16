'use strict';

require('./src/assets/scss/init.scss');
require('./src/assets/js/jquery.particleground.min');

exports.onClientEntry = () => {};
exports.onInitialClientRender = () => {
  window.particleground(document.querySelector('body'), {
    dotColor: '#16a085',
    lineColor: '#16a085',
    parallax: false
  });
};
