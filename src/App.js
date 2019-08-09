import React from 'react';
import Header from './components/Header/Header';
import Glxavor from './components/Menu/Glxavor/Glxavor';
import Carayutyunner from './components/Menu/Carayutyunner/Carayutyunner';
import GniHashvark from './components/Menu/GniHashvark/GniHashvark';
import GniHashvarkWebKayq from './components/Menu/GniHashvark/Link/GniHashvarkWebKayq';
import GniHashvarkSeo from './components/Menu/GniHashvark/Link/GniHashvarkSeo';
import GniHashvarkDizayn from './components/Menu/GniHashvark/Link/GniHashvarkDizayn';
import GniHashvarkGovazd from './components/Menu/GniHashvark/Link/GniHashvarkGovazd';
import MerMasin from './components/Menu/MerMasin/MerMasin';
import Kap from './components/Menu/Kap/Kap';
import {Route, BrowserRouter, Switch } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import WebKayq from './components/Menu/Carayutyunner/Link/WebKayq/WebKayq';
import WebCragir from './components/Menu/Carayutyunner/Link/WebCragir/WebCragir';
import Govazd from './components/Menu/Carayutyunner/Link/Govazd/Govazd';
import Seo from './components/Menu/Carayutyunner/Link/Seo/Seo';
import Copyrayting from './components/Menu/Carayutyunner/Link/Copyrayting/copyrayting';
import './App.css';
import './components/media.css'


const App = () => {
    return ( 
        <div className='App'>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/glxavor" component={Glxavor} exact/>
                    <Route path="/carayutyunner" component={Carayutyunner} exact/>
                    <Route path="/gni_hashark" component={GniHashvark} exact/>
                    <Route path="/gni_hashark/web_kayq" component={GniHashvarkWebKayq} exact/>
                    <Route path="/gni_hashark/seo" component={GniHashvarkSeo} exact/>
                    <Route path="/gni_hashark/dizayn" component={GniHashvarkDizayn} exact/>
                    <Route path="/gni_hashark/govazd" component={GniHashvarkGovazd} exact/>
                    <Route path="/mer_masin" component={MerMasin} exact/>
                    <Route path="/kap" component={Kap} exact/>
                    <Route path="/carayutyunner/web_kayq" component={WebKayq} exact/>
                    <Route path="/carayutyunner/web_cragir" component={WebCragir} exact/>
                    <Route path="/carayutyunner/govazd" component={Govazd} exact/>
                    <Route path="/carayutyunner/seo" component={Seo} exact/>
                    <Route path="/carayutyunner/copyrayting" component={Copyrayting} exact/>
                    <Route path="/" component={Glxavor} exact />
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;