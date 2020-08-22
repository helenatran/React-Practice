import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';

//Square is a function component: only has render method and don't have it own state
function Square(props) {
    const className = 'square' + (props.highlight ? ' highlight' : '');
    //render is used to return HTML you want to display in a component
    return (
        <button className={className} onClick={props.onClick}>
            {props.value}
        </button>
    );
    //the Square onClick prop is specified by the Board
}

class Board extends React.Component {
    //this is a function which return the square component
    //we will need 9 of them to make a board
    renderSquare(i) {
        const winLine = this.props.winLine;
        return (
            <Square key={'square' + i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
                highlight={winLine && winLine.includes(i)} />);
    }
    //highlight checks whether the currIndex is included in the winLine

    render() {
        const boardSize = 3;
        let squares = [];
        for (let i = 0; i < boardSize; ++i) {
            let row = [];
            for (let j = 0; j < boardSize; ++j) {
                row.push(this.renderSquare(i * boardSize + j))
            }
            squares.push(<div key={'board-row' + i} className="board-row">{row}</div>)
        }

        return (
            <div>{squares}</div>
        );
    }
}

class Game extends React.Component {
    //super always need to be called with constructor to avoid
    //the props to be undefined
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
            stepNumber: 0,
            isAscending: true,
        };
    }
    //here, history is an array of squares
    //each square represents the board state after each move

    handleClick(i) {
        //we throw away all future history which are impossible after one move
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        //create a new copy of the array squares
        const squares = current.squares.slice();
        //do nothing if there's a winner, or square is full
        if (calculateWinner(squares).winner || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        //concat: merge 2 arrays together
        // unlike push(), concat() doesn't mutate original array (create new array)
        this.setState({
            history: history.concat([{
                squares: squares,
                //store the index of the latest moved square
                squareIndex: i,
            }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length,
        });
    }

    handleSortToggle() {
        this.setState({
            isAscending: !this.state.isAscending,
        });
    }

    jumpTo(step) {
        //xIsNext is set to true if step is even number
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winInfo = calculateWinner(current.squares);
        const winner = winInfo.winner;

        //'jump' to past moves => history
        //in the map, step: currValue of the element in history, move is the index of step in the array
        //'moves' become an array of step and move in the history
        let moves = history.map((step, move) => {
            const squareIndex = step.squareIndex;
            const col = 1 + squareIndex % 3;
            const row = 1 + Math.floor(squareIndex / 3);
            // for move different of 0, print out...
            const desc = move ?
                'Go to move #' + move + ' at position (' + col + ',' + row + ')' :
                'Go to game start';

            //here, we use move as the key bc we don't need re-ordering, deleting, etc.
            return (
                <li key={move}>
                    <button className={move === this.state.stepNumber ? 'item-selected-move-list' : ''}
                        onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        }
        else {
            if (winInfo.isDraw) {
                status = "Draw";
            }
            else {
                status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
            }
        }

        const isAscending = this.state.isAscending;
        //reverse() reverse the order of an array
        if (!isAscending) {
            moves.reverse();
        }

        //we passed winLine as props to Board
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                        winLine={winInfo.line}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <button onClick={() => this.handleSortToggle()}>
                        {this.state.isAscending ? 'Descending' : 'Ascending'}
                    </button>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}
//note: <ol> is ordered list

function calculateWinner(squares) {
    //2 dimensional arrays with all the winning combinations
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        //print the value from each array inside lines
        const [a, b, c] = lines[i];
        //3 conditions: (1) squares[a] is clicked on, 
        //(2) squares[a] et squares[b] have same symbol
        //(3) squares[a] et squares[c] have same symbol
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            //return the winning symbol + the winning line
            return ({
                winner: squares[a],
                line: lines[i],
                isDraw: false,
            });
        }
    }

    let isDraw = true;
    //we loop in our board until all the squares are full and there is
    //no winner (if there was one, handled above)
    for (let i = 0; i < squares.length; i++) {
        //if the square is empty, then we don't have a draw
        if (squares[i] === null) {
            isDraw = false;
            break;
        }
    }

    return ({
        winner: null,
        line: null,
        isDraw: isDraw,
    });
}

// =====================================================
//we render the element into a root DOM node to display it on the screen
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);