import './App.css';

function App() {
  return (
    <>
      <section className='calculator-grid'>
        <article className='output'>
          <div className='previous-operand'>123213</div>
            <div className='current-operand'>5453545</div>
        </article>
        <button className='span-two'>AC</button>
        <button className='red'>DEL</button>
        <button>/</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>*</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button className='span-two'>=</button>
      </section>
    </>
  )
}

export default App;
