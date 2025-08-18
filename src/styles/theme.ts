// 테마 타입 정의
export interface Theme {
    colors: {
        black900: string;
        black800: string;
        black700: string;
        black600: string;
        black500: string;
        black400: string;
        black300: string;
        black200: string;
        black100: string;
        gray900: string;
        gray800: string;
        gray700: string;
        gray600: string;
        gray500: string;
        gray400: string;
        gray300: string;
        gray200: string;
        gray100: string;
        light900: string;
        light800: string;
        blue900: string;
        blue800: string;
        blue700: string;
        blue600: string;
        blue500: string;
        blue400: string;
        blue300: string;
        blue200: string;
        blue100: string;
        red900: string;
        red800: string;
        red700: string;
        red600: string;
        red500: string;
        red400: string;
        red300: string;
        red200: string;
        red100: string;
        green900: string;
        green800: string;
        green700: string;
        green600: string;
        green500: string;
        green400: string;
        green300: string;
        green200: string;
        green100: string;
        primary: string;
        secondary: string;
        success: string;
        warning: string;
        error: string;
        white: string;
        black: string;
    };
    fontSizes: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
        xxxl: string;
    };
    spacing: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
        wide: string;
    };
    breakpoints: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
    };
    borderRadius: {
        sm: string;
        md: string;
        lg: string;
        pill: string;
    };
    shadows: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    transitions: {
        short: string;
        medium: string;
        long: string;
    };
}

const theme: Theme = {
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

        primary: '#1976d2',
        secondary: '#6c757d',
        success: '#22c55e',
        warning: '#f59e0b',
        error: '#ef4444',
        white: '#ffffff',
        black: '#000000',
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
        wide: '6rem',
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
        xl: '0 1.5rem 4rem rgba(0, 0, 0, 0.2)',
    },
    transitions: {
        short: '0.15s ease-in-out',
        medium: '0.3s ease-in-out',
        long: '0.5s ease-in-out',
    },
};

export default theme;
