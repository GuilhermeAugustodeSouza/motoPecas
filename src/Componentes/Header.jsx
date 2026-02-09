import estilos from "./Header.module.css";
import Image from "next/image";
import logo from '../../public/logoMotoka.png';
import Link from "next/link";

export default function Header() {
  return (
    <div className={estilos.Header}>
       <Image src={logo} alt={'imagem logotipo'}></Image>
      <nav>
         <Link href="/">Home</Link>
        <Link href='#Servicos'>Servicos</Link>
        <Link href='#Produtos'>Produtos</Link>
      </nav>
    </div>
  );
}
