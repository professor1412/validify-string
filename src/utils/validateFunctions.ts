// Check isBase32 validation.

export const isBase32 = (str: string): boolean => {
    const b32_regex = /^[A-Z2-7]+=*$/;
    return b32_regex.test(str);
}



// Check isBase64 validation.

export const isBase64 = (str: string): boolean => {
    const regex = /^[A-Za-z0-9+/]+={0,2}$/;
    return regex.test(str);
}


// check isEthereumAddress validation


export const isEthereumAddress = (address: string): boolean => {
    const ethereumAddressRegex = /^(0x)?[0-9a-fA-F]{40}$/;  // Ethereum address regex pattern
    return ethereumAddressRegex.test(address);
}
