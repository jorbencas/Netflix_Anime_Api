import { Router, Response, Request } from 'express';
import { API_TELEGRAM } from "../../config";
import { responseCustome } from '../../utils';
import fetch from "node-fetch";
import TelegramBot from "node-telegram-bot-api";
const telegramToken = API_TELEGRAM; // Reemplaza con tu token de Telegram
const bot = new TelegramBot(telegramToken, { polling: true });

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const mensaje = msg.text;

  // Aquí puedes agregar lógica para responder a los mensajes
  if (mensaje === '/saludo') {
    //const canales = await bot.getUpdates();
    //const canales = await bot.getChat("333372642")
    const canales = await bot.getMe()
    // const listaCanales = canales.map((channel: any) => ({
    //   id: channel.peer.channel_id,
    //   title: channel.chat.title,
    //   username: channel.chat.username,
    // }));
    bot.sendAudio(chatId,"/home/jorge/dev/Netflix_Anime_Api/src/static/notifications/error.mp3")
    bot.sendMessage(chatId, 'Hola, soy tu bot de saludo');
    bot.sendMessage(chatId,JSON.stringify(canales))
  }
});

var router = Router();
router.get("/", async (_req: Request, res: Response) => {
  try {
    // const response = await fetch(`https://api.telegram.org/bot${telegramToken}/getChatHistory?chat_id=${chatId}&limit=10`);
    // const response = await axios.post(
    //   `https://api.telegram.org/bot${telegramToken}/getDialogs`,
    //   { limit: 100 } // Puedes ajustar el límite según tus necesidades
    // );

     const response = await fetch(`https://api.telegram.org/bot${telegramToken}/getDialogs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ limit: 100 }), // Puedes ajustar el límite según tus necesidades
    });

    const data:any = await response.json();
    // Obtener los mensajes del canal
    const mensajes = data;

    res.json(responseCustome("ok",200,{ mensajes, telegramToken:telegramToken }));
  } catch (error) {
    let msg = 'Error al obtener la lista de canales:'+ error;
    res.status(500).json(responseCustome(msg, 500));
  }
});

// Endpoint para obtener los mensajes de un canal por su ID
router.get('/mensajes/:chatId', async (_req: Request, _res: Response) => {
  // try {
  //   const chatId = req.params.chatId;

  //   // Utiliza la API de Telegram para obtener los mensajes del canal por su chatId
  //   const messages = await telegramHandler.getChats(chatId);

  //   res.json({ mensajes: messages });
  // } catch (error) {
  //   console.error('Error al obtener los mensajes del canal:', error);
  //   res.status(500).json({ error: 'Error al obtener los mensajes del canal' });
  // }
});

export default router;