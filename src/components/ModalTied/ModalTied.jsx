import { SmallButton } from '../SmallButton/SmallButton'
import { Modal } from '../Modal/Modal'
import './ModalTied.css'
import { useStore } from '../../stores/store'

export function ModalTied () {
  const nextRound = useStore((state) => state.nextRound)
  const quitGame = useStore((state) => state.quitGame)
  return (
    <Modal>
      <div className='modal-win__who-win'>
        <p className='modal-tied'>ROUND TIED</p>
      </div>
      <div className='modal-win__buttons'>
        <SmallButton action={quitGame} colorButton='gray'>QUIT</SmallButton>
        <SmallButton action={nextRound} colorButton='yellow'>NEXT ROUND</SmallButton>
      </div>
    </Modal>
  )
}
