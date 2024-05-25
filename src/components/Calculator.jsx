import { React, useState } from 'react'
import ConfettiExplosion from 'react-confetti-explosion';
import BackspaceIcon from '@mui/icons-material/Backspace';
import '../App.css'
import *as math from 'mathjs'

const Calculator = () => {
    const [expression, setexpression] = useState("")
    const [mode, setMode] = useState("rad");
    const [triggerConfetti, setTriggerConfetti] = useState(false);
    const [customVariables, setCustomVariables] = useState({});
    const [memory, setMemory] = useState(0);
    const handleSquareRoot = () => {
        try {
            const result = math.sqrt(parseFloat(expression));
            setexpression(result.toString());
        } catch (error) {
            setexpression("Error");
        }
    }
    

    //using handlecubroot for handling cube root
    const handleCubeRoot = () => {
        try {
            const result = math.cbrt(parseFloat(expression));
            setexpression(result.toString());
        } catch (error) {
            setexpression("Error");
        }
    };
    
    const handleReciprocal = () => {
        try {
            const result = 1 / parseFloat(expression);
            setexpression(result.toString());
        } catch (error) {
            setexpression("Error");
        }
    };

    const changeMode = () => {

        if (mode == "rad") {
            setMode('deg')
        }
        else {
            setMode("Rad")
        }
    }
    const handleMemoryClear = () => {
        setMemory(0);
    }
    const Delete = () => {
        const newExp = expression.slice(0, -1);
        setexpression(newExp)
    }

    const handleMemoryPlus = () => {
        setMemory(memory + parseFloat(expression));
    };

    const handleMemoryMinus = () => {
        setMemory(memory - parseFloat(expression));
    };

    const handleMemoryRecall = () => {
        setexpression(memory.toString());
    };



    const Setpower3 = (e) => {
        const first = expression;
        //  console.log(e.target.value)
        const result = math.pow(first, 3);
        setexpression(result.toString())
    }
    const handleRandom = () => {
        const result = Math.random();
        setexpression(result.toString());
    }

    const Dopower = () => {
        setexpression(`${expression}^`)
    }
    const Setpower2 = (e) => {
        const first = expression;
        // console.log(e.currentTarget.value)
        const result = math.pow(first, 2);
        setexpression(result.toString())
    }
    const handleExponent = () => {
        const result = math.exp(expression);
        setexpression(result.toString());
    }

    const handle10Exponent = () => {
        const result = math.pow(10, expression);
        setexpression(result.toString());
    }



    const handlechange = (e) => {

        setexpression(e.target.value)
    }
    const Handlechange = (e) => {
        setexpression(expression + e.target.value)
        console.log(expression + e.target.value)
        setMemory(parseFloat(expression))
    }
    const handleFactorial = () => {
        const result = math.factorial(expression);
        setexpression(result.toString());
    };
    const handleYRoot = () => {
        setexpression(`${expression}^`)
        const parts = expression.split("^");
        if (parts.length === 2) {
            const base = parseFloat(parts[0]);
            const exponent = parseFloat(parts[1]);
            if (!isNaN(base) && !isNaN(exponent)) {
                const result = math.pow(base, 1 / exponent);
                setexpression(result.toString());
            } else {
                setexpression("Error");
            }
        } else {
            setexpression("Error");
        }
    };
    const handleResult = () => {
        const allVariables = {
            ...customVariables,
            pi: Math.PI,
            e: Math.E,

            fact: math.factorial,
            log10: math.log10,
            sin: mode === "rad" ? Math.sin : math.sin,
            cos: mode === "rad" ? Math.cos : math.cos,
            tan: mode === "rad" ? Math.tan : math.tan,
            asin: mode === "rad" ? Math.asin : math.asin,
            acos: mode === "rad" ? Math.acos : math.acos,
            atan: mode === "rad" ? Math.atan : math.atan,
        }
        const Newexpression = math.evaluate(expression, allVariables);
        if (Check(expression)) {
            setTriggerConfetti(true);
            setTimeout(() => setTriggerConfetti(false), 5000);
        } else {
            setTriggerConfetti(false);
        }
        setexpression(Newexpression.toString());
    }
    const clear = () => {
        setexpression("")
    }

    const Check = (expr) => {
        console.log(expr)
        return /3.*4|4.*3/.test(expr);
    };

    return (
        <>
            <div className="main-div">
                <div className="upper-div">
                    <div className="first">
                        <div className="red">
                        </div>
                        <div className="yellow"></div>
                        <div className="green"></div>
                    </div>
                    <div className="second">
                        <span className='clear' onClick={Delete}><BackspaceIcon /></span>
                        <input type="text" value={expression} onChange={handlechange} />
                    </div>

                </div>
                <div className="btn-div">
                    <div className="btn-Div">
                        <button className="btn" onClick={Handlechange} value={"("}>
                            {"("}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn" onClick={Handlechange} value={")"}>
                            {")"}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn" onClick={handleMemoryClear}>
                            {"mc"}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn" onClick={handleMemoryPlus}>
                            {"m+"}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn" onClick={handleMemoryMinus}>
                            {"m-"}
                        </button>
                    </div>
                    <div className="btn-Div" onClick={handleMemoryRecall}>
                        <button className="btn">
                            {"mr"}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn" onClick={clear}>
                            {"C"}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn">
                            {"+/-"}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn" onClick={Handlechange} value={"%"}>
                            {"%"}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="last-btn" onClick={() => { setexpression(`${expression}/`) }}>
                            <span> &#xf7;</span>
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn">
                            <div className="btn-design">
                                <div className="sp1">2</div>
                                <div className="sp">nd</div>
                            </div>
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn">
                            <div className="btn-design" value={2} onClick={Setpower2}>
                                <div className="sp1">x</div>
                                <div className="sp">2</div>
                            </div>
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn" value={3} onClick={Setpower3} >
                            <div className="btn-design">
                                <div className="sp1">x</div>
                                <div className="sp">3</div>
                            </div>
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn" onClick={Dopower}>
                            <div className="btn-design">
                                <div className="sp1">x</div>
                                <div className="sp">y</div>
                            </div>
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn" onClick={handleExponent}>
                            <div className="btn-design">
                                <div className="sp1">e</div>
                                <div className="sp">x</div>
                            </div>
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn" onClick={handle10Exponent}>
                            <div className="btn-design">
                                <div className="sp1" >10</div>
                                <div className="sp">x</div>
                            </div>
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn-number" value={7} onClick={Handlechange}>
                            {"7"}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn-number" value={8} onClick={Handlechange}>
                            {"8"}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn-number" value={9} onClick={Handlechange}>
                            {"9"}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="last-btn" onClick={Handlechange} value={"*"}>
                            {"x"}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn" onClick={handleReciprocal}>
                            {"1/x"}
                        </button>
                    </div>
                    <div className="btn-Div" onClick={handleSquareRoot}>
                        <button className="btn">

                            <span className='sp3'>2</span><span>&#x221A;</span><span className='sp3'>x</span>

                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn" onClick={handleCubeRoot}>
                            <span className='sp4'>&#x221B;</span><span>x</span>
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn" onClick={handleYRoot}>
                        <span className='sp3'>y</span><span>&#x221A;</span><span className='sp3'>x</span>
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn">
                            {"In"}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn" onClick={Handlechange} value={"log10"}>
                            <span>log</span><span className='sp5'>10</span>
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn-number" value={4} onClick={Handlechange}>
                            {"4"}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn-number" value={5} onClick={Handlechange}>
                            {"5"}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn-number" value={6} onClick={Handlechange}>
                            {"6"}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="last-btn" onClick={Handlechange} value={"-"}>
                            {"-"}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn" onClick={handleFactorial} value={"fact"}>
                            {"x!"}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn" onClick={Handlechange} value={"sin"}>
                            {"sin"}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn" onClick={Handlechange} value={"cos"}>
                            {"cos"}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn" onClick={Handlechange} value={"tan"}>
                            {"tan"}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn">
                            {"e"}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn">
                            {"EE"}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn-number" value={1} onClick={Handlechange}>
                            {"1"}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn-number" value={2} onClick={Handlechange}>
                            {"2"}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn-number" value={3} onClick={Handlechange}>
                            {"3"}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="last-btn" onClick={Handlechange} value={"+"}>
                            {"+"}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn-corner" onClick={changeMode}>
                            {"Rad"}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn">
                            {"sinh"}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn" onClick={Handlechange} value={"cosh"}>
                            {"cosh"}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn" onClick={Handlechange} value={"tanh"}>
                            {"tanh"}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn">
                            {"Pi"}
                        </button>
                    </div>
                    <div className="btn-Div">
                        <button className="btn" onClick={handleRandom}>
                            {"Rand"}
                        </button>
                    </div>
                    <div className="btn-DIV">
                        <button className="btn-number" value={0} onClick={Handlechange}>
                            {"0"}
                        </button>
                    </div>

                    <div className="btn-Div">
                        <button className="btn-number">
                            {"."}
                        </button>
                    </div>
                    <div className="last-btn-div">
                        <button className="last-Btn" onClick={handleResult}>
                            {"="}
                        </button>
                    </div>
                </div>
            </div>
            {
                triggerConfetti ? <div className='condiv'>
                    <ConfettiExplosion
                        active={triggerConfetti}
                        config={{
                            force: 0.6,
                            particleCount: 100,
                            spread: 160,
                            lifetime: 200,
                        }}
                    />
                </div> : null
            }

        </>
    )
}

export default Calculator