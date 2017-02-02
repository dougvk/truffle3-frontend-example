import { default as Web3 } from 'web3'
import { default as contract } from 'truffle-contract'
import MetaCoinContract from '../build/contracts/MetaCoin.json'

const TESTRPC_HOST = 'localhost'
const TESTRPC_PORT = '7000'

function component () {
  var element = document.createElement('div')
  let provider = new Web3.providers.HttpProvider(`http:\/\/${TESTRPC_HOST}:${TESTRPC_PORT}`)
  let meta = contract(MetaCoinContract)
  meta.setProvider(provider)
  meta.deployed()
    .then((instance) => element.innerHTML = `Metacoin address: ${instance.address}`)

  return element
}

document.body.appendChild(component())
