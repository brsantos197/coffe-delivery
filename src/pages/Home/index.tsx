import React from 'react'

import {
  HomeIntro,
  IntroInfo,
  IntroItems,
  IntroSubTitle,
  IntroTitle,
} from './styles'

import image from '../../assets/title-image.png'

export const Home: React.FC = () => {
  return (
    <HomeIntro>
      <IntroInfo>
        <IntroTitle>
          Encontre o café perfeito para qualquer hora do dia
        </IntroTitle>
        <IntroSubTitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </IntroSubTitle>

        <IntroItems></IntroItems>
      </IntroInfo>
      <img src={image} alt="Imagem de introdução" />
    </HomeIntro>
  )
}
