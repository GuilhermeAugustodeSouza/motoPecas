import BotaoWhatsapp from '../Componentes/BotaoWhatsapp';
import Image from "next/image";
import Header from '../Componentes/Header';
import Main from '../Componentes/Main.jsx';
import Section from '../Componentes/Section';
import estilos from './globals.css';

export default function Home() {
  return (
    <div>
     <Header/>
     <Main/>
     <Section/>
     <BotaoWhatsapp/>
    </div>
  );
}
