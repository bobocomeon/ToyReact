import { ToyReact, Component } from './ToyReact.js'
class Square extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: null
        }
    }
    render () {
        return (
            <button className="square" onClick={() => this.setState({value: 'X'})}>
                {this.props.value}
            </button>
        );
    }
}
class Board extends Component {
    renderSquare(i) {
        return <Square value={i} />
    }
    render () {
        const status = 'Next player: X';
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
let a = <Board/>
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