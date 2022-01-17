import './Style.css';
import icon from '../etc/Helloworld_icon.svg';
import {ReactComponent as Rocket} from '../etc/helloworld_rocket.svg';
import {ReactComponent as Music} from '../etc/helloworld_music.svg';
import {ReactComponent as Star} from '../etc/helloworld_star.svg';
import {useState} from 'react';


function Screen(props) {
    switch(props.setting){
        case 1:
            return(
                <div className="screenWrapper">
                    <div className="screenTitle">PHYSICS</div>
                    <div className="screen">
                        <div className="slideButton">
                            <div onClick={()=>{props.setPhysics(true); console.log(props.physics)}} className="slideButtonItem">ON</div>
                            <div onClick={()=>props.setPhysics(false)} className="slideButtonItem">OFF</div>
                        </div>

                    </div>
                </div>
            );
        case 2:
            return(
                <div className="screenWrapper">
                    <div className="screenTitle">MUSIC</div>
                    <div className="screen">

                    </div>
                </div>
            );
        case 3:
            return(
                <div className="screenWrapper">
                    <div className="screenTitle">BOOKMARK</div>
                    <div className="screen">

                    </div>
                </div>
            );
    }
}



const Setting = (props) => {

    const [setting, setSetting] = useState(0);

    return(
        <div>
            <div className="iconWrapper">
                <img className="icon" src={icon} onClick={()=>setSetting(val=>Number(!val))} />
            </div>
            {setting &&
                <div className={"settingModal" + (setting?"":" empty")}>
                    <div className="tabbar">
                        <div className="tabicon">
                            <Rocket onClick={()=>setSetting(1)} fill={(setting===1)?"#555555":"#dddddd"}/>
                        </div>
                        <div className="tabicon">
                            <Music  onClick={()=>setSetting(2)} fill={(setting===2)?"#555555":"#dddddd"} />
                        </div>
                        <div className="tabicon">
                            <Star onClick={()=>setSetting(3)} fill={(setting===3)?"#555555":"#dddddd"} />
                        </div>
                    </div>
                    <div className = "settingScreen">
                        <Screen 
                        setting={setting} 
                        setPhysics={props.setPhysics}
                        physics={props.physics} />
                    </div>
                </div>
            }

        </div>

    );
}

export default Setting;