import { Button, ToastHub } from '@aragon/ui';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import { Fragment, View, useEffect, useState } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { get } from './adapters/xhr';
import Address from "./components/address";
import Proposals from "./components/proposals";
import Logo from "./components/logo";

const { api } = require("./constants");

// TODO: To support other wallets https://github.com/web3modal/web3modal
const providerOptions = {};

const web3Modal = new Web3Modal({
  network: 43114,
  cacheProvider: true,
  providerOptions,
});

function App() {
  const [address, setAddress] = useState(null);

  const login = async (address) => {
    if (address == null) {
      api.token = null;
    }
    else {
      const t = await get(`${api.login}?address=${address}`);
      api.token = t.data.token;
    }
  }

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      web3Modal.connect().then((provider) => {
        getAccount(provider);
      });
    }
  }, []);
  const getAccount = (provider) => {
    const web3 = new Web3(provider);
    if (web3.eth.net.isListening()) {
      web3.eth.getAccounts().then((accounts) => {
        login(accounts[0]).then(() => {
          setAddress(accounts[0]);
        });
      });
    }
    provider.on("accountsChanged", (accounts) => {
      if (accounts[0]) {
        login(accounts[0]).then(() => {
          setAddress(accounts[0]);
        });
      } else {
        login(null);
        setAddress(null);
      }
    });
  };
  return (
    <div className="App">
      <ToastHub>
        <Container>
          <div className="flex-center-items flex-column-reverse">
            <h1 className="header"><Logo height="50" />APE-X <span className="outlined">DAO</span></h1>

            <div>
              {address == null ? (<Button
                // variant="outlined"
                // color="primary"
                onClick={async () => {
                  getAccount(await web3Modal.connect());
                }}
              >
                Connect wallet
              </Button>
              ) : (
                <h6 >
                  Voting as <span className="primary"><Address address={address}></Address></span>
                </h6>
              )}
            </div>
          </div>
          {address != null ? (
            <Fragment>
              <div style={{ color: "var(--light)", marginBottom: "1em" }}>
                <Typography variant="caption">
                  <div style={{ marginBottom: "1em" }}>
                    Welcome to the jungle! The minimum required APE-X to create a proposal is 10B. Anyone can vote on a created proposal 1 APE-X=1 VOTE. Proposals last for 7 days and will only be passed if 75% of Apes vote for. Please when creating proposals be as thorough as possible in the description, as well as including any budget requirements, resources needed to execute.
                  </div>

                  <div className="light">
                    AVAX/APE-X DAO TREASURY:&nbsp;
                    <a className="primary" href="https://cchain.explorer.avax.network/address/0xDEEdd1646984F9372Cc9D3d7E13AC1606cC2B548" rel="noreferrer" target="_blank">
                      0xDEEdd1646984F9372Cc9D3d7E13AC1606cC2B548
                    </a>
                  </div>
                  <div className="light">
                    ETH/APE-X DAO TREASURY:&nbsp;
                    <a className="primary" href="https://etherscan.io/address/0x69565fC78E3c684C31Db0B734aBFFeC4cd13C642" rel="noreferrer" target="_blank">
                      0x69565fC78E3c684C31Db0B734aBFFeC4cd13C642
                    </a>
                  </div>
                </Typography>
              </div>

              <Proposals address={address}></Proposals>
            </Fragment>
          ) : (
            <Fragment>
              <Typography style={{ fontSize: "2em", textAlign: "center" }}>
                <Logo height="250" />
                <br /><br />
                Welcome to the Jungle! Please connect your wallet to join the APE-X DAO.
              </Typography>
            </Fragment>
          )}
        </Container>
      </ToastHub>
    </div >
  );
}

export default App;
