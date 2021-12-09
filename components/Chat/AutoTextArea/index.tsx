import React, {
  useRef,
  useState,
  useEffect,
  FormEvent,
  TextareaHTMLAttributes,
} from 'react'
import { FiSend } from 'react-icons/fi'
import { chatApi } from '../../../services/chatApi'
import { Button } from '../../Button'

import styles from './styles.module.scss'

export default function AutoTextArea(
  props: TextareaHTMLAttributes<HTMLTextAreaElement>,
) {
  const [text, setText] = useState('')
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [parentHeight, setParentHeight] = useState('auto')
  const [showSentButton, setShowSentButton] = useState(false)
  const [textAreaHeight, setTextAreaHeight] = useState('auto')

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault()

    if (!text.trim()) {
      return
    }

    await chatApi.post('messages', { message: text })

    setText('')
  }

  useEffect(() => {
    setParentHeight(`${textAreaRef.current!.scrollHeight}px`)
    setTextAreaHeight(`${textAreaRef.current!.scrollHeight}px`)
  }, [text])

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaHeight('auto')
    setParentHeight(`${textAreaRef.current!.scrollHeight}px`)
    setShowSentButton(event.target.value.length > 0)
    setText(event.target.value)

    if (props.onChange) {
      props.onChange(event)
    }
  }

  return (
    <div
      className={styles.container}
      style={{
        minHeight: parentHeight,
      }}
    >
      <form onSubmit={handleSendMessage} className={styles.sendMessageForm}>
        <textarea
          {...props}
          ref={textAreaRef}
          rows={1}
          style={{
            height: textAreaHeight,
          }}
          placeholder="Digite aqui..."
          onChange={onChangeHandler}
          value={text}
        />
        {showSentButton && (
          <Button type="submit">
            <FiSend size={16} />
          </Button>
        )}
      </form>
    </div>
  )
}
