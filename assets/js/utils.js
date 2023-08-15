function handleImgLoad(elemParent) {
  return ({ target }) => {
    elemParent.append(target);
  };
}

function stringToColour(str) {
  let hash = 0;
  str.split("").forEach((char) => {
    hash = char.charCodeAt(0) + ((hash << 5) - hash);
  });
  let colour = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    colour += value.toString(16).padStart(2, "0");
  }
  return colour;
}

function getInitials(arg){
  const initials = arg.split(' ').map((arg)=> arg[0].toUpperCase());
  return initials.join('');//if we need initials without space
  // return initials.join(' ');//if we need initials with space
}

/**
 *
 * @param {string} tag
 * @param {object} options {classNames, attributes, styles, events}
 * @param  {...nodes} children
 * @return {element}
 */
function createElement(
  tag = "div",
  { classNames, attributes, styles, events } = {},
  ...children
) {
  const elem = document.createElement(tag);
  if (classNames) {
    elem.classList.add(...classNames);
  }
  if (attributes) {
    for (const [nameAttr, valueAttr] of Object.entries(attributes)) {
      elem.setAttribute(nameAttr, valueAttr);
    }
  }
  if (styles) {
    for (const [nameStyle, valueStyle] of Object.entries(styles)) {
      elem.style[nameStyle] = valueStyle;
    }
  }
  if (events) {
    for (const [nameEvent, valueEvent] of Object.entries(events)) {
      elem.addEventListener(nameEvent, valueEvent);
    }
  }
  if (children) {
    elem.append(...children);
  }

  return elem;
}


