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
                    '@primary-color': '#2A13BD', // Primary colour
                    '@link-color': '#2A13BD', // URL colour
                    '@success-color' : '#44C07C', // Success Messages
                    '@error-color' : '#f44A6F', //Error Messages
                    '@font-size-base' : '16px', // Defaulting this to a standard value
                    '@border-radius-base' : '4px',
                    '@text-color': 'rgba(2, 2, 2, 1)',
                    '@text-color-secondary': 'rgba(2, 2, 2, .45)',
                },
            }
        }),
    );