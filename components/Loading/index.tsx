import { Container } from './styles'

import { useEffect } from 'react'

interface LoadingProps {
  show: boolean
}

export default function Loading({ show }: LoadingProps) {
  useEffect(() => {
    typeof window !== 'undefined' && import('@lottiefiles/lottie-player')
  }, [])

  return (
    <Container show={show}>
      <div className="box">
        <lottie-player
          id="firstLottie"
          loop
          autoplay
          src="https://assets4.lottiefiles.com/packages/lf20_HDWOkD.json"
          style={{ width: '750px', height: '750px' }}
        />
      </div>
    </Container>
  )
}
