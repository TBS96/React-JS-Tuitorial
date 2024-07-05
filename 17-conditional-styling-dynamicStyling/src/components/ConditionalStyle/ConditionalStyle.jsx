import React from 'react'

const ConditionalStyle = () => {

    const [isSpecial, setIsSpecial] = React.useState(false);

    const toggleBtn = () => {
        setIsSpecial(!isSpecial);
    };

    const commonStyle = {
        color: isSpecial ? 'black' : 'blue',
        fontSize: isSpecial ? '40px' : '16px',
        padding: isSpecial ? '60px' : '10px',
        border: isSpecial ? '5px dashed blue' : '1px solid red',
        margin: isSpecial ? '20px' : '15px',
        backgroundColor: isSpecial ? 'green' : 'aqua',
        borderRadius: isSpecial ? '20px' : '0',
    };

    const specialText = {
        textDecoration: 'underline',
        fontWeight: 'bold'
    };

    const normalText = {
        fontsize: '20px',
        fontWeight: 'bolder',
        opacity: '0.5'
    };

  return (
    <div>

        <button onClick={toggleBtn}>
            Make It {isSpecial ? `Normal` : `Special`}
        </button>

        <div style={commonStyle}>
            This is a {isSpecial ? <span style={specialText}>Special</span> : <span style={normalText}>Normal</span>} style...
        </div>

    </div>
  )
}

export default ConditionalStyle
