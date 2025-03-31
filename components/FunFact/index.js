import React from 'react'
import CountUp from 'react-countup';
import shape from '/public/images/fun-fact.png'
import Image from 'next/image';

const FunFact = (props) => {

    const funFact = [
        {
            title: '215',
            subTitle: 'MUTLU MÜŞTERİ',
            Symbol: '+',
        },
        {
            title: '5000',
            subTitle: 'BAŞARILI PROJE',
            Symbol: '+',
        },
        {
            title: '15',
            subTitle: 'YILLIK DENEYİM',
            Symbol: '+',
        },
        {
            title: '100',
            subTitle: 'MÜŞTERİ MEMNUNİYETİ',
            Symbol: '%',
        },


    ]

    return (

        <section className={`wpo-fun-fact-section ${props.fClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-fun-fact-grids clearfix">
                            {funFact.map((funfact, fitem) => (
                                <div className="grid" key={fitem}>
                                    <div className="info">
                                        <h3><span><CountUp end={funfact.title} enableScrollSpy /></span>{funfact.Symbol}</h3>
                                        <p>{funfact.subTitle}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="bg-shape">
                                <Image src={shape} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span id="counter" className='d-none' />
        </section>
    )
}

export default FunFact;