import React from 'react'
import Projects from '../../api/Projects'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Link from 'next/link'
import Image from 'next/image'


const ProjectSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    
    return (
        <section className="Arkitek-project-section-s3 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="project-text">
                            <span>Galeri</span>
                            <h2>Estetik ve Dayanıklılığın İzinde!</h2>
                            <p>Galeri alanımızda, Erden Alüminyum’un estetik ve dayanıklılığı bir araya getiren projelerini keşfedin! Her bir fotoğraf, kaliteli işçiliğimizin ve yenilikçi çözümlerimizin bir yansımasıdır.</p>
                            <Link href="/project-single" className="theme-btn">Daha Fazla</Link>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="sortable-gallery">
                            <div className="gallery-filters"></div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="portfolio-grids gallery-container clearfix">
                                        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
                                            <Masonry columnsCount={4} gutter="30px">
                                                {Projects.slice(0, 4).map((project, i) => (
                                                    <div className="grid" key={i}>
                                                        <div className="img-holder">
                                                            <Image src={project.pImg} alt="" />
                                                        
                                                        </div>
                                                    </div>
                                                ))}
                                            </Masonry>
                                        </ResponsiveMasonry>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection;