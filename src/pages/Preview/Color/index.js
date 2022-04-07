import './styles.css'

export default ({active, url, cor, colorStyle}) => {

    return (
        <>
            <div
                className={`containerColor  ${((active) ? 'active coloractive' : '')} ${((!colorStyle) ? 'color' : '')}`}
                style={(colorStyle) ? {backgroundImage: `url('${url}')`} : {borderColor : cor, backgroundColor : cor}}
            >
                {!colorStyle && <div className='innerContainer' /> }
            </div>
        </>
    )
}