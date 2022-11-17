const express = require('express')
const { v4: uuidv4 } = require('uuid') // V$ Gera com numero eleatorio

const app = express()

const custumers = []

/*
  - cpf: string
  - name: stringify
  - id - uuid - idetificador unico 
  - statement []
*/

// Criando Conta
app.post('/account', (req, res) => {
  const { cpf, name } = req.body

  const id = uuidv4()

  custumers.push({
    cpf,
    name,
    id,
    statement: []
  })

  return res.status(201).send()
})

app.listen(3333)
