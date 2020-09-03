var hasClass = function (el, className) {
    let result = false;

    if (el.classList) {
      result = el.classList.contains(className);
    } else {
      result = new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }

    return result;
}

var ready = function (fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

var toggleClass = function (el, className) {
    if (el.classList) {
        el.classList.toggle(className);
    } else {
        const classes = el.className.split(' ');
        const existingIndex = classes.indexOf(className);

        if (existingIndex >= 0) {
            classes.splice(existingIndex, 1);
        } else {
            classes.push(className);
        }

        el.className = classes.join(' ');
    }
}
