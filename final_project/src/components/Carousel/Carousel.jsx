// import React from "react";
// import {NavLink} from "react-router-dom";

function Carousel() {
    return(
        <>

            <div className="row m-lg-5">
                <div className="col-sm-8 ">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                                    aria-label="Slide 4" ></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                                    aria-label="Slide 5"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://books.am/media/mageplaza/bannerslider/banner/image/b/a/banner.jpg"  className="d-block w-100" alt="" height="330px"/>
                                <div className="carousel-caption d-none d-md-block text-md-start align-text-bottom">
                                    <div className="category_info">Անհավատալի է</div>
                                    <a href="https://books.am/am/catalog/product/view/id/53743/" className="slide_title fa-2x">Մարդու
                                        մարմինը</a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://books.am/media/mageplaza/bannerslider/banner/image/v/a/vanakan_banner_1.jpg" className="d-block w-100" alt="" height="330px"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <div className="category_info">Ռոբին Շարմա</div>
                                    <a href="https://books.am/am/catalog/product/view/id/10844/category/2/"
                                       className="slide_title fa-2x">Վանականը, որը վաճառեց իր Ֆերարին</a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://books.am/media/mageplaza/bannerslider/banner/image/s/l/slide_image5.png" className="d-block w-100" alt="" height="330px"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <div className="category_info">Ընդհանուր Գիտելիքներ</div>
                                    <a href="https://books.am/am/catalog/product/view/id/29920/category/2/"
                                       className="slide_title fa-2x">Հանճար</a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://books.am/media/mageplaza/bannerslider/banner/image/t/e/terzipashyan_banner_1.jpg"  className="d-block w-100" alt="" height="330px"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <div className="category_info">Ավետիս Թէրզիպաշեան</div>
                                    <a href="https://books.am/am/catalog/product/view/id/45686/category/2/"
                                       className="slide_title fa-2x">Անդրանիկ</a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://books.am/media/mageplaza/bannerslider/banner/image/8/_/8_.jpg"  className="d-block w-100" alt="" height="330px"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <div className="category_info">Առաջնորդության ութ խորհուրդ</div>
                                    <a href="https://books.am/am/catalog/product/view/id/48784/category/2/"
                                       className="slide_title fa-2x">վանականից, որը վաճառեց իր "Ֆերարին"</a>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>

                    </div>

                </div>

                <div className="col-sm-4">
                    <div className="row">
                        <img src="https://books.am/media/mageplaza/bannerslider/banner/image/f/i/file_4.jpg" alt="" title="" height="160px"/>

                    </div>
                    <div className="row py-2">
                        <img src="https://books.am/media/mageplaza/bannerslider/banner/image/a/r/aravotyan_5_akumb_1.jpg" height="160px" />

                    </div>

                </div>

            </div>


        </>

    )
}
export default Carousel;