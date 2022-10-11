/* ************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the rectangle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    const r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */
function Rectangle(width, height) {
  return {
    width,
    height,
    getArea: () => width * height,
  };
}


/**
 * Returns the JSON representation of specified object
 *
 * @param {object} obj
 * @return {string}
 *
 * @example
 *    [1,2,3]   =>  '[1,2,3]'
 *    { width: 10, height : 20 } => '{"height":10,"width":20}'
 */
function getJSON(obj) {
  return JSON.stringify(obj);
}


/**
 * Returns the object of specified type from JSON representation
 *
 * @param {Object} proto
 * @param {string} json
 * @return {object}
 *
 * @example
 *    const r = fromJSON(Circle.prototype, '{"radius":10}');
 *
 */
function fromJSON(proto, json) {
  return Object.assign(Object.create(proto), JSON.parse(json));
}


/**
 * Css selectors builder
 *
 * Each complex selector can consists of type, id, class, attribute, pseudo-class
 * and pseudo-element selectors:
 *
 *    element#id.class[attr]:pseudoClass::pseudoElement
 *              \----/\----/\----------/
 *              Can be several occurrences
 *
 * All types of selectors can be combined using the combination ' ','+','~','>' .
 *
 * The task is to design a single class, independent classes or classes hierarchy
 * and implement the functionality to build the css selectors using the provided cssSelectorBuilder.
 * Each selector should have the stringify() method to output the string representation
 * according to css specification.
 *
 * Provided cssSelectorBuilder should be used as facade only to create your own classes,
 * for example the first method of cssSelectorBuilder can be like this:
 *   element: function(value) {
 *       return new MySuperBaseElementSelector(...)...
 *   },
 *
 * The design of class(es) is totally up to you, but try to make it as simple,
 * clear and readable as possible.
 *
 * @example
 *
 *  const builder = cssSelectorBuilder;
 *
 *  builder.id('main').class('container').class('editable').stringify()
 *    => '#main.container.editable'
 *
 *  builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify()
 *    => 'a[href$=".png"]:focus'
 *
 *  builder.combine(
 *      builder.element('div').id('main').class('container').class('draggable'),
 *      '+',
 *      builder.combine(
 *          builder.element('table').id('data'),
 *          '~',
 *           builder.combine(
 *               builder.element('tr').pseudoClass('nth-of-type(even)'),
 *               ' ',
 *               builder.element('td').pseudoClass('nth-of-type(even)')
 *           )
 *      )
 *  ).stringify()
 *    => 'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'
 *
 *  For more examples see unit tests.
 */

class SelectorBuilder {
  constructor() {
    this.resultString = '';
    this.hasId = false;
    this.hasElement = false;
    this.hasPseudoElement = false;
    this.currentStage = 0;
    /*     this.hasAttribute = false;
     this.hasPseudoClass = false;
     this.hasClass = false; */
  }

  check(newStage) {
    if (newStage < this.currentStage) throw new Error('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
    this.currentStage = newStage;
  }

  element(value) {
    this.check(0);
    if (this.hasElement) {
      throw new Error(
        'Element, id and pseudo-element should not occur more then one time inside the selector',
      );
    }
    this.hasElement = true;
    this.resultString += value;
    return this;
  }

  id(value) {
    this.check(1);
    if (this.hasId) {
      throw new Error(
        'Element, id and pseudo-element should not occur more then one time inside the selector',
      );
    }
    this.hasId = true;
    this.resultString += `#${value}`;
    return this;
  }

  class(value) {
    this.check(2);
    this.hasClass = true;
    this.resultString += `.${value}`;
    return this;
  }

  attr(value) {
    this.check(3);
    this.hasAttribute = true;
    this.resultString += `[${value}]`;
    return this;
  }

  pseudoClass(value) {
    this.check(4);
    this.hasPseudoClass = true;
    this.resultString += `:${value}`;
    return this;
  }

  pseudoElement(value) {
    this.check(5);
    if (this.hasPseudoElement) {
      throw new Error(
        'Element, id and pseudo-element should not occur more then one time inside the selector',
      );
    }
    this.hasPseudoElement = true;
    this.resultString += `::${value}`;
    return this;
  }

  combine(selector1, combinator, selector2) {
    this.resultString = `${selector1.stringify()} ${combinator} ${selector2.stringify()}`;
    return this;
  }

  stringify() {
    return this.resultString;
  }
}

const cssSelectorBuilder = {
  element(value) {
    const retValue = new SelectorBuilder();
    retValue.element(value);
    return retValue;
  },

  id(value) {
    const retValue = new SelectorBuilder();
    retValue.id(value);
    return retValue;
  },

  class(value) {
    const retValue = new SelectorBuilder();
    retValue.class(value);
    return retValue;
  },

  attr(value) {
    const retValue = new SelectorBuilder();
    retValue.attr(value);
    return retValue;
  },

  pseudoClass(value) {
    const retValue = new SelectorBuilder();
    retValue.pseudoClass(value);
    return retValue;
  },

  pseudoElement(value) {
    const retValue = new SelectorBuilder();
    retValue.pseudoElement(value);
    return retValue;
  },

  combine(selector1, combinator, selector2) {
    const retValue = new SelectorBuilder();
    retValue.combine(selector1, combinator, selector2);
    return retValue;
  },
};


module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};
