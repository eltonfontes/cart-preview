import {FiLinkedin} from 'react-icons/fi'

import './styles.css';

import Preview from '../Preview'

export default () => {
    return (
        <>            
            <div className='container'>      
                <div className='containerLinkedin'>
                    <h1>Elton Fontes</h1>
                    <p><FiLinkedin color="#0a66c2" /> linkedin.com/in/eltonfontes</p>
                    <span>React JS</span>
                </div>      
                <div className='containerPrev'>
                    <Preview />
                    <Preview colorStyle />
                </div>
            </div>
        </>
    )
}