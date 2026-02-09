import estilos from './Main.module.css';

export default function Main(){
    return(
<div className={estilos.containerMain}>
    <div>
        <h1>Revisão</h1>
        <p>Checagem de todas as peças de sua motocicleta, revisão completa com garantia da qualidade do serviço!</p>
    </div>
    <div>
        <h1>Boutique de Peças</h1>
        <p>Peças originais e paralelas, com troca gratuita para melhor atender nossos clientes!</p>
    </div>
    <div>
        <h1>Lava-Jato</h1>
        <p>Higienização e limpeza completa das peças do seu veiculo, sua moto sai revisada e com brilho de novo!</p>
    </div>

     <div>
        <h1>Retífica</h1>
        <p>Realizamos a retífica do seu motor com peças genuínas, faca seu orçamento conosco!</p>
    </div>
</div>
    )
};