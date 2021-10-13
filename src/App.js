import React from 'react'
import './App.css';
import man from './assets/man.svg';
import woman from './assets/woman.svg';
import skin from './assets/skin.svg';
import Tshirt from './assets/t-shirt.svg';
import C88C10F from './assets/color-88C10F.svg';
import C533724 from './assets/color-533724.svg';
import CB2C7C7 from './assets/color-B2C7C7.svg';
import CE0A39A from './assets/color-E0A39A.svg';
import CFCCC84 from './assets/color-FCCC84.svg';
import CFCD7B8 from './assets/color-FCD7B8.svg';
import CFF1414 from './assets/color-FF1414.svg';
import Cstriped from './assets/color-striped.svg';


const App = () => {
    return <div id="temp-style"> 
                {/* <table class="table">
                    <thead class="table-head">
                        <tr> Portfolio </tr>
                    </thead>
                    <tbody>
                        <tr> Lequel de ces deux avatars préférez-vous ?</tr>
                    </tbody>
                </table> */}
                <div class="content">
                    <div class="content-head">Profil</div>
                    <div class="content-body">
                        <p class="text">Lequel de ces deux avatars préférez-vous ?</p>
                        <div class="img-section">
                            <img src={man} alt="man" class="responsive" /> 
                            <img src={woman} alt="woman" class="responsive" /> 
                        </div>
                        <hr class="line"></hr>
                        <div class="skin-section">
                            <img src={skin} alt="skin" /> 
                            <img src={CFCD7B8} alt="C88C10F" /> 
                            <img src={CE0A39A} alt="woman" /> 
                            <img src={CFCCC84} alt="woman" /> 
                            <img src={C533724} alt="woman" /> 
                        </div>
                        <div class="Tshirt-section">
                            <img src={Tshirt} alt="Tshirt" /> 
                            <img src={CB2C7C7} alt="woman" /> 
                            <img src={C88C10F} alt="woman" /> 
                            <img src={CFF1414} alt="woman" /> 
                            <img src={Cstriped} alt="woman" /> 
                        </div>
                        <div class="btn-section"><button class="btn"> Valider</button></div>
                    </div>
                
                
                </div>
            </div>
}

export default App;
