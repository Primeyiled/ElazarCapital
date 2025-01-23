import ReactDOM from 'react-dom';
import {QRCodeSVG} from 'qrcode.react'
const WalletQRCode = ({value})=>{
    
    return(
        <div>
            <QRCodeSVG value={value} size={250} fgColor='#000000' bgColor='#ffffff'/>
        </div>
    )
}

export default WalletQRCode