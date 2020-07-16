const leftProgressBars = {
    selector: '.column-left',
    data: [
        {
            title: 'UX design',
            value: 90
        },
        {
            title: 'Web design',
            value: 86
        },
        {},
        {
            title: 'Web development',
            value: 50
        }
    ]
};

const rightProgressBars = {
    selector: '.column-right > p',
    selectorPosition: 'afterbegin',
    data: {
        title: 'HTML',
        value: 99
    }
};

const mainContentProgressBars = {
    selector: '#main_content > .content',
    data: {
        title: 'Super huge example',
        value: 10
    }
};

export default {
    leftProgressBars,
    rightProgressBars,
    mainContentProgressBars
};