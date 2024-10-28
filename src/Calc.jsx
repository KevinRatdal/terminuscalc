import { useEffect, useState } from 'react'
import zero from './assets/0.png'
import ten from './assets/10.png'
import eleven from './assets/11.png'
import twenty from './assets/20.png'
import twentyone from './assets/21.png'
import twentytwo from './assets/22.png'

const m = ['X', 'Y', 'Z']

const Calc = () => {
  const [nums, setNums] = useState([])
  const [done, setDone] = useState(false)
  const addNum = (num) => {
    setNums(p =>[...p, num])
  }

  useEffect(() => {
    if (nums.length === 3) {
      setDone(true)
    }
  }, [nums])

  const calculation = (x, y, z) => {
    const first = 2 * x + 11
    const second = (2 * z + y) - 5
    const third = (y + z) - x
    return [Math.abs(first), Math.abs(second), Math.abs(third)]
  }

  const reset = () => {
    setNums([])
    setDone(false)
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em'}}>
      <h1>Terminus calc</h1>
      <h3>input: {nums.join(' | ')}</h3>
      {nums.length === 3 ? <h3>Output: {calculation(...nums).join(' | ')}</h3>
      : <h3>Please input number for {m[nums.length]}</h3>
      }
      {/* <h3>{calculation(...nums).join(' - ')}</h3> */}
      <div className='buttons'>
        <button disabled={done} onClick={() => addNum(0)} ><img src={zero} />0</button>
        <button disabled={done} onClick={() => addNum(10)}><img src={ten}  />10</button>
        <button disabled={done} onClick={() => addNum(11)}><img src={eleven} />11</button>
        <button disabled={done} onClick={() => addNum(20)}><img src={twenty}  />20</button>
        <button disabled={done} onClick={() => addNum(21)} ><img src={twentyone}/>21</button>
        <button disabled={done} onClick={() => addNum(22)}><img src={twentytwo} />22</button>
      </div>
      <button onClick={() => reset()} disabled={!done}>Reset</button>
    </div>
  )
}

export default Calc