import React from "react";
import "../../common/colorPalette.css";
import "./settings.css";
import NFTCard from "../../components/settings/nftcard/nft.js";

function Settings() {
  return (
    <div id="Settings">
      <session className="user-bag">
        <NFTCard image="QmYm1FG7LxhF3mFUaVmVEVqRztEmByVbHwL6ZWXwVY2dvb" />
        <NFTCard image="QmYm1FG7LxhF3mFUaVmVEVqRztEmByVbHwL6ZWXwVY2dvb" />
        <NFTCard image="QmYm1FG7LxhF3mFUaVmVEVqRztEmByVbHwL6ZWXwVY2dvb" />
        <NFTCard image="QmYm1FG7LxhF3mFUaVmVEVqRztEmByVbHwL6ZWXwVY2dvb" />
        <NFTCard image="QmYm1FG7LxhF3mFUaVmVEVqRztEmByVbHwL6ZWXwVY2dvb" />
        <NFTCard image="QmYm1FG7LxhF3mFUaVmVEVqRztEmByVbHwL6ZWXwVY2dvb" />
        <NFTCard image="QmYm1FG7LxhF3mFUaVmVEVqRztEmByVbHwL6ZWXwVY2dvb" />
        <NFTCard image="QmYm1FG7LxhF3mFUaVmVEVqRztEmByVbHwL6ZWXwVY2dvb" />
        <NFTCard image="QmYm1FG7LxhF3mFUaVmVEVqRztEmByVbHwL6ZWXwVY2dvb" />
        <NFTCard image="QmYm1FG7LxhF3mFUaVmVEVqRztEmByVbHwL6ZWXwVY2dvb" />
        <NFTCard image="QmYm1FG7LxhF3mFUaVmVEVqRztEmByVbHwL6ZWXwVY2dvb" />
        <NFTCard image="QmYm1FG7LxhF3mFUaVmVEVqRztEmByVbHwL6ZWXwVY2dvb" />
        <NFTCard image="QmYm1FG7LxhF3mFUaVmVEVqRztEmByVbHwL6ZWXwVY2dvb" />
        <NFTCard image="QmYm1FG7LxhF3mFUaVmVEVqRztEmByVbHwL6ZWXwVY2dvb" />
      </session>
      <session className="bot-settings">
        <label>Set a CPU limit</label>
        <input
          className="form-input"
          id="cpu-limit"
          placeholder="Limit"
          type="number"
          max="100"
        />
        <label>Stake more WAX</label>
        <input
          className="form-input"
          id="stake-more"
          placeholder="Amount"
          type="number"
          max="100"
        />
        <label>Set your land to mine</label>
        <input
          className="form-input"
          id="stake-more"
          placeholder="ID"
          type="number"
        />
        <input className="form-submit" type="submit" value="set config" />
      </session>
    </div>
  );
}
export default Settings;
