import React, { useEffect, useState } from "react";
import { newContextComponents } from "@drizzle/react-components";
import logo from "./logo.png";
import { decrypt, encrypt } from "./cypher";



const { AccountData, ContractData, ContractForm } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
    function useInput({ type }) {
        const [value, setValue] = useState("");
        const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} />;
        return [value, input];
    }
    // destructure drizzle and drizzleState from props
    const [username, userInput] = useInput({ type: "text" });
    const [cMessage, setCMessage] = useState('')
    const [decMessage, setDecMessage] = useState('')
    const [startEncrypt, setStartEncrypt] = useState(false)
    console.log("🚀 ~ file: encryptComponent.js ~ line 21 ~ startEncrypt", startEncrypt)
    useEffect(() => {
        // const publicKey = '0xfc2b69f826fbf5a60fb5356ee1c80187307e3d62';
        // const privateKey = '55bb4cb6407303de8e4c5a635021d3db12cb537305eeb6401612ce14b35d6690';
        const privateKey = '0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318'
        console.log('@@@@cMessage :>> ', cMessage);
        if (cMessage !== '') {
            (async () => {
             const decryptM = await decrypt(cMessage);
             console.log("🚀 ~ file: encryptComponent.js ~ line 30 ~ decryptM", decryptM);
             setDecMessage(decryptM)
            })()
            
        }
    }, [username, cMessage])
    useEffect(() => {
        //const privateKey = '8040901fe4d323714db16af7def77889a6b23c6fede0afc7302f66ac91463cfb';
        const privateKey = '0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318'
        console.log('startEncrypt :>> ', startEncrypt);
        console.log("🚀 ~ file: encryptComponent.js ~ line 35 ~ useEffect ~ cMessage", username)
        if (startEncrypt) {
            console.log('startEncrypt :>> ', startEncrypt);
            console.log("🚀 ~ file: encryptComponent.js ~ line 37 ~ useEffect ~ cMessage", username);

            (async () => {
                const encHash = await encrypt(privateKey, username);
                setCMessage(encHash)
                console.log('cMessage :>> ', cMessage);
            })()
        }

    }, [username, startEncrypt])

    return (
        <div className="App">
            <div>
                <img src={logo} alt="drizzle-logo" />
                <h1>Drizzle Examples2</h1>
                <p>
                    Examples of how to get started with Drizzle in various situations.
        </p>
            </div>
            <h2>Active Account</h2>
            <AccountData
                drizzle={drizzle}
                drizzleState={drizzleState}
                accountIndex={0}
                units="ether"
                precision={3}
            />

            <div className="section">
                <h2>Input secret</h2>
                {userInput}  {username} <br />

            </div>
            {username.length > 4 && (
                <button onClick={() => setStartEncrypt(true)}>Encrypt</button>)}
            <div>
                Cypher:
                {cMessage}
            </div>
            <div>
                Decrypt: {decMessage}
            </div>
        </div>

    );
};
