import Link from "next/link";
import { useRouter } from "next/router";
import React, {useState, useEffect} from "react";
import classNames from "classnames";
import Slider from "react-slick";
import useTranslation from "next-translate/useTranslation";
import "@fontsource/inter";
import 'flag-icon-css/css/flag-icon.min.css';
import '../styles/layout.module.css';
import cookie from 'react-cookies'

const languages = [
    {
        code: 'fr',
        name: ' Français',
        country_code: 'fr',
    },
    {
        code: 'en',
        name: ' English',
        country_code: 'gb',
    },
    {
        code: 'ar',
        name: '    العربية ',
        // dir: 'rtl',
        country_code: 'sa',
    },
    {
        code: 'vi',
        name: ' Việt Nam',
        country_code: 'vn',
    },
    {
        code: 'es',
        name: ' España',
        country_code: 'es',
    },
    {
        code: 'de',
        name: ' Germany',
        country_code: 'de',
    },
    {
        code: 'it',
        name: ' Italy',
        country_code: 'it',
    },
    {
        code: 'pt',
        name: ' Portugal',
        country_code: 'pt',
    }
];
export default function Layout({ children }) {
  let router = useRouter();
    let { t } = useTranslation();
    const currentLanguageCode = router.locale;
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

    const [fixed, setFixed] = useState(false);
    const [open, setOpen] = useState(false);
    const [drop, setDrop] = useState(false);
    function myFunction() {
        setOpen(!open);
        setDrop(false);
    }

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "none",right:"25px", "marginTop":"-20px" ,"zIndex": "20"}}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "none",
                    left: "25px",  "marginTop":"-20px", "zIndex": "20"}}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    useEffect(() => {
        const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
        // console.log(currentLanguage);
        cookie.save('NEXT_LOCALE', currentLanguageCode);

    }, [currentLanguageCode, t, currentLanguage]);



    const changeButton =()=>{
        setDrop(false);
        setOpen(false);
    };
    if (typeof window !== 'undefined') {
        window.addEventListener('resize', changeButton);
    }


    const changeBackground =()=>{
        if((window.scrollY >= 70)){
            setFixed(true);
        }
        else {
            setFixed(false);
        }
    };
    if (typeof window !== 'undefined') {
        window.addEventListener('scroll',changeBackground);
    }


  return (
    <div>
        <div className="App">
            <header id="home">
                <div className="bg-img" style={{backgroundImage: "url('./img/1anhheader.png')"}}></div>
                <nav id="nav" className={classNames('navbar nav-transparent', {'open fixed-nav ': open}, {'fixed-nav': fixed})}>
                    <div className="container" style={{"paddingTop": "15px"}}>
                        {/*navbar-header*/}
                        <div className="navbar-header">
                            <div className="navbar-brand">
                                <Link href={router.asPath} locale={router.locale}>
                                <a >
                                    <img className="logo" src="img/Logo_mobile.png" alt="logo" />
                                    <div className="image-parent">
                                        <img className={classNames('logo-alt')} src="img/1icontraitim.png" alt="logo" />
                                        <img className={classNames('logo-alt')} style={{"marginLeft":"50px","marginTop":"10px"}} src="img/1iMATCH.png" alt="logo" />
                                    </div>
                                </a>
                                </Link>
                            </div>

                            <div  className={classNames("nav-collapse")}  onClick={myFunction}>
                                <span></span>
                            </div>
                        </div>
                        <ul className={classNames('main-nav nav navbar-nav navbar-right ',{responsive: open})} id="myTopnav">
                            <li><a href="#home" style={{ textAlign: "center"}}>{t('common:home')}</a></li>
                            <li><a href="#about" style={{ textAlign: "center"}}>{t('common:about_us')}</a></li>
                            <li><a href="#features" style={{ textAlign: "center"}}>{t('common:features')}</a></li>
                            <li><a href="#download" style={{ textAlign: "center"}}>{t('common:download')}</a></li>
                            <li>
                                <div className="dropdown">
                                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button"
                                       id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" >
                                        <span
                                            className={`flag-icon flag-icon-${currentLanguage.country_code} mx-2`}
                                            style={{marginRight: '7px'}}
                                        ></span>
                                        {currentLanguage.name}
                                    </a>
                                    <ul className= "dropdown-menu dropdown-menu-lg-end drop-language" aria-labelledby="dropdownMenuButton2">
                                                    {languages.map(({ code, name, country_code }) => (
                                                        <li key={country_code}>
                                                            <Link href={router.asPath} locale={code}>
                                                            <a
                                                                tabIndex="-1"
                                                                aria-disabled="true"

                                                            >
                                        <span
                                            className={`flag-icon flag-icon-${country_code} mx-2`}
                                            style={{'marginRight': '7px'}}
                                        ></span>
                                                                {name}
                                                            </a>
                                                            </Link>
                                                        </li>
                                                    ))}
                                    </ul>
                                </div>
                            </li>
                        </ul>

                    </div>
                </nav>
                <div className="main">
                    <div className="main-container">
                        <div className="main-content">
                            <h1>{t('common:header_title')}</h1>
                            <p>{t('common:header_des')}</p>
                        </div>
                        <div className="main-img-container">
                            <img src="img/Frame 1.png" alt="" id="main-img"/>
                        </div>
                    </div>
                </div>
            </header>

            <div id="about" className="section ms-padding">
                <div className="container">
                    <div className="row">
                        <div className="section-header text-center">
                            <h2 className="title">{t('common:about_title')}</h2>
                            <p className="description">{t('common:about_des')}</p>
                        </div>
                        <div id='features'>
                            <div className="containerMobile" >
                                <Slider {...settings}>
                                    <div className="col-sm-4">
                                        <div className="team">
                                            <div className="team-img">
                                                <img className="img-responsive " src="./img/thumbnail_01.png" alt="" />
                                            </div>
                                            <div className="team-content">
                                                <h2>{t('common:features_title_1')}</h2>
                                                <h3>{t('common:features_h3_1')}</h3>
                                                <span>{t('common:features_des_1')}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="team">
                                            <div className="team-img">
                                                <img className="img-responsive" src="./img/thumbnail_02.png" alt="" />
                                            </div>
                                            <div className="team-content">
                                                <h2>{t('common:features_title_2')}</h2>
                                                <h3>{t('common:features_h3_2')}</h3>
                                                <span>{t('common:features_des_2')}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="team">
                                            <div className="team-img">
                                                <img className="img-responsive" src="./img/thumbnail_03.png" alt="" />
                                            </div>
                                            <div className="team-content">
                                                <h2>{t('common:features_title_3')}</h2>
                                                <h3>{t('common:features_h3_3')}</h3>
                                                <span>{t('common:features_des_3')}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="containerDesktop" >
                                        <div className="col-sm-4">
                                            <div className="team">
                                                <div className="team-img">
                                                    <img className="img-responsive " src="./img/thumbnail_01.png" alt="" />
                                                </div>
                                                <div className="team-content">
                                                    <h2>{t('common:features_title_1')}</h2>
                                                    <h3>{t('common:features_h3_1')}</h3>
                                                    <span>{t('common:features_des_1')}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-4">
                                            <div className="team">
                                                <div className="team-img">
                                                    <img className="img-responsive" src="./img/thumbnail_02.png" alt="" />
                                                </div>
                                                <div className="team-content">
                                                    <h2>{t('common:features_title_2')}</h2>
                                                    <h3>{t('common:features_h3_2')}</h3>
                                                    <span>{t('common:features_des_2')}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-4">
                                            <div className="team">
                                                <div className="team-img">
                                                    <img className="img-responsive" src="./img/thumbnail_03.png" alt="" />
                                                </div>
                                                <div className="team-content">
                                                    <h2>{t('common:features_title_3')}</h2>
                                                    <h3>{t('common:features_h3_3')}</h3>
                                                    <span>{t('common:features_des_3')}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="download" className="section sm-padding ">
                <div className="bg-img2" style={{backgroundImage: "url('img/download-img.png')"}}></div>
                <div className="home-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="home-content">
                                <h1 className="white-text3">{t('common:download_title')}</h1>
                                <p className="white-text4">{t('common:download_des')}</p>
                                <div className="img-container-parent">
                                    <div className="img-container1">
                                        <a href="https://apps.apple.com/us/app/imatch-match-chat-date/id1525486809"><img src="img/scooterrental-slider-pic2.png" alt="" id="img-down1"/></a>
                                        <a href="#"><img src="img/scooterrental-slider-pic3.png" alt="" id="img-down2"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer id="footer" className="sv-padding bg-dark">
                <hr className='tag'/>
                <div className="container">
                    <div className="row">
                        <div className="col-ms-12">
                            <ul className="footer-follow">
                                <li><Link href={router.asPath} locale={router.locale}><a>{t('common:footer_1')}</a></Link></li>
                                <li><Link href={router.asPath} locale={router.locale}><a>{t('common:footer_2')}</a></Link></li>
                                <li><Link href={router.asPath} locale={router.locale}><a>{t('common:footer_3')}</a></Link></li>
                                <li><Link href={router.asPath} locale={router.locale}><a>{t('common:footer_4')}</a></Link></li>
                                <li><Link href={router.asPath} locale={router.locale}><a>{t('common:footer_5')}</a></Link></li>
                            </ul>
                        </div>
                    </div>

                </div>

            </footer>
        </div>
    </div>
  );
}
