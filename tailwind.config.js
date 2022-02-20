module.exports = {
    content: ['./pages/**/*.js', './components/**/*.js'],
    corePlugins: {
        container: false
    },
    theme: {
        extend: {}
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    maxWidth: '100%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    paddingLeft: '2rem',
                    paddingRight: '2rem',
                    '@screen sm': {
                        maxWidth: '575px'
                    },
                    '@screen md': {
                        maxWidth: '767px'
                    },
                    '@screen lg': {
                        maxWidth: '991px'
                    },
                    '@screen xl': {
                        maxWidth: '1200px'
                    }
                }
            });
        }
    ]
};
