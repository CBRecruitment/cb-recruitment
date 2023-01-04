import { ConnectKitButton } from "connectkit"

const ConnectButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, hide, truncatedAddress, ensName }) => {
        return (
          <button
            onClick={show}
            className="ml-2 px-5 py-1 m-auto bg-gradient-to-b from-[#382AC3] to to-[#02AFE5] rounded-full text-white font-semibold  hover:text-black ease-in duration-100"
          >
            {isConnected ? ensName ?? truncatedAddress : "Connect"}
          </button>
        )
      }}
    </ConnectKitButton.Custom>
  )
}

export default ConnectButton
