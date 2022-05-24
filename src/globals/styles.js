const global = {
  colors: {
    primary: '#2b2b2d',
    blue: '#252b45',
    orange: '#f6981d'
  },
  font: {
    acme: 'Acme_400Regular',
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32
  },
  spacing: {
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  elements: {
    borderRadius: 10,
    borderWidth: 2,
    diamond: {
      width: 18,
      height: 18,
      backgroundColor: '#ffffff',
      position: 'absolute',
      top: -9,
      transform: [{ rotate: "45deg" }]
    },
    input: {
      borderColor: 'rgba(254, 220, 159, 0.95)',
      backgroundColor: 'rgba(253, 224, 185, 0.95)'
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerStart: {
      width: '100%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    containerFlexStart: {
      width: '100%',
      alignItems: 'flex-start'
    },
    safeZone: {
      paddingTop: 65,
    },
    listItem: {
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(0, 0, 0, 0.15)',
    }
  }
}

export default global
