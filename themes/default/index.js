const colors = {
  primary: "white",
  secondary: "black",
  tertiary: "#006dc6"
};

const fonts = {
  primary: "xkcd",
  secondary: "Lobster Two",
  tertiary: "monospace"
};

module.exports = {
  colors: colors,
  fonts: fonts,
  global: {
    body: {
      fontFamily: fonts.primary,
      fontWeight: "normal",
      fontSize: "2em",
      color: colors.secondary,
      overflow: "hidden"
    },
    "html, body": {
      height: "100%"
    },
    "*": {
      boxSizing: "border-box"
    },
    ".card": {
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      height: "1000px",
      width: "100%"
    },
    ".card .details": {
      paddingLeft: "325px",
    },
    ".image-layer img": {
      position: "relative"
    },
    ".image-layer div + div": {
      position: "relative", top: "-535px"
    },
    ".image-layer div + div + div": {
      position: "relative", top: "calc(2 * -535px)"
    },
    ".image-layer div + div + div + div": {
      position: "relative", top: "calc(3 * -535px)"
    },
    ".image-layer div + div + div + div + div": {
      position: "relative", top: "calc(4 * -535px)"
    }
  },
  progress: {
    pacman: {
      container: {
        position: "absolute",
        bottom: "5px",
        left: "50%",
        transition: "all 1s ease-in-out 0.2s",
        zIndex: 1000
      },
      pacman: {
        position: "absolute",
        transition: "left 0.3s ease-in-out 0.2s",
        width: "20px",
        height: "20px",
        transform: "translate(-5px, -5px)"
      },
      pacmanTop: {
        position: "absolute",
        content: " ",
        width: "20px",
        height: "10px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        background: colors.tertiary
      },
      pacmanBottom: {
        position: "absolute",
        content: " ",
        width: "20px",
        height: "10px",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        background: colors.tertiary,
        top: "10px"
      },
      point: {
        position: "absolute",
        float: "left",
        background: "transparent",
        width: "10px",
        height: "10px",
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: colors.tertiary,
        borderRadius: "50%",
        transition: "all 0.01s ease-out 0.4s"
      }
    },
    bar: {
      container: {
        position: "absolute",
        height: '10px',
        width: '100%',
        bottom: 0,
        left: 0,
        transition: "all 1s ease-in-out 0.2s",
        zIndex: 1000
      },
      bar: {
        height: '100%',
        background: colors.tertiary,
        transition: "all 0.3s ease-out"
      }
    },
    number: {
      container: {
        position: "absolute",
        bottom: 10,
        right: 10,
        zIndex: 1000,
        color: colors.tertiary
      }
    }
  },
  components: {
    blockquote: {
      textAlign: "left",
      position: "relative",
      display: "inline-block"
    },
    quote: {
      borderLeft: "1px solid " + colors.primary,
      paddingLeft: 40,
      display: "block",
      color: colors.primary,
      fontSize: "4.9em",
      lineHeight: 1,
      fontWeight: "bold"
    },
    cite: {
      color: colors.tertiary,
      display: "block",
      clear: "left",
      fontSize: "2em",
      marginTop: "1em"
    },
    content: {
      margin: "auto",
      textAlign: "center"
    },
    codePane: {
      pre: {
        margin: "auto",
        fontSize: "1em",
        fontWeight: "normal",
        fontFamily: fonts.tertiary,
        minWidth: "100%",
        maxWidth: 800
      },
      code: {
        textAlign: "left",
        padding: 20,
        fontWeight: "normal"
      }
    },
    code: {
      color: "black",
      fontSize: "2.66em",
      fontFamily: fonts.tertiary,
      margin: "0.25em auto",
      backgroundColor: "rgba(0,0,0,0.15)",
      padding: "0 10px",
      borderRadius: 3
    },
    heading: {
      h1: {
        color: colors.tertiary,
        fontSize: "7.05em",
        fontFamily: fonts.primary,
        lineHeight: 1,
        fontWeight: "bold",
        margin: 0,
        zoom: 1
      },
      h2: {
        color: colors.tertiary,
        fontSize: "5.88em",
        fontFamily: fonts.primary,
        lineHeight: 1,
        fontWeight: "bold",
        margin: "0",
        marginBottom: ".3em"
      },
      h3: {
        color: "black",
        fontSize: "4.9em",
        fontFamily: fonts.secondary,
        lineHeight: 1,
        fontWeight: "bold",
        margin: "0.5em auto"
      },
      h4: {
        color: "black",
        fontSize: "3.82em",
        fontFamily: fonts.primary,
        lineHeight: 1,
        fontWeight: "bold",
        margin: "0.5em auto"
      },
      h5: {
        color: "black",
        fontSize: "3.19em",
        fontFamily: fonts.primary,
        lineHeight: 1,
        fontWeight: "bold",
        margin: "0.5em auto"
      },
      h6: {
        color: "black",
        fontSize: "2.66em",
        fontFamily: fonts.primary,
        lineHeight: 1,
        fontWeight: "bold",
        margin: "0.5em auto"
      }
    },
    image: {
      display: "block"
    },
    link: {
      textDecoration: "none"
    },
    listItem: {
      fontSize: "2.66em"
    },
    list: {
      textAlign: "left",
      listStylePosition: "inside",
      padding: 0
    },
    s: {
      strikethrough: {}
    },
    text: {
      color: "black",
      fontSize: "2.66em",
      fontFamily: fonts.primary,
      margin: "0.25em auto"
    }
  }
};
