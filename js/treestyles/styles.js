'use strict';

export default {
    component: {
        width: '30%',
        height: '100%',
        display: 'inline-block',
        verticalAlign: 'top',
        padding: '20px',
        '@media (max-width: 640px)': {
            width: '100%',
            display: 'block'
        }
    },
    descview: {
        width: '30%',
        height: '100%',
        display: 'inline-block',
        verticalAlign: 'top',
        padding: '20px',
        '@media (max-width: 640px)': {
            width: '100%',
            display: 'block'
        }
    },
    editview: {
        width: '30%',
        height: '100%',
        display: 'inline-block',
        verticalAlign: 'top',
        padding: '20px',
        '@media (max-width: 640px)': {
            width: '50%',
            display: 'block'
        }
    },
    submitbtn: {
        display: 'inline-block',
        verticalAlign: 'top',
        marginTop: '435px',
    },
    searchBox: {
        padding: '20px 20px 0 20px',
    },
    viewer: {
        base: {
            fontSize: '12px',
            whiteSpace: 'pre-wrap',
            backgroundColor: '#282C34',
            border: 'solid 1px black',
            padding: '10px',
            color: '#9DA5AB',
            minHeight: '458px',
            wordBreak: 'break-all',
            wordWrap: 'break-word'
        }
    },
    editor: {
        base: {
            fontSize: '12px',
            whiteSpace: 'pre-wrap',
            backgroundColor: '#282C34',
            border: 'solid 1px black',
            padding: '10px',
            color: '#9DA5AB',
            minHeight: '458px',
            width: '300px'
        }
    }
};
