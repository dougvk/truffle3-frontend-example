import { default as Web3 } from 'web3'
import { default as contract } from 'truffle-contract'
import MetaCoinContract from '../build/contracts/MetaCoin.json'

function component () {
  var element = document.createElement('div')
  let provider = new Web3.providers.HttpProvider('http://localhost:7000')
  let meta = contract(MetaCoinContract)
  meta.setProvider(provider)
  meta.deployed()
    .then((instance) => console.log(instance))

  return element
}

document.body.appendChild(component())
