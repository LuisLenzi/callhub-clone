import React, { memo, useState } from 'react'

import { Button } from '../Button'

import styles from './styles.module.scss'
import { PopOver } from './Popover'
import { Tooltips } from '../Tooltip'
import { Badge } from '@material-ui/core'
import { MdOutlineNotificationsNone } from 'react-icons/md'

interface NotificationInterface {
  id: number
  userImage: string
  userOwner: string
  description: string
  label: string
}

interface NotificationProps {
  notificationObject: NotificationInterface[]
}

export default function NotificationComponent({
  notificationObject,
}: NotificationProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const [openNotification, setOpenNotification] = useState(false)

  function handleOpenNotification(event: React.MouseEvent<HTMLButtonElement>) {
    if (openNotification) {
      setOpenNotification(false)
      setAnchorEl(null)
    } else {
      setAnchorEl(event.currentTarget)
      setOpenNotification(true)
    }
  }

  return (
    <>
      <Tooltips title="Notificações" placement="bottom">
        <div>
          <Button
            name="notification"
            onClick={handleOpenNotification}
            type="button"
          >
            <Badge color="warning" variant="dot">
              <MdOutlineNotificationsNone size={22} />
            </Badge>
          </Button>
        </div>
      </Tooltips>
      <PopOver
        id={'notification'}
        open={openNotification}
        anchorEl={anchorEl}
        onClose={() => setOpenNotification(false)}
        notificationObject={notificationObject}
      />
    </>
  )
}

export const Notification = memo(NotificationComponent)
