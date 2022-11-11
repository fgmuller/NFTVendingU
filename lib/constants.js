export const STATES = {
  POLL_FOR_SIGNATURE: "Analisis de Firma de Transaccion...",
  AWAIT_FOR_VALIDATION: "Validando Firma de Transaccion...",
  POLL_FOR_FINAL_TRANSACTION: "Obteniendo los detalles finales de la transacción...",
  AWAIT_FOR_NFT_MINT: "Tu NFT estan siendo acuñados!",
  AWAIT_FOR_NFT_TRANSFER: "Tu NFT esta siendo transferido!",
  NFT_MINT_SUCCESS: "Tu NFT ahora ha sido acuñado en tu billetera!",
  NFT_TRANSFER_SUCCESS: "Tu NFT esta siendo transferido a tu billetera!",
  NFT_MINT_ERROR: "Un error ha ocurrido mientras acuñabamos tu NFT.",
  NFT_TRANSFER_ERROR: "Un error ha ocurrido mientras tranferiamos tu NFT.",
  ERROR: "Un error desconocido ha ocurrido.",
  IDLE: "Idle",
};

export const FONDO_IMAGE = "/images/fondo1.png";
export const HEADER_IMAGE = "/images/header.png";
export const ANIMATE_BACKGROUND = false;

export const HOME_HEADLINE = "";
export const HOME_SUBHEAD = "";
export const HOME_BODY = "";
export const HOME_CREDIT_LINE = "";

export const INSTRUCTION_STEPS = [
  "Escanea el código QR desde tu billetera de Phantom en tu Celular",
  "Confirma la transacción en tu Celular",
  "Recibe un NFT en tu billetera",
];

export const SUPPORTED_WALLETS = [
  {
    name: "Phantom",
    logo: "/images/phantom-logo.svg",
    width: 130,
    height: 30,
  },
  //{
   // name: "Glow",
   // logo: "/images/glow-logo.svg",
   // width: 65,
    //height: 30,
  //},
];
