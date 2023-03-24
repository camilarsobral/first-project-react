import React from "react";
import { Button as ContainerButton } from './styles'

function Button({ children, ...props }) { // '...props' pega tudo que tiver chegando sem ter que colocar cada um individualmente


    return <ContainerButton {...props}>{children}</ContainerButton>
}

export default Button