import React from 'react'
import styled from 'styled-components'

const BarContainer = styled.div`
  background-color: #ecf0f1;
`

const Bar = styled.div<{ progress: number }>`
  height: 24px;
  width: ${({ progress }) => `${progress}%`};
  background-color: #3498db;
  text-align: center;
`

const Label = styled.span`
  color: #fff;
`

interface Props {
  inProgress: number
  total: number
}

function ProgressBar(props: Props) {
  const { inProgress, total } = props

  const progress = Number(((inProgress / total) * 100).toFixed(2))

  return (
    <BarContainer>
      <Bar progress={progress}>
        <Label>{`${inProgress}/${total}`}</Label>
      </Bar>
    </BarContainer>
  )
}

export default ProgressBar
