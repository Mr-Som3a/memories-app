import React from 'react'
import setStyles from './styles'
import Typography from '@mui/material/Typography'

const Post = ({post}) => {
    const classes = setStyles
  return (
    <Typography sx={classes.title}>{post.title}</Typography>
  )
}

export default Post