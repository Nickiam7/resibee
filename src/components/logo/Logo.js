import global from '../../globals/styles'

import AcmeText from '../acme-text/AcmeText'


const Logo = ({ size, ...props }) => {
  return (
    <AcmeText
      {...props}
      style={{
        color: global.colors.primary,
        fontSize: size
      }}
    >
      Resibee
    </AcmeText>
  )
}

export default Logo
