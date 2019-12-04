import React from 'react'
import { navigate } from 'gatsby'
import _ from 'lodash'
import StyledTagCloud from './style'

const tagCloudColorOptions = {
  luminosity: 'dark',
  hue: 'green',
}

const Tags = ({ tags, minSize, maxSize, options }) => (
  <StyledTagCloud
    minSize={minSize || 16}
    maxSize={maxSize || 32}
    colorOptions={options || tagCloudColorOptions}
    tags={tags}
    className="simple-cloud"
    onClick={(tag) => navigate(`/tag/${_.kebabCase(tag.value)}`)}
  />
)

export default Tags
