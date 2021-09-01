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
          <div className="flex-center-items">
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
            <Proposals address={address}></Proposals>
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
