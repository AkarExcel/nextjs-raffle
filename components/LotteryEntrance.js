import React from 'react'
import { useWeb3Contract } from 'react-moralis'
import {abi} from "../constants/abi.json"

const LotteryEntrance = () => {
    const {runContractFunction: enterRaffle} = useWeb3Contract({
        abi: abi,
        contractAddress: 0x6CAcE7F9fbFCAff02133A1d4c7387943d84bdB50,
        functionName: "enterRaffle",
        msgValue: "10000000000000000",
        params: {},
    })

    return (
        <div>
            <button onClick={async () => {
                await enterRaffle()
            }}>

            </button>
        </div>
    )
}

export default LotteryEntrance