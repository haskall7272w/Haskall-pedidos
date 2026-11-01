// CONFIGURAÇÃO DO RESTAURANTE
// Para vender para outro restaurante, troque só este arquivo.
window.APP_CONFIG = {
  nome: "Haskall Restaurante e Pizzaria",
  // WhatsApp que recebe os pedidos: 55 + DDD + número, só números
  whatsapp: "5519997706586",
  logo: "logo.jpg",
  capa: "banner.jpg",
  tempo: "40 a 60 min", // deixe "" para esconder
  taxaEntrega: 3,
  pagamentos: ["Pix na entrega", "Cartão de débito", "Cartão de crédito", "Dinheiro"],
  firebase: {
    apiKey: "AIzaSyDE6EJUR6HdHocdvIyO5YP9tgm6-SzJ_28",
    authDomain: "haskall.firebaseapp.com",
    projectId: "haskall",
    storageBucket: "haskall.firebasestorage.app",
    messagingSenderId: "189730460796",
    appId: "1:189730460796:web:3c98726b30d718ca1d65f9"
  }
};
