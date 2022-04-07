import { useEffect } from 'react';
import './styles.css'

export default ({active, tamanho}) => {

    return (
        <div className={`containerSize ` + ((active) ? 'active' : '')}>
            {tamanho}
        </div>
    )
}