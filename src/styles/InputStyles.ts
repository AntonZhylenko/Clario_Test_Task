import { errorBackgroundColor, errorColor, successBackgroundColor, successColor } from "../utils/constants"

export const inputStyles = {
    paddingLeft: '15px',
    backgroundColor: 'white',
    borderRadius: '10px',
    borderColor: 'red',
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#A0AEC0',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#A0AEC0',
    },
}

export const inputSuccessStyles = {
  '& .MuiOutlinedInput-notchedOutline': {
      borderColor: successColor,
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: successColor,
  },
  '&.MuiInputBase-root': {
      color: successColor,
      backgroundColor: successBackgroundColor,
  },
}

export const inputErrorStyles = {
  '& .MuiOutlinedInput-notchedOutline': {
      borderColor: errorColor,
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: errorColor,
  },
  '&.MuiInputBase-root': {
      color: errorColor,
      backgroundColor: errorBackgroundColor,
  },
}
