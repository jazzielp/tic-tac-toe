import { SmallButton } from '../SmallButton/SmallButton'
import { Modal } from '../Modal/Modal'
import './ModalTied.css'

export function ModalTied ({ resetGame, nextRound }) {
  return (
    <Modal>
      <div className='modal-win__who-win'>
        <p className='modal-tied'>ROUND TIED</p>
      </div>
      <div className='modal-win__buttons'>
        <SmallButton colorButton='gray'>QUIT</SmallButton>
        <SmallButton action={nextRound} colorButton='yellow'>NEXT ROUND</SmallButton>
      </div>
    </Modal>
  )
}
