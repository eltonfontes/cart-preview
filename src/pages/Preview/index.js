import { useState, useEffect } from 'react';
import './styles.css';
import {FaStar, FaStarHalfAlt, FaPlus} from 'react-icons/fa'
import Size from './Size';
import Color from './Color';

const initialColors = [
    {
        url: 'https://modamix.vteximg.com.br/arquivos/ids/174340-0-0/modamix_feminino_16_agosto__128.png?v=637649114153230000',
        active : false,
        cor : '#BABFA4'
    },
    {
        url : 'https://1259028l.ha.azioncdn.net/img/2022/02/produto/47679/blusa-feminina-aqua-manga-bufante-plus-size-godofreda-png-vitrine.jpg?ims=461x615',
        active : false,
        cor : '#B5DBEE'
    },
    {
        url : 'https://guararapesonline.com.br/shoppingguararapes/2021/07/Blusa-Feminina-Estampada-Em-Tecido-Texturizado-Mini-Me-Rosa.png',
        active: true,
        cor : '#9E493D'
    },
    {
        url : 'https://images2.marisa.com.br/medias/sys_master/images/images/had/h35/11306496720926/BLUSA-SM-RIBANA-GOLA-BRANCO-Bco-P-10039884480-C1.jpg',
        active : false,
        cor : '#ebebeb'
    }
]

const initialSize = [
    {
        tamanho: 36,
        active : true
    },
    {
        tamanho : 38,
        active : false
    },
    {
        tamanho : 40,
        active: false
    },
    {
        tamanho : 42,
        active: false
    }
]

const InitialImgLoading = 'https://smashinghub.com/wp-content/uploads/2014/08/cool-loading-animated-gif-1.gif';

export default ({colorStyle}) => {
    const [valor, setValor] = useState(1);
    const [sizes, setSizes] = useState(initialSize)
    const [colors, setColors] = useState(initialColors)
    const [imgPreview, setImgPreview] = useState(InitialImgLoading);

    
    function handleChangeValor(acao){
        let valor1 = valor;
        if(valor1 <= 1 && acao === '-') return;
        let soma = 1;
        if(acao === '-'){
            soma = valor1 - 1;            
        } else if(acao === '+'){
            soma = valor1 + 1;
        }
        setValor(soma);
    }

    function handleSetSize(size){
        let newSizes = sizes;      
        newSizes.map(s => {
            if(size.tamanho === s.tamanho){
                s.active = true;
            } else {
                s.active = false;
            }
        })
        setSizes([...newSizes]);

    }

    function handleSetImgPreview(cor){ 
        
        let newColors = colors
        
        newColors.map(color => {
            if(cor.url === color.url){
                color.active = true;
                setImgPreview(color.url)
            } else {
                color.active = false;
            }
        })

        setColors(newColors);
    }

    useEffect(() => {        
        colors.map(({active, url}) => {
            if(active){
                setImgPreview(url)
            }
        })

    }, [])    

    return (
        <div className="containerPreview">
            <div className="imagemPreview" style={{backgroundImage: `url(${imgPreview})`}} />
            <h1 className="tituloPreview">Blusa Feminina Manga Godê marinho</h1>
            <div className="containerStarPreview">
                <FaStar size={12} color="#C6B317" />
                <FaStar size={12} color="#C6B317" />
                <FaStar size={12} color="#C6B317" />
                <FaStarHalfAlt size={12} color="#C6B317" />
            </div>
            <h2 className='subtituloPreview'>
                TAMANHO:
            </h2>
            <div className='containerSizePreview'>
                {sizes.map((size, index) => {
                     return (
                        <a onClick={e => handleSetSize(size)} key={index}>
                            <Size {...size} />
                        </a>
                    )
                })}                   
            </div>

            <h2 className='subtituloPreview'>
                CORES:
            </h2>

            <div className='containerSizePreview'>
                {colors.map((color, index) => {
                     return (
                         <a onClick={e => handleSetImgPreview(color)} key={index}>
                            <Color colorStyle={colorStyle} {...color} />
                         </a>
                    )
                })}                   
            </div>

            <h1 className='valorPreview'>
                R$ 169,90
            </h1>

            <h2 className='subValorPreview'>
                ou 5x de R$ 33,98 no cartão
            </h2>

            <div className='containerFooterPreview'>
                <div className='containerInput'>
                    <button disabled={valor <= 1} onClick={e => handleChangeValor('-')} className='iconLeftPreview'>-</button>
                    <input className='inputPreview' readOnly={true} value={valor} onChange={e => setValor(e.target.value)} />
                    <button onClick={e => handleChangeValor('+')} className='iconLeftRight'>+</button>
                </div>
                <button className='buttonPreview'>COMPRAR</button>
            </div>


        </div>
    )
}