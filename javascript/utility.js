const addClass = (el, className) => {
    if (el.classList) {
        el.classList.add(className);
    } else {
        const current = el.className, found = false;
        const all = current.split(' ');
        for (let i = 0; i < all.length, !found; i++) { found = all[i] === className; }
        if (!found) {
            if (current === '') {
                el.className = className;
            } else {
                el.className += ' ' + className;
            }
        }
    }
}

const hasClass = (el, className) => {
    let result = false;

    if (el.classList) {
      result = el.classList.contains(className);
    } else {
      result = new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }

    return result;
}

const parseHTML = (str) => {
    const tmp = document.implementation.createHTMLDocument();
    tmp.body.innerHTML = str;
    return tmp.body.children;
}

const ready = (fn) => {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

const removeEventListener = (el, eventName, handler) => {
    if (el.removeEventListener) {
        el.removeEventListener(eventName, handler);
    } else {
        el.detachEvent('on' + eventName, handler);
    }
}

const toggleClass = (el, className) => {
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

export { addClass, hasClass, parseHTML, ready, removeEventListener, toggleClass };
