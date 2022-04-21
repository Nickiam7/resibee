import AcmeText from '../acme-text/AcmeText'

const Logo = ({ size, ...props }) => {
  return (
    <AcmeText
      {...props}
      style={{
        color: '#2b2b2d',
        fontSize: size
      }}
    >
      Resibee
    </AcmeText>
  )
}

export default Logo
