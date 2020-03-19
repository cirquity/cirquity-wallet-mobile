# CirqWallet - A mobile, native Cirquity wallet

![Screenshot](https://user-images.githubusercontent.com/44407420/77001404-2eb7ec00-695a-11ea-8cf4-c125269336b1.png)

### Initial Setup

* `cd cirquity-wallet-mobile`
* `yarn install`

### Running

* `node --max-old-space-size=8192 node_modules/react-native/local-cli/cli.js start` (Just need to run this once to start the server, leave it running)
* `react-native run-android`

### Logging

`react-native log-android`

### Creating a release

You need to bump the version number in:

* `src/Config.js` - `appVersion`
* `android/app/build.gradle` - `versionCode` and `versionName`
* `package.json` - `version` - Not strictly required
* Update user agent in `android/app/src/main/java/com/cirqwallet/MainApplication.java` and `android/app/src/main/java/com/cirqwallet/TurtleCoinModule.java`

Then
`cd android`
`./gradlew bundleRelease`
Optionally
`./gradlew installRelease`

or `yarn deploy-android`

### Integrating QR Codes or URIs

CirqWallet supports two kinds of QR codes.

* Standard addresses / integrated addresses - This is simply the address encoded as a QR code.

* cirquity:// URI encoded as a QR code.

Your uri must begin with `cirquity://` followed by the address to send to, for example, `cirquity://cirqgBLnnswQsHXGnkGF76AXup98o34eUMa3UtzBXRrcEVghRQRnih5MVYEmpaz5EvCY2j4DzwQZEKo5qaJa7c69Tgb2LWWyKNN`

There are a few optional parameters.

* `name` - This is used to add you to the users address book, and identify you on the 'Confirm' screen. A name can contain spaces, and should be URI encoded.
* `amount` - This is the amount to send you. This should be specified in atomic units.
* `paymentid` - If not using integrated address, you can specify a payment ID. Specifying an integrated address and a payment ID is illegal.
