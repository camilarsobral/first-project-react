import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

import axios from 'axios'

import Avatar from '../../assets/avatar.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'
import H1 from '../../components/title'
import ContainerItems from '../../components/container-items'
import Button from '../../components/button'

import {
  Container,
  Image,
  User
} from './styles';


const Users = () => {

  const [users, setUsers] = useState([]);
  const history = useHistory()


  useEffect(() => { /* useffect não aceita async await */
    async function fetchUsers() {

      const { data: newUsers } = await axios.get("http://localhost:3001/users");

      setUsers(newUsers)
    }
    fetchUsers()
  }, [])


  async function deleteUser(UserId) {

    await axios.delete(`http://localhost:3001/users/${UserId}`) /*deleta do back-end*/

    const newUsers = users.filter(user => user.id !== UserId)
    setUsers(newUsers)
  }


  function goBackPage(){
    history.push('/')
  }

  return (
    <Container>

      <Image alt="logo-imagem" src={Avatar} />

      <ContainerItems isBlur={true}>

        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img alt="trash-can" src={Trash} />
              </button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}>
          <img alt="arrow" src={Arrow} /> Voltar
        </Button>

      </ContainerItems>
    </Container>
  )
}


export default Users;