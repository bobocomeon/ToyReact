import {ToyReact, Component} from './ToyReact.js'

/*class MyComponent extends Component {
    render () {
        return (
            <div>
                <span>hello</span>
                <span>world</span>
                <div>
                    {this.children}
                    {true}
                </div>
            </div>
        )
    }
}
let a = (
    <MyComponent name='a' id="id">
        <div>test compoennt</div>
    </MyComponent>
)
ToyReact.render(a, document.body)
*/
class MyComponent extends Component {
    render() {
        return <div>
            <span>hello</span>
            <span>world!</span>
            <div>
                {true}
                {this.children}
            </div>
        </div>
    }
    setAttribute(name, value) {
        this[name] = value
    }
    mountTo(parent) {
        let vdom = this.render()
        vdom.mountTo(parent)
    }
}

let a = <MyComponent name="a" id="ida">
    <div>123</div>
</MyComponent>

ToyReact.render(
    a,
    document.body
)
/** 
 * let a = <div name="a" id="ida">
    <span>hello</span>
    <span>world</span>
    <span>!</span>
</div>
document.body.appendChild(a)
 会被翻译成下面这种
 var a = ToyReact.createElement('div', {
    name: 'a',
    id: 'ida'
 },
 ToyReact.createElement('span', null, 'hello')
 ToyReact.createElement('span', null, 'world')
 ToyReact.createElement('span', null, '!')
 )
*/
console.log(a)