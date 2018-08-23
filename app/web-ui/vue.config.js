module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api/flights/current': {
        target: 'http://localhost:3003/current',
        changeOrigin: true,
        pathRewrite: {
          '^/api/flights/current': ''
        }
      },
      '/api/k8s/stats': {
        target: 'http://localhost:3000/k8s-service/stats', // NEED TO INCORPORATE THIS
        changeOrigin: true,
        pathRewrite: {
          '^/api/k8s/stats': ''
        }
      },
      '/api/k8s/pods': {
        target: 'http://localhost:3000/k8s-service/pods', // NEED TO INCORPORATE THIS
        changeOrigin: true,
        pathRewrite: {
          '^/api/k8s/pods': ''
        }
      },
      '/api/k8s/nodes': {
        target: 'http://localhost:3000/k8s-service/pods', // NEED TO INCORPORATE THIS
        changeOrigin: true,
        pathRewrite: {
          '^/api/k8s/nodes': ''
        }
      },
      '/api/quakes/stats': {
        target: 'http://localhost:3000/api/stats', //NEED TO CHANGE + ADD THIS PORT
        changeOrigin: true,
        pathRewrite: {
          '^/api/quakes/stats': ''
        }
      },
      '/api/flights/inair':{
        target: 'http://localhost:8004',
        changeOrigin: true,
        pathRewrite: {
          '^/api/flights/inair': '/api/stats/flights/inair'
        }
      }
    }
  }
};
