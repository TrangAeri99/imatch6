import Layout from "../components/layout";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import Head from "next/head";

export default function Home() {
  let { t } = useTranslation();

  return (
      <div>
          <Head>
              <title>iMATCH</title>
              <link rel="icon" href="/favicon.ico" />
              <meta name="description" content={t('common:meta_des')} />
              <meta name="robots" content='' />
              <meta name="googlebot" content='' />
              <meta name="keywords" content={t('common:meta_keyword')} />
              <meta property="author" content='MDC'/>

              <meta property="og:title" content={t('common:meta_title')} />
              <meta property="og:url" content='https://imatch.mdcgate.com/' />
              <meta property="og:image" content='https://is3-ssl.mzstatic.com/image/thumb/Purple115/v4/4a/38/2e/4a382ecd-f110-acde-d9c5-874bd40002ca/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png'/>
              <meta property="og:image:alt" content="iMatch - Match, Chat, Date on the App Store"/>
              <meta name="og:description" content={t('common:meta_des')} />
              <meta name="og:site_name" content='iMATCH' />
              <meta name="og:type" content='article' />

              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content={t('common:meta_title')} />
              <meta name="twitter:description" content={t('common:meta_des')}/>
              <meta name="twitter:image" content="https://is3-ssl.mzstatic.com/image/thumb/Purple115/v4/4a/38/2e/4a382ecd-f110-acde-d9c5-874bd40002ca/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/600x600wa.png" />
              <meta name="twitter:image:alt" content="iMatch - Match, Chat, Date on the App Store"/>
              <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700%7CVarela+Round" rel="stylesheet"/>
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
              <link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap" rel="stylesheet"/>
              <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap" rel="stylesheet"/>
              <link
                  rel="stylesheet"
                  type="text/css"
                  charSet="UTF-8"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
              />
              <link
                  rel="stylesheet"
                  type="text/css"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
              />
              <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
              <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                      crossOrigin="anonymous"></script>
              <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"
                      integrity="sha384-eMNCOe7tC1doHpGoWe/6oMVemdAVTMs2xqW4mwXrXsW0L84Iytr2wi5v2QjrP/xp"
                      crossOrigin="anonymous"></script>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js"
                      integrity="sha384-cn7l7gDp0eyniUwwAZgrzD06kc/tftFf19TOAs2zVinnD/C7E91j9yyk5//jjpt/"
                      crossOrigin="anonymous"></script>
          </Head>
        <Layout/>
      </div>
  );
}
