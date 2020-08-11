// 元素
class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type)
    }
    setAttribute(name, value) {
        this.root.setAttribute(name, value)
    }
    appendChild(vchild) {
        vchild.mountTo(this.root)
    }
    mountTo(parent) {
        parent.appendChild(this.root)
    }
}

class TextWrapper {
    constructor (content) {
        this.root = document.createTextNode(content) // 创建文本节点
    }
    appendChild(vchild) {
        vchild.mountTo(this.root)
    }
    mountTo(parent) {
        parent.appendChild(this.root)
    }
}

// 抽离组件公共方法
export class Component {
    constructor() {
        this.children = []
    }
    setAttribute(name, value) {
        this[name] = value
    }
    mountTo(parent) {
        let vdom = this.render()
        vdom.mountTo(parent)
    }
    appendChild(vchild) {
        console.log('Component', vchild)
        this.children.push(vchild)
    }
}
/** 
 * @param {type} 元素节点 String | Object
 * @param {attributes} 属性 Object
 * @param {children} 包含的子节点 Object | Array
*/
export let ToyReact = {
    createElement(type, attributes, ...children) {
        console.log(arguments)
        let element;
        if (typeof type === 'string') {
            element = new ElementWrapper(type)
        } else {
            element = new type
        }
        for (let name in attributes) {
            element.setAttribute(name, attributes[name]) // 这里不能用property 是本身自带的属性，不能改变的，attribute是赋予属性，不能这么用element[name] = attributes[name] 
        }
        let insertChildren = (children) => {
            for (let child of children) {
                if (typeof child === 'object' && child instanceof Array) { // 数组就递归调用
                    insertChildren(child)
                } else {
                    if (!(child instanceof Component) && !(child instanceof ElementWrapper) && !(child instanceof TextWrapper)) {
                        child = String(child)
                    }
                    if (typeof child === 'string') {
                        child = new TextWrapper(child)
                    }
                    element.appendChild(child)
                }
            }
        }
        insertChildren(children)
        return element
    },
    render(vdom, element) {
        vdom.mountTo(element)
    }
}

/** 
 * Arguments: 
 * 0: 'div
 * 1: {name: 'a', id: 'ida'}
 * 2: span
 * 3: span
 * 4: span
 * length: 5
*/