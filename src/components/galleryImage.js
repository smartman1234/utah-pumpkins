import React from "react"
import styled from '@emotion/styled';
import Img from "gatsby-image"

import { theme } from '../styles'


export const GalleryImage = ({ image, ...props }) => {

  const tags = image.description.split(',')
  return (
    <ImageContainer>
      <Img fluid={image.fluid} key={image.id} backgroundColor={theme.colors.orange} />
      <p>{image.description}</p>
      {/* <ImageTags>
        {tags.map(tag => <ImageTag key={tag}>{tag}</ImageTag>)}
      </ImageTags> */}
    </ImageContainer>
  )
}



const ImageContainer = styled.div`

`

const ImageTags = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  list-style-type: none;
`

const ImageTag = styled.li`
  margin-right: 15px;
  font-size: 20px;
  padding: 5px;
  color: ${theme.colors.dark};
  border: 1px solid ${theme.colors.dark};
  border-radius: 4px;
`