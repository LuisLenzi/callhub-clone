import { Zoom } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'
import { Tooltip, tooltipClasses, TooltipProps } from '@material-ui/core'

interface Props extends TooltipProps {
  children: React.ReactElement
}

export const Tooltips = styled(
  ({ placement, title, className, ...props }: Props) => (
    <Tooltip
      title={title}
      placement={placement}
      classes={{ popper: className }}
      TransitionComponent={Zoom}
      {...props}
    />
  ),
)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    zindex: 10,
    maxWidth: 600,
    fontWeight: '400',
    fontFamily: 'Poppins',
    letterSpacing: '-0.25px',
    color: 'var(--white-solid)',
    padding: theme.spacing(1.25),
    backgroundColor: 'var(--cian-solid)',
    fontSize: theme.typography.pxToRem(11),
  },
}))
