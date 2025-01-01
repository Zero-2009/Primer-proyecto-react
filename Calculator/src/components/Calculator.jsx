import "./Style-Calculator.css"

function InterfaceCreate() {
    let ResultTemporary = "";
    let NumberTemporaty = "";
    let arrayNumber = [];
    let arrayOperator = [];
    const addNumber = (e) => {
        const value = e.target.innerText;
        let View = document.getElementById("view-data");
        let btnOperatorDisable = document.querySelectorAll("#btn");
        NumberTemporaty += value;
        View.innerText = NumberTemporaty;
        btnOperatorDisable.forEach(function(button) {
            button.disabled = false;
        })
    }
    const addOperator = (e) => {
        const operator = e.target.innerText;
        let View = document.getElementById("view-data");
        let btnOperatorDisable = document.querySelectorAll("#btn");
        arrayNumber.push(Number(NumberTemporaty));
        arrayOperator.push(operator);
        View.innerText = operator;
        btnOperatorDisable.forEach(function(button) {
            button.disabled = true;
        })
        NumberTemporaty = "";
    }
    function operated() {
        arrayOperator.forEach((operator, index) => {
            let number1 = arrayNumber[index];
            let number2 = arrayNumber[index + 1];
            if (index === 0) {
                if (operator === "+") {
                    ResultTemporary = number1 + number2;
                } else if (operator === "-") {
                    ResultTemporary = number1 - number2;
                } else if (operator === "*") {
                    ResultTemporary = number1 * number2;
                } else if (operator === "/") {
                    ResultTemporary = number1 / number2;
                }
            } else {
                if (operator === "+") {
                    ResultTemporary += number2;
                } else if (operator === "-") {
                    ResultTemporary -= number2;
                } else if (operator === "*") {
                    ResultTemporary *= number2;
                } else if (operator === "/") {
                    ResultTemporary /= number2;
                }
            }
        })
    }
    const showResult = () => {
        const View = document.getElementById("view-data");
        const ViewOperated = document.getElementById("view-numbers-operated");
        arrayNumber.push(Number(NumberTemporaty));
        console.log(arrayNumber);
        console.log(arrayOperator);
        operated();
        View.innerText = ResultTemporary;
    }
    const clearNumber = () => {
        let View = document.getElementById("view-data");
    }
    return (
        <>
            <section className="interface-calculator">
                <section className="interface-view">
                    <div className="view-numbers-operated" id="view-numbers-operated"></div>
                    <div className="view-numbers" id="view-data"></div>
                </section>
                <div className="interface-container">
                    <section className="interface-operations-numbers">
                        <div className="interface-numbers">                    
                            <button id="number1" onClick={addNumber}>1</button>
                            <button onClick={addNumber}>2</button>
                            <button onClick={addNumber}>3</button>
                            <button onClick={addNumber}>4</button>
                            <button onClick={addNumber}>5</button>
                            <button onClick={addNumber}>6</button>
                            <button onClick={addNumber}>7</button>
                            <button onClick={addNumber}>8</button>
                            <button onClick={addNumber}>9</button>
                            <button onClick={showResult}>=</button>
                            <button onClick={addNumber}>0</button>
                            <button onClick={addNumber}>.</button>
                        </div>
                        <div className="interface-operators">
                            <button id="btn" onClick={addOperator}>+</button>
                            <button id="btn" onClick={addOperator}>-</button>
                            <button id="btn" onClick={addOperator}>*</button>
                            <button id="btn" onClick={addOperator}>/</button>
                        </div>
                    </section>
                    
                    <div className="interface-clear">
                        <button onClick={clearNumber}>Clear</button>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default InterfaceCreate;