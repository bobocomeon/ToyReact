// 元素
class ElementWrapper{
    constructor(type) {
        this.type = type
        this.props = Object.create(null)
        this.children = []
    }
    setAttribute(name, value) {
        /*let reg = /^on([\s\S]+)$/
        if (name.match(reg)) {
            let eventName = RegExp.$1.replace(/^[\s\S]/, s => s.toLowerCase())
            this.root.addEventListener(eventName, value)
        }
        if (name === 'className') {
            name = 'class'
        }*/
        this.props[name] = value
    }
    appendChild(vchild) {
        this.children.push(vchild)
        // let range = document.createRange()
        // if (this.root.children.length) {
        //     range.setStartAfter(this.root.lastChild)
        //     range.setEndAfter(this.root.lastChild)
        // } else {
        //     range.setStart(this.root, 0)
        //     range.setEnd(this.root, 0)
        // }
        // vchild.mountTo(range)
    }
    mountTo(range) { // 将创建的元素加到置顶元素中
        range.deleteContents()
        let reg = /^on([\s\S]+)$/
        let element = document.createElement(this.type)
        for (let name in this.props) {
            let value = this.props[name];
            if (name.match(reg)) {
                let eventName = RegExp.$1.replace(/^[\s\S]/, s => s.toLowerCase())
                element.addEventListener(eventName, value)
            }
            if (name === 'className') {
                name = 'class'
            }
            element.setAttribute(name, value)
        }
        for (let child of this.children) {
            let range = document.createRange()
            if (element.children.length) {
                range.setStartAfter(element.lastChild)
                range.setEndAfter(element.lastChild)
            } else {
                range.setStart(element, 0)
                range.setEnd(element, 0)
            }
            child.mountTo(range)
        }
        range.insertNode(element)
    }
}

class TextWrapper {
    constructor (content) {
        this.root = document.createTextNode(content) // 创建文本节点
        this.type = '#text'
        this.children = []
        this.props = Object.create(null)
    }
    mountTo(range) {
        this.range = range
        range.deleteContents()
        range.insertNode(this.root)
    }
}

// 抽离组件公共方法
export class Component {
    constructor() {
        this.children = []
        this.props = Object.create(null)
        this.range;
    }
    setAttribute(name, value) {
        this.props[name] = value
        this[name] = value
    }
    mountTo(range) {
        this.range = range
        this.update() // 更新vdom
    }
    update() {
        let vdom = this.render()
        if (this.vdom) {
            let isSameNode = (node1, node2) => {
                if (node1.type !== node2.type) { // 节点类型是否相等
                    return false
                }
                for (let name in node1.props) {
                    if (node1.props[name] !== node2.props[name]) { // 属性名值是否一样
                        return false
                    }
                }
                if (Object.keys(node1.props).length !== Object.keys(node2.props).length) { // 判断属性长度是否相等
                    return false
                }
                return true
            }
            let isSameTree = (node1, node2) => {
                if (!isSameNode(node1, node2)) {
                    return false
                }
                if (node1.children.length !== node2.children.length) {
                    return false
                }
                for (let i = 0; i < node1.children.length; i++) {
                    if (!isSameTree(node1.children[i], node2.children[i])) {
                        return false
                    }
                }
                return true
            }
            let replace = (newTree, oldTree) => {
                if (isSameTree(newTree, oldTree)) {
                    return
                }
                if (!isSameNode(newTree, oldTree)) {
                    newTree.mountTo(oldTree, range)
                } else {
                    for (let i = 0; i < newTree.children.length; i++) {
                        replace(newTree.children[i], oldTree.children[i])
                    }
                }
            }
            replace(vdom, this.vdom)
        } else {
            vdom.mountTo(this.range)
        }
        this.vdom = vdom
    }
    appendChild(vchild) {
        console.log('Component', vchild)
        this.children.push(vchild)
    }
    setState (state) {
        let merge = (oldState, newState) => {
            for (let p in newState) {
                if (typeof newState[p] === 'object' && newState[p] !== null) {
                    if (typeof oldState[p] !== 'object') {
                        oldState[p] = {}
                    }
                    merge(oldState[p], newState[p])
                } else {
                    oldState[p] = newState[p]
                }
            }
        }
        if (!this.state && state) {
            this.state = {}
        }
        merge(this.state, state)
        console.log(this.state)
        this.update()
    }
}
/** 
 * @param {type} 元素节点 String | Object
 * @param {attributes} 属性 Object
 * @param {children} 包含的子节点 Object | Array
*/
export let ToyReact = {
    createElement(type, attributes, ...children) {
        let element;
        if (typeof type === 'string') {
            element = new ElementWrapper(type)
        } else {
            element = new type // new Mycomponent
        }
        for (let name in attributes) {
            element.setAttribute(name, attributes[name]) // 这里不能用property 是本身自带的属性，不能改变的，attribute是赋予属性，不能这么用element[name] = attributes[name] 
        }
        let insertChildren = (children) => {
            for (let child of children) {
                if (Array.isArray(child)) { // 数组就递归调用
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
        let range = document.createRange() // 将元素渲染到页面上
        if (element.children.length) { // 如果该元素有真实子元素
            range.setStartAfter(element.lastChild)
            range.setEndAfter(element.lastChild)
        } else {
            range.setStart(element, 0)  //  setStart设置起点位置
            range.setEnd(element, 0)
        }
        vdom.mountTo(range)
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