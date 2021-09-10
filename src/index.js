const { google } = require("googleapis");
const {businesscommunications_v1: bc} = require("businesscommunications");

const email = "";
const key = "";
const name = "";
const scopes = ["https://www.googleapis.com/auth/businesscommunications"];

async function run(){
  const auth = new google.auth.JWT({
    email,
    key,
    scopes,
  });

  await auth.authorize();

  const api = new bc.Businesscommunications({auth}, google).brands.locations;
  const launchResult = (await api.getLaunch({name})).data;
  const verificationResult = (await api.getVerification({name})).data;

  console.log(launchResult);
  console.log(verificationResult);
}

run()
