export const pageTransition = {
    exit: {
        x: '-50%',
        opacity: 0
    },

    enter: {
        x: 0,
        opacity: 1
    },

    init: {
        x: '50%',
        opacity: 0
    },

    transition: {
        duration: 1,
        ease: "anticipate"
    }
};