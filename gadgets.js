/* For storing the gadget and import map */
window.gadgetMap = [];
window.basicImportMap = [];

/* All function stubs / imports from other modules */
var generateBasicImportMap = function()
{
  window.basicImportMap =
  {
    '3.50':
    {
      'setjmp':            getGadget('libSceWebKit2', 0x2B8),     // setjmp imported from libkernel
      '__stack_chk_fail':  getGadget('libSceWebKit2', 0x276D150), // __stack_chk_fail imported from libkernel
    },

    '3.55':
    {
      'setjmp':            getGadget('libSceWebKit2', 0x2B8),     // setjmp imported from libkernel
      '__stack_chk_fail':  getGadget('libSceWebKit2', 0x276D150), // __stack_chk_fail imported from libkernel
    },

    '3.70':
    {
      'setjmp':            getGadget('libSceWebKit2', 0x2B8),     // setjmp imported from libkernel
      '__stack_chk_fail':  getGadget('libSceWebKit2', 0x276D150), // __stack_chk_fail imported from libkernel
    },

    '4.00':
    {
      'setjmp':            getGadget('libSceWebKit2', 0x270),     // setjmp imported from libkernel
      '__stack_chk_fail':  getGadget('libSceWebKit2', 0x2729260), // __stack_chk_fail imported from libkernel
    },

    '4.06':
    {
      'setjmp':            getGadget('libSceWebKit2', 0x270),     // setjmp imported from libkernel
      '__stack_chk_fail':  getGadget('libSceWebKit2', 0x273D260), // __stack_chk_fail imported from libkernel
    },

    '4.07':
    {
      'setjmp':            getGadget('libSceWebKit2', 0x270),     // setjmp imported from libkernel
      '__stack_chk_fail':  getGadget('libSceWebKit2', 0x273D260), // __stack_chk_fail imported from libkernel
    }
  };
}

/* All gadgets from the binary of available modules */
var generateGadgetMap = function()
{
  window.gadgetMap =
  {
    '3.50':
    {
      'pop rsi':  getGadget('libSceWebKit2', 0xB9EBB),
      'pop rdi':  getGadget('libSceWebKit2', 0x113991),
      'pop rax':  getGadget('libSceWebKit2', 0x1C6AB),
      'pop rcx':  getGadget('libSceWebKit2', 0x3CA9FD),
      'pop rdx':  getGadget('libSceWebKit2', 0x1AFA),
      'pop r8':   getGadget('libSceWebKit2', 0x4C13BD),
      'pop r9':   getGadget('libSceWebKit2', 0xEE0A8F),
      'pop rsp':  getGadget('libSceWebKit2', 0x376850),

      'mov rax, rdi':             getGadget('libSceWebKit2', 0x57C3),
      'mov qword ptr [rdi], rax': getGadget('libSceWebKit2', 0x11FC37),
      'mov qword ptr [rdi], rsi': getGadget('libSceWebKit2', 0x4584D0),

      'jmp addr': getGadget('libSceWebKit2', 0x86D4F4),
    },

    '3.55':
    {
      'pop rsp':  getGadget('libSceWebKit2', 0x376850),
      'pop rcx; pop rcx': getGadget('libSceWebKit2', 0x2017674),
      'pop rcx': getGadget('libSceWebKit2', 0x1B49034),
      'pop rdi': getGadget('libSceWebKit2', 0x142f00a),
      'pop rsi': getGadget('libSceWebKit2', 0x1d7342c),
      'pop rdx': getGadget('libSceWebKit2', 0x1b3ddf2),
      'pop rax': getGadget('libSceWebKit2', 0x2017183),
      'pop r8': getGadget('libSceWebKit2', 0x1036d79),
      'pop r9': getGadget('libSceWebKit2', 0xee0a8f),

      'syscall':  getGadget('libSceWebKit2', 0x2224BDA),
      'mov rax, rdi':             getGadget('libSceWebKit2', 0x57C3),
      'mov qword ptr [rdi], rax': getGadget('libSceWebKit2', 0x11FC37),
      'mov qword ptr [rdi], rsi': getGadget('libSceWebKit2', 0x4584D0),
      'jmp addr': getGadget('libSceWebKit2', 0x86D4F4),
      'xchg rax, rsp; dec dword ptr [rax - 0x77]': getGadget('libSceWebKit2', 0xd5d841),
      'add dword ptr [rax - 0x77], ecx': getGadget('libSceWebKit2', 0xd3d040),
      'mov qword ptr [rdi], rax': getGadget('libSceWebKit2', 0x28e0e7),
      'mov rax, qword ptr [rax]': getGadget('libSceWebKit2', 0x2723f3)
    },

    '3.70':
    {
      'pop rsi':  getGadget('libSceWebKit2', 0xB9EBB),
      'pop rdi':  getGadget('libSceWebKit2', 0x113991),
      'pop rax':  getGadget('libSceWebKit2', 0x1C6AB),
      'pop rcx':  getGadget('libSceWebKit2', 0x3CA71B),
      'pop rdx':  getGadget('libSceWebKit2', 0x1AFA),
      'pop r8':   getGadget('libSceWebKit2', 0x1C6AA),
      'pop r9':   getGadget('libSceWebKit2', 0xEE0A8F),
      'pop rsp':  getGadget('libSceWebKit2', 0x376850),

      'mov rax, rdi':             getGadget('libSceWebKit2', 0x57C3),
      'mov qword ptr [rdi], rax': getGadget('libSceWebKit2', 0x11FC37),
      'mov qword ptr [rdi], rsi': getGadget('libSceWebKit2', 0x4584D0),

      'jmp addr': getGadget('libSceWebKit2', 0x86D4F4),
    },

    '4.00':
    {
      'pop rsi':  getGadget('libSceWebKit2', 0xA459E),
      'pop rdi':  getGadget('libSceWebKit2', 0x10F1C1),
      'pop rax':  getGadget('libSceWebKit2', 0x1D70B),
      'pop rcx':  getGadget('libSceWebKit2', 0x1FCA9B),
      'pop rdx':  getGadget('libSceWebKit2', 0xD6660),
      'pop r8':   getGadget('libSceWebKit2', 0x4A3B0D),
      'pop r9':   getGadget('libSceWebKit2', 0xEB5F8F),
      'pop rsp':  getGadget('libSceWebKit2', 0x20AEB0),

      'mov rax, rdi':             getGadget('libSceWebKit2', 0x5863),
      'mov qword ptr [rdi], rax': getGadget('libSceWebKit2', 0x11ADD7),
      'mov qword ptr [rdi], rsi': getGadget('libSceWebKit2', 0x43CF70),

      'jmp addr': getGadget('libSceWebKit2', 0x852624),
    },

    '4.06':
    {
      'pop rsi':  getGadget('libSceWebKit2', 0xA459E),
      'pop rdi':  getGadget('libSceWebKit2', 0x10F1C1),
      'pop rax':  getGadget('libSceWebKit2', 0x1D70B),
      'pop rcx':  getGadget('libSceWebKit2', 0x25EF03),
      'pop rdx':  getGadget('libSceWebKit2', 0x1D12),
      'pop r8':   getGadget('libSceWebKit2', 0x1D70A),
      'pop r9':   getGadget('libSceWebKit2', 0xEB5F8F),
      'pop rsp':  getGadget('libSceWebKit2', 0x20AEB0),

      'mov rax, rdi':             getGadget('libSceWebKit2', 0x5863),
      'mov qword ptr [rdi], rax': getGadget('libSceWebKit2', 0x11ADD7),
      'mov qword ptr [rdi], rsi': getGadget('libSceWebKit2', 0x43CF70),

      'jmp addr': getGadget('libSceWebKit2', 0x852624),
    },

    '4.07':
    {
      'pop rsi':  getGadget('libSceWebKit2', 0xA459E),
      'pop rdi':  getGadget('libSceWebKit2', 0x10F1C1),
      'pop rax':  getGadget('libSceWebKit2', 0x1D70B),
      'pop rcx':  getGadget('libSceWebKit2', 0x25EF03),
      'pop rdx':  getGadget('libSceWebKit2', 0x1D12),
      'pop r8':   getGadget('libSceWebKit2', 0x1D70A),
      'pop r9':   getGadget('libSceWebKit2', 0xEB5F8F),
      'pop rsp':  getGadget('libSceWebKit2', 0x20AEB0),

      'mov rax, rdi':             getGadget('libSceWebKit2', 0x5863),
      'mov qword ptr [rdi], rax': getGadget('libSceWebKit2', 0x11ADD7),
      'mov qword ptr [rdi], rsi': getGadget('libSceWebKit2', 0x43CF70),

      'jmp addr': getGadget('libSceWebKit2', 0x852624),
    }
  };
}
