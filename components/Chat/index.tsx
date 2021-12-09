import React, { ButtonHTMLAttributes, useState, memo } from 'react'

import styles from './styles.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

import { Tooltips } from '../Tooltip'
import { HiOutlineChat } from 'react-icons/hi'
import { PopOver } from './Popover'
import { Button } from '../Button'

function ChatButtonComponent({ name, type, children, ...rest }: ButtonProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const [openChat, setOpenChat] = useState(false)

  function handleOpenChat(event: React.MouseEvent<HTMLButtonElement>) {
    if (openChat) {
      setOpenChat(false)
      setAnchorEl(null)
    } else {
      setAnchorEl(event.currentTarget)
      setOpenChat(true)
    }
  }
  return (
    <>
      <section className={styles.container}>
        <Tooltips title="Chat" placement="left">
          <div>
            <Button name="chat" type="button" onClick={handleOpenChat}>
              <HiOutlineChat size={28} />
            </Button>
          </div>
        </Tooltips>
      </section>

      <PopOver
        id={'chat'}
        open={openChat}
        anchorEl={anchorEl}
        onClose={() => setOpenChat(false)}
      />
    </>
  )
}

export const ChatButton = memo(ChatButtonComponent)
