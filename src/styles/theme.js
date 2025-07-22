const theme = {
    colors: {
        black900: '#000000',
        black800: '#1c262b',
        black700: '#212427',
        black600: '#231b07',
        black500: '#1b2116',
        black400: '#262626',
        black300: '#0b1628',
        black200: '#0b1215',
        black100: '#0b1111',

        gray900: '#212529',
        gray800: '#343a40',
        gray700: '#495057',
        gray600: '#6c757d',
        gray500: '#adb5bd',
        gray400: '#ced4da',
        gray300: '#dee2e6',
        gray200: '#e9ecef',
        gray100: '#f8f9fa',

        light900: '#fff',
        light800: '#f8f9fa',

        blue900: '#011c40',
        blue800: '#082567',
        blue700: '#033495',
        blue600: '#102254',
        blue500: '#253f7c',
        blue400: '#007fff',
        blue300: '#00bfff',
        blue200: '#e8f0fe',
        blue100: '#d3e3fd',

        red900: '#7f1d1d',
        red800: '#991b1b',
        red700: '#b91c1c',
        red600: '#dc2626',
        red500: '#ef4444',
        red400: '#f87171',
        red300: '#fca5a5',
        red200: '#fecaca',
        red100: '#fee2e2',

        green900: '#14532d',
        green800: '#166534',
        green700: '#15803d',
        green600: '#16a34a',
        green500: '#22c55e',
        green400: '#4ade80',
        green300: '#86efac',
        green200: '#bbf7d0',
        green100: '#dcfce7',
    },

    fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        xxl: '1.5rem',
        xxxl: '2rem',
    },

    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        xxl: '3rem',
    },

    breakpoints: {
        xs: '320px',
        sm: '576px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        xxl: '1400px',
    },

    borderRadius: {
        sm: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        pill: '50rem',
    },

    shadows: {
        sm: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)',
        md: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
        lg: '0 1rem 3rem rgba(0, 0, 0, 0.175)',
    },

    transitions: {
        short: '0.15s ease-in-out',
        medium: '0.3s ease-in-out',
        long: '0.5s ease-in-out',
    },
};

export const createCSSVariables = (themeColors) => `
    :root {
        ${Object.entries(themeColors)
            .map(([key, value]) => `--${key}: ${value};`)
            .join('\n')}
    }
`;
export default theme;
