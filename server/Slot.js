
class Slot {

  constructor() {
    this.portrait   = 'empty';
    this.available  = true;
    this.role       = null;
    this.socket     = null;
    this.socketId   = null;
    this.voteFor    = null;
    this.isConnected  = true;
    this.enterMessage = 'Default Message';
  }

}

module.exports = Slot;