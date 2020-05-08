// const { override, fixBabelImports } = require('customize-cra')
const { override, fixBabelImports, addLessLoader } = require('customize-cra')

module.exports = override(
    fixBabelImports('antd',
        {
            libraryDirectory: 'es',
            // style: 'css',
            style: true
        }),
    addLessLoader(
        {
            lessOptions: {
                javascriptEnabled: true,
                modifyVars: {
                    '@primary-color': '#2A13BD',
                    
                },
            }
        }),
    );