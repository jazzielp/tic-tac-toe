import IconX from '../../assets/icon-x.svg'
import IconO from '../../assets/icon-o.svg'
import IconXGray from '../../assets/icon-x-gray.svg'
import IconOGray from '../../assets/icon-o-gray.svg'
import IconOBlack from '../../assets/icon-o-black.svg'
import IconXBlack from '../../assets/icon-x-black.svg'
import { LargeButton } from '../LargeButton/LargeButton'

import { TURNS, VS_PLAYER } from '../../const/const'
import './NewGame.css'

export function NewGame ({ turn, setTurn, setVsPlayer }) {
  const handleClick = ({ turn }) => {
    setTurn(turn)
  }
  return (
    <>
      <div className='icon-contaier'>
        <div className='icon-container__icon-x'>
          <img className='icon-container__icon' src={IconX} alt='Icon x' />
        </div>
        <div className='icon__container__icon-x'>
          <img className='icon-container__icon' src={IconO} alt='Icon o' />
        </div>
      </div>
      <section className='choose-turn'>
        <h1 className='choose-turn__title'>PICK PLAYER 1'S MARK</h1>
        <div className='choose-turn__turn'>
          <button onClick={() => handleClick({ turn: TURNS.X })} className={TURNS.X === turn ? 'choose-turn__btn-active' : 'choose-turn__btn-inactive'}>
            <img className='turn__icon' src={TURNS.X === turn ? IconXBlack : IconXGray} alt='Turn o' />
          </button>
          <button onClick={() => handleClick({ turn: TURNS.O })} className={TURNS.O === turn ? 'choose-turn__btn-active' : 'choose-turn__btn-inactive'}>
            <img className='turn__icon' src={TURNS.O === turn ? IconOBlack : IconOGray} alt='Turn o' />
          </button>
        </div>
        <p className='choose-turn__note'>
          REMEMBER : X GOES FIRST
        </p>
      </section>
      <div className='choose-player'>
        <LargeButton action={setVsPlayer} colorButton='yellow' value={VS_PLAYER.CPU}>
          NEW GAME (VS CPU)
        </LargeButton>
        <LargeButton action={setVsPlayer} colorButton='blue' value={VS_PLAYER.PLAYER}>
          NEW GAME (VS PLAYER)
        </LargeButton>
      </div>
    </>
  )
}
